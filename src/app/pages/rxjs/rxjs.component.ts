import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { observeOn } from 'rxjs/operators/observeOn';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.regresaObservador()
      .subscribe(
        numero => console.log('Subscrito', numero ),
        error => console.log('Error en el obs', error),
        () => console.log('Termino el Obs')
      );

  }

  ngOnInit() {
  }

  regresaObservador(): Observable<any> {
    return new Observable( observer => {

      let contador = 0;

      let intervalo = setInterval( () => {

        contador += 1;

        let salida = {
          valor: contador
        };

        observer.next( salida );

        // if ( contador === 3 ) {
        //   clearInterval( intervalo );
        //   observer.complete();
        // }
        // if ( contador === 2 ) {
        //   observer.error('Este es el error');
        // }
      }, 500 );

    })
    .retry(2)
    .map( (resp: any) => {
      return resp.valor;
    })
    .filter( (valor, index) => {
      if ( valor % 2 === 1 ) {
        // impar
        return true;
      }else {
        // par
        return false;
      }
      return true;
    });
  }

  ngOnDestroy() {
    console.log('Se va a cerrar');
    this.subscription.unsubscribe();
  }

}