This web project has the following setup:

* www/ - the web assets for the project
    * index.html - the entry point into the app.
    * app.js - the top-level config script used by index.html
    * app/ - the directory to store project-specific scripts.
    * lib/ - the directory to hold third party scripts.
* tools/ - the build tools to optimize the project.

In order to start the app, you need to install http-server in the project root and start it, by pointing to www file 
	npm install -g http-server
	http-server www