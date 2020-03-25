class ViewController{
    constructor(){
        /* something */
    }

    displayResults(results){
        let resultsDiv = document.querySelector('.searchResults');
        resultsDiv.innerHTML = "<div>"

        results.forEach(function(patient){
            resultsDiv.innerHTML = resultsDiv.innerHTML + "<p>" + patient.firstName  + " " + patient.lastName + "<p>";
        });

        resultsDiv.innerHTML = resultsDiv.innerHTML +  "</div>"

    }

}