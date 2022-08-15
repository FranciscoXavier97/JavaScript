let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

//Se manda llamar cada segundo 
setInterval(reloj,1000); // 1 seg