window.addEventListener("load", function () {
    const faultyList = document.getElementById("faultyItems");
    const missionTarget = document.getElementById("missionTarget");
    // On page load: displays random planet with respective information.
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(missionTarget, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    });


    // On form submit: validates user inputs, whether empty or invalid data type. If form is valid, checks if launch is ready, and if it's not, displays launch holdbacks.
    const form = document.querySelector("form");
    faultyList.style.visibility = "hidden";
    form.addEventListener("submit", function (event) {
        const launchStatus = document.getElementById("launchStatus");
        const pilotName = document.querySelector("input[name=pilotName]").value;
        const copilotName = document.querySelector("input[name=copilotName]").value;
        const fuel = document.querySelector("input[name=fuelLevel]").value;
        const cargo = document.querySelector("input[name=cargoMass]").value;
        event.preventDefault();
        if ([validateInput(pilotName), validateInput(copilotName), validateInput(fuel), validateInput(cargo)].includes("Empty")) {
            alert("All fields are required!");
        } else if ([validateInput(pilotName), validateInput(copilotName)].includes("Is a Number") || [validateInput(fuel), validateInput(cargo)].includes("Not a Number")) {
            alert("Make sure to enter valid information for each field!");
        } else {
            formSubmission(launchStatus, faultyList, pilotName, copilotName, fuel, cargo);

        }
    });
});