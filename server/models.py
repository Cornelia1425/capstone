from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

# write your models here!


class User (db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    role = db.Column(db.String, default='student')
    profile_img = db.Column(db.String, nullable=False)
    _hashed_password = db.Column(db.String)

    enrollments = db.relationship('Enrollment', back_populates='student')
    dance_classes = db.relationship('Dance_class', back_populates='teacher')
    serialize_rules = ('-enrollments.student','-dance_classes.teacher',)

    @validates('name')
    def validate_name(self, key, value):
        user=User.query.where(User.name ==value).first()
        if value and len(value.strip().replace(' ','_'))<3:
            raise ValueError('Name must be greater than or equal to 3 characters!!')
        if user:
            raise ValueError('Name must be unique!!')
        return value.strip().replace(' ','_')
    
    @validates('password')
    def validate_password(self, key, value):
        if len(value)<3:
            raise ValueError('Password must be at least 3 characters long!')
        return value



class Dance_class (db.Model, SerializerMixin):
    __tablename__="dance_classes"

    id = db.Column(db.Integer, primary_key=True)
    style = db.Column(db.String)
    price = db.Column(db.Integer)
    weekday = db.Column(db.String)
    start_time = db.Column(db.Time)
    end_time = db.Column(db.Time)
    class_img = db.Column(db.String)
    teacher_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    enrollment = db.relationship('Enrollment', back_populates='dance_class')
    teacher = db.relationship('User', back_populates='dance_classes')

    serialize_rules = ('-enrollment.dance_class','-teacher.dance_classes',)

    
    @validates('teacher_id')
    def validate_teacher(self, key, teacher_id):
        teacher=User.query.get(teacher_id)
        if teacher.role!= 'teacher':
            raise ValueError("User must have the role 'teacher' to be assigned to a dance class!!")
        return teacher_id
 

class Enrollment (db.Model, SerializerMixin):
    __tablename__="enrollments"

    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    dance_class_id = db.Column(db.Integer, db.ForeignKey('dance_classes.id'))
    
    student = db.relationship("User", back_populates="enrollments")
    dance_class = db.relationship("Dance_class", back_populates="enrollment")

    serialize_rules = ('-student.enrollments','-dance_class.enrollment',)

    @validates('student_id')
    def validate_student(self,key, student_id):
        student =User.query.get(student_id)
        if student.role!='student':
            raise ValueError("User must be a student to be enrolled in a dance class!!")
        return student_id


