let name = window.document.getElementById('nome')
let emailh = window.document.getElementById('email')
let nameOk  = false
let emailOk  = false

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

function submit(){
    if(nameOk == true && emailOk == true){
        alert('Submitted')
    }
    else{
        alert('There is something wrong')
    }
}