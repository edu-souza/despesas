import { NgModule } from "@angular/core";
import { RelatoriosComponent } from "./relatorios.component";
import { PoFieldModule } from '@po-ui/ng-components';
import { FormsModule } from "@angular/forms";
import { PoButtonModule } from '@po-ui/ng-components';
import { PoModule } from "@po-ui/ng-components";
@NgModule({
  imports:[PoButtonModule,PoModule,PoFieldModule,FormsModule],  
  declarations:[RelatoriosComponent]
})
export class RelatoriosModule {}