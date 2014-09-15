(function() {
//    var graph = elroi($('#container'), [4,6,8,4,3,9]);
    var firebase = new Firebase("https://blazing-heat-948.firebaseio.com/test");
    var data = {};
    firebase.on('value', function(snapshot) {
        data = convertToElroiSeries(snapshot.val());
        $('#graph-container').children().remove();
        elroi($('#graph-container'), data);
    });

    function convertToElroiSeries(data) {
        series = [];
        for (timestamp in data) {
            date = new Date(Number.parseInt(timestamp)).toISOString();
            value = data[timestamp];
            series.push({"date": date, "value": value});
        }
        return series;
    }
})();

