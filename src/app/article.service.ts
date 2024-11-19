import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  private articles: Array<any> = []; 
  constructor() {}

  addArticle(article: any): void { 
    this.articles.push(article);
  }

  getArticles(): Array<any> { 
    return this.articles;
  }
}