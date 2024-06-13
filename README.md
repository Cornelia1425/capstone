# Phase 4 Project Template

## Getting Started - Git & Github

Elect one person to clone (DON'T FORK) this project to their local computer. That person will then run this command:

```
git remote remove origin
```

Navigate to github and create a new public repository, choose not to add a README, license, or any additional information. Once the empty repo has been created, follow the directions to upload an existing repository.

Add your collaborators under `Settings > Collaborators` on github.

## Getting Started - Flask

Inside the project run these commands:

```
pipenv install
pipenv shell
cd server
```

Begin by building your first model. From there:

```
flask db init
flask db migrate -m "example migration message"
flask db upgrade
```

Any additional changes you make will only need the `flask db migrate -m "example migration message"` and `flask db upgrade`. It's recommended you build one model at a time to catch errors more easily.

Once your database has been upgraded you may run the server with:

```
python app.py
```

In order to follow best practices with the React server proxy, begin all your route URLs with `/api` (for example `/api/users` for users route).

A seed file has been provided under `seed.py`. To run the seed file:

```
python seed.py
```

## Getting Started - React

The `client` directory contains a React template built by Vite, however you may replace it with one built by `create-react-app` or any other tool if you wish.

At the end of any command using `npm`, append `--prefix client` so that it properly uses the `client` directory or else be sure to `cd client` beforehand.

To start your React server, run:

```
npm install --prefix client
npm run dev --prefix client
```

When making fetch requests, leave out the `localhost:5555` portion since a proxy already exists to that domain and instead prefix every request with `/api` to properly utilize the proxy request feature.

## Conclusion

Once you've completed work on this project, replace this README with one of your own devising!


chartjs.org
phaser, html5, 


// 0610 night css
 =>add Home bg image, done
 => black bg, done
 =>fix margin, done half, why top still has margin
 => route no text-decorator, why Home still have underline?? met this before!!!!!! ok now it disappeared.


 => next - student can post enrollment, book class, add class to their 'cart', show the MyAccount pages, see all classes I booked.
         - teacher can post danceclass. do not worry for now.

// ok i did, 
 => tailwind and css combine, login function, done
 => all classes are display in the Calendar, week or month? or both? Done
 => have the CalendarCard component reusable, use it to all Calendar Components, done

 

 => add BOOK Button to each cell in calendar, done

 => have the cell in their places, which means 10-12 at the top, 20-22 at the bottom, time slot, maybe just in CalendarAll, because it will be too empty for each teacher? need to do it to see. 
 =>give up the more flexible for example(10:30-11:30) option. just have teacher post on their slot now, and have book button. done

=> students Calendar show enrollment, student can post by click on BOOK button
 


 wish list
 // search by style, 
    House 
    Hip Hop
    later can add locking, popping, waacking, 


note today - 
// calendar package, FullCalendar, hmmm.


// => ok today i finally know how do i grab the user_id, the name should be the same as the login post part!!, this done
// => now i need to grab the dance_class_id, still not working
done. user_id, danceClass.id, add id to the new array

=> Enrollment data: undefined,  Enrollment data: undefined is logged suggests that the frontend is not receiving the expected JSON data from the backend after a successful POST request. 
done

// ok.. displaying might be ready.. it's just not grabbing the button click data from front end...
done.

// to delete item in my accout page, i need useLocation condition, to not show book button, but showing delete button. tmr...


// strange thing maybe a css thing,, when i scroll down to other teachers and click into their page, the new page doesn't show from the top, but lower part, how do i fix that
so is it default that the browser remembering the scroll position from the previous page instead of starting at the top of the new page?

Why Scroll Position Might Persist:
SPAs, single-page application;
AJAX techniques...

done!!

0613
// added footer, done

css =>
// how do i change the home bg to full spread, and have header and footer have a transparent bg?
// Teachers card css, hover over to see name and style(s),
// css - TeacherPage - have the teacher info on the right side and calender on the right? so don't have to scroll to see whole info

backend =>
// Add Event Route, add event table, foreign key to user_id, role can be either student or teacher

 // search by style, 


// click and add the backend to enrollment table, done
but still give error failed to add to cart


// condition - 
1 // when it's myaccount page /api/book route, not showing book button, but showing cancel button. 
2 // only can add the same class once, check if it's inside the enrollment table already.


// I have a bug 
i can add the class to enrollment table, and read it in /book route, but when i click book it still give me error alert why
done. .catch(error=>{})

wish list continue - 



 wish list
 // search by style, 
    House 
    Hip Hop
    later can add locking, popping, waacking, 

// footer link, add support - can donate to the artist

// footer link add DANCE-GPT, import AI bot




