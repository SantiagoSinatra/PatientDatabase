installService();

let database = JSON.parse(localStorage.getItem("pDB"));

//Read Inputs:
window.onload = function(){
    patientCounter();

    //Search patient:
    let searchButton = document.getElementById("searchButton").addEventListener("click", function(e){
        search();
    });
    //Load new patient:
    let submitButton = document.getElementById("submitButton").addEventListener("click", function(e){
        save();
    });


}

function patientCounter(){
    let patientCounter = document.getElementById("patientCounter");
    patientCounter.innerHTML = patientCounter.innerHTML + " " + (Object.keys(database).length - 1); //Substract 1 because of the CurrentID key.
}

function readCInputs(){
    let inputs = (Array.prototype.slice.call(document.querySelectorAll(".c-form"))); //get the NodeList of inputs and turn it into an array.
    return inputs;
}

function search(){
    let searchInput = document.getElementById("search").value.split(" ");
    let results = {}
    for (const patient in database) {
        for (const property in database[patient]) {
            if(database[patient][property] == searchInput){
                console.log(database[patient].id);
                results[database[patient].id] = database[patient];
            }
        }
    }
    console.log(results);
    displayResults(results);
    return results;
}

function displayResults(results){
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    console.log(resultsDiv);
    for (const patient in results) {
        resultsDiv.innerHTML = resultsDiv.innerHTML + "<li>Nombre: " + results[patient].name + " Apellido: " + results[patient].surname + "</li>";
    }
}

function save(){
    let completedInputs = readCInputs();
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

        //Reload Site
        location.reload();

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