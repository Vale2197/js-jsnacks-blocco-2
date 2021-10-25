
/* Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

let biciclette = [
    {
        nome: "bicicletta 1",
        peso: "10kg",

    },
    {
        nome: "bicicletta 2",
        peso: "10kg",

    },
    {
        nome: "bicicletta 3",
        peso: "5kg",

    },
    {
        nome: "bicicletta 4",
        peso: "3kg",

    },
    {
        nome: "bicicletta 5",
        peso: "10kg",

    },
    {
        nome: "bicicletta 6",
        peso: "10kg",

    }
]

for (let i = 0; i < biciclette.length; i++) {

        for (const key in biciclette) {
            console.log(biciclette[key]);
        }
    
}