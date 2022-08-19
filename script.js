// Write your JavaScript code here!

window.addEventListener("load", function () {
    const missionTarget = document.getElementById("missionTarget");
    const launchStatus = document.getElementById("launchStatus");
    const faultyList = document.getElementById("faultyItems");
    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        const pilotName = document.querySelector("input[name=pilotName]").value;
        const copilotName = document.querySelector("input[name=copilotName]").value;
        const fuel = document.querySelector("input[name=fuelLevel]").value;
        const cargo = document.querySelector("input[name=cargoMass]").value;

        event.preventDefault();
        if (validateInput(pilotName) === "Empty" || validateInput(copilotName) === "Empty" || validateInput(fuel) === "Empty" || validateInput(cargo) === "Empty") {
            alert("All fields are required!");
        } else if (validateInput(pilotName) === "Is a Number" || validateInput(copilotName) === "Is a Number" || validateInput(fuel) === "Not a Number" || validateInput(cargo) === "Not a Number") {
            alert("Make sure to enter valid information for each field!");
        } else {
            formSubmission(launchStatus, faultyList, pilotName, copilotName, fuel, cargo);
        }
    });

    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse = myFetch();
    // listedPlanetsResponse.then(function (result) {
    //     console.log(result);
    // }).then(function (result) {
    //     console.log(result);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })

});