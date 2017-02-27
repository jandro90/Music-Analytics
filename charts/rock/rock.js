google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        [datos_artistas[0].BonJovi,     datos[0].BonJovi],
        [datos_artistas[0].JoeStrummer,     datos[0].JoeStrummer],
        [datos_artistas[0].DebbieHarry,     datos[0].DebbieHarry],
        [datos_artistas[0].Bono,     datos[0].Bono],
        [datos_artistas[0].BobDylan,     datos[0].BobDylan],
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

