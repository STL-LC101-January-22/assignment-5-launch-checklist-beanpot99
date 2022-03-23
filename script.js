// Write your JavaScript code here!

//const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");
//const{addDestinationInfo}=require("./scriptHelper");
//const{pickPlanet}=require("./scriptHelper");
//const{myFetch}=require("./scriptHelper");
window.addEventListener("load", function() {
   let form=this.document.querySelector("form");
   document.getElementById('faultyItems').style.visibility='hidden';
    form.addEventListener('submit',function(event){    
    let pilotInput=document.querySelector('input[name=pilotName]').value;
    let copilotInput=document.querySelector('input[name=copilotName]').value;
    let fuelInput=document.querySelector('input[name=fuelLevel]').value;
    let cargoInput=document.querySelector('input[name=cargoMass]').value;
    
    event.preventDefault();
    formSubmission(window.document, pilotInput,copilotInput,fuelInput,cargoInput);
    
    
    
    
});
let listedPlanets;
let listedPlanetsResponse=myFetch();
listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    //console.log(listedPlanets);
}).then(function () {
    let planet= pickPlanet(listedPlanets);
    
    addDestinationInfo(document,planet.name,planet.diameter,planet.star,planet.distance,planet.moons,planet.image);
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
});
});
////PROBLEMS:
//alert field required pops up no matter what
    //document.getElementById('pilotStatus').innerHTML=`Pilot ${pilot} is ready for takeoff!`;
    //document.getElementById('copilotStatus').innerHTML=`Copilot ${copilot} is also ready for takeoff!`;
           
    