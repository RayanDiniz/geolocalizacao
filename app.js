function getPosition() {
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            // sucesso! 
            function (posicao) {
                var lat = posicao.coords.latitude;
                var long = posicao.coords.longitude;
                var link = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + long;

                $.get(link, function (resultado) {
                    var cidade = resultado.address.city;

                    function selectCidade() {
                        var select = document.getElementById("cidade");
                        var option = select.options[select.selectedIndex];
                        var block = option.text;

                        if (block == 'Curitiba') {
                            var conteudo = '\n\
                            <div class="alert alert-danger" role="alert">\n\
                                <strong>Atenção!</strong> Este site não está disponível para a cidade de ' + block + '. \n\
                            </div>';
                        } else {
                            var conteudo = '\n\
                            <div class="alert alert-success" role="alert">\n\
                                <strong>Atenção!</strong> Este site esta disponível para a cidade de ' + block + ' \n\
                            </div>';
                        };
                        return conteudo;
                    }
                    var conteudo = selectCidade(conteudo);
                    var qualcidade = 'Você está na cidade de <i>' + cidade + '</i>';
                    var root = document.getElementById("root").innerHTML;
                    root = root + conteudo;

                    document.getElementById("root").innerHTML = root;

                    document.getElementById("title").innerHTML = qualcidade;
                });
            },

            // erro
            function (erro) {
                var erroDescricao = 'Ops, ';
                switch (erro.code) {
                    case erro.PERMISSION_DENIED:
                        erroDescricao += 'usuário não autorizou a Geolocation.';
                        break;
                    case erro.POSITION_UNAVAILABLE:
                        erroDescricao += 'localização indisponível.';
                        break;
                    case erro.TIMEOUT:
                        erroDescricao += 'tempo expirado.';
                        break;
                    case erro.UNKNOWN_ERROR:
                        erroDescricao += 'não sei o que foi, mas deu erro!';
                        break;
                }
                console.log(erroDescricao)
            }
        );
    };
}

$(document).ready(function () {
    getPosition();
});