
/* Modificación de comportamiento de las CARGAS EN NDEX */

$(document).ready(function () {
  $("#recargarIndex2").click(function () {
    $('#contenedorprincipal').load("index2.html");
  });
});

$(document).ready(function () {
  $("#recargarIndex").click(function () {
    $('#contenedorprincipal').load("index.html");
  });
});

$(document).ready(function () {
  $("#recargarServicios").click(function () {
    $('#contenedorprincipal').load("porfolio2.html");
  });
});

$(document).ready(function () {
  $("#recargarServicios2").click(function () {
    $('#contenedorprincipal').load("porfolio2.html");
  });
});


$(document).ready(function () {
  $("#recargarPresupuestos").click(function () {
    $('#contenedorprincipal').load("presupuestos.html");
  });
});

$(document).ready(function () {
  $("#recargarPresupuestos2").click(function () {
    $('#contenedorprincipal').load("presupuestos.html");
  });
});

$(document).ready(function () {
  $("#recargarPresupuestos3").click(function () {
    $('#contenedorprincipal').load("presupuestos.html");
  });
});

$(document).ready(function () {
  $("#recargarPresupuestos4").click(function () {
    $('#contenedorprincipal').load("presupuestos.html");
  });
});

$(document).ready(function () {
  $("#recargarPresupuestos5").click(function () {
    $('#contenedorprincipal').load("presupuestos.html");
  });
});

$(document).ready(function () {
  $("#recargarPresupuestos6").click(function () {
    $('#contenedorprincipal').load("presupuestos.html");
  });
});

$(document).ready(function () {
  $("#recargarContacto").click(function () {
    $('#contenedorprincipal').load("contacto.html");
  });
});

$(document).ready(function () {
  $("#recargarContacto2").click(function () {
    $('#contenedorprincipal').load("contacto.html");
  });
});

$(document).ready(function () {
  $("#recargarContacto5").click(function () {
    $('#contenedorprincipal').load("contacto.html");
  });
});

$(document).ready(function () {
  $("#recargarContacto6").click(function () {
    $('#contenedorprincipal').load("contacto.html");
  });
});

$(document).ready(function () {
  $("#recargarUbicacion").click(function () {
    $('#contenedorprincipal').load("ubicacion4.html");
  });
});

$(document).ready(function () {
  $("#recargarUbicacion2").click(function () {
    $('#contenedorprincipal').load("ubicacion4.html");
  });
});

$(document).ready(function () {
  $("#recargarEstilos").click(function () {
    $('#contenedorprincipal').load("estilos.html");
  });
});

$(document).ready(function () {
  $("#recargarEstilos2").click(function () {
    $('#contenedorprincipal').load("estilos2.html");
  });
});

$(document).ready(function () {
  $("#recargarEstilos3").click(function () {
    $('#contenedorprincipal').load("estilos3.html");
  });
});

$(document).ready(function () {
  $("#recargarEstilos4").click(function () {
    $('#contenedorprincipal').load("estilos4.html");
  });
});

$(document).ready(function () {
  $("#recargarCovid").click(function () {
    $('#contenedorprincipal').load("covid.html");
  });
});


/* Modificación de comportamiento de los valores del PRESUPUESTO */

$(document).ready(function () {
  $("#validarTema").change(function () {
    setPresupuestoEstimado();
  });
});

$(document).ready(function () {
  $("#validarTema").change(function () {
    setPresupuestoEstimado();
  });
});

$(document).ready(function () {
  $("#validarPlazoMeses").blur(function () {
    setPresupuestoEstimado();
  });
});

$(document).ready(function () {
  $("#chk-estilo-eclectico").change(function () {
    setPresupuestoEstimado();
  });
});

$(document).ready(function () {
  $("#chk-estilo-industrial").change(function () {
    setPresupuestoEstimado();
  });
});

$(document).ready(function () {
  $("#chk-estilo-neotiki").change(function () {
    setPresupuestoEstimado();
  });
});

$(document).ready(function () {
  $("#chk-estilo-vintage").change(function () {
    setPresupuestoEstimado();
  });
});

function setPresupuestoEstimado() {
  let presupuestoEstimado = 0;

  const precioTema = parseInt($("#validarTema option").filter(":selected").val());
  if (!isNaN(precioTema)) presupuestoEstimado += precioTema;

  const numeroPlazoMeses = parseInt($("#validarPlazoMeses").val());

  const opcionEstiloElectico = $("#chk-estilo-eclectico").is(":checked");
  const opcionEstiloIndustrial = $("#chk-estilo-industrial").is(":checked");
  const opcionEstiloNeotiki = $("#chk-estilo-neotiki").is(":checked");
  const opcionEstiloVintage = $("#chk-estilo-vintage").is(":checked");

  if (opcionEstiloElectico) presupuestoEstimado += 400;
  if (opcionEstiloIndustrial) presupuestoEstimado += 400;
  if (opcionEstiloNeotiki) presupuestoEstimado += 400;
  if (opcionEstiloVintage) presupuestoEstimado += 400;

  if (!isNaN(numeroPlazoMeses)) {
    const porcentajePlazoMeses = Math.min(20, numeroPlazoMeses * 5);

    presupuestoEstimado = presupuestoEstimado * ((1 - porcentajePlazoMeses / 100))
  }

  $("#txt-presupuesto-estimado").val(presupuestoEstimado.toFixed(2));
}













