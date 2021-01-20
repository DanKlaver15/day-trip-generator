"use strict";
//Day Trip Generator

//Function to randomly select from an array
function randomItem (listOfItems) {
    return listOfItems[Math.floor(Math.random()*listOfItems.length)];
}

/*======================================================================*/

//Function to randomly select from a list of items and confirm or re-select
function selectRandom(list) {
    let randomSelection = randomItem(list);
    while (!confirm(randomSelection)) {
        randomSelection = randomItem(list);
    } 
    return randomSelection;
}

/*======================================================================*/

//Function to create each array and combine them for final confirmation and console output
function finalItinerary() {
    let destination = ["Bali", "Hawaii", "Paris", "London", "Rome", "Cayman Islands", "Munich"];
    let restaurant = ["Hard Rock Cafe", "McDonald's", "Taco Bell", "Chili's", "Ruth Chris"];
    let transportation = ["Bus", "Train", "Taxi", "Airplane", "Boat"];
    let entertainment = ["Movie", "Sight-seeing tour", "Opera", "Live Theater", "Dancing"];
    let completeDestination = selectRandom(destination);
    let completeRestaurant = selectRandom(restaurant);
    let completeTransport = selectRandom(transportation);
    let completeEntertainment = selectRandom(entertainment);
    let itineraryCombined = "Your final itinerary is: " + completeDestination + "/" + completeRestaurant + "/" + completeTransport + "/" + completeEntertainment;
    if (confirm(itineraryCombined)) {
        console.log(itineraryCombined);
    }
    else {
    console.log("Please refresh the page to choose a new itinerary.");
    }
}

finalItinerary();