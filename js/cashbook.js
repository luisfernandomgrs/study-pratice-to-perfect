/*
    ### Sistema de gastos familiares

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas
    e despesas e irá monstrar uma mensagem se a família está com
    saldo positivo ou negativo, seguido do valor do saldo.

*/

const cashBook = {
    
    totalAmount: 0,
    Receipts: [],
    Payments: [],
    moneySeparator: ".",

    NewAmount(nAmount = 0) {

        if (nAmount > 0) {
            this.Receipts.push(nAmount);
        }
        else if (nAmount < 0) {
            this.Payments.push(nAmount);
        }
    },
    getTotalReceipts() {
        let nValueTotalReceipts = 0;

        for (let iPos = 0; iPos < this.Receipts.length; iPos++){
            nValueTotalReceipts += this.Receipts[iPos];
        }

        return nValueTotalReceipts.toFixed(2);
    },
    getTotalPayments() {
        let nValueTotalPayments = 0;

        for (let iPos = 0; iPos < this.Payments.length; iPos++){
            nValueTotalPayments += this.Payments[iPos];
        }

        // Corrige o tratamento do valor...
        nValueTotalPayments *= -1;

        return nValueTotalPayments.toFixed(2);;
    },
    getTotal() {
        let nValueTotal = 0;

        nValueTotal += this.getTotalReceipts();
        nValueTotal -= this.getTotalPayments();

        return nValueTotal;
    },
    FormatNumberToMoneyString(nValueParam = 0, sPrefix = "R$") {
        let sMoneyStringValue = "";
        let sCurrentDigit = "";
        let iCountDigit = 3;
        let sValueParam = "";



        //Garante que o valor contenha apenas 02 casas decimais...
        sValueParam = String(nValueParam.toFixed(2));

        // Remove o ponto-decimal e troca por vírgula...
        sValueParam = sValueParam.replace(".",",");
        //for (cDigit of sValueParam)
        for (iPos = sValueParam.length - 1; iPos >= 0; iPos--) {

            if (sValueParam[iPos] == ",") {
                iCountDigit = 3;
                
            }

            if ((iCountDigit == 0) && (iPos > 0)) {
                sCurrentDigit = this.moneySeparator
            }
            
            sCurrentDigit += sValueParam[iPos];
            sMoneyStringValue = sCurrentDigit + sMoneyStringValue;

            if (iCountDigit == 0) {iCountDigit = 2;} else {iCountDigit--;}
            sCurrentDigit = "";
            
        }

        sMoneyStringValue = sPrefix + " " + sMoneyStringValue;

        return sMoneyStringValue;
    },
    getSayMeFinalBalance() {
        let sMessage = "";
        let nValueFinalBalance = this.getTotal();

        if (nValueFinalBalance > 0) {
            sMessage = "O saldo do seu Livro Caixa é positivo, com valor acumulado de " + this.FormatNumberToMoneyString(nValueFinalBalance);
        }
        else if (nValueFinalBalance < 0) {
            sMessage = "O saldo do seu Livro Caixa infelizmente é negativo, com valor acumulado de " + this.FormatNumberToMoneyString(nValueFinalBalance);
        }

        return sMessage;
    }

}

let myCashBook = cashBook;

myCashBook.NewAmount(120);
myCashBook.NewAmount(110);
myCashBook.NewAmount(150);
myCashBook.NewAmount(235);
myCashBook.NewAmount(235);
myCashBook.NewAmount(515);
myCashBook.NewAmount(-148);
myCashBook.NewAmount(-340);
myCashBook.NewAmount(-1200);
myCashBook.NewAmount(790);
myCashBook.NewAmount(482.5);
myCashBook.NewAmount(340.92);
myCashBook.NewAmount(99989.92);
myCashBook.NewAmount(999999989.92);
myCashBook.NewAmount(-9900099.89);


console.log(myCashBook.getSayMeFinalBalance());