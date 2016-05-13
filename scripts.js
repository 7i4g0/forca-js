//solicita a palavra desejada e define as variáveis
var palavra = window.prompt('Digite a palavra desejada:', '');
var qtd = erros = acertos = 0;
var tmp_content = '';

//converte a palavra em maiúsculas para padronizar
palavra = palavra.toUpperCase();

//quebra a palavra em um array
arr_palavra = palavra.split("");

//contas quantas letras tem
qtd = arr_palavra.length;

//coloca as letras na tela com display:none
for (var i = 0; i < qtd; i++) {
    tmp_content += '<div class="letra"><span id="'+i+'">'+arr_palavra[i]+'</span></div>';
}
document.getElementById("palavra").innerHTML = tmp_content;

//função que ignora a acentuação da palavra digitada
function replaceSpecialChars(str) {
    str = str.replace(/[ÀÁÂÃÄÅ]/,"A");
    str = str.replace(/[ÈÉÊË]/,"E");
    str = str.replace(/[Í]/,"I");
    str = str.replace(/[ÓÔÕ]/,"O");
    str = str.replace(/[Ú]/,"U");
    str = str.replace(/[Ç]/,"C");

    return str.replace(/[^a-z0-9]/gi,'');
}

//funcão que checa cada vez que uma letra é clicada
function verifica(str) {
    //errou até que se prove o contrário
    acertou = false;

    //busca dentro do array pela letra escolhida
    arr_palavra.filter(function(elem, ind, obj) {
        var letra_clicada = document.getElementById(str);

        //remove o evento de click inabilitando a letra já clicada
        letra_clicada.removeAttribute("onclick");
        letra_clicada.className = "clicada";

        //verifica se a letra escolhida está no array
        if(replaceSpecialChars(elem) == str) {
            //se sim, mostra a letra na tela e soma os acertos
            document.getElementById(ind).style= 'display:block;';
            acertos++;
            acertou = true;
        }
    });

    if (!acertou) {
        erros++;
        document.getElementById('num_erros').innerHTML=erros;
    }

    //se acertou todas as letras, ganhou
    if(acertos == qtd) {
        alert('* You Win! *');
        //remove o evento de clique de todas as letras
        itens = document.getElementsByTagName('li');
        for (i = 0; i < itens.length; i++) {
            itens[i].removeAttribute("onclick");
            itens[i].style.cursor = 'default';
        }
    }

    if(erros == 5) {
        alert('Burro! u.u');

        //remove o evento de clique de todas as letras
        itens = document.getElementsByTagName('li');
        for (i = 0; i < itens.length; i++) {
            itens[i].removeAttribute("onclick");
            itens[i].style.cursor = 'default';
        }
    }

}
