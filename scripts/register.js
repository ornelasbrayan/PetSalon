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
function Pet(name,age,gender,breed,service,owner,phone,payment){
    this.name = name;
    this.age = age;
    this.gender= gender;
    this.breed = breed;
    this.service = service;
    this.ownername = owner;
    this.contactPhone = phone;
    this.payment = payment;
    this.id=c++;

}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");
let inputPayment = document.getElementById("txtPayment");

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
    if(thePet.payment==""){
        validation=false;
        inputPayment.classList.add("alert-error");
    }else{
        inputPayment.classList.remove("alert-error");
    }
    
    return validation;

}

function register(){
    let newPet= new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value,inputPayment.value);
    if(validatePet(newPet)==true){
        petSalon.pets.push(newPet);
        displayInfo();
        clearForm();
        displayTable();

    }
    
}

function deletePet(id){
    console.log("deleting pet " + id);
    let deleteIndex;
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(id==pet.id){
            deleteIndex=i;
        }

    }
    document.getElementById(id).remove();
    petSalon.pets.splice(deleteIndex,1); 
    displayInfo();
    displayTable();
        
}

function clearForm(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
    inputOwner.value = "";
    inputPhone.value = "";
    inputPayment.value = "";
}



function init(){
    let scooby = new Pet("Scooby", 50, "Male", "Dane", "Hair Cut", "Shaggy", "555-555-555","Credit card"); 
    let bobby = new Pet("Bobby", 2, "Male", "Chihuahua", "Shower", "Brayan", "664-553-123","Cash");
    let charlotte = new Pet("Charlotte", 4, "Female", "Golden Retriever", "Hair cut", "Kevin", "624-423-654","Cash");
    petSalon.pets.push(scooby, bobby, charlotte); 
    displayInfo();
    displayTable();

}

window.onload = init;
