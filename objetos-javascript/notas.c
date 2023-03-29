int main(int argc, char *argv[]) {
  setlocale(LC_ALL, "Portuguese");
  float nota1=0; 
  float nota2=0;  
  float nota3=0;  
  float media=0;
  printf("Insira nota 1: ");
  scanf("%f",&nota1);
  printf("Insira nota 2: ");
  scanf("%f",&nota2);
  printf("Insira nota 3: ");
  scanf("%f",&nota3); 
  media = (nota1+nota2+nota3)/3;
  if(media>=6){
    printf("Aluno aprovado.\n");
  }
  else{
    printf("Aluno reprovado.\n");
  } 
  printf("Média do aluno é: %f",media);
}