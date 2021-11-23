/**
 * This function maps over the array with objects an retrun a format string
 * @param {array} transactions Array with objects
 * @returns {string} total income in currency format
 */
function totalincome(transactions) {
    const Amounts = transactions.map((transaction) => transaction.incomeAmount);
    const Icome = Amounts.reduce(
        (accumulator, item) => (accumulator += item),
        0
    ).toFixed(2);

    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(Icome);
}

/**
 * This function maps over the array with Objects an retrun a format string
 * @param {array} transactions Array with Objects
 * @returns {string} format transaction to number as string in currency format
 */
function totalexpense(transactions) {
    const Amounts = transactions.map(
        (transaction) => transaction.expenseAmount
    );
    const Icome = Amounts.reduce(
        (accumulator, item) => (accumulator += item),
        0
    ).toFixed(2);

    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(Icome);
}

/**
 * Thsi function get a number and format to a string
 * @param {number} transaction Array with Objects
 * @returns {string} format transaction to number as string in currency format
 */
function amountToCurrency(transaction) {
    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(transaction);
}

/**
 * This function get two numbers as string and format to currency format.
 * And return the sum of (totalIncome - totalExpense)
 * @param {String} totalIncome
 * @param {String} totalExpense
 * @returns a String of sum (totalIncome - totalExpense)
 */
function formatBalancetoCurrency(totalIncome, totalExpense) {
    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(totalIncome - totalExpense);
}

/**
 * This function map over transactions and extract the "incomeAmount"
 * and retrun number as string with 2 digit
 * @param {Array} transactions Array with objects
 * @returns {string} a number as string with 2 digit
 */
function totalAmountIncome(transactions) {
    const Amounts = transactions.map((transaction) => transaction.incomeAmount);
    return Amounts.reduce(
        (accumulator, item) => (accumulator += item),
        0
    ).toFixed(2);
}

/**
 * This function map over transactions and extract the "expenseAmount"
 * and retrun number as string with 2 digit
 * @param {Array} transactions Array with objects
 * @returns {string} a number as string with 2 digit
 */
function totalAmountExpense(transactions) {
    const Amounts = transactions.map(
        (transaction) => transaction.expenseAmount
    );
    return Amounts.reduce(
        (accumulator, item) => (accumulator += item),
        0
    ).toFixed(2);
}

/**
 * This function check the balance and return a string .
 * @param {String} balance number as string
 * @returns String = className
 */
function balanceClassName(balance) {
    console.log(balance);
    if (parseInt(balance) === 0) {
        return "balance";
    }
    if (parseInt(balance) > 0) {
        return "balance posetiv";
    }
    if (parseInt(balance) < 0) {
        return "balance negativ";
    }
}

/**
 * This function check the balance and return a string.
 * @param {String} balance number as string
 * @returns String = className
 */
function balanceFromBg(balance) {
    if (parseInt(balance) === 0) {
        return "table-light";
    }
    if (parseInt(balance) > 0) {
        return "table-success";
    }
    if (parseInt(balance) < 0) {
        return "table-danger";
    }
}

module.exports = {
    totalincome,
    totalexpense,
    amountToCurrency,
    totalAmountIncome,
    totalAmountExpense,
    formatBalancetoCurrency,
    balanceClassName,
    balanceFromBg,
};
