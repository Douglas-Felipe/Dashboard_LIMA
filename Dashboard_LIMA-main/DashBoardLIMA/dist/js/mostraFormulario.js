function mostrar(){
    if(document.getElementById("formularioRPG").style.display == 'block'){
        document.getElementById("formularioRPG").style.display = 'none';
        document.getElementById("botaoFormulario").value = "Crie seu personagem"
    }
    else{
        document.getElementById("formularioRPG").style.display = 'block'
        document.getElementById("botaoFormulario").value = "Ocultar"
    }
}