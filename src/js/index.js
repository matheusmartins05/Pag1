let data = document.querySelector('.data');




monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro");
now = new Date;

let dia = now.getDate();
let mes = monName [now.getMonth() ];
let ano = now.getFullYear ();

data.innerHTML = `  Disponivel apenas até hoje, ${dia} de ${mes} de ${ano}`;




console.log();
