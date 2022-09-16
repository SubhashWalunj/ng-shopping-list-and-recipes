import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ShoppingComponent } from './shopping/shopping.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, RecipesComponent, RecipeListComponent, RecipeItemComponent, RecipeDetailsComponent, ShoppingComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
