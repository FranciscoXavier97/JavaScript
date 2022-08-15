//definimos objecto
let persona = {
    nombre : "Francisco",
    apellido : "Alvarez",
    email : "Francisco_97@hotmail.com",
    edad : 24,
    idioma : "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

//get significa obtener en ingles 
console.log(persona.nombreCompleto);

//set
console.log(persona.lang);

//mandar llamar el metodo set
persona.lang = "en";

console.log(persona.lang);
console.log(persona.idioma);
