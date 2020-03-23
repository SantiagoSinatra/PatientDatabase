installService();

let database = JSON.parse(localStorage.getItem("pDB"));

//Read Inputs:
window.onload = function(){
    patientCounter();

    let submitButton = document.getElementById("submit").addEventListener("click", function(e){
        save();
    });
}

function patientCounter(){
    let patientCounter = document.getElementById("patientCounter");
    patientCounter.innerHTML = patientCounter.innerHTML + " " + (Object.keys(database).length - 1); //Substract 1 because of the CurrentID key.
}

function readInputs(){
    let inputs = (Array.prototype.slice.call(document.querySelectorAll("input"+", textarea"))); //get the NodeList of inputs and turn it into an array.
    return inputs;
}

function save(){
    let completedInputs = readInputs();
    let newPatient = {}
    let errors = [];

    completedInputs.forEach(input => {
        
        //Check if all the inputs are completed
        if(input.value == ""){
            errors.push(input.id);
        } else {
            newPatient[input.id] = input.value;
        }
    });

    //If there are no errors fill the database.
    if(errors.length == 0){

        console.log("No errors..");
        console.log("Patient " + newPatient.name + " is being uploaded to the database..");

        database.currentID = database.currentID + 1;
        newPatient["id"] = database.currentID;
        database["P" + database.currentID] = newPatient;
        
        localStorage.setItem("pDB", JSON.stringify(database));
        console.log("Patient " + newPatient.name + " with id: " + database.currentID + " was successfully uploaded to the database!");



    }else{
        console.log(errors)
        newPatient = {};
        for(let i=0; i < errors.length; i++){
            console.log("Field " + errors[i] + " is not completed");
        }
    }
}

function installService(){
    try{
        if(localStorage.getItem("pDB") == null){
            console.log("Generating new Database...")
            console.log("Generating currentID...")
            let patientsDatabase = {
                currentID: -1
            }
            localStorage.setItem("pDB", JSON.stringify(patientsDatabase));

            if(localStorage.getItem("pDB") != null){
                console.log("Database successfully created!");
            }
        }else{
            console.log("Database already created, if you want to create a new one please delete the actual instance. This message was set to prevent accidental data loss. All current actions were stopped.")
        }
    } catch (error) {
        console.log(error);
    }
}