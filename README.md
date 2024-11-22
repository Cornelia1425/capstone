# Capstone project -  MOPTOP Universal App Demo

## WHAT
```
An web app that features the on campus MOPTOP Universal professional street stype dance program at Peridance center, NYC. 
Functions includes booking classes from directors. 
Displaying past shows. 
Showcasing past students.
Sharing music lists.

```


## WHO
```
For street and social style dancers all over the world who wants to learn the dance and the culture from the source.
```

## HOW  
```
Students can login and book classes directly from the directors.

Website 
Frontend - Javascript, React.
Backend - Python, Flask.
```

## WHEN
```
Coming soon.
```

## WHERE
```
On line and in person.
```

///////////////////////////////
## udpate 1026 Sat
1 add new branch without calender and backend, no need to host backend at this point. just publish the front end. 
2 hide calender component
3 hide login component
4 update background except home page to the single logo, or logo pattern - cs
5 update teacher - bringing Sekou first, no Ejoe, no calander on teacherPage
6 update footage with images, not words
7 update year 4 students - put them onto scroll down, with year 4 students
8 update video layout, not scroll but more a 2 by 2 grid, adjustable, when narrow the page become 1 column, flex
9 single image and muptiple image layout

 




...............................................................


1 add new branch without calender and backend, no need to host backend at this point. just publish the front end. 
done

2 hide calender component
done

3 hide login component
added: 
showCalenderLink = false
showLoginLink = false

4 update background except home page to the single logo, or logo pattern - cs
4.1 no logo on the top, DONE
4.2 on page not home, show background the logo, big
DONE
4.3 small repeat
DONE


5 update teacher - bringing Sekou first, 
done.
5.1 add Kim, teacher8, with image, no class schedule for now
done
5.2 no Ejoe, teacher5
done
5.3 adjust all teachers order
NOW DONE.
5.4 hide all teachers calendar for now
showCalendar = false, on teacherPage component, done

6 update footage with images, not words
peridance etc.
DONE!!!

7 update year 4 students - put them onto scroll down, with year 4 students


7.1 Same as videos - scroll vertically
each year on the same row
DONE!!!!!

7.2 add country info
DONE.


7.3 add ins link, aded to the image, add some hover over effect
css transition be on image, not hover, so it also ease back.

DONE;

7.4 link is it possible to link to open a new page, instead of ditch the current page
inside Link tag, say -> target="_blank"
UPdated footage link too.
DONE.

8 update video layout, not scroll but more a 2 by 2 grid, adjustable, when narrow the page become 1 column, flex

Footer position FIXED, DONE!!!!


8.1 update video layout, still hidden fixed main page, but scroll only the part before footage. 

9 class photo single image and muptiple image layout
DONE!!!!




///////////////////////////////

## udpate 1031 Wed

1 fixed From: {country}, div and 2 p tags
DONE
2 videos layout
DONE

///////////////////////////////

## udpate 1122 Friday
1 update all students, done
2 add ig link to teachers profile in their page, done
 <!-- <a target="_blank"  href={teacher.ins}> -->
3 replacing _ with space in the page, working, for now just show first name
