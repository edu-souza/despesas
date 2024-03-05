import { PoBreadcrumb } from '@po-ui/ng-components';
import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { MovimentosService } from './services/movimentos.service';
import { MovimentosInterface } from './interface/movimentos';

@Component({
  selector: 'app-movimentos',
  templateUrl: './movimentos.component.html',
  styleUrls: ['./movimentos.component.css']
})
export class MovimentosComponent implements OnInit {
  columns : Array<PoTableColumn> = [
    { property: 'tipo'},
    { property: 'descricao'},
    { property: 'valor',type: 'number' }
  ];

  constructor(private movimentosService : MovimentosService){}

  items : Array<MovimentosInterface> = [];

  ngOnInit():void{
    this.movimentosService.getMovimentos().subscribe((response) => this.items = response.map((item:MovimentosInterface) => {
      return item.tipo === 'D' ? { ...item, tipo: 'Despesa' } : { ...item, tipo: 'Receita' };
    }));
  }

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Movimentos' }]
  };

}
