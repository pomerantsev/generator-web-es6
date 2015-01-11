A basic webapp Yeoman generator.
For use only in development (no minification or full build tasks).

Features
--------
* use ES6 (provided by the 6to5 compiler and its polyfill);
* write stylesheets in Sass;
* forget about vendor prefixes (uses Autoprefixer with the `last 2 versions` option);
* rebuilds scripts and styles when source files change, and automatically reloads the page in the browser (livereload).

How to use
----------
1. Install Yo: `npm install -g yo`
2. Clone the repository to your machine: `git clone https://github.com/pomerantsev/generator-web-es6`
3. `cd` into the newly created folder.
4. `npm link` - creates a link in the global node modules folder to the current folder (to be able to use the generator globally).
Then, to create a project using the generator:
1. `mkdir my-new-project`
2. `cd my-new-project`
3. `yo web-es6` - the generator will ask you for the name of the project, create the necessary files and install npm dependencies.

Enjoy!
