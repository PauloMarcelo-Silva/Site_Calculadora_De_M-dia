function CalcMedia() {
  // pegando o Elemento "name" do HTML
  // O .value ja vai esta Pegando so o tipo do elemento no caso do Elemtento "name" ta como String/Text
  var nome = document.getElementById("name").value;

  // cada nota do bimestre passado pelo Usuario no HTML
  var notaPrimeiroBimestre = document.getElementById("PrimeiroBimestre").value;
  var notaSegundoBimestre = document.getElementById("SegundoBimestre").value;
  var notaTerceiroBimestre = document.getElementById("TerceiroBimestre").value;
  var notaQuartoBimestre = document.getElementById("QuartoBimestre").value;

  // Calculo da Media + Desafio passado pelos Professores da Aula
  // Desafio: soma os valores "as notas dos bimestres" e Dps dividir
  var notaSoma =
    parseFloat(notaPrimeiroBimestre) +
    parseFloat(notaSegundoBimestre) +
    parseFloat(notaTerceiroBimestre) +
    parseFloat(notaQuartoBimestre);

  var notaDivisao = notaSoma / 4;

  var notaFinal = notaDivisao;

  document.getElementById("results").innerHTML = notaFinal;

  // Desafio: Verificar se o Aluno passou ou não de Ano
  let aprovation;
  var aprovado = "Parabéns " + nome + ", VOCÊ FOI APROVADO(A)!!";
  var reprovado = "Que pena " + nome + ", VOCÊ FOI REPROVADO(A)";

  salvar = notaFinal >= 7 ? aprovado : reprovado;

  document.getElementById("classification").innerHTML = salvar;

  if (salvar === aprovado) {
    document.getElementById("classification").style.background = "#006400";
  } else {
    document.getElementById("classification").style.background = "#9c0000";
  }
}