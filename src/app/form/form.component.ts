import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ArticleService } from "../article.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent {
  articleForm = new FormGroup({
    brand: new FormControl(""),
    model: new FormControl(""),
    stock: new FormControl(0)
  });

  constructor(private articleService: ArticleService) {}

  onSubmit(): void {
    const article = this.articleForm.value;
    this.articleService.addArticle(article);
  }
}
