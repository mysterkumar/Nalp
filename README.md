# NALP - Network Attack Learning Platform

>Network attack learning platform built with React, Redux, Express, and TypeScript.

[Live link to site - under development]([https://nalp.herokuapp.com/])

## About
NALP is a Network attack learning platform built using React, Redux and Express. It scrapes results from Google and obtains their meta-data using the node x-ray library. It also has a text-outline feature (powered by node-unfluff) that allows you to read the contents of a web page in clean, formatted text without leaving the NALP.

## Running Locally
To run Spresso Search locally, first clone the repo with: `git clone https://github.com/hkharsh/Nalp.git'


Then `cd` into its directory:  `cd nalp`

Install the dependencies with `npm install`

Then run `npm start` to run the client side code. The app should be visible on port 3000.

Open a new terminal tab/window in the same directory, and run `cd server` to go into the server directory.

Run `node ./build/server.js` to start the server. The app is now ready for use.

If making any modifications to the server's TypeScript code, you should start the TypeScript compiler in watch mode with

 `tsc -w` so your changes can be tracked in the JS build.
