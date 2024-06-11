#!/usr/bin/env python3

from flask import Flask, request, session
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_bcrypt import Bcrypt
import os

from models import db, User, Dance_class, Enrollment # import your models here!

from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)

bcrypt = Bcrypt(app)

migrate = Migrate(app, db)

db.init_app(app)

@app.get('/')
def index():
    return "Hello world"


# write your routes here! 
# all routes should start with '/api' to account for the proxy

@app.get('/api/teachers')
def all_teachers():
    teachers = User.query.filter_by(role='teacher').all()
    return[teacher.to_dict() for teacher in teachers], 200


#get all danceclasses
@app.get('/api/calendar')
def all_danceclasses():
    danceclasses = Dance_class.query.all()
    danceclassesarry = []
    for danceclass in danceclasses:
        danceclassesarry.append(danceclass.to_dict())
    return danceclassesarry, 200


#function for getting user by id; USE POSTMAN
@app.get('/api/teachers/<int:id>')
def teacher_by_id(id):
    teacher=User.query.where(User.id ==id).first()
    if teacher and teacher.role=='teacher':
        return teacher.to_dict(), 200
    else:
        return {'error': 'Not Found'}, 404

#creating users
@app.post('/api/users')
def create_user():
    data = request.json
    try:
        new_user = User(
            name = data['name'],
            role=data.get('role','student'),
            profile_img=data.get('profile_img','')
        )
        new_user._hashed_password = bcrypt.generate_password_hash(request.json['password']).decode('utf-8')
        db.session.add(new_user)
        db.session.commit()
        session["user_id"] = new_user.id
        return new_user.to_dict(), 201
    except Exception as e:
        return {'error': str(e)}, 406
    
#checking session
@app.get('/api/check-session')
def check_session():
    user = User.query.where(User.id == session.get('user_id')).first()
    if user:
        return user.to_dict(), 200
    else:
        return {}, 204

#login in users
@app.post('/api/login')
def login():
    user = User.query.where(User.name == request.json.get('name')).first()
    if user and bcrypt.check_password_hash(user._hashed_password, request.json.get('password')):
        session['user_id'] = user.id
        return user.to_dict(), 201
    else:
        return{'error': 'username or password was invalid'}, 401

#login out users
@app.delete('/api/logout')
def logout():
    session.pop('user_id')
    return {}, 204



if __name__ == '__main__':
    app.run(port=5555, debug=True)
