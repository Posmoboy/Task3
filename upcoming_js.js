

const CurrentDate = data.currentDate;
const ArrayIndex = data.events;


let ArrayFilterAfter = []





function EventsFilterDateAfter(ArrayIndex) {
  for (let i = 0; i < ArrayIndex.length; i++) {
    if (ArrayIndex[i].date > CurrentDate) {
      ArrayFilterAfter.push(ArrayIndex[i])
    }
  }
}

EventsFilterDateAfter(ArrayIndex);
console.log(ArrayFilterAfter);




//********************************************************************** */

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

AddingCards(ArrayFilterAfter);

//********************************************************************** */

const CheckboxCards = document.getElementById("checkboxesUpcoming");

function CheckboxDinamicos(_arrayparams) {
  let checkBox = ``;
  let allCategories = _arrayparams.map(element => element.category)
  let Categories = new Set(allCategories)
  let FilterCategories = [...Categories]
  const CheckboxCards = document.getElementById("checkboxesUpcoming");
  FilterCategories.forEach((element) => {
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
  console.log(checkBox);
};

CheckboxDinamicos(ArrayFilterAfter);


const input = document.getElementById('SearchBar');

const SearchButton = document.getElementById('SearchButtonUpcoming');

const SearchCards = document.getElementById("MainCards");

input.addEventListener('input', FiltrosCruzados)

function SearchFilter(Arraydatos, texto) {
  let ArrayFiltrado = Arraydatos.filter(element =>
    element.name.toLowerCase().includes(texto.toLowerCase()))
  return ArrayFiltrado
}


//**************************************************** */

const checkboxesUpcoming = document.getElementById("checkboxesUpcoming");

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
  let arrayChecksFilter = CheckboxsFilter(ArrayFilterAfter)
   let ArrayFiltrado = SearchFilter(arrayChecksFilter, input.value)
  AddingCards(ArrayFiltrado)
}


// promesa.then(function(input){
//   input.addEventListener('input', FiltrosCruzados)
// })

// promesa.then(function(SearchFilter){
//   function SearchFilter(Arraydatos, texto) {
//     let ArrayFiltrado = Arraydatos.filter(element =>
//       element.name.toLowerCase().includes(texto.toLowerCase()))
//     return ArrayFiltrado
//   };  
//   return SearchFilter(ArrayFilterAfter);
// });

// promesa.then(function(checkboxesUpcoming){
//   checkboxesUpcoming.addEventListener('change', FiltrosCruzados);
// })

// promesa.then(function(CheckboxsFilter){
//   function CheckboxsFilter(_arrayparams) {
//     let CheckBoxesUpcomingFilter = document.querySelectorAll("input[type='checkbox']")
//     console.log(CheckBoxesUpcomingFilter);
//     let arrayChecks = Array.from(CheckBoxesUpcomingFilter)
//     console.log(arrayChecks);
//     let checkChecked = arrayChecks.filter(check => check.checked)
//     console.log(checkChecked);
//     if(checkChecked.length == 0){
//       return _arrayparams
//     }
//     let checkValue = checkChecked.map(check => check.value)
//     console.log(checkValue);
//     let arrayChecksFilter = _arrayparams.filter(element => checkValue.includes(element.category))
//     console.log(arrayChecksFilter)
//     return arrayChecksFilter
//   };
//   return CheckboxsFilter(ArrayFilterAfter)
// });

// promesa.then(function(FiltrosCruzados){
//   function FiltrosCruzados(){
//     let arrayChecksFilter = CheckboxsFilter(ArrayFilterAfter)
//      let ArrayFiltrado = SearchFilter(arrayChecksFilter, input.value)
//     AddingCards(ArrayFiltrado)
//   };
//   return FiltrosCruzados()
// });


