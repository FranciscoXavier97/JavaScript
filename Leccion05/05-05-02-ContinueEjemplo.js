let i = 10;
 
do{
    if(i % 2 !== 0){
    continue;
    }
    else{
        console.log(i);
        i--;
    }
}while(i >= 0);

console.log("Fin del ciclo While");