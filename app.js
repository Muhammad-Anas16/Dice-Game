
function DiceRoll(){

    // get Dice no 1
    let dice1 = document.getElementById('dice-box1');
    let rdm1 = Math.floor(((Math.random() * 6) + 1));

    // get Dice no 2
    let dice2 = document.getElementById('dice-box2');
    let rdm2 = Math.floor(((Math.random() * 6) + 1));

    // Dice Dice no 1 Case
    if (rdm1 === 1) {
        dice1.innerHTML = '<i class="fa-solid fa-dice-one"></i>'
    }
    else if (rdm1 === 2) {
        dice1.innerHTML = '<i class="fa-solid fa-dice-two"></i>'
    }
    else if (rdm1 === 3) {
        dice1.innerHTML = '<i class="fa-solid fa-dice-three"></i>'
    }
    else if (rdm1 === 4) {
        dice1.innerHTML = '<i class="fa-solid fa-dice-four"></i>'
    }
    else if (rdm1 === 5) {
        dice1.innerHTML = '<i class="fa-solid fa-dice-five"></i>'
    }
    else if (rdm1 === 6) {
        dice1.innerHTML = '<i class="fa-solid fa-dice-six"></i>'
    }

    //************************************************************** */

    // Dice Dice no 2 Case
    if (rdm2 === 1) {
        dice2.innerHTML = '<i class="fa-solid fa-dice-one"></i>'
    }
    else if (rdm2 === 2) {
        dice2.innerHTML = '<i class="fa-solid fa-dice-two"></i>'
    }
    else if (rdm2 === 3) {
        dice2.innerHTML = '<i class="fa-solid fa-dice-three"></i>'
    }
    else if (rdm2 === 4) {
        dice2.innerHTML = '<i class="fa-solid fa-dice-four"></i>'
    }
    else if (rdm2 === 5) {
        dice2.innerHTML = '<i class="fa-solid fa-dice-five"></i>'
    }
    else if (rdm2 === 6) {
        dice2.innerHTML = '<i class="fa-solid fa-dice-six"></i>'
    }

}