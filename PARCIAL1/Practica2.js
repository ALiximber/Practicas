function Tabla(I,D){
    var _left = 300;
    var _top = 300;
    var Tab1 = document.createElement("table");
    for(var f=1; f<4; f++){
        var fila= document.createElement("tr");
        for(var c=1; c<4;c++){
            var celda = document.createElement("td");
            if(f==1 && c==2){
                celda.innerHTML="&#9650";
                if(_top>0){
                    celda.onclick = function(){
                        console.log(this.parentElement.parentElement.style.top);
                        console.log(this.parentElement.parentElement.style.left);
                        Tabla(parseInt(celda.parentElement.parentElement.style.left) , parseInt(celda.parentElement.parentElement.style.top)-100);
                        celda.parentElement.parentElement.style.top = parseInt(celda.parentElement.parentElement.style.top)-100;
                        _left=parseInt(celda.parentElement.parentElement.style.left);
                        _top=parseInt(celda.parentElement.parentElement.style.top);
                    }
                }
            }
            if(f==2 && c==1){
                celda.innerHTML="&#10096";
                if(_left>0){
                    celda.onclick = function(){
                        console.log(this.parentElement.parentElement.style.top);
                        console.log(this.parentElement.parentElement.style.left);
                        Tabla(parseInt(celda.parentElement.parentElement.style.left)-100 , parseInt(celda.parentElement.parentElement.style.top));
                        celda.parentElement.parentElement.style.left = parseInt(celda.parentElement.parentElement.style.left)-100;
                        _left=parseInt(celda.parentElement.parentElement.style.left);
                        _top=parseInt(celda.parentElement.parentElement.style.top);
                    }
                }
            }
            if(f==2 && c==3){
                celda.innerHTML="&#10097";
                if(_left<800){
                    celda.onclick = function(){
                        console.log(this.parentElement.parentElement.style.top);
                        console.log(this.parentElement.parentElement.style.left);
                        Tabla(parseInt(celda.parentElement.parentElement.style.left)+100 , parseInt(celda.parentElement.parentElement.style.top));
                        celda.parentElement.parentElement.style.left = parseInt(celda.parentElement.parentElement.style.left)+100;
                        _left=parseInt(celda.parentElement.parentElement.style.left);
                        _top=parseInt(celda.parentElement.parentElement.style.top);
                    }
                }
            }
            if(f==3 && c==2){
                celda.innerHTML="&#9660";
                if(_top<600){
                    celda.onclick = function(){
                        console.log(this.parentElement.parentElement.style.top);
                        console.log(this.parentElement.parentElement.style.left);
                        Tabla(parseInt(celda.parentElement.parentElement.style.left) , parseInt(celda.parentElement.parentElement.style.top)+100);
                        celda.parentElement.parentElement.style.top = parseInt(celda.parentElement.parentElement.style.top)+100;
                        _left=parseInt(celda.parentElement.parentElement.style.left);
                        _top=parseInt(celda.parentElement.parentElement.style.top);
                    }
                }
            }
            fila.appendChild(celda);
        }
        Tab1.appendChild(fila);
    }
    Tab1.border=1;
    Tab1.style.width=100;
    Tab1.style.height=100;
    Tab1.style.position="absolute";
    Tab1.style.left= I;
    Tab1.style.top= D;
    Tab1.style.backgroundColor = "blue";
    document.body.appendChild(Tab1);
}