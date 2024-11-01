#!/usr/bin/env python3

from flask import Flask, request, session, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
import sqlalchemy
from flask_bcrypt import Bcrypt
import os

from server.models import db, User, Dance_class, Enrollment, Interview, TheShow, TheKids # import your models here!

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

#get all kids
@app.get('/api/thekids')
def all_kids():
    kids = TheKids.query.all()
    return[kid.to_dict() for kid in kids], 200



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
        session['user_id'] = user.id #this pass to /api/book get the user_id, student_id = session.get('user_id')
        return user.to_dict(), 201
    else:
        return{'error': 'username or password was invalid'}, 401

#login out users
@app.delete('/api/logout')
def logout():
    session.pop('user_id')
    return {}, 204


#function for booking classes and put them into enrollment table
    # print("Session data:", session)
    # print("Request JSON:", request.json)
    # print("Request Headers:", request.headers)
    # print("Request Data:", request.data.decode('utf-8'))  # Print raw data
   
@app.post('/api/book')
def post_books_to_page():
  
    try:
        student_id = session.get('user_id')
        dance_class_id = request.json.get('dance_class_id')

        existing_enrollment = Enrollment.query.filter_by(student_id=student_id, dance_class_id=dance_class_id).first()

        if existing_enrollment:
            print(f"Student ID: {student_id}, Dance Class ID: {dance_class_id}")
            print("existing_enrollment:", dance_class_id)
            return {'error': 'You are already enrolled in this class'}, 400
        
        enrollment = Enrollment(
            student_id=student_id, dance_class_id=dance_class_id)
        
        db.session.add(enrollment)
        db.session.commit()
        return enrollment.to_dict(), 201
    
    except sqlalchemy.exc.IntegrityError as error:
        return {"error": "Invalid Data"}, 400
    except ValueError as error:
        return {"error": str(error)}, 400
  


#function for grabbing enrollment table by a user
@app.get('/api/book')
def enrollment_page_by_id():
    student_enrollments = Enrollment.query.where(Enrollment.student_id==session.get('user_id')).all() #grabbing user_id from session
    if student_enrollments:
        return [enrollment.to_dict() for enrollment in student_enrollments], 200
    else:
        return {"error": "Not Found"}, 404

#function for deleting an enrollment from the student page
@app.delete('/api/book/<int:id>')
def delete_enrollment_on_page(id):
    #here we grabbing the danceclass id of the enrollment to delete the enrollment instance
    enrollment_to_delete = Enrollment.query.where(Enrollment.dance_class_id == id).first()
    if enrollment_to_delete:
        db.session.delete(enrollment_to_delete)
        db.session.commit()
        return{}, 204
    else:
        return{"error": "Not Found"}, 404
    


# @app.delete('/api/delete-first-13-enrollments')
# def delete_first_13_enrollments():
#     try:
#         enrollments = Enrollment.query.order_by(Enrollment.id).limit(13).all()
#         if not enrollments:
#             return jsonify({"error": "No enrollments found to delete"}), 404

#         for enrollment in enrollments:
#             db.session.delete(enrollment)

#         db.session.commit()
#         return jsonify({"message": "First 13 enrollments deleted successfully"}), 200

#     except Exception as e:
#         db.session.rollback()
#         return jsonify({"error": str(e)}), 500
    

#function for grabbing all interviews
@app.get('/api/interviews')
def all_interviews():
    interviews = Interview.query.all()
    interviewsarray = []
    for interview in interviews:
        interviewsarray.append(interview.to_dict())
    return interviewsarray, 200

@app.get('/api/theshow')
def all_theshow():
    theshows = TheShow.query.all()
    theshowarray = []
    for theshow in theshows:
        theshowarray.append(theshow.to_dict())
    return theshowarray, 200


#function for grabbing all interviews by teacher_id
@app.get('/api/interviews/<int:id>')
def interviews_by_teacher_id(id):
    interviews = Interview.query.where(Interview.teacher_id==id).all() #grabbing all interviews if teacher's id match id
    if interviews:
        return [interview.to_dict() for interview in interviews], 200
    else:
        return {"error": "Not Found"}, 404
    



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5555, debug=True)
