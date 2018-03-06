import { Component, OnInit } from '@angular/core';
import { clearInterval } from 'timers';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTress().then(
      dato => console.log('Termino', dato)
    )
    .catch(
      error => console.log('Error en la promesa', error)
    );
  }

  ngOnInit() {
  }

  contarTress(): Promise<boolean> {

    return new Promise( (resolve, reject) => {
      let contador = 0;

      const intervalo = setInterval( () => {

        contador += 1;
        console.log( contador );

        if ( contador === 3) {
          resolve(true);
          // reject('Inesperado error');
          clearInterval(intervalo);
        }

      }, 1000 );

    });

  }

}
