import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NzInputModule} from "ng-zorro-antd/input";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzCardModule} from "ng-zorro-antd/card";
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './components/shopping-list/ingredient/ingredient.component';
import {ShoppingListComponent} from "./components/shopping-list/shopping-list/shopping-list.component";
import { RecipeListComponent } from './components/recipe-book/recipe-list/recipe-list.component';
import { RecipesComponent } from './components/recipe-book/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './components/recipe-book/recipe-list/recipe/recipe.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import { SideBarComponent } from './components/layout/side-bar/side-bar.component';
import { BreadCrumbsComponent } from './components/layout/bread-crumbs/bread-crumbs.component';
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzImageModule} from "ng-zorro-antd/image";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListEditComponent,
    IngredientComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    BreadCrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzInputModule,
    NzUploadModule,
    NzIconModule,
    NzLayoutModule,
    NzTypographyModule,
    NzButtonModule,
    NzFormModule,
    NzCardModule,
    ReactiveFormsModule,
    FormsModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzImageModule
  ],
  providers: [
     { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
