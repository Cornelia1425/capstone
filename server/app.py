#!/usr/bin/env python3

from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

from models import db, User, Dance_class, Enrollment # import your models here!

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)

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

#function for getting user by id; USE POSTMAN
@app.get('/api/teachers/<int:id>')
def teacher_by_id(id):
    teacher=User.query.where(User.id ==id).first()
    if teacher and teacher.role=='teacher':
        return teacher.to_dict(), 200
    else:
        return {'error': 'Not Found'}, 404



if __name__ == '__main__':
    app.run(port=5555, debug=True)
