Git Commit History:
* 00a95c5 2015-11-07 | Cleaning up (HEAD -> master, heroku/master) [Sivan Patel]
* 6c2f7c0 2015-11-07 | Some more refactoring, extracted circle and letterFill functions [Sivan Patel]
* a5daebd 2015-11-07 | Pushed to heroku [Sivan Patel]
* ebb969a 2015-11-07 | Setting up for Heroku [Sivan Patel]
* 2443e56 2015-11-07 | More css [Sivan Patel]
* 7ad3996 2015-11-07 | more refactoring, starting css [Sivan Patel]
* e1191f5 2015-11-07 | refactored slightly, changed how text is filled in as circles are placed [Sivan Patel]
* d383275 2015-11-07 | Text filling in circles on click - to be altered still [Sivan Patel]
* cff4521 2015-11-06 | getting text from input box without submit [Sivan Patel]
* 789f97a 2015-11-06 | Part 1 complete, circles persisting [Sivan Patel]
* 0b40bbd 2015-11-06 | Drawing circles, not saving on canvas resize [Sivan Patel]
* 5ed4c93 2015-11-05 | Set up jquery and html canvas to scale with browser [Sivan Patel]

Approach:
  - Initially, I set up a blank static html page with a canvas element on it
  - Using a jQuery library i added an event listener to resize the canvas when the window is resized
  - Using canvas functions, and another event listener for clicks I drew circles on the page where clicks occurred
  - I created an array which stored the coordinates of each circle so that they would be redrawn when the window changed size
  - I set up a text area which recorded the value inside of it whenever it changed (when typing)
  - I added more event listeners for clicks that took the first letter from the text area and altered the text in it at the same time
  - I assigned the letter removed from the text area as another entry inside of the array of objects created earlier
  - Inside of the function created for drawing circles, I added another part to draw letters at the same coordinate
  - At this point, it was working as I expected, so I decided to push it to heroku so that I can make sure it works live
  - I restructured the file system slightly, and using Sinatra I pushed it up to heroku (http://circlify.herokuapp.com/)
  - I introduced some CSS. just to try and make it look slightly nicer
  - I finished up refactoring by extracting some repeated lines in to separate functions which are then called as necessary
   

