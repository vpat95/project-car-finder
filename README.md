# Project Car Finder

# Live Site : https://project-car-finder.netlify.app


There should be 6 vehicle cards in the 'Browse' page by default. The db is seeded via a cronjob on every 12th minute. If cards are missing the website will still perform as expected however features such as the sort and search may be difficult to test.

# Overview

Project Car Finder is a web application meant to connect buyers and sellers in the purchasing and/or selling
of a project car. Users are able to browse through a list of available cars, add their favorite cars to a watchlist, and create a listing of their own vehicle.

# Technology

This application is written in React.js and features the use of built in React Hooks, external libraries, and custom JavaScript.

Core Concepts:
- CRUD operations following REST web standards
- Controlled Forms using state
- Event Handling to update server and re-render DOM
- Client side routing

React Hooks Used:
- useState 
- useEffect

Libraries Used:
- react-router-dom (clients side routing)
- styled components (CSS-in-JS functionality)

# Challenges

One of the challenges faced in this project was avoiding the tempation to use the 'useContext' hook to manange state within the project. Determing where elements of state should live within the component tree initially proved to be slightly challeging however, it was the correct approach as the furthest a prop was required to travel was 3 levels deep.

# Run Locally

1. Fork and Clone this directory
2. Open your terminal and navigate to project directory(../project-car-finder)
3. Check Dependencies
a. Verify npm is installed by running '$ npm -v'
- if installed continue to next step 
- if not installed, vist: https://nodejs.org/en#home-downloadhead and follow instructions
5. In the project directory still, run 'npm install'
8. Once npm is installed run 'npm start'
9. Once the command completes execution, navigate to the provided url

We have provided an optional image url you can use for the image url when creating a new listing
copy as follows: "/images/rusty.jpg"



