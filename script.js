let input = document.getElementById("inp");

let expresso    = document.getElementById('expresso');
let americano   = document.getElementById('americano');
let tea         = document.getElementById('tea');
let blackCoffee = document.getElementById('blackCoffee');
let chocolate   = document.getElementById('chocolate');
let cappuccino  = document.getElementById('cappuccino');

let coffee = document.getElementById('coffee');

let preiceExpresso    = +document.getElementById('preiceExpresso').innerHTML;
let preiceAmericano   = +document.getElementById('preiceAmericano').innerHTML;
let preiceTea         = +document.getElementById('preiceTea').innerHTML;
let preiceBlackCoffee = +document.getElementById('preiceBlackCoffee').innerHTML;
let preiceChocolate   = +document.getElementById('preiceChocolate').innerHTML;
let preiceCappuccino  = +document.getElementById('preiceCappuccino').innerHTML;

function update() {
    let element  = document.getElementById("myprogressBar");
    let width    = 1;
    let identity = setInterval(scene, 50);

    function scene() {
        if (width >= 100) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
}


expresso.onclick = () => {
    let val = +input.value;
    if (val === preiceExpresso) {
        update();
        setTimeout(() => {
            coffee.innerHTML = `Expressoo`
        }, 5000);
    } else if (val > preiceExpresso) {
        update();
        setTimeout(() => {
            coffee.innerHTML = `Expresso ${val - preiceExpresso}`
        }, 5000)

    } else {
        coffee.innerHTML = `Price must be ${preiceExpresso}`
    }
};

americano.onclick = () => {
    let val = +input.value;
    if (val === preiceAmericano) {
        update();
        setTimeout(() => {
            coffee.innerHTML = `Americano`;
        }, 5000)

    } else if (val > preiceAmericano) {
        update();
        setTimeout(() => {
            coffee.innerHTML = `Americano ${val - preiceAmericano}`;
        }, 5000)

    } else {
        coffee.innerHTML = `Price must be ${preiceAmericano}`
    }
};

cappuccino.onclick = () => {
    let val = +input.value;
    if (val === preiceCappuccino) {
        update();
        setTimeout(() => {
            coffee.innerHTML = `Cappuccino`
        }, 5000)

    } else if (val > preiceCappuccino) {
        update();
        setTimeout(() => {
            coffee.innerHTML = `Cappuccino ${val - preiceCappuccino}`
        }, 5000)

    } else {
        coffee.innerHTML = `Price must be ${preiceCappuccino}`
    }
};

tea.onclick = () => {
    let val = +input.value;
    if (val === preiceTea) {
        update();
        setTimeout(() => {
            coffee.innerHTML = `Tea`;
        }, 5000)
    } else if (val > preiceTea) {
        update();
        setTimeout(() => {
            coffee.innerHTML = `Tea ${val - preiceTea}`
        }, 5000)

    } else {
        coffee.innerHTML = `Price must be ${preiceTea}`
    }
};

blackCoffee.onclick = () => {
    let val = +input.value;
    if (val === preiceBlackCoffee) {
        update();
        setTimeout(() => {
            coffee.innerHTML = `Black Coffee`
        }, 5000)

    } else if (val > preiceBlackCoffee) {
        update();
        setTimeout(() => {
            coffee.innerHTML = `Black coffee ${val - preiceBlackCoffee}`
        }, 5000)

    } else {
        coffee.innerHTML = `Price must be ${preiceBlackCoffee}`
    }
};

chocolate.onclick = () => {

    let val = +input.value;
    if (val === preiceChocolate) {
        update();
        setTimeout(() => {
            coffee.innerHTML = `Chocolate`
        }, 5000)

    } else if (val > preiceChocolate) {
        update();
        setTimeout(() => {
            coffee.innerHTML = `Chocolate ${val - preiceChocolate}`
        }, 5000)

    } else {
        coffee.innerHTML = `Price must be ${preiceChocolate}`
    }
};


