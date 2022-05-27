// Classe conta bancária

class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    // Getter conta bancária

    get saldo() {
        return this._saldo;
    }

    // Setter conta bancária

    set saldo(valor) {
        this._saldo = valor
    }

    // Método sacar

    sacar(valor) {
        if (valor > this._saldo) {
            return "Saldo insuficiente para saque"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    // Método depositar

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }

}

// Classe ContaCorrente

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    // Getter cartão de crédito

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    // Setter cartão de crédito

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

// Classe ContaPoupanca

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

// Classe ContaUniversitaria

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária';
    }

    // Método sacar

    sacar(valor) {
        if (valor > this._saldo) {
            return "Saldo insuficiente para saque"
        }

        if (valor > 500) {
            return "Valor acima do permitido, operação negada"
        }

        this._saldo = this._saldo - valor;

        return this._saldo;
    }
}