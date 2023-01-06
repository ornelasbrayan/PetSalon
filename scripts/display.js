function displayPetCards(){
    //select the petSection by id
    let petSection = document.getElementById("pets");
    let card = "";
    //travel the array
    for(let i=0;i < petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
         //create the template string ` `
         card+= `
         <div id="${pet.id}"class="petCard">
            <h4>Name: ${pet.name}</h4>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
            <p>Owner: ${pet.ownername}</p>
            <p>Contact Phone: ${pet.contactPhone}</p>
            <button onclick="deletePet(${pet.id})">Delete</button>
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

// function displayTable(){
//     let petSection = document.getElementById("petTable");
//     let card = "";
//     for(let i=0;i < petSalon.pets.length;i++){
//         let pet = petSalon.pets[i];
//          //create the template string ` `
//          card+= `
//          <tr>
//             <td>Name: ${pet.name}</td>
//             <td>Age: ${pet.age}<td>
//             <td>Gender: ${pet.gender}</td>
//             <td>Breed: ${pet.breed}</td>
//             <td>Service: ${pet.service}</td>
//             <td>Owner: ${pet.ownername}</td>
//             <td>Contact Phone: ${pet.contactPhone}</td>
//             <button onclick="deletePet(${pet.id})">Delete</button>
//          </tr>
//          `;
//          console.log(card);
         
//     }

//     petSection.innerHTML=card;

// }
