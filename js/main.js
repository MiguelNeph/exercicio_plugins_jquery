$(document).ready(function(){
    

    $('#phone').mask('(00) 000 00 00 00', {
        placeholder: 'Phone number'
    })
    $('#cpf').mask('000.000.000-00', {
        placeholder: 'CPF Number (XXX.XXX.XXX-XX)'
    })
    $('#cep').mask('00000-000', {
        placeholder: 'CEP Number (XXXXX-XXX)'
    })

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true,
            },
            adress: {
                required: true,
            },
        },
        messages: {
            nome: "Please complete with your name"
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`There are ${camposIncorretos} wrong or empty fields`)
            }
        }
    })
})