google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        [datos_artistas[1].Michael,     datos[1].Michael],
        [datos_artistas[1].Madonna,     datos[1].Madonna],
        [datos_artistas[1].Beatles,     datos[1].Beatles],
        [datos_artistas[1].Lady,     datos[1].Lady],
        [datos_artistas[1].Britney,     datos[1].Britney]

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
