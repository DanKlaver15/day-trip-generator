"use strict";
//Day Trip Generator

//Function to randomly select from an array
function randomItem (listOfItems) {
    return listOfItems[Math.floor(Math.random()*listOfItems.length)];
}

/*======================================================================*/

//Function to randomly select a destination from an array
function selectDestination(destination) {
    let randomDestinations = randomItem(destination);
    while (!confirm(randomDestinations)) {
        randomDestinations = randomItem(destination);
    } 
    return randomDestinations;
}

/*======================================================================*/

//Function to randomly select a restaurant from an array
function selectRestaurant(restaurant) {
    let randomRestaurant = randomItem(restaurant);
    while (!confirm(randomRestaurant)) {
        randomRestaurant = randomItem(restaurant);
    }
    return randomRestaurant;
}

/*======================================================================*/

//Function to randomly select a mode of transportation from an array
function selectTransport(transportation) {
    let randomTransport = randomItem(transportation);
    while (!confirm(randomTransport)) {
        randomTransport = randomItem(transportation);
    }     
    return randomTransport;
}

/*======================================================================*/

//Function to randomly select a form of entertainment from an array
function selectEntertainment(entertainment) {
    let randomEntertainment = randomItem(entertainment);
    while (!confirm(randomEntertainment)) {
        randomEntertainment = randomItem(entertainment);
    } 
    return randomEntertainment;
}

/*======================================================================*/

//Function to create each array and combine them for final confirmation and console output
function finalItinerary() {
    let destination = ["Bali", "Hawaii", "Paris", "London", "Rome", "Cayman Islands", "Munich"];
    let restaurant = ["Hard Rock Cafe", "McDonald's", "Taco Bell", "Chili's", "Ruth Chris"];
    let transportation = ["Bus", "Train", "Taxi", "Airplane", "Boat"];
    let entertainment = ["Movie", "Sight-seeing tour", "Opera", "Live Theater", "Dancing"];
    let completeDestination = selectDestination(destination);
    let completeRestaurant = selectRestaurant(restaurant);
    let completeTransport = selectTransport(transportation);
    let completeEntertainment = selectEntertainment(entertainment);
    let itineraryCombined = "Your final itinerary is: " + completeDestination + "/" + completeRestaurant + "/" + completeTransport + "/" + completeEntertainment;
    if (confirm(itineraryCombined)) {
        console.log(itineraryCombined);
    }
    else {
    console.log("Please refresh the page to choose a new itinerary.");
    }
}

finalItinerary();