import axios from "axios";

const FOOD_API_BASE_URL = "http://localhost:8099/api/v1/food"
const BOOKFOOD_API_BASE_URL = "http://localhost:8099/api/v1/bookFoods"
const CONFIRMFOOD_API_BASE_URL = "http://localhost:8099/api/v1/confirmfood"
const BOOKFOOD_CONFIRM_API_BASE_URL = "http://localhost:8099/api/v1/retrieveconfirmfood"
const FOODPACKAGE_API_BASE_URL = "http://localhost:8099/api/v1/retrievefood2"
const SEARCH_FOODPACKAGE_API_BASE_URL = "http://localhost:8099/api/v1/foods/search"

class FoodService{

    getConfirmFoodpackages(id){
        return axios.get(BOOKFOOD_CONFIRM_API_BASE_URL +'/'+ id);
    }

    getFoodpackages(id){
        return axios.get(FOODPACKAGE_API_BASE_URL +'/'+ id);
    }

    createBookFood(bookFood){
        return axios.post(BOOKFOOD_API_BASE_URL, bookFood);
        
    }

    createconfirmfood(booking_id){
        return axios.post(CONFIRMFOOD_API_BASE_URL, booking_id);
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

    deletebookfood(order_food_id){
        return axios.delete(BOOKFOOD_API_BASE_URL + '/' + order_food_id);
    }

    getSearchfood(fvalue){
        return axios.get(SEARCH_FOODPACKAGE_API_BASE_URL + '/' + fvalue); 
    }
    
}

export default new FoodService()