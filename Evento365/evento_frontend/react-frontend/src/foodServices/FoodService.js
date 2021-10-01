import axios from "axios";

const FOOD_API_BASE_URL = "http://localhost:8099/api/v1/food"
const BOOKFOOD_API_BASE_URL = "http://localhost:8099/api/v1/bookFoods"
const FOODPACKAGE_API_BASE_URL = "http://localhost:8099/api/v1/retrievefood2"
const SEARCH_FOODPACKAGE_API_BASE_URL = "http://localhost:8099/api/v1/foods/search"

class FoodService{

    getFoodpackages(id){
        return axios.get(FOODPACKAGE_API_BASE_URL +'/'+ id);
    }

    createBookFood(bookFood){
        return axios.post(BOOKFOOD_API_BASE_URL, bookFood);
        
    }
  
    getFood(){
        return axios.get(FOOD_API_BASE_URL);
    }

    createFood(food){
        return axios.post(FOOD_API_BASE_URL, food);
        
    }

    getFoodByIdtwo(foodid){
        return axios.get(FOOD_API_BASE_URL + '/' + foodid);
    }

    getFoodById(foodid){
        return axios.get(FOOD_API_BASE_URL + '/' + foodid);
    }

    updateFood(food, foodid){
        return axios.put(FOOD_API_BASE_URL + '/' + foodid, food);
    }

    deleteFood(foodid){
        return axios.delete(FOOD_API_BASE_URL + '/' + foodid);
    }

    getSearchfood(fvalue){
        return axios.get(SEARCH_FOODPACKAGE_API_BASE_URL + '/' + fvalue); 
    }
    
}

export default new FoodService()