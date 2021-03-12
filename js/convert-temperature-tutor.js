/*
    ### Celsius e Fahrenheit e Vice-versa...

    Crie uma função que receba uma string em Celsius ou
    Fahrenheit e faça a transormação de uma unidade para
    outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/

// Código do Instrutor

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes("C");
    const fahrenheitsExists = degree.toUpperCase().includes("F");

    // Fluxo de erro
    if (!celsiusExists && !fahrenheitsExists) {
        throw new Error("Grau não identificado");
    }

    // fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F",""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9;
    let degreeSign = "C";

    // fluxo laternativo, C -> F
    if (celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C",""));
        formula = celsius => celsius  * 9/5 + 32;
        degreeSign = "F";
    }

    return formula(updatedDegree) + degreeSign;
}

try {
    let sMessage;
    
    sMessage = transformDegree("50F");          console.log(sMessage);
    sMessage = transformDegree("-15.5C");       console.log(sMessage);
    sMessage = transformDegree("43F");          console.log(sMessage);
    sMessage = transformDegree("-4$R9C");       console.log(sMessage);
    sMessage = transformDegree("-5C");          console.log(sMessage);
    sMessage = transformDegree("-20F");         console.log(sMessage);
}
catch (error) {
    console.log(error.message);
}

