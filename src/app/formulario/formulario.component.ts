import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  @Output() resultadoSuma= new EventEmitter<number>();

  operandoA = 0;
  operandoB = 0;

  sumar(){
    this.resultadoSuma.emit(this.operandoA + this.operandoB);
  }
}
