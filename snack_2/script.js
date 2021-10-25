
let squadre = [
    {
        nome: "squadraUno",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "squadraDue",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "squadraTre",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "squadraQuattro",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "squadraCinque",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "squadraSei",
        puntiFatti: 0,
        falliSubiti: 0,
    }
];


for (let i = 0; i < squadre.length; i++) {
    let squadra = squadre[i];

    if (squadra.falliSubiti || squadra.puntiFatti == 0) {
        squadra.falliSubiti = Math.floor(Math.random() * 100);
        squadra.puntiFatti = Math.floor(Math.random() * 100);
    }
    
    console.log(squadra);
}

/* Math.floor(Math.random() * 100); */