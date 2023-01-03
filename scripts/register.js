//object literal
// name, age, gender, breed, service, owner, contact phone
let petSalon={
    name:"The Fashion Pet",
    phone: "555-555-555",
    adress:{
        street:"Palomar",
        zip:92015,
        number:500
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[
        {
            name:"Scooby",
            age: 50,
            gender:"Male",
            breed:"Dane",
            servide:"Grooming",
            owner:"Shaggy",
            contactPhone:"555-555-555"
        },
        {
            name:"Bobby",
            age: 2,
            gender:"Male",
            breed:"Chihuahua",
            servide:"Shower",
            owner:"Brayan",
            contactPhone:"664-553-534"
        }
    ]
}

function displayInfo(){

}

function init(){
    // main
    console.log(patSalon.name);

}

window.onload = init;
