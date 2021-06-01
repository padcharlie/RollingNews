const campoRequerido = (textoAValidar) =>{
    if(textoAValidar.trim()===''){
        return false;
    }else{
        return true;
    }
}

const rangoTexto = (textoAValidar) =>{
    if (textoAValidar.lenght > 100){
        return false;
    }else{
        return true;
    }
}

export {campoRequerido, rangoTexto };