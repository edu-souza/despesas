import { NgModule } from "@angular/core";
import { MovimentosComponent } from "./movimentos.component";
import { PoModule
 } from "@po-ui/ng-components";
@NgModule({
  imports:[PoModule],  
  declarations:[MovimentosComponent]
})
export class MovimentosModule {}