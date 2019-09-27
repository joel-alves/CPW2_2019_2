function verificarPalindromo() {
    let res = document.getElementById('texto1').value;          //cria uma variável     value serve pra recuperar apenas a variavel com valor
       
            //substituindo acentos
           if(res){
               //removendo espaços e letras acentuadas
                res = res.replace(/ /gi,"");
                res = res.replace(/á|à|ã|â/gi, "a");
                res = res.replace(/é|è|ê/gi, "e");
                res = res.replace(/í|ì|î/gi, "i");
                res = res.replace(/ò|ó|õ|ô/gi, "o");
                res = res.replace(/ù|ú|û/gi, "u");
                res = res.replace("ç", "c");     
                res = res.replace( /[^a-z0-9]/gi,"");   //remover numeros e caracteres especiais
               
               }    
                //minusculo
             res = res.toLowerCase();  
             
function reverseString(str) {
    // trasformar a string em um matriz
    var splitString = str.split(""); 
 
    //  reverter a matriz
    var reverseArray = splitString.reverse();
 
    // junta os elemntos da matriz e forma uma string
    var joinArray = reverseArray.join("");
    
    //retorna a string invertida
    return joinArray;
}
 var res1 = reverseString(res);
 if(res1 == res){
    document.getElementById('resultado').innerHTML ="A frase é um Palíndromo" ;  
 }else{
    document.getElementById('resultado').innerHTML ="A frase NÃO é um Palíndromo" ;  
 }
             
            
     
      
       
          

}
