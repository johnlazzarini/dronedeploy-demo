# ﻿John Lazzarini's submission for option 2
## Project Results
This application consists of a button that appears on the data page of the DroneDeploy application.  In its current state, the application only displays a visualization of the progress that I was able to make this week -- a canvas, on which I had intended to combine all of the Tile images, which would then be turned into a single png itself and downloaded by using jspdf.js and html2canvas.

##Challenges
I ran into a problem when it turned out that the canvas element couldn't be turned into a png due to the fact that it consisted of merged images -- there's a security feature that prevents my intended functionality.  Regrettably it had taken me a couple of days to get to that point and mounting academic demands left no more room in my schedule to experiment with alternative methods.

Fortunately, I was able to exhibit some of the qualities that I would bring to your office anyway.  Here are some of the things that I did for DroneDeploy over the last week:

##Things that I did right
The Tile documentation that was suggested to us in the prompt contained non-working code -- I brought this to Daniel's attention on the forum, and you can check out our conversation by accessing this link:

http://forum.dronedeploy.com/t/any-tips-on-how-to-implement-examples-from-the-api-documentation/4993/4

I also made a suggestion for the documentation itself, which was originally unclear.  I have an eye for things that can improve UX, and Daniel implemented some of my design choices to great effect.

I apparently demonstrated initiative by visiting the forums, which I had noticed that none of the other intern candidates had done.  

##Where I would go from here under different circumstances.

I also did some more research on the implementation for my take home assignment, where a possible workaround would have been to use Node similarly to the way that it is used in this instance:

####Possible Node.js implementation
http://stackoverflow.com/questions/17369842/tile-four-images-together-using-node-js-and-graphicsmagick

Or by writing a script that could achieve a similar effect on the backend via this method:

####Possible terminal implementation
http://gis.stackexchange.com/questions/73946/automatically-download-and-merge-webmap-tiles-into-one-big-image
