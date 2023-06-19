#include <iostream>
#include <stdio.h>
using namespace std;
int main (){
		char lis[3][99][100];
		int pre[3];
		int x=0,j=0;
		char resp='s';
		int resp2=1;
		int res;
		char c;
	//cout<<"Hola";
	
	
		for(x; x<=2;x++){
		
		
			printf("Ingresa el nombre de el artista o album: ");
			gets(lis[x][0]);	
			
			
			printf("ingresa el precio: ");
			scanf("%d",&pre[x]);
			scanf("%*c",c);
			
			while(resp2!=2){

					printf("Ingresa una canción: ");
					gets(lis[x][j]);
				
				
					cout<<"Desea agregar otra canción?";
					cout<<"1-Si"<<endl;
					cout<<"2-No"<<endl;
					cin>>resp2;
					scanf("%*c",c);
					j++;
			
			}	
			resp2=1;
			
		}
		
		for(x=0;x<=3;x++){
			printf("Album: \n");
			printf("%c",lis[x][0]);
		}
		
		
	
		return 0;
	}
