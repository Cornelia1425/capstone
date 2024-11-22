#!/usr/bin/env python3

#from server.app import app
from app import app
from models import db, User, Dance_class, Interview, TheKids, TheShow # models go here
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

        TheKids.query.delete()
        thekids=[]

        TheShow.query.delete()
        theshow=[]




        # write your seeds here!

        teacher1 = User(profile_img="sekou_heru.png", role="teacher", name="Sekou", ins="https://www.instagram.com/sekouheru/")
        users.append(teacher1)

        teacher8 = User(profile_img="kim_holmes.jpeg", role="teacher", name="Kim", ins="https://www.instagram.com/kimd.holmes/")
        users.append(teacher8)

        teacher2 = User(profile_img="buddha_stretch.jpeg", role="teacher", name="Stretch", ins="https://www.instagram.com/buddhastretch/")
        users.append(teacher2)

        teacher3 = User(profile_img="link_henry.jpeg", role="teacher", name="Link", ins="https://www.instagram.com/linkefc/")
        users.append(teacher3)

        teacher4 = User(profile_img="caleaf_cellers.png", role="teacher", name="Caleaf", ins="https://www.instagram.com/caleafsellers/")
        users.append(teacher4)

        # teacher5 = User(profile_img="ejoe_wilson.jpeg", role="teacher", name="Ejoe")
        # users.append(teacher5)

        teacher6 = User(profile_img="cebo_terry_carr.jpeg", role="teacher", name="Cebo", ins="https://www.instagram.com/cebonxgn/")
        users.append(teacher6)

        teacher7 = User(profile_img="chrybaby_cozie.jpeg", role="teacher", name="Chrybaby", ins="https://www.instagram.com/chrybaby_cozie/")
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
        teacher_id=teacher2.id   # Associate with teacher1
        )
        dance_classes.append(dance_class0)

        dance_class1 = Dance_class(style='Hip Hop',
        class_img ='Stretch_HipHop1.jpg',
        price = 25,
        weekday = 'Wednesday',
        start_time=time(14, 0),  # 2:00 PM
        end_time=time(16, 0),    # 4:00 PM
        teacher_id=teacher2.id   # Associate with teacher2
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
        teacher_id=teacher4.id   # Associate with teacher1
        )
        dance_classes.append(dance_class2)


        dance_class3 = Dance_class(
        style='House',
        class_img ='Cebo_House.jpg',
        price = 25,
        weekday = 'Wednesday',
        start_time=time(16, 0),  # 2:00 PM
        end_time=time(18, 0),    # 4:00 PM
        teacher_id=teacher6.id   # Associate with teacher2
        )
        dance_classes.append(dance_class3)

        dance_class4 = Dance_class(
        style='Litefeet',
        class_img ='Chrybaby_litefeet.jpg',
        price = 25,
        weekday = 'Tuesday',
        start_time=time(19, 0),  
        end_time=time(21, 0),    
        teacher_id=teacher7.id   
        )
        dance_classes.append(dance_class4)

        # dance_class5 = Dance_class(
        # style='House',
        # class_img ='Ejoe_House.jpg',
        # price = 25,
        # weekday = 'Friday',
        # start_time=time(20, 0),  # 2:00 PM
        # end_time=time(22, 0),    # 4:00 PM
        # teacher_id=teacher5.id   # Associate with teacher2
        # )
        # dance_classes.append(dance_class5)


        dance_class6 = Dance_class(
        style='HipHop',
        class_img ='Link_HipHop.jpg',
        price = 25,
        weekday = 'Saturday',
        start_time=time(16, 0),  # 2:00 PM
        end_time=time(18, 0),    # 4:00 PM
        teacher_id=teacher3.id   # Associate with teacher2
        )
        dance_classes.append(dance_class6)

        dance_class7 = Dance_class(
        style='House',
        class_img ='Sekou_House.jpg',
        price = 25,
        weekday = 'Thursday',
        start_time=time(16, 0),  # 2:00 PM
        end_time=time(18, 0),    # 4:00 PM
        teacher_id=teacher1.id   # Associate with teacher2
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


        #2022
        kid1=TheKids(
        name='Yiran',
        ins='https://www.instagram.com/yiranshu/',
        profile_img='Yiran.png',
        year='2022',
        country='China',
        )
        thekids.append(kid1)

        kid2=TheKids(
        name='Katya',
        ins='https://www.instagram.com/katya_ageenk0/',
        profile_img='Katya.png',
        year='2022',
        country='Russia',
        )
        thekids.append(kid2)

        kid3=TheKids(
        name='Valerie',
        ins='https://www.instagram.com/valerie_kos/',
        profile_img='Valerie.png',
        year='2022',
        country='Russia',
        )
        thekids.append(kid3)


        kid4=TheKids(
        name='Alima',
        ins='https://www.instagram.com/highssense/',
        profile_img='Alima.png',
        year='2022',
        country='Kazakhstan',
        )
        thekids.append(kid4)

        kid5=TheKids(
        name='Hovie',
        ins='https://www.instagram.com/hovie_nguyen/',
        profile_img='Hovie.png',
        year='2022',
        country='Vietnam',
        )
        thekids.append(kid5)

        kid6=TheKids(
        name='Brandon',
        ins='https://www.instagram.com/bbnorm782/',
        profile_img='Brandon.png',
        year='2022',
        country='USA',
        )
        thekids.append(kid6)

        kid7=TheKids(
        name='Lily',
        ins='https://www.instagram.com/tigerlily_grrr/',
        profile_img='Lily.png',
        year='2022',
        country='Canada',
        )
        thekids.append(kid7)

        kid8=TheKids(
        name='Nikki',
        ins='https://www.instagram.com/nikki_dolly/',
        profile_img='Nikki.png',
        year='2022',
        country='USA',
        )
        thekids.append(kid8)

        kid9=TheKids(
        name='Shushan',
        ins='https://www.instagram.com/44shushan/',
        profile_img='Shushan.png',
        year='2022',
        country='Cyprus',
        )
        thekids.append(kid9)

        kid10=TheKids(
        name='Vee',
        ins='https://www.instagram.com/elvina_vee_/',
        profile_img='Vee.png',
        year='2022',
        country='South Africa',
        )
        thekids.append(kid10)

        kid11=TheKids(
        name='Swagger',
        ins='https://www.instagram.com/swagger_iz/',
        profile_img='Swagger.png',
        year='2022',
        country='Romania',
        )
        thekids.append(kid11)

        kid12=TheKids(
        name='Irina',
        ins='https://www.instagram.com/irina.lalciu/',
        profile_img='Irina.png',
        year='2022',
        country='Romania',
        )
        thekids.append(kid12)

        kid13=TheKids(
        name='Slywolf',
        ins='https://www.instagram.com/_.slywolf._/',
        profile_img='Slywolf.png',
        year='2022',
        country='Canada',
        )
        thekids.append(kid13)

        kid14=TheKids(
        name='Angelina',
        ins='https://www.instagram.com/bellabundance/',
        profile_img='Angelina.png',
        year='2022',
        country='USA',
        )
        thekids.append(kid14)

        kid15=TheKids(
        name='Tribal',
        ins='https://www.instagram.com/_ma_atx/',
        profile_img='Tribal.png',
        year='2022',
        country='USA',
        )
        thekids.append(kid15)


        #2023
        kid21=TheKids(
        name='Bubbles',
        ins='https://www.instagram.com/minaskjerv/',
        profile_img='Bubbles.png',
        year='2023',
        country='tbd',
        )
        thekids.append(kid21)

        kid22=TheKids(
        name='Nathalie',
        ins='https://www.instagram.com/nathalie_thebc/',
        profile_img='Nathalie.png',
        year='2023',
        country='Switzerland',
        )
        thekids.append(kid22)

        kid23=TheKids(
        name='Prishita',
        ins='https://www.instagram.com/pingpangpoooo',
        profile_img='Prishita.png',
        year='2023',
        country='tbd',
        )
        thekids.append(kid23)

        kid24=TheKids(
        name='Anna',
        ins='https://www.instagram.com/stepannette/',
        profile_img='Anna.png',
        year='2023',
        country='Russia',
        )
        thekids.append(kid24)

        kid25=TheKids(
        name='Vishve',
        ins='https://www.instagram.com/vishveofficial/',
        profile_img='Vishve.png',
        year='2023',
        country='India',
        )
        thekids.append(kid25)

        kid26=TheKids(
        name='Dennis',
        ins='https://www.instagram.com/dennisluethge/',
        profile_img='Dennis.png',
        year='2023',
        country='Germany',
        )
        thekids.append(kid26)


        kid27=TheKids(
        name='Tabea',
        ins='https://www.instagram.com/tabeaa.p/',
        profile_img='Tabea.png',
        year='2023',
        country='Switzerland',
        )
        thekids.append(kid27)


        kid28=TheKids(
        name='Swagger',
        ins='https://www.instagram.com/swagger_iz/',
        profile_img='Swagger.png',
        year='2023',
        country='Romania',
        )
        thekids.append(kid28)

        kid29=TheKids(
        name='Irina',
        ins='https://www.instagram.com/irina.lalciu/',
        profile_img='Irina.png',
        year='2023',
        country='Romania',
        )
        thekids.append(kid29)


        #2024
        kid41=TheKids(
        name='Rong',
        ins='https://www.instagram.com/tsengwanrong/',
        profile_img='Rong.png',
        year='2024',
        country='Taiwan',
        )
        thekids.append(kid41)



        kid42=TheKids(
        name='Astere',
        ins='https://www.instagram.com/asterestar/',
        profile_img='Astere.png',
        year='2024',
        country='Netherlands',
        )
        thekids.append(kid42)


        kid43=TheKids(
        name='Eva',
        ins='https://www.instagram.com/evaagarrote/',
        profile_img='Eva.png',
        year='2024',
        country='Spain',
        )
        thekids.append(kid43)

        kid44=TheKids(
        name='Johnny',
        ins='https://www.instagram.com/johnnyelendu/',
        profile_img='Johnny.png',
        year='2024',
        country='Italy',
        )
        thekids.append(kid44)


        kid45=TheKids(
        name='Inès',
        ins='https://www.instagram.com/inesdestruhaut/',
        profile_img='Ines.png',
        year='2024',
        country='France',
        )
        thekids.append(kid45)


        kid46=TheKids(
        name='Anouchka',
        ins='https://www.instagram.com/anouchkatrns/',
        profile_img='Anouchka.png',
        year='2024',
        country='Belgium',
        )
        thekids.append(kid46)

        kid47=TheKids(
        name='Celia',
        ins='https://www.instagram.com/coulibalycelia/',
        profile_img='Celia.png',
        year='2024',
        country='Belgium',
        )
        thekids.append(kid47)

        kid48=TheKids(
        name='Indra',
        ins='https://www.instagram.com/indrazwaan/',
        profile_img='Indra.png',
        year='2024',
        country='Netherlands',
        )
        thekids.append(kid48)

        kid49=TheKids(
        name='Kristen',
        ins='https://www.instagram.com/kob_bok_88/',
        profile_img='Kristen.png',
        year='2024',
        country='USA',
        )
        thekids.append(kid49)

        kid50=TheKids(
        name='Nicolas',
        ins='https://www.instagram.com/njcorona1/',
        profile_img='Nicolas.png',
        year='2024',
        country='USA',
        )
        thekids.append(kid50)

        kid51=TheKids(
        name='Minea',
        ins='https://www.instagram.com/minea_style/',
        profile_img='Minea.png',
        year='2024',
        country='Italy',
        )
        thekids.append(kid51)

        kid52=TheKids(
        name='Petra',
        ins='https://www.instagram.com/minea_style/',
        profile_img='Petra.png',
        year='2024',
        country='Croatia',
        )
        thekids.append(kid52)

        kid53=TheKids(
        name='Selma',
        ins='https://www.instagram.com/selmarandall/',
        profile_img='Selma.png',
        year='2024',
        country='Switzerland',
        )
        thekids.append(kid53)

        kid54=TheKids(
        name='Quin',
        ins='https://www.instagram.com/i.c.u.c.me_/',
        profile_img='Quin.png',
        year='2024',
        country='USA',
        )
        thekids.append(kid54)

        kid55=TheKids(
        name='Vishve',
        ins='https://www.instagram.com/vishveofficial/',
        profile_img='Vishve.png',
        year='2024',
        country='India',
        )
        thekids.append(kid55)

        kid56=TheKids(
        name='Swagger',
        ins='https://www.instagram.com/swagger_iz/',
        profile_img='Swagger.png',
        year='2024',
        country='Romania',
        )
        thekids.append(kid56)

        kid57=TheKids(
        name='Irina',
        ins='https://www.instagram.com/irina.lalciu/',
        profile_img='Irina.png',
        year='2024',
        country='Romania',
        )
        thekids.append(kid57)








        

        


        db.session.add_all(thekids)
        db.session.commit()




        show1=TheShow(
        name='Stretch\'s Piece',
        year='2022',
        url='https://www.youtube.com/embed/SCcp7OSk514?si=niZ1-u_iepmlHqK-',
        teacher_id=teacher1.id,
        )
        theshow.append(show1)

        show2=TheShow(
        name='Caleaf\'s Piece',
        year='2022',
        url='https://www.youtube.com/embed/iaR1bVEIBx8?si=GLYptdGr0XC-y6sV',
        teacher_id=teacher2.id,
        )
        theshow.append(show2)

        show3=TheShow(
        name='Cebo\'s Piece',
        year='2022',
        url='https://www.youtube.com/embed/Pb1-augoDOI?si=-w8sil92sLuwfX2E',
        teacher_id=teacher3.id,
        )
        theshow.append(show3)

        show4=TheShow(
        name='Chrybaby\'s Piece',
        year='2022',
        url='https://www.youtube.com/embed/u0nYqc7tets?si=M0OC7eLdCUVYShIZ',
        teacher_id=teacher4.id,
        )
        theshow.append(show4)

        show5=TheShow(
        name='Link\'s Piece',
        year='2022',
        url='https://www.youtube.com/embed/luWwPJ8zbm0?si=uhbe-vKrMUPGSiz1',
        teacher_id=teacher6.id,
        )
        theshow.append(show5)

        show7=TheShow(
        name='Sekou\'s Piece',
        year='2022',
        url='https://www.youtube.com/embed/wWSnsG69L48?si=8tJQWUYW1lNGVWU2',
        teacher_id=teacher7.id,
        )
        theshow.append(show7)

        db.session.add_all(theshow)
        db.session.commit()




        print("Seeding complete!")
