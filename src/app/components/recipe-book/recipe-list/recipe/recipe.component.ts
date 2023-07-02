import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipeDetails:any;
  public fileImageDefaultPath:string= "../../../../../assets/food_images/"
  constructor() { }

  ngOnInit(): void {
    this.fileImageDefaultPath= this.fileImageDefaultPath + this.recipeDetails.field5 + ".jpg"
  }

}
