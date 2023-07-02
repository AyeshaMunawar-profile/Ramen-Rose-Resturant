import { Component, OnInit } from '@angular/core';
import data from "../../../../assets/recipeData.json"
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  public recipesList: any = null;


  constructor() { }
   ngOnInit(): void {
    this.recipesList= data;
  }
}
