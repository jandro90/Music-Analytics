google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        [datos_artistas[4].Albert,     datos[4].Albert],
        [datos_artistas[4].Ray,     datos[4].Ray],
        [datos_artistas[4].Aretha,     datos[4].Aretha],
        [datos_artistas[4].Sam,     datos[4].Sam],
        [datos_artistas[4].Marvin,     datos[4].Marvin],
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