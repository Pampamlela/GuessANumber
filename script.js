//Étape 1

/*function choisirUnNombre() {
    let choix = prompt("Choississez un nombre")
    return choix
}

//choisirUnNombre()
let givenNumber = choisirUnNombre()
console.log(givenNumber)*/

//Étape 2 et 3

function didIWin(givenNumber) {
    if(givenNumber>"22"){
        alert("Plus petit!")
        return false
    }
    if(givenNumber<"22"){
        alert("Plus grand!")
        return false
    }
        alert("Bravo!")
        return true

    }    
    

function gamePlay() {
    let givenNumber = prompt("entrer un chiffre")
    while (didIWin(givenNumber) != true) {
        givenNumber = prompt("entrer un chiffre")
}
    alert("c'est fini !")
}
gamePlay()
