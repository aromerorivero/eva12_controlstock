import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from "./form/form.component";
import { TableComponent } from "./table/table.component";

const routes: Routes = [
  { path: "form", component: FormComponent },
  { path: "table", component: TableComponent },
  { path: "**", redirectTo: "/form" }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
