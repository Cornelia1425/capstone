#!/usr/bin/env python3

from app import app
from models import db, User, Dance_class # models go here
from faker import Faker
from datetime import time

faker = Faker()

if __name__ == '__main__':
    with app.app_context():
        print("Seeding database...")

        User.query.delete()
        users=[]

        Dance_class.query.delete()
        dance_classes=[]
        # write your seeds here!

        teacher1 = User(profile_img="images/buddha_stretch.jpeg", role="teacher", name="Stretch")
        users.append(teacher1)

        teacher2 = User(profile_img="images/caleaf_cellers.png", role="teacher", name="Caleaf")
        users.append(teacher2)

        teacher3 = User(profile_img="images/cebo_terry_carr.jpeg", role="teacher", name="Cebo")
        users.append(teacher3)

        teacher4 = User(profile_img="images/chrybaby_cozie.jpeg", role="teacher", name="Chrybaby")
        users.append(teacher4)

        teacher5 = User(profile_img="images/ejoe_wilson.jpeg", role="teacher", name="Ejoe")
        users.append(teacher5)

        teacher6 = User(profile_img="images/link_henry.jpeg", role="teacher", name="Link")
        users.append(teacher6)

        teacher7 = User(profile_img="images/sekou_heru.png", role="teacher", name="Sekou")
        users.append(teacher7)

        student1 = User(profile_img="images/dog1.png", role="student", name="student1")
        users.append(student1)

        student2 = User(profile_img="images/dog2.png", role="student", name="student2")
        users.append(student2)

        student3 = User(profile_img="images/dog3.png", role="student", name="student3")
        users.append(student3)

        student4 = User(profile_img="images/dog4.png", role="student", name="student4")
        users.append(student4)

        student5 = User(profile_img="images/dog5.png", role="student", name="student5")
        users.append(student5)

        student6 = User(profile_img="images/dog6.png", role="student", name="student6")
        users.append(student6)

        student7 = User(profile_img="images/dog7.png", role="student", name="student7")
        users.append(student7)

        student8 = User(profile_img="images/yiran.png", role="student", name="student8")
        users.append(student8)

        student9 = User(profile_img="images/timothee.png", role="student", name="student9")
        users.append(student9)

        student10 = User(profile_img="images/gable.png", role="student", name="student10")
        users.append(student10)

        db.session.add_all(users)
        db.session.commit()



        # Create a dance class and associate it with teacher1
        dance_class1 = Dance_class(
        style='House',
        price = 25,
        start_time=time(10, 0),  # 10:00 AM
        end_time=time(12, 0),    # 12:00 PM
        teacher_id=teacher2.id   # Associate with teacher1
        )

        # Create another dance class and associate it with teacher2
        dance_class2 = Dance_class(
        style='Hip Hop',
        price = 25,
        start_time=time(14, 0),  # 2:00 PM
        end_time=time(16, 0),    # 4:00 PM
        teacher_id=teacher1.id   # Associate with teacher2
        )

        # Add dance classes to the session
        db.session.add_all(dance_classes)
        db.session.commit()


        print("Seeding complete!")
