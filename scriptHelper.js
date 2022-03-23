// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionSection=document.getElementById('missionTarget')
   missionSection.innerHTML=
                `<h2>Mission Destination</h2>
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
    if(testInput===""){
        return 'Empty'; //empty string
    }else if(isNaN(testInput)){
        return 'Not a Number'; //not a number
    }else if(!isNaN(testInput)){
        return 'Is a Number'//is a num;
    }
    
}

function formSubmission( document, pilot, copilot, fuelAmount, cargoLevel) {
    //let pilotCopilot=true;
   
    if(validateInput(fuelAmount)==='Empty'||validateInput(cargoLevel)==='Empty'||validateInput(pilot)==='Empty'||validateInput(copilot)==='Empty'){
    alert('All fields required!');
  //event.preventDefault();
   }else if(validateInput(fuelAmount)==='Not a Number'||validateInput(cargoLevel)==='Not a Number'||validateInput(pilot)==='Is a Number'||validateInput(copilot)==='Is a Number'){
    alert('ERROR! Enter valid data for each field.');
    //event.preventDefault();
    }else{
        document.getElementById('pilotStatus').innerHTML=`Pilot ${pilot} is ready for takeoff!`;
        document.getElementById('copilotStatus').innerHTML=`Copilot ${copilot} is also ready for takeoff!`;  
        if(fuelAmount<10000){
            document.getElementById('faultyItems').style.visibility='visible';
            document.getElementById('fuelStatus').innerHTML=`Fuel status: too low <br> Not enought fuel for journey!`;
            document.getElementById('launchStatus').innerHTML=`Shuttle not ready for launch!`;
            document.getElementById('launchStatus').style.color='red';
        }else if(cargoLevel>10000){
            document.getElementById('faultyItems').style.visibility='visible';
            document.getElementById('cargoStatus').innerHTML=`Cargo status: too heavy <br> Too much mass for takeoff!`;
            document.getElementById('launchStatus').innerHTML=`Shuttle not ready for launch!`;
            document.getElementById('launchStatus').style.color='red';
        }else{
            //document.getElementById('faultyItems').style.visibility='hidden';
            document.getElementById('launchStatus').style.color='green';
            document.getElementById('launchStatus').innerHTML=`Shuttle is ready for launch!`;
            
        } 
    }
   
    }
    

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let pickedPlanets;
    pickedPlanets=planets[Math.floor(Math.random()*planets.length)]
    return pickedPlanets;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
