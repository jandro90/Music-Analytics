google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        [datos_artistas[2].Bela,     datos[2].Bela],
        [datos_artistas[2].Richard,     datos[2].Richard],
        [datos_artistas[2].Giussepe,     datos[2].Giussepe],
        [datos_artistas[2].Johannes,     datos[2].Johannes],
        [datos_artistas[2].Igor,     datos[2].Igor]

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
