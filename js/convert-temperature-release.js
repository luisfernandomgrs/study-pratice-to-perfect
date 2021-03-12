/*
    ### Celsius e Fahrenheit e Vice-versa...

    Crie uma função que receba uma string em Celsius ou
    Fahrenheit e faça a transormação de uma unidade para
    outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/

// Se era para complicar... Acho que consegui, :)

function getOnlyValidFormatNumber(sValueParam = String()) {
            
    let sValueFormated = sValueParam;
    let aCharsToDelete = new Array();
    let sNewValue = "";
    let lIsNegativeValue = false;
    
    lIsNegativeValue = (sValueParam.charAt(0) === "-") ? true : false;
    aCharsToDelete = sValueFormated.match(/[a-zA-Z,,--]/g) ;

    for (let iPos = 0; iPos < aCharsToDelete.length; iPos++) {
        for (cChar of sValueFormated) {
            if (cChar === aCharsToDelete[iPos]) {
                continue;
            }
            sNewValue += cChar;
        }
        sValueFormated = sNewValue;
        sNewValue = "";
    }

    sValueFormated = `${lIsNegativeValue ? "-" : ""}${sValueFormated}`;

    return sValueFormated;
};

function CalculateDegreeTemperature(sValueParam = String("")) {

    let sReturnValue = new String(sValueParam);
    let fCelsius = (nValue = Number) => {return (nValue - 32) * 5/9};
    let fFahrenheit = (nValue = Number) => {return nValue * 9 / 5 + 32;}
    let lIsCelsius = false;
    let fCalculateExpression;


    switch (sReturnValue.charAt(sReturnValue.length - 1)) {
        case 'C' :
            lIsCelsius = true;
            break;
        case 'F' :
            lIsCelsius = false;
            break;
        default :
            throw Error("Não é um valor Válido!");
    }

    sReturnValue = getOnlyValidFormatNumber(sReturnValue);

    if (lIsCelsius) {
        fCalculateExpression = () => {return fFahrenheit(Number(sReturnValue));}
    }
    else {
        fCalculateExpression = () => {return fCelsius(Number(sReturnValue));}
    }

    sReturnValue = String(fCalculateExpression());
    sReturnValue = (!sReturnValue.includes(".") || (sReturnValue.includes(".00"))) ? Number(sReturnValue).toFixed(0) : Number(sReturnValue).toFixed(2);
    sReturnValue += lIsCelsius ? "F" : "C";

    return sReturnValue;
};

function Init(sConvertValue = String("0"))
{
    let sMessage = "";

    try
    {
        sMessage = `Convert ${sConvertValue} to ${CalculateDegreeTemperature(sConvertValue)}`;
        console.log(sMessage);
    }
    catch (e)
    {
        console.error(e);
    }
};

Init("0C");
Init("-15.5C");
Init("43F");
Init("29C");
Init("40C");
Init("-5C");
Init("-20F");