import { PoBreadcrumb } from '@po-ui/ng-components';
import { Component } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-movimentos',
  templateUrl: './movimentos.component.html',
  styleUrls: ['./movimentos.component.css']
})
export class MovimentosComponent {
  // columns : Array<PoTableColumn> = [
  // { property: 'code', type: 'number', width: '8%' },
  // { property: 'product' },
  // { property: 'customer' }]

  // items : Array<any> = [
  //   {
  //     code: 1200,
  //     product: 'Rice',
  //     customer: 'Angeloni',
  //   }
  // ]

  columns : Array<PoTableColumn> = [
    { property: 'tipo'},
    { property: 'descricao'},
    { property: 'valor',type: 'number' }
  ];

  items : Array<any> = [
    {
      tipo: 'Despesa',
      descricao: 'Água',
      valor: 13,
    },
    {
      tipo: 'Despesa',
      descricao: 'Internet',
      valor: 100.00,
    },
    {
      tipo: 'Receita',
      descricao: 'Salário',
      valor: 1500.00,
    }
  ]

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Movimentos' }]
  };

 
}
