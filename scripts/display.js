function displayInfo(){
    
    document.getElementById("info").innerHTML="You have " + petSalon.pets.length + " pets in the salon";
}

function displayTable(){
    let petSection = document.getElementById("petTable");
    let card = "";
    for(let i=0;i < petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
         card+= `
         <div id="${pet.id}">
            <tr>
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td>${pet.ownername}</td>
                <td>${pet.contactPhone}</td>
                <td>${pet.payment}</td>
                <td><button class="btn btn-dark" onclick="deletePet(${pet.id})">Delete</button></td>
            </tr>
        </div>
         `;

         
    }

    petSection.innerHTML=card;

}
