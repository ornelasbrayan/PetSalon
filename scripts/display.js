function displayPetCards(){
    //select the petSection by id
    let petSection = document.getElementById("pets");
    let card = "";
    //travel the array
    for(let i=0;i < petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
         //create the template string ` `
         card+= `
         <div class="petCard">
            <h4>Name: ${pet.name}</h4>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
            <p>Owner: ${pet.ownername}</p>
            <p>Contact Phone: ${pet.contactPhone}</p>
         </div>
         `;
         console.log(card);
         
    }
       
    
        //insert the tmp into the petSection
        petSection.innerHTML=card;
}

function displayInfo(){
    
    document.getElementById("info").innerHTML="You have " + petSalon.pets.length + " pets in the salon";
}