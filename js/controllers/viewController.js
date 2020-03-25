class ViewController{
    constructor(){
        /* something */
    }

    displayResults(results){

        let resultsDiv = document.querySelector('.searchResults');
        resultsDiv.innerHTML = '';

        if(results.length > 1){
            resultsDiv.innerHTML = '<h3>Seleccione el resultado que desea ver:</h3>';
        }

        results.forEach(function(patient,i){
            resultsDiv.innerHTML = resultsDiv.innerHTML + '<p class="result" id=' + patient.id + '>' + patient.firstName  + ' ' + patient.lastName + '</p>';
        });

        let options = (Array.prototype.slice.call(document.querySelectorAll(".result")));
        options.forEach(function(option){
            option.addEventListener("click", function(e){
                console.log(this);
            });
        });

    }

}