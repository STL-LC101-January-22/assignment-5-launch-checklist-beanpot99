// Write your helper functions here!
require('isomorphic-fetch');
const errorMsg='';
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
    if(testInput===''){
        return 'Empty';
    }else if(isNaN(testInput)){
        return 'Not a number';
    }else if(!isNaN(testInput)){
        return 'Is a number';
    }
    
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //let form=document.querySelector('form');
   if(validateInput(pilot)==='Empty'||validateInput(copilot==='Empty')||validateInput(fuelLevel)==='Empty'||validateInput(cargoLevel)==='Empty'){
    alert('All fields required!');
   event.preventDefault();
   }else if(validateInput(fuelLevel)==='Not a number'||validateInput(cargoLevel)==='Not a number'||validateInput(pilot)==='Is a number'||validateInput(copilot)==='Is a number'){
    alert('ERROR! Enter valid data for each field.');
    event.preventDefault();
    }else{
        document.getElementById('pilotStatus').innerHTML=`Pilot ${pilot} is ready for takeoff!`;
        document.getElementById('copilotStatus').innerHTML=`Copilot ${copilot} is also ready for takeoff!`;
        if(fuelLevel<10000){
            list.style.visibility='visible';
            document.getElementById('fuelStatus').innerHTML=`Fuel status: too low <br> Not enought fuel for journey!`;
            document.getElementById('launchStatus').innerHTML=`Shuttle not ready for launch!`;
            document.getElementById('launchStatus').style.color='red';
        }else if(cargoLevel>10000){
            list.style.visibility='visible';
            document.getElementById('cargoStatus').innerHTML=`Cargo status: too heavy <br> Too much mass for takeoff!`;
            document.getElementById('launchStatus').innerHTML=`Shuttle not ready for launch!`;
            document.getElementById('launchStatus').style.color='red';
        }else{
            document.getElementById('launchStatus').style.color='green';
            document.getElementById('launchStatus').innerHTML=`Shuttle is ready for launch!`;
        }
    }
    
   
    }
    

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
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
