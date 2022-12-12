console.log('script is working!!');

function openCrate() {
    document.getElementById('congrats').style.visibility = "visible";
    document.getElementById('item-visi').style.visibility = "visible";
    console.log('crate opened..')
    const randomNumber = Math.ceil(Math.random() * 10); // random number
    console.log(randomNumber);

    if (randomNumber == 1) { // Alien Red 
        console.log('you got number ' + randomNumber);
        document.getElementById('item-img').src = "./resources/imgs/alien-red.png";
        document.getElementById('item-name').innerHTML = "Alien Red";
        document.getElementById('item-description').innerHTML = "This is a skin for the Assault Rifle item.";
    } else if (randomNumber == 2 || randomNumber == 3) { // Big Grin
        console.log('you got number ' + randomNumber);
        document.getElementById('item-img').src = "./resources/imgs/big-grin.png";
        document.getElementById('item-name').innerHTML = "Big Grin";
        document.getElementById('item-description').innerHTML = "This is a skin for the Metal Facemask item.";
    } else if (randomNumber == 4 || randomNumber == 5) { // Glory ak47
        console.log('you got number ' + randomNumber);
        document.getElementById('item-img').src = "./resources/imgs/glory-ak47.png";
        document.getElementById('item-name').innerHTML = "Glory AK47";
        document.getElementById('item-description').innerHTML = "Glory AK47 is a skin for the Assault Rifle item in Rust.";
    } else if (randomNumber == 6 || randomNumber == 7 || randomNumber == 8 || randomNumber == 9 || randomNumber == 10) {
        console.log('you got number ' + randomNumber);
        document.getElementById('item-img').src = "./resources/imgs/press-vest.png";
        document.getElementById('item-name').innerHTML = "Press Vest";
        document.getElementById('item-description').innerHTML = "This is a skin for the Metal Chest Plate item.";
    }
}