import { Component, OnInit } from '@angular/core';
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
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=960,872?quality=90&webp=true&resize=600,545',
    },
    {
      name: 'Recipe 3',
      description: 'This is recipe #3',
      imgPath:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=960,872?quality=90&webp=true&resize=600,545',
    },
    {
      name: 'Recipe 4',
      description: 'This is recipe #4',
      imgPath:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=960,872?quality=90&webp=true&resize=600,545',
    },
    {
      name: 'Recipe 5',
      description: 'This is recipe #5',
      imgPath:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=960,872?quality=90&webp=true&resize=600,545',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
