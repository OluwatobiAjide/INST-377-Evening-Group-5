* Title - Restaurant Rater 
* Team members -- Ruiqi Lai, Oluwatobi Ajide, Sihui Feng
* Link to where your app is running -- 
https://rater-restaurant.herokuapp.com/
* Information problem you're trying to solve --
People who are concerned about food safety are unable to find the restaurant by scrolling down the dataset. It is important for people to have the satisfaction that they are eating in a sanitary environment and intaking food that is not contaminated.
* Identified stakeholders/target browsers --Stakeholders: The restaurant/store owner and the customers. Our webpage is spreading the healthy test result from the police department which will impact the amount of customer to the store.

* Data you chose to work with -- Prince George’s Country Open Data API Link:"https://data.princegeorgescountymd.gov/Health/Food-Inspection/umjn-t2iz"

* Chosen strategies and solutions for the problem 
-- We want to use the Prince George’s Country Open Data API to build up a search engine. This engine can help people to find out the safety level of the resturant which they want to go.
* Technical system decision rationale --
In this project, our preliminary decision is to use HTML and CSS for the website and to author the front end. We may use Javascript as our code for the project too.  Our target devices are computers and phones. We are using HTML for the basic structure of the project and using CSS for the style. CSS is used for formatting the website on different devices the screen will change based on their size. Javascript will be the main function of your design, we need to keep updating our website from then Open Data Prince George’s County website. We also need to store data into our database by using Node.js. We will also use Express Framework to handles all the interactions between the frontend and the database. And Leaflet, we will use it to Insert the map to the website. And all the code will be written in visual studio code
* How/if your final system helps to address the problem 
In our system, we help user to figure our which resturants are safe, and which resturants are dangerous. When user want to choose a resturant to have meal, they can zip code, resturant address, and resturants' name to search the result. And the result will show them those resturants' different safty level.
* Challenges faced and impact on final design --
1. Our searching section separate into three category(zip code, city, and restaurant name), now we only have the zip code search completed.
2. sqlite failures
3. Sometime we messed up the github local file while two group members are pushing to origin together.

* Possible future work directions with this problem --
1. Implement the ability for users to submit reviews for restaurants/carry-out/fast food places
2. Using Get and Post request to add reviews and get reviews on the client and server side.
3. Add autocomplete to search bar
