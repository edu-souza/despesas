import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { PoModule } from "@po-ui/ng-components";

@NgModule({
  imports:[PoModule],  
  declarations:[HomeComponent]
})
export class HomeModule {}