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

                        if(cidade == block) {
                            var conteudo = '\n\
                            <div style="position: fixed; top: 0; bottom: 0; left: 0; right: 0; background-color: rgb(255, 255, 255); text-align: center;">\n\
                                <div class="alert alert-danger mt-5" role="alert">\n\
                                    <strong>Atenção!</strong> Site Bloqueado para sua cidade! Atualize a página...\n\
                                </div>\n\
                            </div>\n\
                            ';
                        } else {
                            var conteudo = '\n\
                            <div style="position: absolute; top: 0; right: 0; background-color: rgb(255, 255, 255); text-align: center;">\n\
                            <strong>Site Liberado!</strong>\n\
                            </div>';
                        }
                        return conteudo;    
                    }

                    var conteudo = selectCidade(conteudo);
                    var qualcidade = 'Você está na cidade de <i>' + cidade + '</i>';
                    var root = document.getElementById("root").innerHTML;
                    root = root + conteudo;

                    document.getElementById("root").innerHTML = root;

                    document.getElementById("local").innerHTML = qualcidade;
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
                
                alert(erroDescricao)
            }
        );
    };
}

$(document).ready(function () {
    getPosition();
});