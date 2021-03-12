// Pratice Exercise
// Sistema de notas escolares

/* ### Transformar notas escolares

  Crie um algoritimo que transforme as notas do sistema
  numérico para sistema de notas em caracteres tipo A B C

  * de 90 para cima --> A
  * entre 80 - 89   --> B
  * entre 70 - 79   --> C
  * entre 60 - 69   --> D
  * menor que 60    --> F

*/

function getScore_ByIfs(nScoreValue = 0)
{
    let sNotaSchool = "";

    if ((nScoreValue >= 90 ) && (nScoreValue <= 100)) {sNotaSchool = "A";}
    else if ((nScoreValue >=80) && (nScoreValue <=89)) {sNotaSchool = "B";}
    else if ((nScoreValue >=70) && (nScoreValue <=79)) {sNotaSchool = "C";}
    else if ((nScoreValue >=60) && (nScoreValue <=69)) {sNotaSchool = "D";}
    else if ((nScoreValue < 60) && (nScoreValue > 0)) {sNotaSchool = "F";}
    else {sNotaSchool = "Nota Inválida.";}

    return sNotaSchool;
};

function getScore_Switch(nScoreValue = 0)
{

    let sNotaSchool = "";

    let lScoreA = ((nScoreValue >= 90 ) && (nScoreValue <= 100))
    let lScoreB = ((nScoreValue >=80) && (nScoreValue <=89));
    let lScoreC = ((nScoreValue >=70) && (nScoreValue <=79));
    let lScoreD = ((nScoreValue >=60) && (nScoreValue <=69));
    let lScoreF = ((nScoreValue < 60) && (nScoreValue > 0));
    let lScore = true;

    sNotaSchool = "";

    switch (lScore) {
        case lScoreA :
            sNotaSchool = "A";
            break;
        case lScoreB :
            sNotaSchool = "B";
            break;
        case lScoreC :
            sNotaSchool = "C";
            break;
        case lScoreD :
            sNotaSchool = "D";
            break;
        case lScoreF :
            sNotaSchool = "F";
            break;
        default:
            sNotaSchool = "NaN";
            break;
    }

    return sNotaSchool;
};

let iScoreStudenty = 78;

console.log(getScore_ByIfs(iScoreStudenty));
console.log(getScore_Switch(iScoreStudenty));