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
let c=0;
// constructor
function Pet(name,age,gender,breed,service,owner,phone){
    this.name = name;
    this.age = age;
    this.gender= gender;
    this.breed = breed;
    this.service = service;
    this.ownername = owner;
    this.contactPhone = phone;
    this.id=c++;

}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");

function validatePet(thePet){
    let validation=true;
    if(thePet.name==""){
        validation=false;
        inputName.classList.add("alert-error");
    }else{
        inputName.classList.remove("alert-error");
    }
    if(thePet.service==""){
        validation=false;
        inputService.classList.add("alert-error");
    }else{
        inputService.classList.remove("alert-error");
    }
    if(thePet.contactPhone==""){
        validation=false;
        inputPhone.classList.add("alert-error");
    }else{
        inputPhone.classList.remove("alert-error");
    }
    if(thePet.breed==""){
        validation=false;
        inputBreed.classList.add("alert-error");
    }else{
        inputBreed.classList.remove("alert-error");
    }
    
    return validation;

}

function register(){
    //create a new object
    let newPet= new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);
    if(validatePet(newPet)==true){
        // the pet was valid
        //push it to the array
        petSalon.pets.push(newPet);
        //display the object on the console
        displayPetCards();
        displayInfo();
        clearForm();
        // displayTable();

    }
    
}

function deletePet(id){
    console.log("deleting pet " + id);
    let deleteIndex;
    //travel the array
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(id==pet.id){// find the pet
            deleteIndex=i;
        }

    }
    document.getElementById(id).remove();// detele the pet from the html
    petSalon.pets.splice(deleteIndex,1);// delete the pet from the array 
    displayInfo();// update info
        
}

function clearForm(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
    inputOwner.value = "";
    inputPhone.value = "";
}



function init(){
    // main
    let scooby = new Pet("Scooby", 50, "Male", "Dane", "Grooming", "Shaggy", "555-555-555"); //creating the object
    let bobby = new Pet("Bobby", 2, "Male", "Chihuahua", "Shower", "Brayan", "664-553-123");
    let charlotte = new Pet("Charlotte", 4, "Female", "Golden Retriever", "Hair cut", "Kevin", "624-423-654");
    petSalon.pets.push(scooby, bobby, charlotte); //adding the pet to the array
    displayInfo();
    displayPetCards();
    displayTable();

}

window.onload = init;
