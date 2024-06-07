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
    name = db.Column(db.String)
    role = db.Column(db.String)

    enrollments = db.relationship('Enrollment', back_populates='student')
    # serialize_rules = ('-carts.item',)


class Dance_class (db.Model, SerializerMixin):
    __tablename__="dance_classes"

    id = db.Column(db.Integer, primary_key=True)
    style = db.Column(db.String)
    start_time = db.Column(db.Time)
    end_time=db.Column(db.Time)
    teacher_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    enrollments = db.relationship('Enrollment', back_populates='dance_class')
 

class Enrollment (db.Model, SerializerMixin):
    __tablename__="enrollments"

    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    dance_class_id = db.Column(db.Integer, db.ForeignKey('dance_classes.id'))
    
    student = db.relationship("User", back_populates="enrollments")
    dance_class = db.relationship("Dance_class", back_populates="enrollments")


