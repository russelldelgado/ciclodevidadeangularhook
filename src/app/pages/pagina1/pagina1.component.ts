import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

    nombre : string = "russell";
    tiempo : number =0;
    subcripcionTimer! : Subscription;

  constructor() {
    console.log("constructor");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }
  //ESTO SE EJECUTA ANTES DE LOS CAMBIOS UN EJEMPLO ES CUANDO PONEMOS UN BOTON PARA ENVIAR UN FORMULARIO O QUE LLAMA A UN MÉTODO 
  ngDoCheck(): void {
    console.log("ngDoCheck()");
  }
  
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  } 
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  //ESTE SE LLAMA CUANDO YA SE HACEN LOS CAMBIOS Y SE VERIFICA TODO
  
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    //ESTO ES SUPER NECESARIO PARA NO OCASIONAR PERDIDAS DE MEMORIA.
    this.subcripcionTimer.unsubscribe();
  }


  ngOnInit(): void {
    console.log('ngoninti');

   this.subcripcionTimer =  interval(1000).subscribe(numero => {
      this.tiempo++;
    })

  }

  cambiar(){
    console.log('cambiar');
    
  }



}


//UN HOOK ES ALGO QUE NOS PERMITE EJECUTAR UNA FUNCIÓN O MÉTODO CUANDO ALGO SUCEDE EN EL CICLO DE VIDA DE ANGULAR.

