let areaProgramacion;
let confirmar;
let tecnologiaBack;
let tecnologiaFront;
let otraTecnologia = [];

function lenguajeExtra(area, lenguaje){
    alert(`Elegiste la opción de ${area} y ${lenguaje}`);
    do{
        confirmar = confirm("¿Hay alguna otra tecnología que te gustaría aprender?");
        if(confirmar === true){
            otraTecnologia.push(prompt("¿Qué tecnología te gustaría aprender?"));
        }
        else{
            alert("Gracias por tu tiempo");
            console.log(otraTecnologia);
        }
    
    }while(confirmar);
};

function lenguajeFront(){
    alert("Elegiste la opción de Front-End");
    do{ 
        tecnologiaFront = parseInt(prompt("¿Quieres aprender Angular o Vue?\n Escribe 1 para Angular\n Escribe 2 para Vue"));
        if(tecnologiaFront === 1){
            lenguajeExtra("Front-End","Angular");
        }
        else if(tecnologiaFront === 2){
            lenguajeExtra("Front-End","Vue");
        } else{
            alert("Por favor, ingresa una opción válida");
        }
    
    }while(tecnologiaFront !== 1 &&  tecnologiaFront !== 2);
};

function lenguajeBack(){
    alert("Elegiste la opción de Back-End");
    do{
        tecnologiaBack = parseInt(prompt("¿Quieres aprender C# o Java?\n Escribe 1 para C#\n Escribe 2 para Java"));
        if(tecnologiaBack === 1){
            lenguajeExtra("Back-End","C#");
        }
        else if(tecnologiaBack === 2){
            lenguajeExtra("Back-End","Java");
        } else{
            alert("Por favor, ingresa una opción válida");
        }
    
    }while(tecnologiaBack !== 1 &&  tecnologiaBack !== 2);
}

do{
    areaProgramacion = parseInt(prompt("¿Quieres seguir en el área de Front-End o Back-End?\n Escribe 1 para Front-End\n Escribe 2 para Back-End"));
    if(areaProgramacion === 1){
        lenguajeFront();
    }
    else if(areaProgramacion === 2){
        lenguajeBack();
    }
    else{
        alert("Por favor, ingresa una opción válida");
    }
}while(areaProgramacion !== 1 &&  areaProgramacion !== 2);