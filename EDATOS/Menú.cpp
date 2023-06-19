#include <iostream>
#include <stdio.h>
#include <windows.h>
using namespace std;
struct celulares{
	char marca[30];
	char modelo[30];
	int precio;
	int RAM;
	int almacenamiento;
	char color[30];
	};
 celulares celular[20];

void gotoxy(int x, int y){
	
	HANDLE hcon;
	hcon = GetStdHandle(STD_OUTPUT_HANDLE);
	COORD dwPos;
	dwPos.X=x;
	dwPos.Y=y;
	SetConsoleCursorPosition(hcon,dwPos);
}


void MarcoDoble(int x1,int y1,int x2, int y2, int inc){
	for (int z=x1;z<x2;z++){
		gotoxy(z,y1); 
		printf("%c",205);
		gotoxy(z,y2); 
		printf("%c",205);
		gotoxy(z,y1+inc); 
		printf("%c",205);
	}
	
	for (int z=y1;z<y2;z++){
		gotoxy(x1,z); 
		printf("%c",186);
		gotoxy(x2,z); 
		printf("%c",186);
	}
	gotoxy(x1,y1);printf("%c",201);	
	gotoxy(x2,y1);printf("%c",187);	
	gotoxy(x1,y1+inc);printf("%c",204);
	gotoxy(x2,y1+inc);printf("%c",185);	
	gotoxy(x1,y2);printf("%c",200);
	gotoxy(x2,y2);printf("%c",188);
}

int menu(int opc){
	char c;
	MarcoDoble(1,1,100,25,2);
	MarcoDoble(10,10,43,19,2);
	
	
	gotoxy(11,2); printf("Sistema de captura de datos");
	gotoxy(11,11);printf("MENU PRINCIPAL");
	gotoxy(11,13);printf("Marca del celular: ");
	gets(celular[opc].marca);
	gotoxy(11,14);printf("Modelo del celular: ");
	gets(celular[opc].modelo);
	gotoxy(11,15);printf("Precio del celular: ");
	scanf("%i",&celular[opc].precio);
	scanf("%*c",c);
	gotoxy(11,16);printf("RAM del celular: ");
	scanf("%i",&celular[opc].RAM);
	scanf("%*c",c);
	gotoxy(11,17);printf("Almacenamiento del celular: ");
	scanf("%i",&celular[opc].almacenamiento);
	scanf("%*c",c);
	gotoxy(11,18);printf("Color del celular: ");
	gets(celular[opc].color);
}
int main (){
	menu(1);
}

