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

function amountToCurrency(transaction) {
    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(transaction);
}

function totalAmountIncome(transactions) {
    const Amounts = transactions.map((transaction) => transaction.incomeAmount);
    return Amounts.reduce(
        (accumulator, item) => (accumulator += item),
        0
    ).toFixed(2);
}

function totalAmountExpense(transactions) {
    const Amounts = transactions.map(
        (transaction) => transaction.expenseAmount
    );
    return Amounts.reduce(
        (accumulator, item) => (accumulator += item),
        0
    ).toFixed(2);
}

function formatBalancetoCurrency(totalIncome, totalExpense) {
    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(totalIncome - totalExpense);
}

function balanceClassName(balance) {
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
