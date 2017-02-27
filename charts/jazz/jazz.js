google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        [datos_artistas[3].Louis,     datos[3].Louis],
        [datos_artistas[3].John,     datos[3].John],
        [datos_artistas[3].Billie,     datos[3].Billie],
        [datos_artistas[3].Miles,     datos[3].Miles]

    ]);

    var options = {
        title: 'Avg song duration in seconds'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);

    $(window).resize(function(){
        drawChart();
    });
}