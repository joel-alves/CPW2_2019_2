        // imprime uma mensagem  no console
console.log('fala, negada!');
        //alert('fala negada');
        // pega o spam cujo id é "igual a mensagem" e coloca na variavel mensagenm
var mensagem = document.getElementById('mensagem');
        // coloca um texto dentro do spam
mensagem.innerHTML = 'fala, negada!';
        // injeta um paragrafo dentro da div conteiner
        // cria uma tag p e salva na variavel paragrafo
var paragrafo = document.createElement('p');
paragrafo.innerHTML =`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus turpis quis nulla dignissim finibus.
 Proin eget arcu in ipsum rhoncus porta. Mauris placerat hendrerit sem vel tempus. Fusce nibh justo, ullamcorper vel luctus non, hendrerit eu velit. 
 Quisque suscipit lacus in velit pretium pulvinar. 
 Integer aliquam nulla volutpat metus blandit, eget molestie velit bibendum. Maecenas ex dolor, porttitor vel venenatis in, consequat at nulla. 
 Donec tempor consectetur nisi et elementum. Fusce a ligula mollis, tristique enim ac, venenatis felis. Duis nec diam vitae magna condimentum faucibus.
 Vestibulum euismod tellus eu cursus accumsan. 
Etiam et blandit nisi, quis ultrices nulla.
`;
var conteiner = document.getElementById('conteiner');
        // anexa a tag de paragrafo dentro da div conteiner
conteiner.appendChild(paragrafo);