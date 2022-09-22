import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Recipe from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'Recipe 1',
      description: 'This is recipe #1',
      imgPath:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=960,872?quality=90&webp=true&resize=600,545',
    },
    {
      name: 'Recipe 2',
      description: 'This is recipe #2',
      imgPath:
        'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
    },
    {
      name: 'Recipe 3',
      description: 'This is recipe #3',
      imgPath:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F20%2F212721-Indian-Chicken-Curry-Murgh-Kari-mfs_004.jpg',
    },
    {
      name: 'Recipe 4',
      description: 'This is recipe #4',
      imgPath:
        'https://www.simplyrecipes.com/thmb/JWjdE8YwikAae0KZuyy6ZJW7Utw=/3000x2001/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg',
    },
    {
      name: 'Recipe 5',
      description: 'This is recipe #5',
      imgPath:
        'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg',
    },
  ];

  @Output() recipeSelection = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelection = (recipe: Recipe) => {
    this.recipeSelection.emit(recipe);
  };
}
