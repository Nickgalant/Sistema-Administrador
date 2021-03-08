var predio = document.querySelector("#predio");
var local = document.querySelector("#local");
var edicao = document.querySelector("#icones")

function cadLocal(predio, local) {
    var tabela = document.getElementById("tabela");
    var linhas = tabela.rows.length;
    var linha = tabela.insertRow(linhas);

    var colunaPredio = linha.insertCell(0);
    var colunaLocal = linha.insertCell(1);
    edicao = linha.insertCell(2);

    colunaPredio.innerHTML = predio;
    colunaLocal.innerHTML = local;
    edicao.innerHTML = '<a href=""><i class="fas fa-pencil-alt"></i></a><a href=""><i class="far fa-trash-alt"></i></a>';


    preencheCamposForm();
}