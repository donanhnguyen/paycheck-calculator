const calculatePayCheck = (payAmount) => {

    var percentage = 0;
    var fica = 0.0765;

    if (payAmount <= 9525) {
        percentage = 10;
    } else if (payAmount <= 38700) {
        percentage = 12;
    } else if (payAmount <= 82500) {
        percentage = 22;
    } else if (payAmount <= 157500) {
        percentage = 24;
    } else if (payAmount <= 200000) {
        percentage = 32;
    } else if (payAmount <= 500000) {
        percentage = 35;
    } else if (payAmount < 500001) {
        percentage = 37;
    }

    percentage = percentage / 100;

    var difference = payAmount * percentage;
    var takeHome = (payAmount - difference) - (payAmount * fica);
    return takeHome;

};

export default calculatePayCheck;