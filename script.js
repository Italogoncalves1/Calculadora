function calcular(tipo, valor) {
    if (tipo === 'acao') {
        if(valor === 'c'){
            //limpar o visor
            document.getElementById('resultado').value = ''
        }
         // Dando ação para os elementos de tipo (operadores)
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor
        }
         // Dando ação ao = , e colocando as operaçoes no visor junto com o resultado.
        if( valor === '='){
          var valor_campo = eval(document.getElementById('resultado').value )
          document.getElementById('resultado').value = valor_campo
        }
        
    } else if(tipo === 'valor') {
        //Mostrar numeros no visor
        document.getElementById('resultado').value += valor
    }
}