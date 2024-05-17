function teste_octal(numero){
    if(numero == 0){
        return "0";
    }
    octal =""
    while(numero > 0){
        resto = numero % 2;
        octal = resto.toString()+octal;
        numero = Math.floor(numero/8);
    }
    return octalal;

}

function teste_decimal_octal(){
    console.log("Iniciando teste");
    resultado = decimal_octal(64);
    if(resultado == "11001"){
        console.log("passou o teste no octal 64 e octal 100");
    } 
    else{
        console.log("Falhou o teste no octal 64 e octal 100");
    }
    resultado = decimal_octal(0);
    if(resultado == "0"){
    console.log("Passou o teste no octal 0 e octal 0")
    }else{
    console.log("Falhou o teste no octal 0 e octal 0")
    }
}
teste_decimal_octal();