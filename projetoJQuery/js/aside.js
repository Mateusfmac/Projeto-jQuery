var arrayTextos = ['p', 'a', 'h1', 'h2', 'h3', 'h4', 'input', 'placeholder', 'li', 'figcaption', 'span', 'ul'];
var fonteAumentada = 0;
var fonteDiminuida = 0;
var tamFonte = 0;    
        
function onLoad () {
    $('#btn-AumentaLetra').click(function() {
        for (tag of arrayTextos) {
            tamFonte = parseFloat($(tag).css('fontSize'));
            if (tamFonte < 19 && tamFonte >= 16) {
                    fonteAumentada = tamFonte * 1.10;
                    $(tag).css({fontSize: fonteAumentada});
                } else if (tamFonte >= 19) {
                    fonteAumentada = tamFonte * 1.03;             
                    $(tag).css({fontSize: fonteAumentada}); 
                } else if (tamFonte < 16) {
                    fonteAumentada = tamFonte * 1.15;
                    $(tag).css({fontSize: fonteAumentada});
                }                            
        }
    });
    
    $('#btn-DiminuiLetra').click(function() {
        for (tag of arrayTextos) {
            tamFonte = parseFloat($(tag).css('fontSize'));
                if (tamFonte < 20 && tamFonte >= 16) {
                    fonteDiminuida = tamFonte * 0.90;
                    $(tag).css({fontSize: fonteDiminuida});
                } else if (tamFonte > 20) {
                    fonteDiminuida = tamFonte * 0.95;             
                    $(tag).css({fontSize: fonteDiminuida}); 
                } else if (tamFonte < 16) {
                    fonteDiminuida = tamFonte * 1;
                    $(tag).css({fontSize: fonteDiminuida});
                }                            
        }
    });
}

