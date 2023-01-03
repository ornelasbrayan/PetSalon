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
    pets:[]
}
// constructor
function Pet(name,age,gender,breed,service,owner,phone){
    this.name = name;
    this.age = age;
    this.gender= gender;
    this.breed = breed;
    this.service = service;
    this.ownername = owner;
    this.contactPhone = phone;

}




function displayInfo(){

}

function init(){
    // main
    let scooby = new Pet("Scooby", 50, "Male", "Dane", "Grooming", "Shaggy", "555-555-555"); //creating the object
    let bobby = new Pet("Bobby", 2, "Male", "Chihuahua", "Shower", "Brayan", "664-553-123");
    let charlotte = new Pet("Charlotte", 4, "Female", "Golden Retriever", "Hair cut", "Kevin", "624-423-654");
    petSalon.pets.push(scooby, bobby, charlotte); //adding the pet to the array
    console.log(petSalon.pets[0].name);
    console.log(petSalon.pets[1].name);


}

window.onload = init;
