
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




let arrayNomieFalli = [];

for (let i = 0; i < squadre.length; i++) {
    let squadra = squadre[i];

        squadra.falliSubiti = Math.floor(Math.random() * 100);
        squadra.puntiFatti = Math.floor(Math.random() * 100);
        console.log(squadra);

        let {nome, falliSubiti} = squadra;

        arrayNomieFalli.push(nome, falliSubiti);
          
    
}

console.log(arrayNomieFalli);

/* Math.floor(Math.random() * 100); */