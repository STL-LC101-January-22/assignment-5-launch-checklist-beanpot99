// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
     let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   });
   let form=this.document.querySelector("form");
    form.addEventListener('submit',function(event){
    let pilotInput=document.querySelector('input[name=pilotName]');
    let copilotInput=document.querySelector('input[name=copilotName]');
    let fuelInput=document.querySelector('input[name=fuelLevel]');
    let cargoInput=document.querySelector('input[name=cargoMass]');
    let faultyItemList=document.querySelector('#faultyItems');
    //let doc=window.document;
    //event.preventDefault();
    
    formSubmission(document,faultyItemList,pilotInput,copilotInput,fuelInput,cargoInput);
    
});
});

////PROBLEMS:
//not actually evaluating any value
//wrong error messages and pop ups
//do I need a this before my document?
//do I need a .value after my items
           
    