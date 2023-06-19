#include <iostream>
#include<stdio.h>
#include <Windows.h>
using namespace std;
char c;
struct cel {
    char nomCelular[50];
    char colorCelular[50];
    char modCelular[50];
    int RAM;
    int almacenamiento;
    int precio;
};
cel telefono[20];
  int numcel=0;
  char lip='\0';
void gotoxy(int x, int y) {
    HANDLE hcon;
    hcon = GetStdHandle(STD_OUTPUT_HANDLE);
    COORD dwPos;
    dwPos.X = x;
    dwPos.Y = y;
    SetConsoleCursorPosition(hcon, dwPos);
}
void Marcos(int x1, int y1, int x2, int y2, int inc) {
    for (int z = x1; z < x2; z++) {
        gotoxy(z, y1);       printf("%c", 205);
        gotoxy(z, y2);       printf("%c", 205);
        gotoxy(z, y1 + inc);   printf("%c", 205);
        gotoxy(z + 2, y2 + 1);   printf("%c", 177);
    }
    for (int z = y1; z < y2; z++) {
        gotoxy(x1, z);          printf("%c", 186);
        gotoxy(x2, z);          printf("%c", 186);
        gotoxy(x2 + 1, z + 1);  printf("%c", 177);
    }
    gotoxy(x1, y1); printf("%c", 201);
    gotoxy(x2, y1); printf("%c", 187);
    gotoxy(x1, y1 + inc); printf("%c", 204);
    gotoxy(x2, y1 + inc); printf("%c", 185);
    gotoxy(x1, y2); printf("%c", 200);
    gotoxy(x2, y2); printf("%c", 188);
}
int menu() {
    int val;
    Marcos(3, 10, 30, 20, 2);
    gotoxy(10, 11);  printf("MENU PRINCIPAL");
    gotoxy(5, 13); printf("1.-Registrar");
    gotoxy(5, 14); printf("2.-Listar");
    gotoxy(5, 15); printf("3.-Consultar");
    gotoxy(5, 16); printf("4.-Borrar");
    gotoxy(5, 17); printf("5.-Modificar");
    gotoxy(5, 18); printf("6.-Salir");
    gotoxy(5, 19); printf("Ingresa la opción: ");
    scanf("%i", &val);
    scanf("%*c",c);
    return val;
    
}
void registrar() {
	//char c;
	scanf("%*c",c);
    Marcos(50, 1, 100, 25, 2);
    gotoxy(60, 2); printf("REGISTRO DE DATOS");
    gotoxy(51, 5); printf("Ingrese la marca: ");
    gets(telefono[numcel].nomCelular);
    gotoxy(51, 6); printf("Ingrese el modelo: ");
    gets(telefono[numcel].modCelular);
    gotoxy(51, 7); printf("Ingrese el precio: ");
    scanf("%i",&telefono[numcel].precio);
    scanf("%*c", c);
    gotoxy(51, 8); printf("Ingrese la RAM: ");
    scanf("%i", &telefono[numcel].RAM);
    scanf("%*c", c);
    gotoxy(51, 9); printf("Ingrese el almacenamiento: ");
    scanf("%i", &telefono[numcel].almacenamiento);
    scanf("%*c", c);
    gotoxy(51, 10); printf("Ingrese el color de la carcaza: ");
    gets(telefono[numcel].colorCelular);
	numcel++;
	system ("cls");
}
void listar(){
	system("cls");
	int ce=0,p;
	Marcos(1, 1, 100, 25, 2);
	if(numcel==0){
		gotoxy(10,2); printf("NO HAY NADA POR AQUI :)");
		getchar();
	}else{
		gotoxy(2,5); printf("MARCA");
		gotoxy(22,5); printf("CELULAR");
		gotoxy(42,5); printf("COLOR");
		gotoxy(55,5); printf("ROM");
		gotoxy(62,5); printf("RAM");
		gotoxy(72,5); printf("PRECIO");
		do{
			gotoxy(2,7+ce); printf (telefono[ce].nomCelular);
			gotoxy(22,7+ce); printf (telefono[ce].modCelular);
			gotoxy(42,7+ce); printf (telefono[ce].colorCelular);
			gotoxy(55,7+ce); cout<<telefono[ce].RAM;
			gotoxy(62,7+ce); cout<<telefono[ce].almacenamiento;
			gotoxy(72,7+ce); cout<<telefono[ce].precio;
			ce++;
		}while(ce!=numcel);
	//getchar();
	}
	getc(stdin);
}
void consulta(){
	system("cls");
	Marcos(1, 1, 100, 25, 2);
	int ce;
	gotoxy(2,5); printf("Ingresa el registro a leer: ");
	scanf("%i",&ce);
	scanf("%*c",c);
	system("cls");
	if (ce>=numcel){
		gotoxy(5,6); printf("REGISTRO NO EXISTENTE");
	}else{
		Marcos(1, 1, 100, 25, 2);
		gotoxy(2,5); printf("MARCA");
		gotoxy(22,5); printf("CELULAR");
		gotoxy(42,5); printf("COLOR");
		gotoxy(55,5); printf("RAM");
		gotoxy(62,5); printf("ROM");
		gotoxy(72,5); printf("PRECIO");
		gotoxy(2,7+ce); printf (telefono[ce-1].nomCelular);
		gotoxy(22,7+ce); printf (telefono[ce-1].modCelular);
		gotoxy(42,7+ce); printf (telefono[ce-1].colorCelular);
		gotoxy(55,7+ce); cout<<telefono[ce-1].RAM;
		gotoxy(62,7+ce); cout<<telefono[ce-1].almacenamiento;
		gotoxy(72,7+ce); cout<<telefono[ce-1].precio;
	}
	getc(stdin);
}
void borrar(){
	int ce;
	system("cls");
	gotoxy(2,5); printf("Ingresa el registro a borrar: ");
	scanf("%i",&ce);
	scanf("%*c",c);
	// Falta para cuando no se encuentra el registro
	if (ce>numcel ){
		gotoxy(10,2);printf("EL REGISTRO NO EXISTE");
		getchar();
	}else if(ce==numcel){
		telefono[ce-1].nomCelular[0]='\0';
		telefono[ce-1].modCelular[0]='\0';
		telefono[ce-1].colorCelular[0]='\0';
		ce--;
	}else{
		// Falta para cuando se trata del último registro
		telefono[ce-1].nomCelular[0]='\0';
		telefono[ce-1].modCelular[0]='\0';
		telefono[ce-1].colorCelular[0]='\0';
		ce--;
		// Esto es para cuando el registro están enmedio.
		
		do{
			strcpy(telefono[ce-1].nomCelular,telefono[ce+1].nomCelular);
			strcpy(telefono[ce-1].modCelular,telefono[ce+1].modCelular);
			strcpy(telefono[ce-1].colorCelular,telefono[ce+1].colorCelular);
			telefono[ce-1].RAM=telefono[ce+1].RAM;
			telefono[ce-1].almacenamiento=telefono[ce+1].almacenamiento;
			telefono[ce-1].precio=telefono[ce+1].precio;
			ce++;
		}while(ce<numcel);
		
	}
	ce--;
	numcel--;

}
void modificar(){
	system("cls");
int ce=0;
Marcos(50, 1, 100, 25, 2);
gotoxy(2,5); printf("Ingresa el registro a modificar: ");
scanf("%i",&ce);
scanf("%*c",c);
ce--;
if (ce<=numcel){
    gotoxy(60, 2); printf("REGISTRO DE DATOS");
    gotoxy(51, 5); printf("Ingrese la marca: ");
    gets(telefono[ce].nomCelular);
    gotoxy(51, 6); printf("Ingrese el modelo: ");
    gets(telefono[ce].modCelular);
    gotoxy(51, 7); printf("Ingrese el precio: ");
    scanf("%i",&telefono[ce].precio);
    scanf("%*c", c);
    gotoxy(51, 8); printf("Ingrese la RAM: ");
    scanf("%i", &telefono[ce].RAM);
    scanf("%*c", c);
    gotoxy(51, 9); printf("Ingrese el almacenamiento: ");
    scanf("%i", &telefono[ce].almacenamiento);
    scanf("%*c", c);
    gotoxy(51, 10); printf("Ingrese el color de la carcaza: ");
    gets(telefono[ce].colorCelular);
}else{
gotoxy(2,5); printf("REGISTRO NO SE PUEDE MODIFICAR PORQUE NO EXISTE");
}
}
int main() {
	int val;
	do{
		Marcos(1, 1, 100, 25, 2);
		menu();
		val = menu();
		gotoxy(15,2); printf("REGISTRO");
		switch (val){
		case 1:
		gotoxy(10,2); printf("Selecionaste registrar");
		registrar();
		break;
		case 2:
		gotoxy(10,2); printf("Selecionaste listar");
		listar();
		system("cls");
		break;
		case 3:
		   gotoxy(10,2); printf("Selecionaste consultar");
		consulta();
		break;
		case 4:
			gotoxy(10,2); printf("Selecionaste borrar");
			borrar();
		break;
		case 5:
			gotoxy(10,2); printf("Selecionaste modificar");
			modificar();
		break;
		case 6:
			gotoxy(10,2); printf("SELECIONASTE SALIR");	
			getc(stdin);
		break;
		default:
			gotoxy(10,2); printf("LA OPCION NO ES VALIDA");
			getc(stdin);
			getchar();
		break;
		}
			system("cls");
	}while(val!=6);
	 return 0;
}


