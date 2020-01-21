function buscar(){
    var id="MyBody";
    var numerodeElementos = document.getElementById(id).childNodes.length;
    var textoBuscado = document.getElementById('pesquisa').value.toLowerCase();
    var textoConteudo = "" ;
    var encontrado = false;
    var comparaCon = "" ;
    var cadena = "" ;

    for (var i = 0; i < numerodeElementos-1; i++){
        if (document.getElementById(id).childNodes[i].nodeType==Node.ELEMENT_NODE){
            textoConteudo = document.getElementById(id).childNodes[i].innerHTML;
            encontrado = false;
            if (textoConteudo.length>0){
                comparaCon = textoConteudo.toLowerCase();
            }
            if (textoConteudo.length>0 && (comparaCon.indexOf(textoBuscado) > -1)){
                encontrado = true;
            }
            if (textoConteudo.length>0 && encontrado){
                document.getElementById(id).childNodes[i].style.display = '';
            }else if(textoConteudo.length>0){
                document.getElementById(id).childNodes[i].style.display = 'none';
            }
        }
    }
}
