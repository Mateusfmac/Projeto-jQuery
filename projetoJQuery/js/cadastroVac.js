$(document).ready(function () {
  validarNome()
  validarCPF()
  validarIdade()
  validarSUS()
  imc()
  gestante()
  contemplado()
  validaInput()
})

//funcao para validar nome
function validarNome(nome) {
  $("#name").focusout(function () {
    nome = $(this).val()
    if (nome == "" || !isNaN(nome)) {
      $("#name").css({
        backgroundColor: "#FAA4A2"
      })
    }
    $("#name").css({
      backgroundColor: "white"
    })
  })
}
//funcao para validar CPF
function validarCPF(x) {
  $("#cpf").focusout(function () {
    numerosCPF = $(this).val().replace(".", "").replace(".", "").replace("-", "")
    var noveDig = numerosCPF.substr(0, 9)
    var dezDig = numerosCPF.substr(0, 10)
    var somaNove = 0
    var somaDez = 0
    var multiplicador = 10
    for (i = 0; i < 9; i++) {
      var numero = noveDig.substr(i, 1)
      somaNove += numero * multiplicador
      multiplicador--
    }
    resultadoMod1 = (somaNove * 10) % 11

    multiplicador = 11
    for (i = 0; i < 10; i++) {
      var numero = dezDig.substr(i, 1)
      somaDez += numero * multiplicador
      multiplicador--
    }
    resultadoMod2 = (somaDez * 10) % 11
    if (resultadoMod1.toString() + resultadoMod2.toString() === numerosCPF.substr(9, 2)) {
      $("#cpf").css({
        backgroundColor: "white"
      })
    }
    $("#cpf").css({
      backgroundColor: "#FAA4A2"
    })
  })
}

//validarIdade
function validarIdade(idade) {
  $("#nascimento").focusout(function () {
    data = $(this).val()
    data_array = data.split()
    if (data_array.lenght != 4)
      data = data_array[2] + "-" + data_array[1] + "-" + data_array[0]

    var hoje = new Date();
    var nasc = new Date(data);
    var idade = hoje.getFullYear() - nasc.getFullYear();
    var m = hoje.getMonth() - nasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

    if (idade < 0 || idade > 130) {
      $("#nascimento").css({
        backgroundColor: "#FAA4A2"
      })
    }
    $("#nascimento").css({
      backgroundColor: "white"
    })
  })
}

//validar SUS
function validarSUS() {
  $("#sus").focusout(function () {
    sus = $(this).val()
    if (sus < 0 || sus == "") {
      $("#sus").css({
        backgroundColor: "#FAA4A2"
      })
    }
    $("#sus").css({
      backgroundColor: "white"
    })
  })
}

//validar peso, altura / obter imc, caso maior que 40 add obesidade na comorbidade
function imc() {
  $("#peso").focusout(function () {
    peso = $(this).val()
    if (peso == "" || peso < 0 || peso > 500) {
      $("#peso").css({
        backgroundColor: "#FAA4A2"
      })
    } else {
      $("#peso").css({
        backgroundColor: "white"
      })
    }
  })

  $("#altura").focusout(function () {
    altura = $(this).val()
    if (altura == "" || altura < 0 || altura > 3) {
      $("#altura").css({
        backgroundColor: "#FAA4A2"
      })
    } else {
      $("#altura").css({
        backgroundColor: "white"
      })
    }
  })
  $("#comorbidade").click(function () {
    imcval = peso / (Math.pow(altura, 2))
    if (imcval > 40) {
      alert("Seu IMC é maior que 40, você faz parte do grupo de Comorbidade")
      $("#comorbidade").val("obesidade")
    } else {
      $("#comorbidade").val()
    }
  })
}

function valida(element) {
  if (element.value == "") {
    element.style.backgroundColor = "#FAA4A2"
    return false
  }
  element.style.backgroundColor = "white"
  return true
}

function validarComorbidade(element) {
  if (valida(element)) {}
}

function validarProfissao(element) {
  if (valida(element)) {}
}

function validarSexo(element) {
  if (valida(element)) {}
}

function validarEtnia(element) {
  if (valida(element)) {}
}

function gestante() {
  $("#gestante").hide(function () {
    $("#sexo").click(function () {
      fem = $("#sexo").val()
      if (fem == "feminino") {
        $("#gestante").show()
      } else {
        $("#gestante").hide()
      }
    })
  })
}

function validaGestante(element) {
  if (valida(element)) {}
}

function contemplado() {
  $("#contemplado, #naocontemplado").hide(function () {
    $(".next2").click(function () {
      if ($("#comorbidade").val() != "null" || $("#profissao").val() != "outros" || $("#gestante").val() == "sim" || $("#etnia").val() == "indigena") {
        $("#contemplado").show()
      } else {
        $("#naocontemplado").show()
      }
    })
  })
}

function validaInput() {
  $("form").blur(function () {
    if ($(this).val() == "") {
      $(this).css({
        backgroundColor: "#FAA4A2"
      })
    }
  });
  $(".next1").click(function () {
    var cont = 0;
    $("#field1 input").each(function () {
      if ($(this).val() == "") {
        $(this).css({
          backgroundColor: "#FAA4A2"
        })
        cont++;
      }
    });
    if (cont == 0) {
      $(".next1").click(function () {
        $("#field1").hide()
        $("#field2").show()
        $("#progress").css({
          width: "50%"
        })
        $("#progress").text("50%")
      })
      $(".next2").click(function () {
        $("#field2").hide()
        $("#field3").show()
        $("#progress").css({
          width: "100%"
        })
        $("#progress").text("100%")
      })
      $(".prev3").click(function () {
        $("#field2").show()
        $("#field3").hide()
        $("#progress").css({
          width: "50%"
        })
        $("#progress").text("50%")
      })
      $(".prev2").click(function () {
        $("#field2").hide()
        $("#field1").show()
        $("#progress").css({
          width: "1%"
        })
        $("#progress").text("0%")
      })
    }
  });
}