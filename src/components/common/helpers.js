const campoRequerido = (textoAValidar) =>{
    if(textoAValidar.trim()===''){
        return false;
    }else{
        return true;
    }
}

const rangoTexto = (textoAValidar) =>{
    if (textoAValidar.trim().lenght < 100){
        return true;
    }else{
        return false;
    }
}

export {campoRequerido, rangoTexto };