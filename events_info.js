  
let query = location.search;

let params = new URLSearchParams(query);

let idParams = params.get("id");

let ArrayIndexDetalles = data.events




const EventsDetalles = document.getElementById("events_info");


let html = " ";
let detallesE = ArrayIndexDetalles.find(element => element._id == idParams);
html += `
        <div class="card col">
        <img src="${detallesE.image}" class="card-img-top" alt="${detallesE.name}">
        <div class="card-body">
            <h5><mark>Category:</mark></h5><p>${detallesE.category}</p>
            <h5 class="card-title"><mark>${detallesE.name}</mark></h5>
            <p class="card-text">${detallesE.description}</p>
            <p class="card-text h5 "><mark>Date:</mark></p> 
            <p class="card-text">${detallesE.date}</p>
            <p class="card-text h5"><mark>Place:</mark></p>
            <p class="card-text">${detallesE.place}</p>
            <p class="card-text h5"><mark>Price:</mark></p>
            <p class="card-text">${detallesE.price}</p>
        </div>
        </div>
            `;

EventsDetalles.innerHTML = html;

