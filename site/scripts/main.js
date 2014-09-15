(function() {
//    var graph = elroi($('#container'), [4,6,8,4,3,9]);
    var firebase = new Firebase("https://blazing-heat-948.firebaseio.com/test");
    var data = {};
    firebase.on('value', function(snapshot) {
        data = snapshot.val();
        $('#graph-container').text(JSON.stringify(data));
    });
})();

