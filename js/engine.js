window.onload = function(){
    //backend
    let database =  new Database;
    let viewController = new ViewController;
    let newPatient = new Patient("Juancito","Robertito","Av.Siempreviva13414","3455151","RoberitoJr","JuancitoJr");

    //frontend
    let searchButton = document.getElementById("searchButton").addEventListener("click", function(e){
        let searchInput = document.getElementById("search").value.split(" ");
        let searchParam = document.querySelector('input[name="searchParam"]:checked').value;
        viewController.displayResults(database.findPatient(searchInput, searchParam));
    });

    
    //database.setNewPatient(newPatient);
}