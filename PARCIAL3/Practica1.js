function Pag() {
    var pagina = document.createElement("div");
    pagina.id = "fondo";
    var encabezado = document.createElement("div");
    encabezado.id = "encabezado";
    // Encabezado
  
    var contenedor = document.createElement("div");
    contenedor.id = "contenedor";
    var imagenes_encabezado = document.createElement("div");
    imagenes_encabezado.id = "imagenes_encabezado";
    var LetrasLogotipoDIV = document.createElement("div");
    LetrasLogotipoDIV.id = "LetrasLogotipoDIV";
    var LetrasLogotipoIMG = document.createElement("div");
    LetrasLogotipoIMG.id = "LetrasLogotipoIMG";
    var carroLogotipoDIV = document.createElement("div");
    carroLogotipoDIV.id = "carroLogotipoDIV";
    var carroLogotipoIMG = document.createElement("div");
    carroLogotipoIMG.id = "carroLogotipoIMG";
    var cotizar = document.createElement("button");
    cotizar.id = "cotizar";
    var cotizarDIV = document.createElement("div");
    cotizarDIV.id = "cotizarDIV";
  
    var btn_encabezadoDIV = document.createElement("div");
    btn_encabezadoDIV.id = "btn_encabezadoDIV";
    var btn_encabezado = document.createElement("button");
    btn_encabezado.id = "btn_encabezado";
  
    // Fin encabezado
  
    // Estilos del botón Margen
    btn_encabezado.textContent = "Tipos De Seguros";
  
    // Fin estilos del botón Margen
  
    // Estilos del botón
    cotizar.textContent = "Cotizar Seguro →";
    cotizar.style.color = "blue";
    cotizar.style.backgroundColor = "#ffff";
  
    cotizar.onmouseover = function () {
      cotizar.style.backgroundColor = "1437c2";
      cotizar.style.color = "#ffff";
    };
    cotizar.onmouseout = function () {
      cotizar.style.backgroundColor = "#ffff";
      cotizar.style.color = "blue";
    };
  
    // Fin estilos del botón
  
    // Contenido
    var TituloDIV = document.createElement("div");
    TituloDIV.id = "TituloDIV";
    var Titulo = document.createElement("h1");
    Titulo.id = "Titulo";
    Titulo.innerHTML = "Mejores Afores en México";
    var contenido = document.createElement("div");
    contenido.id = "contenido";
    var contenido_principal = document.createElement("div");
  
    var imagen_principalDIV = document.createElement("div");
    imagen_principalDIV.id = "imagen_principalDIV";
  
    var imagen_principal = document.createElement("img");
    imagen_principal.id = "imagen_principal";
  
    // Inputs
    var datos = document.createElement("div");
    datos.id = "datos";
    var encabezado2 = document.createElement("div");
    encabezado2.id = "encabezado2";
    encabezado2.innerHTML = "🔥 AHORRA HASTA 50% EN TU SEGURO 🚘";
  
    var marca = document.createElement("select");
    marca.id = "marca";
    marca.className = "input";
  
    var modelo = document.createElement("select");
    modelo.id = "modelo";
    modelo.className = "input";
    var incModelo = document.createElement("option")
    incModelo.textContent="Submarca"
    
  
    ////
      const marcas = ["Elige Marca", "NISSAN", "CHEVROLET", "HONDA", "FORD", "VOLKSWAGEN", "TOYOTA", "MAZDA", "DODGE", "BMW", "AUDI", "ACURA", "BAIC", "BENTLEY", "BUICK", "BYD", "CADILLAC", "CBO", "CHANGAN", "CHIREY", "CHRYSLER", "CUPRA", "FAW", "FERRARI", "FIAT", "FOTON"];
    
      const modelosPorMarca = {
          NISSAN: ["OPC1", "OPC2", "OPC3"],
          CHEVROLET: ["OPC1", "OPC2", "OPC3"],
          HONDA: ["OPC1", "OPC2", "OPC3"],
          FORD: ["OPC1", "OPC2", "OPC3"],
          VOLKSWAGEN: ["OPC1", "OPC2", "OPC3"],
          TOYOTA: ["OPC1", "OPC2", "OPC3"],
          MAZDA: ["OPC1", "OPC2", "OPC3"],
          DODGE: ["OPC1", "OPC2", "OPC3"],
          BMW: ["OPC1", "OPC2", "OPC3"],
          AUDI: ["OPC1", "OPC2", "OPC3"],
          ACURA: ["OPC1", "OPC2", "OPC3"],
          BAIC: ["OPC1", "OPC2", "OPC3"],
          BENTLEY: ["OPC1", "OPC2", "OPC3"],
          BUICK: ["OPC1", "OPC2", "OPC3"],
          BYD: ["OPC1", "OPC2", "OPC3"],
          CADILLAC: ["OPC1", "OPC2", "OPC3"],
          CBO: ["OPC1", "OPC2", "OPC3"],
          CHANGAN: ["OPC1", "OPC2", "OPC3"],
          CHIREY: ["OPC1", "OPC2", "OPC3"],
          CHRYSLER: ["OPC1", "OPC2", "OPC3"],
          CUPRA: ["OPC1", "OPC2", "OPC3"],
          FAW: ["OPC1", "OPC2", "OPC3"],
          FERRARI: ["OPC1", "OPC2", "OPC3"],
          FIAT: ["OPC1", "OPC2", "OPC3"],
          FOTON: ["OPC1", "OPC2", "OPC3"],
      };
    
      // Obtener referencias de los select
      const marcaSelect = marca;
      const modeloSelect = modelo;
    
      // Agregar opciones de marcas
      marcas.forEach((marca) => {
        const option = document.createElement("option");
        option.textContent = marca;
        marcaSelect.appendChild(option);
      });
    
      // Función para cambiar los modelos según la marca seleccionada
      function cambiarModelos() {
        const marcaSeleccionada = marcaSelect.value;
    
        // Limpiar opciones anteriores
        modeloSelect.innerHTML = ""
    
        if (marcaSeleccionada) {
          const modelos = modelosPorMarca[marcaSeleccionada]
    
          // Agregar las nuevas opciones
          modelos.forEach((modelo) => {
            option = document.createElement("option")
            option.textContent = modelo
            modeloSelect.appendChild(option)
          });
        }
      }
    
      // Asignar el evento onchange al select de la marca
      marcaSelect.addEventListener("change", cambiarModelos);
  ///
    
    var Descripcion = document.createElement("select");
    Descripcion.className = "input";
    var incDescripcion = document.createElement("option")
    incDescripcion.textContent="Descripcion"
    


    var SubMarca = document.createElement("select");
    SubMarca.className = "input";
    SubMarca.id="SubMarca"
    var incSubMarca = document.createElement("option")
    incSubMarca.textContent="Submarca"

    const submarcas = ["Elige Modelo","2000","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"];
    const descripcionesPorSubmarca = {
    2000: ["Descripción 1", "Descripción 2", "Descripción 3"],
    2001: ["Descripción 1", "Descripción 2", "Descripción 3"],
    2002: ["Descripción 1", "Descripción 2", "Descripción 3"],
    2003: ["Descripción 1", "Descripción 2", "Descripción 3"],
    2004: ["Descripción 1", "Descripción 2", "Descripción 3"],
    2005: ["Descripción 1", "Descripción 2", "Descripción 3"],
    2006: ["Descripción 1", "Descripción 2", "Descripción 3"],
    2007: ["Descripción 1", "Descripción 2", "Descripción 3"],
    2008: ["Descripción 1", "Descripción 2", "Descripción 3"],
    2009: ["Descripción 1", "Descripción 2", "Descripción 3"],
    2010: ["Descripción 1", "Descripción 2", "Descripción 3"],
    2011: ["Descripción 1", "Descripción 2", "Descripción 3"],
    2012: ["Descripción 1", "Descripción 2", "Descripción 3"],
    2013: ["Descripción 1", "Descripción 2", "Descripción 3"],
    2014: ["Descripción 1", "Descripción 2", "Descripción 3"],
    2015: ["Descripción 1", "Descripción 2", "Descripción 3"],
    2016: ["Descripción 1", "Descripción 2", "Descripción 3"],
    2017: ["Descripción 1", "Descripción 2", "Descripción 3"],
    2018: ["Descripción 1", "Descripción 2", "Descripción 3"],
    2019: ["Descripción 1", "Descripción 2", "Descripción 3"],
    };

    // Obtener referencias de los select
    const submarcaSelect = SubMarca
    const descripcionSelect = Descripcion
    // Agregar opciones de submarcas
    submarcas.forEach((submarca) => {
    const option = document.createElement("option");
    option.textContent = submarca;
    submarcaSelect.appendChild(option);
    });

    // Función para cambiar las descripciones según la submarca seleccionada
    function cambiarDescripciones() {
    const submarcaSeleccionada = submarcaSelect.value;

    // Limpiar opciones anteriores
    descripcionSelect.innerHTML = "";

    if (submarcaSeleccionada) {
        const descripciones = descripcionesPorSubmarca[submarcaSeleccionada];

        // Agregar las nuevas opciones
        descripciones.forEach((descripcion) => {
        const option = document.createElement("option");
        option.textContent = descripcion;
        descripcionSelect.appendChild(option);
        });
    }
    }

    // Asignar el evento onchange al select de la submarca
    submarcaSelect.addEventListener("change", cambiarDescripciones);


    var m = document.createElement("small");
    m.textContent = "Datos Personales";
    m.id = "m";
  
    var edad = document.createElement("select");
    edad.className = "input";
    edad.style.width = "86%";
    edad.placeholder="Edad"
    var incedad = document.createElement("option")
    incedad.textContent="Edad"
  
    var gen = document.createElement("select");
    gen.className = "input";
    gen.placeholder="Género"
    var incGenero = document.createElement("option")
    incGenero.textContent="Genero"

    var incGenero1 = document.createElement("option")
    incGenero1.textContent="Masculino"

    var incGenero2 = document.createElement("option")
    incGenero2.textContent="Femenino"
  
    var CP = document.createElement("input");
    CP.className = "input";
    CP.id="cp1"
    CP.placeholder = "Código Postal";

    CP.oninput=function(){
        var code = document.getElementById("cp1").value
        if( isNaN(code) || code.length!=5){
            this.style.borderColor="red"
        }else{
            this.style.borderColor="blue"
        }
        console.log(telefono1.length)
    }

    
    var nombre = document.createElement("input");
    nombre.className = "input"
    nombre.id="nom"
    nombre.style.width = "86%"
    nombre.placeholder="Nombre(s)"

    nombre.oninput=function(){
        var nombre1 = document.getElementById("nom").value
        if( !isNaN(nombre1)){
            this.style.borderColor="red"
        }else{
            this.style.borderColor="blue"
        }
        console.log(telefono1.length)
    }





  
    var correo = document.createElement("input");
    correo.id="emailInput"
    correo.className = "input"
    correo.placeholder="Correo"
    correo.oninput=function(){
      var emailInput = document.getElementById("emailInput")
        emailInput.addEventListener("input", function() {
        var emailValue = this.value
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailPattern.test(emailValue)) {
          correo.style.borderColor="red"
        } else {
          correo.style.borderColor="blue"
        }
      })
    }
    
    var telefono = document.createElement("input");
    telefono.className = "input";
    telefono.placeholder="Número"
    telefono.id="num"

    telefono.oninput=function(){
        var telefono1 = document.getElementById("num").value
        if( isNaN(telefono1) || telefono1.length!=10){
            this.style.borderColor="red"
        }else{
            this.style.borderColor="blue"
        }
        console.log(telefono1.length)
    }
    

    var boton = document.createElement("button")
    boton.id="boton"
    boton.innerHTML="Cotiza gratis"

    boton.onkeypress=function(){
        //Falta tomar los valores de todos los campos para comprobar si todos están llenos, de ser así se manda a la siguiente página
        //De lo contrario se debe ubicar cuales son los campos que hace falta rllenar por el usuario y agregar un estilo " this.style.bordercolor="red" " a aquellos campos faltantes
    }
  
    // Fin inputs
  
    // Fin contenido
  
    encabezado.appendChild(contenedor); // Agregamos contenedor a encabezado
  
    contenedor.appendChild(cotizarDIV); // Agregamos cotizarDIV a contenedor
  
    cotizarDIV.appendChild(cotizar); // Agregamos cotizar a cotizarDIV
  
    contenedor.appendChild(imagenes_encabezado); // Agregamos imagenes_encabezado a contenedor
  
    imagenes_encabezado.appendChild(LetrasLogotipoDIV); // Agregamos LetrasLogotipoDIV a imagenes_encabezado
  
    LetrasLogotipoDIV.appendChild(LetrasLogotipoIMG); // Agregamos LetrasLogotipoIMG a LetrasLogotipoDIV
  
    imagenes_encabezado.appendChild(carroLogotipoDIV); // Agregamos carroLogotipoDIV a imagenes_encabezado
  
    carroLogotipoDIV.appendChild(carroLogotipoIMG); // Agregamos carroLogotipoIMG a carroLogotipoDIV
  
    imagenes_encabezado.appendChild(btn_encabezadoDIV); // Agregamos btn_encabezadoDIV a imagenes_encabezado
  
    btn_encabezadoDIV.appendChild(btn_encabezado); // Agregamos btn_encabezado a btn_encabezadoDIV
  
    pagina.appendChild(encabezado); // Agregamos encabezado a la pagina
  
    pagina.appendChild(TituloDIV); // Agregamos Titulo a la pagina
  
    TituloDIV.appendChild(Titulo); // Agregamos Titulo a la TituloDIV
  
    contenido_principal.appendChild(imagen_principalDIV);
  
    imagen_principalDIV.appendChild(imagen_principal);
  
    contenido_principal.appendChild(datos); // Agregamos datos a contenido_principal
  
    datos.appendChild(encabezado2); // Agregamos encabezado2 a datos
  
    datos.appendChild(marca);
  
    datos.appendChild(modelo);
    modelo.appendChild(incModelo)
  
    datos.appendChild(SubMarca);
    SubMarca.appendChild(incSubMarca)
  
    datos.appendChild(Descripcion);
    Descripcion.appendChild(incDescripcion)
  
    datos.appendChild(m);
  
    datos.appendChild(edad);
    edad.appendChild(incedad)

    for(i=1;i<100;i++){
      var Edad = document.createElement("option")
      Edad.textContent=i
      console.log(i)
      edad.appendChild(Edad)
    }
  
    datos.appendChild(gen);
    gen.appendChild(incGenero)
    gen.appendChild(incGenero1)
    gen.appendChild(incGenero2)
  
    datos.appendChild(CP);
  
    datos.appendChild(nombre);
  
    datos.appendChild(correo);
  
    datos.appendChild(telefono);

    datos.appendChild(boton)
  
    contenido.appendChild(contenido_principal); // Agregamos contenido_principal a la contenido
  
    pagina.appendChild(contenido); // Agregamos contenido a la pagina
  
    document.body.appendChild(pagina); // Agregamos a el cuerpo pagina
  }