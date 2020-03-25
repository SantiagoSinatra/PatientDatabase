window.onload = function(){
    //backend
    let database =  new Database;
    let viewController = new ViewController;

    //frontend
    let searchButton = document.getElementById("searchButton").addEventListener("click", function(e){
        let searchInput = document.getElementById("search").value.split(" ");
        let searchParam = document.querySelector('input[name="searchParam"]:checked').value;
        viewController.displayResults(database.findPatient(searchInput, searchParam));
    });

    let createButton = document.getElementById("createButton").addEventListener("click", function(e){
        let createInputs = (Array.prototype.slice.call(document.querySelectorAll(".c-form")));
        let newPatient = new Patient(createInputs[0].value, createInputs[1].value, createInputs[2].value, createInputs[3].value, createInputs[4].value, createInputs[5].value); /*this is provisory until i find another way to do it*/
        database.setNewPatient(newPatient);
    });
    
    //database.setNewPatient(newPatient);
}