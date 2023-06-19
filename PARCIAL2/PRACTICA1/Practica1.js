function form(){
    var mar = document.createElement("div");
    var tab = document.createElement("table");

    for(var f=1 ; f<5 ; f++){

        var fi = document.createElement("tr");

        for(var c=1; c<3;c++){

            var cel = document.createElement("td");
            var eti = document.createElement("label");
            cel.appendChild(eti);

            if(f==1 || (f==2 && c==1) || (f==3 && c==2)){
                var tex = document.createElement("input");
                tex.onfocus = function(){
                    this.style.backgroundColor="yellow";
                }
                
                if(this.value !=""){
                    if(f==3 && c==2){
                        //Para evitar letras
                        tex.onblur=function(){
                            if(this.value !=""){
                                if(isNaN(this.value)){
                                    console.log("es letra")
                                    this.style.borderColor="red";
                                }else{
                                    console.log("es")
                                    this.style.borderColor="blue";
                                }
                                console.log("es")
                                this.style.borderColor="blak";
                            }else{
                                this.style.borderColor="black";
                                this.style.backgroundColor="#fff";
                            }
                        }

                    }else{

                        //Para evitar números
                        tex.onblur=function(){
                            if(this.value !=""){
                                if(isNaN(this.value)){
                                    this.style.borderColor="blue";
                                }else{
                                    this.style.borderColor="red";
                                    //this.style.backgroundColor="#f87272";
                                }
                                this.style.backgroundColor="#fff";
                            }else{
                                this.style.borderColor="black";
                                this.style.backgroundColor="#fff";
                            }
                            
                        }
                                
                    }
                }else{
                    tex.onblur=function(){
                        this.style.borderColor="black";
                        this.style.backgroundColor="#fff";
                    }
                }
                cel.appendChild(tex);
            }

            if(f==4 || (f==2 && c==2) || (f==3 && c==1)){
                var com = document.createElement("select");
                cel.appendChild(com);
            }
            if(f==1){
                this.style.backgroundColor="blue";
            }
            if(f==1 && c==0){
                eti.innerHTML="Nombre(s):<br>";
                tex.placeholder="Ingrese su(s) nombre(s)";
            }

            if(f==1 && c==2){
                eti.innerHTML="Primer apellido:<br>";
                tex.placeholder="Ingrese su primer apellido";
            }

            if(f==2 && c==1){
                eti.innerHTML="Segundo apellido:<br>";
                tex.placeholder="Ingrese su segundo apellido";
            }

            if(f==2 && c==2){
                eti.innerHTML="Día de nacimiento:<br>";
                var opci = document.createElement("option");
                opci.innerHTML="Ingrese el día";
                opci.disabled=true;
                opci.selected=true;
                com.appendChild(opci);

                for(var i=1;i<32;i++){

                    var opci = document.createElement("option");

                    if(i<10){
                        opci.innerHTML="0"+i;
                    }else{
                        opci.innerHTML=i;
                    }
                    com.appendChild(opci);

                }
            }
            if(f==3 && c==1){

                eti.innerHTML="Mes de nacimiento:<br>";
                var opci = document.createElement("option");
                opci.innerHTML="Ingrese el mes";
                opci.disabled=true;
                opci.selected=true;
                com.appendChild(opci);

                for(var j=1;j<13;j++){

                    var opci = document.createElement("option");

                    switch(j){
                        case 1:
                        opci.innerHTML="Enero";
                        break;
                        case 2:
                        opci.innerHTML="Febrero";
                        break;
                        case 3:
                        opci.innerHTML="Marzo";
                        break;
                        case 4:
                        opci.innerHTML="Abril";
                        break;
                        case 5:
                        opci.innerHTML="Mayo";
                        break;
                        case 6:
                        opci.innerHTML="Junio";
                        break;
                        case 7:
                        opci.innerHTML="Julio";
                        break;
                        case 8:
                        opci.innerHTML="Agosto";
                        break;
                        case 9:
                        opci.innerHTML="Septiembre";
                        break;
                        case 10:
                        opci.innerHTML="Octubre";
                        break;
                        case 11:
                        opci.innerHTML="Noviembre";
                        break;
                        case 12:
                        opci.innerHTML="Diciembre";
                        break;
                    }

                    com.appendChild(opci);
                }                
            }
            if(f==3 && c==2){

                eti.innerHTML="Año de nacimiento:<br>";
                tex.placeholder="Ingrese su año de nacimiento";
            }
            if(f==4&&c==1){
                eti.innerHTML="Sexo:<br>";
                var opci = document.createElement("option");
                opci.innerHTML="Sexo";
                opci.disabled=true;
                opci.selected=true;
                com.appendChild(opci);

                for(var j=1;j<4;j++){
                    var opci = document.createElement("option");

                    switch(j){
                        case 1:
                            opci.innerHTML="H";
                        break;
                        case 2:
                            opci.innerHTML="M";
                        break;
                        case 3:
                            opci.innerHTML="PND";
                        break;
                    }
                    com.appendChild(opci);

                }
            }
            if(f==4&&c==2){
                eti.innerHTML="Estado:<br>";
                var opci = document.createElement("option");
                opci.innerHTML="Estado";
                opci.disabled=true;
                opci.selected=true;
                com.appendChild(opci);

                for(var j=1;j<8;j++){
                    var opci = document.createElement("option");

                    switch(j){
                        case 1:
                            opci.innerHTML="Aguascalientes";
                        break;
                        case 2:
                            opci.innerHTML="Baja California";
                        break;
                        case 3:
                            opci.innerHTML="Baja California Sur";
                        break;
                        case 4:
                            opci.innerHTML="Campeche";
                            break;
                        case 5:
                            opci.innerHTML="Chiapas";
                            break;
                        case 6:
                            opci.innerHTML="Chihuahua";
                            break;
                        case 7:
                            opci.innerHTML="Ciudad de México";
                            break;

                    }
                    com.appendChild(opci);

                }

            }
            fi.appendChild(cel);
        }
        tab.appendChild(fi);
    }
    mar.appendChild(tab);
    document.body.appendChild(mar);

}