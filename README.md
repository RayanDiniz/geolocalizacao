# Geolocalização

Aplicação feita em JavaScript com JQuery para identificar e bloquear regiões para acessar um site.

    <img src="https://img.shields.io/github/issues/rayandiniz/geolocalizacao"/>
    <img src="https://img.shields.io/github/forks/rayandiniz/geolocalizacao"/>
    <img src="https://img.shields.io/github/stars/rayandiniz/geolocalizacao"/>
    <img src="https://img.shields.io/github/license/rayandiniz/geolocalizacao"/>

    <p>Esta aplicação funciona bloqueando uma cidade específica de acessar seu site,
        comparando a localização do usuário (<b id="local"></b>) e a cidade bloqueada definida no script,
        usando a API de geolocalização que existe nos navegadores atuais.
        É importante saber os browsers que dão suporte a essa API:</p>
    <ul>
        <li>Internet Explorer 9 ou superior</li>
        <li>Firefox 3.5 ou superior</li>
        <li>Safari 5.0 ou superior</li>
        <li>Chrome 7.0 ou superior</li>
        <li>Opera 10.6 ou superior</li>
        <li>Safari (iOS) 3.2 ou superior</li>
        <li>Andriod (browser padrão do SO) 2.1 ou superior</li>
    </ul>
    <p>Depois que o script captura a latitude e longitude do usuario com a API de geolocalização, ele converte para
        identificar a cidade em que o usuario está situado com outra API chamada "Nominatim". Você pode encontrar
        esta API em <a href=https://nominatim.openstreetmap.org />nominatim.openstreetmap.org </a>. Faça um teste
        selecionando a cidade que deseja bloquear no menu superior.</p>