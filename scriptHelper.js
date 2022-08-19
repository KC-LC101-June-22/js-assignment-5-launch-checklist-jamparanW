// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) { 
    if (fuelLevel > 10000 && cargoMass < 10000) {
        document.innerHTML = "Ready for Launch!"
        document.style.color = "green";
    } else if (fuelLevel < 10000 || cargoMass > 10000) {
        let fuelLevelStatus = `Fuel level high enough for launch`;
        let cargoMassStatus = `Cargo mass low enough for launch`;
        let pinkHighlight;
        if(fuelLevel < 10000){
            fuelLevelStatus = `Fuel level too low for launch`;
            pinkHighlight = `style="color:IndianRed"`;
        }
        if(cargoMass > 10000){
            cargoMassStatus = `Cargo mass too high for launch`;
            pinkHighlight = `style="color:IndianRed"`;
        }
        document.innerHTML = "Not Ready for Launch!"
        document.style.color = "red";
        list.style.visibility = "visible";
        list.innerHTML = `<ol>
            <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} Ready</li>
            <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} Ready</li>
            <li id="fuelStatus" data-testid="fuelStatus" ${pinkHighlight}>${fuelLevelStatus}</li>
            <li id="cargoStatus" data-testid="cargoStatus" ${pinkHighlight}>${cargoMassStatus}</li>
        </ol>`;
    }
    
}
async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        response.json();
    });
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.then( function(response){
            response.then( function(response){
                console.log(response);
            })
        });
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
