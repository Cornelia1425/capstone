#!/usr/bin/env python3

from app import app
from models import db, User, Dance_class, Interview # models go here
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

        Interview.query.delete()
        interviews=[]

        # write your seeds here!

        teacher1 = User(profile_img="buddha_stretch.jpeg", role="teacher", name="Stretch")
        users.append(teacher1)

        teacher2 = User(profile_img="caleaf_cellers.png", role="teacher", name="Caleaf")
        users.append(teacher2)

        teacher3 = User(profile_img="cebo_terry_carr.jpeg", role="teacher", name="Cebo")
        users.append(teacher3)

        teacher4 = User(profile_img="chrybaby_cozie.jpeg", role="teacher", name="Chrybaby")
        users.append(teacher4)

        teacher5 = User(profile_img="ejoe_wilson.jpeg", role="teacher", name="Ejoe")
        users.append(teacher5)

        teacher6 = User(profile_img="link_henry.jpeg", role="teacher", name="Link")
        users.append(teacher6)

        teacher7 = User(profile_img="sekou_heru.png", role="teacher", name="Sekou")
        users.append(teacher7)

        student1 = User(profile_img="dog1.png", role="student", name="student1")
        users.append(student1)

        student2 = User(profile_img="dog2.png", role="student", name="student2")
        users.append(student2)

        student3 = User(profile_img="dog3.png", role="student", name="student3")
        users.append(student3)

        student4 = User(profile_img="dog4.png", role="student", name="student4")
        users.append(student4)

        student5 = User(profile_img="dog5.png", role="student", name="student5")
        users.append(student5)

        student6 = User(profile_img="dog6.png", role="student", name="student6")
        users.append(student6)

        student7 = User(profile_img="dog7.png", role="student", name="student7")
        users.append(student7)

        student8 = User(profile_img="yiran.png", role="student", name="student8")
        users.append(student8)

        student9 = User(profile_img="timothee.png", role="student", name="student9")
        users.append(student9)

        student10 = User(profile_img="gable.png", role="student", name="student10")
        users.append(student10)

        db.session.add_all(users)
        db.session.commit()



        # Create a dance class and associate it with teacher1

        dance_class0 = Dance_class(style='Hip Hop',
        class_img ='Stretch_HipHop.jpg',
        price = 25,
        weekday = 'Monday',
        start_time=time(14, 0),  # 2:00 PM
        end_time=time(16, 0),    # 4:00 PM
        teacher_id=teacher1.id   # Associate with teacher2
        )
        dance_classes.append(dance_class0)

        dance_class1 = Dance_class(style='Hip Hop',
        class_img ='Stretch_HipHop1.jpg',
        price = 25,
        weekday = 'Wednesday',
        start_time=time(14, 0),  # 2:00 PM
        end_time=time(16, 0),    # 4:00 PM
        teacher_id=teacher1.id   # Associate with teacher2
        )
        dance_classes.append(dance_class1)

        # Create another dance class and associate it with teacher2
        dance_class2 = Dance_class(
        style='House',
        class_img ='Caleaf_House.jpg',
        price = 25,
        weekday = 'Tuesday',
        start_time=time(16, 0),  # 10:00 AM
        end_time=time(18, 0),    # 12:00 PM
        teacher_id=teacher2.id   # Associate with teacher1
        )
        dance_classes.append(dance_class2)


        dance_class3 = Dance_class(
        style='House',
        class_img ='Cebo_House.jpg',
        price = 25,
        weekday = 'Wednesday',
        start_time=time(16, 0),  # 2:00 PM
        end_time=time(18, 0),    # 4:00 PM
        teacher_id=teacher3.id   # Associate with teacher2
        )
        dance_classes.append(dance_class3)

        dance_class4 = Dance_class(
        style='Litefeet',
        class_img ='Chrybaby_litefeet.jpg',
        price = 25,
        weekday = 'Tuesday',
        start_time=time(19, 0),  
        end_time=time(21, 0),    
        teacher_id=teacher4.id   
        )
        dance_classes.append(dance_class4)

        dance_class5 = Dance_class(
        style='House',
        class_img ='Ejoe_House.jpg',
        price = 25,
        weekday = 'Friday',
        start_time=time(20, 0),  # 2:00 PM
        end_time=time(22, 0),    # 4:00 PM
        teacher_id=teacher5.id   # Associate with teacher2
        )
        dance_classes.append(dance_class5)


        dance_class6 = Dance_class(
        style='HipHop',
        class_img ='Link_HipHop.jpg',
        price = 25,
        weekday = 'Saturday',
        start_time=time(16, 0),  # 2:00 PM
        end_time=time(18, 0),    # 4:00 PM
        teacher_id=teacher6.id   # Associate with teacher2
        )
        dance_classes.append(dance_class6)

        dance_class7 = Dance_class(
        style='House',
        class_img ='Sekou_House.jpg',
        price = 25,
        weekday = 'Thursday',
        start_time=time(16, 0),  # 2:00 PM
        end_time=time(18, 0),    # 4:00 PM
        teacher_id=teacher7.id   # Associate with teacher2
        )
        dance_classes.append(dance_class7)



        # Add dance classes to the session
        db.session.add_all(dance_classes)
        db.session.commit()





        # Create an interview video and associate it with teacher
    
        interview1=Interview(
        title='Stretch - Dance Is Social',
        teacher_id=teacher1.id,
        url="https://www.youtube.com/embed/rFhVxVkGnSU?si=-hwj1MQvIaQ_1H8b"
        )
        interviews.append(interview1)

        interview2=Interview(
        title='Stretch - Who Inspired You',
        teacher_id=teacher1.id,
        url="https://www.youtube.com/embed/Jc6AHFlfAdQ?si=uGrAHhP_dVGf1VQh"
        )
        interviews.append(interview2)

        interview3=Interview(
        title='Stretch - Why Does It Feel Good',
        teacher_id=teacher1.id,
        url="https://www.youtube.com/embed/GjnZ2fAarsw?si=8Ya1s4N2ALMHBJpJ"
        )
        interviews.append(interview3)

        interview4=Interview(
        title='Stretch - The Future of Hip Hop Dance',
        teacher_id=teacher1.id,
        url="https://www.youtube.com/embed/FhmGx8Q4Lzk?si=FM5hOyFKFN39qrdR"
        )
        interviews.append(interview4)

        interview5=Interview(
        title='Stretch - What Is Foundation',
        teacher_id=teacher1.id,
        url="https://www.youtube.com/embed/Je0S47ggbmM?si=nusF6Lof_IH6ZFRd"
        )
        interviews.append(interview5)

        db.session.add_all(interviews)
        db.session.commit()


        print("Seeding complete!")
