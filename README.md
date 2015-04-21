# bourbon_neat_boilerplate
Starting point for a project using bourbon and neat

##About this Project
This project is intended to provide a blank slate for beginning any project with Bourbon and Neat. It was inspired by a Bourbon and Neat tutorial series by [phpacademy](https://www.youtube.com/playlist?list=PLfdtiltiRHWErI0VSxDCbeDyEJm_kVt3p). Wherein they outline a basic structure for organizing Sass project files that could be applied to nearly any web application. The method of organization loosely resembles the ideas presented by Jonathan Snook in [SMACSS](https://smacss.com/), so I have drawn on some of those principles to establish clear guidelines for how to follow the given structure.

Hopefully this project can help save you some time with your next project!

## Bourbon and Neat
###Bourbon
Bourbon is a lightweight mixin library for Sass.  
Learn more about [bourbon](http://bourbon.io)

###Neat
Neat is a lightweight semantic grid framework for Sass and Bourbon  
Learn more about [neat](http://neat.bourbon.io)

###Grunt (Optional)
This project includes a basic grunt configuration that includes:
- [grunt_contrib_sass](https://github.com/gruntjs/grunt-contrib-sass)
- [grunt_contrib_watch](https://github.com/gruntjs/grunt-contrib-watch)

The default grunt task will watch and compile all files in the sass directory. It will also live reload whenever a change is made to index.html or any sass files

##Compiling

###Using Sass
- [Install Sass](http://sass-lang.com/install)
- Navigate to the /css directory and run: `sass --watch app.sass:app.css`
###Using Grunt
- [Install node](https://nodejs.org/download/)
- [Install Grunt](http://gruntjs.com/getting-started)
- Navigate to the site root and run: `grunt`
