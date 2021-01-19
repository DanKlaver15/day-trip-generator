"use strict";
//Day Trip Generator

//Function to randomly select from an array

function randomItem (listOfItems) {
    return listOfItems[Math.floor(Math.random()*listOfItems.length)];
}

/*======================================================================*/

//Randomly Selected Destination
let destinations = ["Bali", "Hawaii", "Paris", "London", "Rome", "Cayman Islands", "Munich"];
confirmRandom(destinations);

/*======================================================================*/

//Randomly Selected Restaurants
let restaurants = ["Hard Rock Cafe", "McDonald's", "Taco Bell", "Chili's", "Ruth Chris"];
let randomRestaurant = randomItem(restaurants);

/*======================================================================*/

//Randomly Selected Mode of Transportation
let transportation = ["Bus", "Train", "Taxi", "Airplane", "Boat"];
let randomTransport = randomItem(transportation);

/*======================================================================*/

//Randomly Selected Form of Entertainment
let entertainment = ["Movie", "Sight-seeing tour", "Opera", "Live Theater", "Dancing"];
let randomEntertainment = randomItem(entertainment);