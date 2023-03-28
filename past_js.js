

  const CurrentDate = data.currentDate;
  const ArrayIndex = data.events;


  let ArrayFilterBefore = []


function EventsFilterDateBefore(ArrayIndex) {
  for (let i = 0; i < ArrayIndex.length; i++) {
    if (ArrayIndex[i].date < CurrentDate) {
      ArrayFilterBefore.push(ArrayIndex[i])
    }
  }
}

EventsFilterDateBefore(ArrayIndex);
console.log(ArrayFilterBefore);

const BootsCards = document.getElementById("MainCards");

function AddingCards(Arraydatos) {
  const BootsCards = document.getElementById("MainCards");
  if (Arraydatos.length == 0) {
    BootsCards.innerHTML = "<h2 class='text-bg-warning p-3'>Event not found</h2>"
    return
  }
  let card = ``;
  
  Arraydatos.forEach((element) => {
    card += `
     <div class="card col">
                    <img src="${element.image}" class="card-img-top" alt="${element.name}">
                    <div class="card-body">
                        <h5><mark>Category:</mark></h5><p>${element.category}</p>
                        <h5 class="card-title"><mark>${element.name}</mark></h5>
                        <p class="card-text">${element.description}</p>
                        <p class="card-text h5 "><mark>Date:</mark></p> 
                        <p class="card-text">${element.date}</p>
                        <p class="card-text h5"><mark>Place:</mark></p>
                        <p class="card-text">${element.place}</p>
                        <p class="card-text h5"><mark>Price:</mark></p>
                        <p class="card-text">${element.price}</p>
                        <a href="./events_info.html?id=${element._id}" class="btn btn-primary">More info</a>
                    </div>
                </div>
    `;
  })
  BootsCards.innerHTML = card
  console.log(BootsCards)
};
 
AddingCards(ArrayFilterBefore);

const CheckboxCardsIndex = document.getElementById("checkboxesPast");

function CheckboxDinamicos(_arrayparams) {
  let checkBox = ``;
  let allCategories = _arrayparams.map(element => element.category)
  let Categories = new Set(allCategories)
  const CheckboxCards = document.getElementById("checkboxesPast");
  Categories.forEach((element) => {
    checkBox += `
    <div>
    <input class="form-check-input" type="checkbox" value="${element}" id="${element}">
    <label class="form-check-label" for="${element}">
    "${element}"
    </label>
    </div>
    `;
})
CheckboxCards.innerHTML = checkBox
};

CheckboxDinamicos(ArrayFilterBefore);


const input = document.getElementById('SearchBarPast');


const SearchCards = document.getElementById("MainCards");

input.addEventListener('input', FiltrosCruzados)

function SearchFilter(Arraydatos, texto) {
  let ArrayFiltrado = Arraydatos.filter(element =>
    element.name.toLowerCase().includes(texto.toLowerCase()))
  return ArrayFiltrado
}


//**************************************************** */

const checkboxesUpcoming = document.getElementById("checkboxesPast");

console.log(checkboxesUpcoming);

checkboxesUpcoming.addEventListener('change', FiltrosCruzados);

function CheckboxsFilter(_arrayparams) {
  let CheckBoxesUpcomingFilter = document.querySelectorAll("input[type='checkbox']")
  console.log(CheckBoxesUpcomingFilter);
  let arrayChecks = Array.from(CheckBoxesUpcomingFilter)
  console.log(arrayChecks);
  let checkChecked = arrayChecks.filter(check => check.checked)
  console.log(checkChecked);
  if(checkChecked.length == 0){
    return _arrayparams
  }
  let checkValue = checkChecked.map(check => check.value)
  console.log(checkValue);
  let arrayChecksFilter = _arrayparams.filter(element => checkValue.includes(element.category))
  console.log(arrayChecksFilter)
  return arrayChecksFilter
}

function FiltrosCruzados(){
  let arrayChecksFilter = CheckboxsFilter(ArrayFilterBefore)
   let ArrayFiltrado = SearchFilter(arrayChecksFilter, input.value)
  AddingCards(ArrayFiltrado)
}



