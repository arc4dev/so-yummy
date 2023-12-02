import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import axios from 'axios';

const HomePage = () => {
  useEffect(() => {
    const fetchCategories = async () => {
      type Category = {
        strCategory: string;
      };

      type CategoriesResponse = {
        meals: Category[];
      };

      type RecipeByCategoryResponse = {
        meals: Recipe[];
      };

      type Recipe = {
        idMeal: string;
        strMeal: string;
        strMealThumb: string;
      };

      // --- START ---

      try {
        const res = await axios.get<CategoriesResponse>(
          'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
        );

        // Create an array of promises to fetch recipes by category
        const recipesPromiseArr = res.data.meals.map((category) =>
          axios.get<RecipeByCategoryResponse>(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`
          )
        );

        // Resolve all promises to get an array of recipes by categories
        const recipesByCategories = await Promise.all(recipesPromiseArr);

        // Create an array of objects with category name and recipes
        const categorizedRecipes = res.data.meals.map((category, index) => {
          return {
            category: category.strCategory,
            recipes: recipesByCategories[index].data.meals,
          };
        });

        console.log(categorizedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <HeroSection />
      <section></section>
    </div>
  );
};

export default HomePage;
