/*
    ### Celsius e Fahrenheit

    Crie uma função que receba uma string em Celsius ou
    Fahrenheit e faça a transormação de uma unidade para
    outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/
function ConvertTemperature(sTemperatureParam = "") {

    let lIsCelsius = false;
    let nValueTemperature = 1;
    let sTemperature = "";
    let sValueConverted = "";

    sTemperature = sTemperatureParam;

    if (sTemperature.indexOf("C") > 0) {
        lIsCelsius = true;
        sTemperature = sTemperature.replace("C","");        
    }
    else if (sTemperature.indexOf("F") > 0) {
        sTemperature = sTemperature.replace("F","");
    }
    else {
        sTemperature = "";
    }

    if (sTemperature.trim() != "") {
        nValueTemperature = Number(sTemperature).toFixed(0);

        if (lIsCelsius) {
            nValueTemperature = nValueTemperature * 9 / 5 + 32;
        }
        else {
            nValueTemperature = (nValueTemperature - 32) * 5 / 9;
        }

        sValueConverted = nValueTemperature.toFixed(0).toString();

        switch (lIsCelsius) {
            case true:
                sValueConverted += "F";
                break;
            default:
                sValueConverted += "C";
                break;
        }
    }
    else {
        sTemperature = "Este valor não é válido!";
    }

    sValueConverted = `Temperature to Convert: ${sTemperatureParam} To: ${sValueConverted}`;
    return sValueConverted;
}

console.log(ConvertTemperature("25C"));
console.log(ConvertTemperature("32C"));
console.log(ConvertTemperature("120F"));
console.log(ConvertTemperature("170F"));