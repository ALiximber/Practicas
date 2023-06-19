#include <iostream>
#include <stdio.h>
using namespace std;
int main (){
	struct dis{
		char nom[3][60];
		char alb[50];
		float pre;
		int s=1;
	};
	dis ma[3];
	
	int a=0,j=0;
	char c;
	
	for(a;a<3;a++){
		if(a<3){
			printf("Ingresa el nombre del album: ");
			gets(ma[a].alb);
			
			printf("Ingresa el precio del album: ");
			scanf("%f",&ma[a].pre);
			scanf("%*c",&c);
		
			for(int y=0;y<3;y++){
				printf("Ingresa el nombre de la cancion: ");
				gets(ma[a].nom[y]);

			}
			
		}
	}
	a=0;


		
		printf("Album: %s\n",ma[0].alb);
		printf("Precio: %f\n",ma[a].pre);
		printf("Canciones: \n");
		while(a<=2){
		printf("%s \n",ma[0].nom[a]);
		a++;
		}
	a=0;
		printf("Album: %s\n",ma[1].alb);
		printf("Precio: %f\n",ma[1].pre);
		printf("Canciones: \n");
		while(a<=2){
		printf("%s \n",ma[1].nom[a]);
		a++;
		}
	a=0;
		printf("Album: %s\n",ma[2].alb);
		printf("Precio: %f\n",ma[2].pre);
		printf("Canciones: \n");
		while(a<=2){
		printf("%s \n",ma[2].nom[a]);
		a++;
		}
	
	
}
