var tabla = document.createElement("table");
function tab(){
    var FTitulo = document.createElement("tr");
    var celdaT1 = document.createElement("td");
    var celdaT2 = document.createElement("td");
    var celdaT3 = document.createElement("td");
    var celdaT4 = document.createElement("td");
    //FTitulo.innerHTML="Cantidad=======Producto=======Precio======Total"
    FTitulo.onblur=function(){
        this.style.bacgrounColor="yelow";
    }
    celdaT1.innerHTML="cantidad";
    celdaT2.innerHTML="Producto";
    celdaT3.innerHTML="Precio";
    celdaT4.innerHTML="Total";
    tabla.appendChild(FTitulo);
    FTitulo.appendChild(celdaT1);
    FTitulo.appendChild(celdaT2);
    FTitulo.appendChild(celdaT3);
    FTitulo.appendChild(celdaT4);
    newElem();
    tabla.border=1;
    //mar.appendChild(tab);
    document.body.appendChild(tabla);

}
function newElem(){
    var FCont =document.createElement("tr");
        for(var i=1;i<5;i++){
            var celda = document.createElement("td");
            var cel1 = document.createElement("input");
            var cel2 = document.createElement("input");
            var cel3 = document.createElement("input");
            var cel4 = document.createElement("input");
            
            if(i==1){
                //txt.style.width=60;
            }
            cel1.onkeydown=function(e){
                if(e.keyCode==40){
                    newElem();
                }
            }
            cel2.onkeydown=function(e){
                if(e.keyCode==40){
                    newElem();
                }
            }
            cel3.onkeydown=function(e){
                if(e.keyCode==40){
                    newElem();
                }
            }
            cel4.onkeydown=function(e){
                if(e.keyCode==40){
                    newElem();
                }
            }
            
        }
    // No supe usar el e.keycode :(
    tabla.appendChild(FCont);
    celda.appendChild(cel1);
    celda.appendChild(cel2);
    celda.appendChild(cel3);
    celda.appendChild(cel4);
    FCont.appendChild(celda);
}
