// Write your JavaScript code here!

 

window.addEventListener("load", function() {
   let form=this.document.querySelector("form");
    form.addEventListener('submit',function(event){    
    let pilotInput=document.querySelector('input[name=pilotName]').value;
    let copilotInput=document.querySelector('input[name=copilotName]').value;
    let fuelInput=document.querySelector('input[name=fuelLevel]').value;
    let cargoInput=document.querySelector('input[name=cargoMass]').value;
    
    event.preventDefault();
    formSubmission(pilotInput,copilotInput,fuelInput,cargoInput);
    
    
    
    
});
let listedPlanets;
// Set listedPlanetsResponse equal to the value returned by calling myFetch()
/*let listedPlanetsResponse;
listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);
}).then(function () {
    console.log(listedPlanets);
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
});*/
});
////PROBLEMS:
//alert field required pops up no matter what
    //document.getElementById('pilotStatus').innerHTML=`Pilot ${pilot} is ready for takeoff!`;
    //document.getElementById('copilotStatus').innerHTML=`Copilot ${copilot} is also ready for takeoff!`;
           
    