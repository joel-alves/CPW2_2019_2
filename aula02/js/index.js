
//função para exibir mensagem
function exibirMensagem(){
    let palavra1 =document.getElementById('palavra1').value;                                                //pega o valor da variável 1
   

    if(palavra1){
        let palavra2 =document.getElementById('palavra2').value;                                                      // pega valor da variavel 2
        let mensagem = palavra2 ? `Palavras Concatenadas: ${palavra1}${palavra2}` : '';                       //criação de uma mensagem com condição operador ternário
        document.getElementById('mensagem').innerHTML = mensagem;                                                    //mostrar a msg

    }


        

   

}

