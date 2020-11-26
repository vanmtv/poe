let name = window.document.getElementById('nome')
let emaill = window.document.getElementById('email')
let assuntoo = document.querySelector('#assunto')
let nameOk  = false
let emailOk  = false
let assuntoOk  = false

function validaName(){
    let txtName = document.getElementById('txtName')
    if(nome.value.length < 3){
        txtName.innerHTML = 'Invalid Name'
        txtName.style.color = 'red'
    }
    else{
        txtName.innerHTML ='Valid Name'
        txtName.style.color = 'green'
        nameOk = true
    }
}

function validaEmail(){
    let txtEmail = document.getElementById('txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'Invalid E-mail'
        txtEmail.style.color = 'red'
   } else {
      txtEmail.innerHTML = 'Valid E-mail'
      txtEmail.style.color = 'green'
      emailOk = true
    }
}


function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    console.log(assunto.value)
    if(assunto.value.length >=100){
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }
    else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function submited(){
    if(nameOk == true && emailOk == true && assuntoOk == true){
        alert('Submitted')
    }
    else{
        alert('There is something wrong')
    }
}