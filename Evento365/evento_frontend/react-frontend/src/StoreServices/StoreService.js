import axios from 'axios';

const STORE_API_BASE_URL = "http://localhost:8080/api/v1/stores";
const ORDER_API_BASE_URL = "http://localhost:8080/api/v1/orders";
const ITEMPACKAGE_API_BASE_URL = "http://localhost:8080/api/v1/retrieveStores";
const SEARCH_API_REST_URL="http://localhost:8080/api/v1/store/search";

class StoreService{

   getStores(){
        return axios.get(STORE_API_BASE_URL);
    }

     searchStores(keyword){
        return axios.get(SEARCH_API_REST_URL+ '/' +keyword);
    }
    
    createStore(store){
        return axios.post(STORE_API_BASE_URL,store);
    }
    createOrder(order){
        return axios.post(ORDER_API_BASE_URL,order);
    }
    getStoresById(storeId){
        return axios.get(STORE_API_BASE_URL + '/' + storeId);
    }
    getItemsById(itemId){
        return axios.get(STORE_API_BASE_URL + '/' + itemId);
    }

    getItempackages(itemCategory){
        return axios.get(ITEMPACKAGE_API_BASE_URL + '/' + itemCategory);
    }

    updateStore(store, storeId){
        return axios.put(STORE_API_BASE_URL + '/' + storeId, store);
    }
   deleteStore(storeId){
        return axios.delete(STORE_API_BASE_URL + '/' + storeId);
    }
   
}

//export object of StoreService.Not going to import a class
export default new StoreService();