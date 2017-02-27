$(document).ready(function () {

    var target = $('#generos-musicales');

    var template =
        '<div class="card container">'+
        '<div class="card-block">'+
        '<p class="card-text text-center">:genero:</p>'+
        '</div>'+
        '<img class="imagen-card" src=":imagen:" alt=":altgenero:">'+
        '<button id=":idx:" class="btn btn-primary">Ver Estadisticas</button>'+
        '<p></p>'+
        '</div>'+
        '</div>';

        for (var i = 0; i<datos.length; i++){
            var valor = i;
            var idx = valor.toString();

            var templateFinal = template.replace(":genero:",datos[i].genero)
                .replace(":imagen:",datos[i].imagen)
                .replace(":altgenerogenero:",datos[i].genero)
                .replace(":idx:",idx);

            target.append(templateFinal);
        }

        $("#0").click(function () {
            $(location).attr('href','rock.html');
        });

        $("#1").click(function () {
        $(location).attr('href','pop.html');
        });

        $("#2").click(function () {
        $(location).attr('href','classica.html');
        });

        $("#3").click(function () {
            $(location).attr('href','jazz.html');
        });

        $("#4").click(function () {
            $(location).attr('href','soul.html');
        });
});
