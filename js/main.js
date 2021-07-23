let nome = document.getElementById('nome');
let email = document.getElementById('email');
let nascimento = document.getElementById('nascimento');
let cpf = document.getElementById('cpf');
let telefone = document.getElementById('telefone');
let cep = document.getElementById('cep');
let logradouro = document.getElementById('logradouro');
let cidade = document.getElementById('cidade');
let estado = document.getElementById('estado');

document.getElementById('botao').addEventListener('click', function() {
    let dados = {
        "nome": nome.value,
        "email": email.value,
        "nascimento": nascimento.value,
        "cpf": cpf.value,
        "telefone": telefone.value,
        "cep": cep.value,
        "logradouro": logradouro.value,
        "cidade": cidade.value,
        "estado": estado.value
    }
    let ls = localStorage.getItem("infos");

    if (ls) {
        let json = JSON.parse(ls);
        json.push(dados);
        json = JSON.stringify(json);
        localStorage.setItem("infos", json)
    } else {
        localStorage.setItem("infos", JSON.stringify([dados]))
    }

    let ls_array = JSON.parse(localStorage.getItem("infos"));
});

