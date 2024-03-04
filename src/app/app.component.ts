import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  logoSrc : string = "./assets/images/home.png";

  readonly menus: Array<PoMenuItem> = [
    { label: 'Importar', link: '/importar' },
    { label: 'Movimentos', link: '/movimentos' },
    { label: 'Relatórios', link: '/relatorios' }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
