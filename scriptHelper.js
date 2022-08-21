require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.innerHTML =`<h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">`
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
        list.style.visibility = "hidden";
    } else if (fuelLevel < 10000 || cargoMass > 10000) {
        let fuelLevelStatus = `Fuel level high enough for launch`;
        let cargoMassStatus = `Cargo mass low enough for launch`;
        let pinkHighlight;
        let pinkHighlight1;
        if(fuelLevel < 10000){
            fuelLevelStatus = `Fuel level too low for launch`;
            pinkHighlight = `style="color:IndianRed"`;
        }
        if(cargoMass > 10000){
            cargoMassStatus = `Cargo mass too high for launch`;
            pinkHighlight1 = `style="color:IndianRed"`;
        }
        document.innerHTML = "Not Ready for Launch!"
        document.style.color = "red";
        list.style.visibility = "visible";
        list.innerHTML = `<ol>
            <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} Ready</li>
            <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} Ready</li>
            <li id="fuelStatus" data-testid="fuelStatus" ${pinkHighlight}>${fuelLevelStatus}</li>
            <li id="cargoStatus" data-testid="cargoStatus" ${pinkHighlight1}>${cargoMassStatus}</li>
        </ol>`;
    }
}
async function myFetch() {
    const url = "https://handlers.education.launchcode.org/static/planets.json";
    let planetsReturned = await fetch(url).then((response) => response.json());
    return planetsReturned;
}

function pickPlanet(planets) {
    let rng = Math.floor(Math.random() * planets.length);
    return planets[rng];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
