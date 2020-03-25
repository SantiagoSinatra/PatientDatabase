class Database{
    constructor(){
        //installService;
        if(localStorage.getItem("patientsDB") == null){
            console.log("Generating new Database..");
            let patientsDatabase = {
                lastId: -1,
                patients: {}
            }
            localStorage.setItem("patientsDB", JSON.stringify(patientsDatabase));

            if (localStorage.getItem("patientsDB") != null){
                console.log("..Database successfully created!");
            }
        } else {
            console.log("Database already created, no new Database was generated.")
        }  
    }

    getData(){
        let data = JSON.parse(localStorage.getItem("patientsDB"));
        return data; //This should return an object that is full of other objects that are Patients.
    }

    setNewPatient(patient){
        let data = this.getData();
        let currentId = data.lastId + 1;

        patient.id = currentId; //sets the id for the new patient.
        data.lastId = patient.id; //sets the new lastId.

        data.patients[patient.id] = patient; //saves the patient in the database variable.

        this.updateDatabase(data);
    }

    updateDatabase(data){
        localStorage.setItem("patientsDB", JSON.stringify(data));
        console.log("database updated!")
    }

    findPatient(searchInput, searchParam){
        let data = this.getData();
        let results = [];

        switch (searchParam) {
            case "ns":
                for (let patient in data.patients) {
                    if((data.patients[patient].firstName == searchInput)||(data.patients[patient].lastName == searchInput)){
                        results.push(data.patients[patient]);
                    }
                }
                break;
        
            case "p":
                for (let patient in data.patients) {
                    if(data.patients[patient].phone == searchInput){
                        console.log(data.patients[patient]);
                    }
                }
                break;

            case "a":
                for (let patient in data.patients) {
                    if(data.patients[patient].address == searchInput){
                        console.log(data.patients[patient]);
                    }
                }
                break;
        }

        return results;

    }
}