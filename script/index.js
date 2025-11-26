//Instructions
//BANK ACCOUNT
//REQUIREMENTS
//Create an object called account that has the following properties:
//accountName, should be the data type string
//This property should contain the name of the account holder
//- balance, should be the data type number
//this property should contain the total amount of the account

//- getBalance, should be a function
//this function should display the total amount of the account to the user

//- deposit, also a function
//this function should be able to deposit money onto the balance of the account

//- withdrawal, also a function
//this function should be able do withdraw money from the balance of the account

//- getAccountName, function as well
//this function should display the account holders name to the user

//- accountError, same as above function!
//this one is a bit tricky... it's up to you to figure out how or what you should use this for.
//HINT: it's more a thinking poblem than a technical problem :)

//EXTRA: exitAccount, should be a function
//this function should exit the account
//HINT: there are a few different ways to do this, it's up to you which way you choose.


// Skap kontot (objektet)
    const account = {
    accountName: "Emily Unsworth",
    balance: 7000,
    };

// Visa kontoinnehavarens namn
    account.getAccountName = function () {
        alert(`Kontoinnehavarens namn är: ${this.accountName}`);
    };

// Visa saldot

    account.getBalance = function () {
        alert(`Beloppet på ditt kontot är: ${this.balance} kr`);
    };

// Göra en insättning
    account.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            alert(`Du har gjort en insättning på: ${amount} kr. Beloppet på kontot är nu: ${this.balance} kr`);
        }};


// Göra ett uttag
    account.withdrawal = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            alert(`Du har gjort ett uttag på: ${amount} kr. Beloppet på kontot är nu: ${this.balance} kr`);
        } 
        else {
            this.accountError("uttag");
    }};

// Hantera fel, så som ogiltigt belopp
    account.accountError = function (action) {
        alert(`Error: Ogiltigt belopp ${action}. Testa igen med ett nytt belopp.`);
    };

// Avsluta kontot
    account.exitAccount = function () {
        alert("Nu har du loggat ut. Tack för att du är kund hos oss!");
    };


// Användning av kontot      
    account.getAccountName();
    account.getBalance();
    account.deposit(2000);
    account.withdrawal(5000);
    account.accountError("test");
    account.getBalance();
    account.exitAccount();
              