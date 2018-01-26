import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('labels') chartLabels: string[] = [];
  @Input('data') chartValor: number[] = [];
  @Input('tipo') chartTipo: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
