class Patient{

    // Properties:
    id = -1; //give fake provisory id (when uploaded to the db the db will assign a proper id);

    // Methods:
    constructor(firstName, lastName, address, phone, firstNameFamiliar, lastNameFamiliar){

        console.log("New instance of Person detected, creating new instance of Person..");

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.firstNameFamiliar = firstNameFamiliar;
        this.lastNameFamiliar = lastNameFamiliar;

        console.log("Created successfully!");

    }
    
}