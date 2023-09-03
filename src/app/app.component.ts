import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Aplicación Calculadora';
  resultado:number = 0;

  suma(resultadoSuma:number):void{
    this.resultado = resultadoSuma;
  }
}
