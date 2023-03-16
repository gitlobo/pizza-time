function calcularPrecioPizza(nPepperonis, nBasils, nMushrooms, hasSauce, hasCheese) {
  return 0;
}

function imprimirBoleta(nPepperonis, nBasils, nMushrooms, hasSauce, hasCheese) {
  return "Boleta";
}

/*
IGNORAR DE AQUI PARA ABAJO
Ya veremos todo esto en próximas clases
*/


const form = document.querySelector('#pizza-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Extract the form values using the FormData object
    const formData = new FormData(event.target);
    const pepperoni = formData.get('pepperoniCount');
    const basil = formData.get('basilCount');
    const mushroom = formData.get('mushroomCount');
    const sauce = formData.get('sauceCheck');
    const cheese = formData.get('cheeseCheck');

    // Pass the form values as arguments to your JavaScript function
    makePizza(pepperoni, basil, mushroom, sauce, cheese);
}

function makePizza(numPepperonis, numBasils, numMushrooms, hasSauce, hasCheese) {
    // Update the number of pepperonis
    var pepperonis = document.getElementById("pepperonis");
    pepperonis.innerHTML = "";
    for (var i = 0; i < numPepperonis; i++) {
        var pepperoni = document.createElement("div");
        pepperoni.className = "pepperoni";
        pepperoni.style.top = Math.floor(Math.random() * 60) + 20 + '%';
        pepperoni.style.left = Math.floor(Math.random() * 60) + 20 + '%';
        pepperonis.appendChild(pepperoni);
    }

    // Update the number of basils
    var basils = document.getElementById("basils");
    basils.innerHTML = "";
    for (var i = 0; i < numBasils; i++) {
        var basil = document.createElement("div");
        basil.className = "basil";
        basil.style.top = Math.floor(Math.random() * 60) + 20 + '%';
        basil.style.left = Math.floor(Math.random() * 60) + 20 + '%';
        basils.appendChild(basil);
    }

    // Update the number of mushrooms
    var mushrooms = document.getElementById("mushrooms");
    mushrooms.innerHTML = "";
    for (var i = 0; i < numMushrooms; i++) {
        var mushroom = document.createElement("div");
        mushroom.className = "mushroom";
        mushroom.style.top = Math.floor(Math.random() * 60) + 20 + '%';
        mushroom.style.left = Math.floor(Math.random() * 60) + 20 + '%';
        mushrooms.appendChild(mushroom);
    }

    // Update the pizza with the selected sauce and cheese
    var sauce = document.getElementById("sauce");
    if (hasSauce) {
        sauce.classList.add("sauce");
    } else {
        sauce.classList.remove("sauce");
    }
    var cheese = document.getElementById("cheese");
    if (hasCheese) {
        cheese.classList.add("cheese");
    } else {
        cheese.classList.remove("cheese");
    }
  
    // Update order summary
    var orderSummary = document.getElementById("order-summary");
    orderSummary.innerHTML = imprimirBoleta(numPepperonis, numBasils, numMushrooms, hasSauce, hasCheese); 
}
