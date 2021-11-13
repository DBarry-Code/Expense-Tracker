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

module.exports = { totalincome, totalexpense, amountToCurrency };
