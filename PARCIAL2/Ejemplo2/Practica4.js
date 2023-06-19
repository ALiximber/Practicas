var seccion = document.createElement("section")
var tabla = document.createElement("table");
var inc=1;
function Tabla(){
    for(var f=1; f<6;f++){
        var fila = document.createElement("tr");
        for(var c=1;c<5;c++){
            if(f>2){
                if(c==1){
                    var celda = document.createElement("td");
                    
                    celda.colSpan=3;
                    celda.style.textAlign="right";
                    switch(f){
                        case 3:
                            celda.innerHTML="SUMA";
                        break;
                        case 4:
                            celda.innerHTML="IVA";
                        break;
                        case 5:
                            celda.innerHTML="TOTAL";
                        break;
                    }
                    fila.appendChild(celda);
                }



                    if(c==4){
                        var celda = document.createElement("td");
                        var txt= document.createElement("input");
                        txt.style.width=70;
                        txt.style.height=30;
                        txt.readOnly=true;
                        txt.style.textAlign="right"
                        switch(f){
                            case 3:
                                txt.id="Suma"
                            break;
                            case 4:
                                txt.id="IVA"
                            break;
                            case 5:
                                txt.id="GTotal"
                            break;
                        }
                        celda.appendChild(txt)
                        fila.appendChild(celda);
                    }




                }else{
                    var celda = document.createElement("td");
                    if(f==2){
                        ///
                        if(c==1){
                            NuevaTabla();
                        }
                        
                        ///////////
                    }else{
                        
                        switch (c){
                            case 1:
                                celda.innerHTML="Cant"
                                fila.appendChild(celda)
                            break;
                            case 2:
                                celda.innerHTML="Descripción"
                                fila.appendChild(celda)
                            break;
                            case 3:
                                celda.innerHTML="P.U.";
                                fila.appendChild(celda)
                            break;
                            case 4:
                                celda.innerHTML="Total"
                                fila.appendChild(celda)
                            break;
                        }
                        
                    }
                    
                    //fila.appendChild(celda)

                }
tabla.appendChild(fila)
        }
        
    }
    seccion.appendChild(tabla)
    document.body.appendChild(seccion);

}
function NuevaTabla(){
    if(inc==1){
        var fila = document.createElement("tr");
    }else{
        var fila= tabla.insertRow(inc)
    }

    for(var c=1;c<5;c++){
        var celda=document.createElement("td")
        var txt = document.createElement("input");
        switch(c){
            case 1:
                txt.style.width=70;
                txt.id="txtCant"+inc;
            break;
            case 2:
                txt.style.width=250;
                txt.id="D"+inc

            break;
            case 3:
                txt.style.width=70;
                txt.id="txtPU"+inc;
            break;
            case 4:
                txt.style.width=70;
                txt.readOnly=true;
                txt.id="txtTotal"+inc;
                txt.style.textAlign="right"
            break;
        }
        if(c<4){
            txt.onfocus=function(){
                this.style.backgroundColor="#2E3D4C"
                
            }
            txt.onblur=function(){

                this.style.backgroundColor="#24303c";
                if(inc<10){
                    var y =this.id.substring(this.id.length-1,this.id.length)
                }else{
                    var y =this.id.substring(this.id.length-2,this.id.length)
                }
                var valCant = parseInt(document.getElementById("txtCant"+y).value);
                console.log(valCant);
                var valPU = parseFloat(document.getElementById("txtPU"+y).value);
                console.log(valPU);

                if(this.id=="D"+y){
                    if(this.value !=""){
                        this.style.borderColor="#A49E9D";
                        if(!isNaN(this.value)){
                            console.log("es letra");
                            this.style.borderColor="red";
                        }else{
                            this.style.borderColor="blue";
                        }
                    }
                }else{
                    if(this.value !=""){
                        this.style.borderColor="#A49E9D";
                        
                        if(isNaN(this.value)){
                            console.log("es letra");
                            this.style.borderColor="red";
                        }else{
                            this.style.borderColor="blue";
                        }
                    }
                }

               
                
                
                




                if(!isNaN(valCant)  &&  !isNaN(valPU) || (!isNaN(valCant) || !isNaN(valPU))){
                    var Tot = document.getElementById("txtTotal"+y)
                    Tot.value = valPU*valCant;
                    var Sum = document.getElementById("Suma")
                    var IVA = document.getElementById("IVA")
                    var GTot = document.getElementById("GTotal")

                    /////
                    
                    var quesadilla;
                    Sum.value = 0;
                    if(isNaN(Tot.value) ){
                        Tot.value=0
                    }
                    
                    var rows = tabla.getElementsByTagName("tr"); 
                    for (var i = 1; i < rows.length; i++) {
                        var row = rows[i];
                        var total = row.cells[3].getElementsByTagName("input")[0].value;
                        
                        if (!isNaN(parseFloat(total))) {
                            Sum.value = parseFloat(Sum.value) + parseFloat(total);
                            quesadilla=Sum.value
                            IVA.value=parseFloat(quesadilla*0.16);
                            GTot.value=parseFloat(quesadilla*1.16);
                        }
                    }
                
                           
                }else{
                    
                }

            }
            txt.onkeydown=function(e){
                if(e.keyCode==40){
                    NuevaTabla();
                }
            }
        } 

        
        celda.appendChild(txt);
        fila.appendChild(celda);
        
    }
                      
    
    if(inc==1){
        tabla.appendChild(fila);
        
    }
    inc++;
}