$("#leitosUTI").keypress(function(event) { // Impede que a tecla Enter recarregue a página
    if (event.keyCode == 13) {
        event.preventDefault();
        $("#submit").click(); // Enter agora executa calc() ao digitar números
    }
});


$(function calc() {
    $('#submit').click(function() {
        const leitosUTIdia = $('#leitosUTI').val()
        const totalLeitosUTI = 15000
        const taxaDeOcupacao = (leitosUTIdia / totalLeitosUTI) * 100
        $('#resultado').empty('#resultado')
        $('#resultado').append(taxaDeOcupacao.toFixed(1) + '%')

        function rolar() {
            $('html, body').animate({
                scrollTop: $("#calcularNovamente").offset().top
            }, 500);
        }
        if (taxaDeOcupacao.toFixed(1) > 80) {

            $('.coluna-4').removeClass('coluna-4-opacidade')
            $('.coluna-5').removeClass('coluna-5-opacidade')
            $('.coluna-6').removeClass('coluna-6-opacidade')

            $('.coluna-3').addClass('coluna-3-opacidade')
            rolar()
        } else if (taxaDeOcupacao.toFixed(1) > 70 && taxaDeOcupacao.toFixed(1) <= 80) {
            $('.coluna-3').removeClass('coluna-3-opacidade')
            $('.coluna-5').removeClass('coluna-5-opacidade')
            $('.coluna-6').removeClass('coluna-6-opacidade')

            $('.coluna-4').addClass('coluna-4-opacidade')
            rolar()
        } else if (taxaDeOcupacao.toFixed(1) >= 60 && taxaDeOcupacao.toFixed(1) <= 70) {
            $('.coluna-3').removeClass('coluna-3-opacidade')
            $('.coluna-4').removeClass('coluna-4-opacidade')
            $('.coluna-6').removeClass('coluna-6-opacidade')

            $('.coluna-5').addClass('coluna-5-opacidade')
            rolar()
        } else if (taxaDeOcupacao.toFixed(1) < 60) {
            $('.coluna-3').removeClass('coluna-3-opacidade')
            $('.coluna-4').removeClass('coluna-4-opacidade')
            $('.coluna-5').removeClass('coluna-5-opacidade')

            $('.coluna-6').addClass('coluna-6-opacidade')
            rolar()
        }
    })
})