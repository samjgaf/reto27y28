import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  num1=0;
  num2=0;
  op="ninguno";

  sum=true;
  rest=true;
  multi=true;
  div=true;

  aplicar=false;
  valor:any;

  calcular(){
    this.aplicar= true;

  }
  //esta es una funcion que retorna un mensaje
  //imagino que la idea es dar un mensaje distinto dependiendo del error que tenga el input pero aun no lo he agregado
  msg='';
  getErrorMessage(){
    this.msg= 'Ingrese un valor numérico';
    return this.msg
  }

  Suma(n1:number, n2:number){
    return n1 + n2 
  }
   
}
