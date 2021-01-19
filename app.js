"use strict";
//Day Trip Generator
/* 1. create an array of destinations
2. create an array of restaurants
3. create an array of transportation
4. create an array of entertainment
5. create a function that will select one item from an array at random
6. if the user doesn't like the random selection chosen, they can re-select from that category
7. if the user is happy with their trip, they can confirm it is "complete" (JS confirm box?)
8. display the confirmed trip in the console  */

//Function to randomly select from an array

function randomItem (listOfItems) {
    return listOfItems[Math.floor(Math.random()*listOfItems.length)];
}

function initialItinerary (destination, restaurant, transportation, entertainment) {
    let randomDestinations = randomItem(destination);
    let randomRestaurant = randomItem(restaurant);
    let randomTransport = randomItem(transportation);
    let randomEntertainment = randomItem(entertainment);
    console.log("Initial itinerary: " + randomDestinations + "/" + randomRestaurant + "/" + randomTransport + "/" + randomEntertainment);
}

/* function reselectItinerary() {
    let finalDestination;
    let finalRestaurant;
    let finalTransport;
    let finalEntertainment;
    if (confirm(randomDesinations)) {
        finalDestination = randomDestinations;
    } 
    else {
        randomDestinations = randomItem(destination);
        confirm(randomDestinations);
    } 
} */

/*======================================================================*/

//Destination
let destination = ["Bali", "Hawaii", "Paris", "London", "Rome", "Cayman Islands", "Munich"];

/*======================================================================*/

//Restaurants
let restaurant = ["Hard Rock Cafe", "McDonald's", "Taco Bell", "Chili's", "Ruth Chris"];

/*======================================================================*/

//Transportation
let transportation = ["Bus", "Train", "Taxi", "Airplane", "Boat"];

/*======================================================================*/

//Entertainment
let entertainment = ["Movie", "Sight-seeing tour", "Opera", "Live Theater", "Dancing"];

/*======================================================================*/

initialItinerary(destination, restaurant, transportation, entertainment);