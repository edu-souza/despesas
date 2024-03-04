import { NgModule } from "@angular/core";
import { MovimentosComponent } from "./movimentos.component";
import { PoModule} from "@po-ui/ng-components";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports:[PoModule],  
  declarations:[MovimentosComponent]
})

export class MovimentosModule {}