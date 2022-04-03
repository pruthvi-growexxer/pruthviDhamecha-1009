// filters
app.filter('rupeeFilter', function () {
    return function (input) {
        return '₹ ' + input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
});

app.filter('negativeFilter', function () {
    return function (input) {
        return '-' + input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
});

app.filter('customCurrencyFilter', function () {
    return function (input, from, into) {
        console.log(input + ' ' + from + ' ' + into);
        if (from != into) {
            if (from == 'EUR' && into == 'USD') {
                return '₹ ' + (input * 1.11).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else if (from == 'EUR' && into == 'INR') {
                return '₹ ' + (input * 84.50).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else if (from == 'USD' && into == 'EUR') {
                return '₹ ' + (input * 0.76).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else if (from == 'USD' && into == 'INR') {
                return '₹ ' + (input * 75.95).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else if (from == 'INR' && into == 'USD') {
                return '₹ ' + (input * 0.013).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else if (from == 'INR' && into == 'EUR') {
                return '₹ ' + (input * 0.010).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        } else {
            return '₹ ' + input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    };
});

app.filter('customDate', function () {
    return function (input) {
        var date = new Date(input);
        // input = input.toString();
        // console.log(input);
        // var date_array = input.split('/');
        // var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
        // var date = new Date(date_array[2], date_array[1] - 1, date_array[0]);
        // return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    };
});