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

// HINT:  
//these operators could probably be useful in this assignment:  
//&& operator  
//|| operator  

//to handle one of the potential errors you can use this built in method isNaN(), this is how you use it:  
//const variableName = 10;  
//isNaN(variableName);  



        // Skap kontot (objektet)
const account = {
    accountName: "Emily Unsworth",
    balance: 7000,
    
        // Visa kontoinnehavarens namn
    getAccountName: function () {
        alert("Kontoinnehavarens namn är: " + this.accountName);
    },

        // Visa saldot
    getBalance: function () {
        alert("Beloppet på ditt kontot är: " + this.balance + "kr");
    },

        // Göra en insättning
    deposit: function (amount) { 
        if (isNaN(amound))|| (amount <= 0) {
            this.accountError("insättning");
            return;
        }
            this.balance += amount;
            alert("Du har gjort en insättning på: " + amount + "kr. Beloppet på kontot är nu: " + this.balance + "kr");
        },


        // Göra ett uttag
    withdrawal: function (amount) {
        if (isNaN(amound))|| (amount <= 0){
            this.accountError("Ogiltigt förfrågan: Testa igen!");
            return;
        }

        if (amount > this.balance) {
            this.accountError("Ogiltigt förfrågan: Otillräckligt saldo för uttag, testa igen med ett lägre belopp.");
            return;
        } 
        else {
            this.balance -= amount;
            alert("Du har gjort ett uttag på: " + amount + "kr. Beloppet på kontot är nu: " + this.balance + "kr");
    }},

        // Hantera kontofel
    accountError: function (message) {
        alert("Felmeddelande: " + message);
    },

        // Avsluta kontot
    exitAccount: function () {
        alert("Nu har du loggat ut. Tack för att du är kund hos oss!");
    },
    }

              

//ATM
    function atm() {

        let isRunning = true;
        
        while (isRunning) {

            const val= promt(
                "Välj ett alternativ:/n" +
                "1.) Se saldo/n" +
                "2.) Göra en insättning/n" +
                "3.) Göra ett uttag/n" +
                "4.) Få kontoinnehavarens namn/n" +
                "5.) Logga ut"
            );
        

    switch (val) {
        case 1:
            account.getBalance();
           break;

        case 2:
            const depositAmount = parseFloat(prompt("Ange det belopp du vill sätta in:"));
            account.deposit(depositAmount);
            break;

        case 3:
            const withdrawalAmount = parseFloat(prompt("Ange det belopp du vill ta ut:"));
            account.withdrawal(withdrawalAmount);
            break;

        case 4:
            account.getAccountName();
            isRunning = false; //avslutar loopen
            break;

        case 5:
            account.exitAccount();
            break;
            
        default:
            accountError()
            alert("Nu vart något fel! Försök igen!");
            break;
        }
    }}






