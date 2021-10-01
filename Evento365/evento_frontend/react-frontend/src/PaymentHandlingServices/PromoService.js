import axios from 'axios';

const PROMO_API_BASE_URL = "http://localhost:8080/api/v1/promocodes";

class PromoService{

    getPromocodes(){
        return axios.get(PROMO_API_BASE_URL);
    }

    AddPromocodes(Promo){
        return axios.post(PROMO_API_BASE_URL, Promo);
    }

    getPromocodeById(promo_ID){

        return axios.get(PROMO_API_BASE_URL + '/' + promo_ID);
    }

    getPromocodeBycode(code){
        //if the below link gone wrong, correct accordingly to this sample = http://localhost:8080/api/v1/promocodes/code?code=Lily404   'code?code='+
        //return axios.get(PROMO_API_BASE_URL + '/' + code);
        return axios.get(PROMO_API_BASE_URL + '/' +'code'+'?'+'code'+'='+ code);
    }

    updatePromocode(Promo,promo_ID){

        return axios.put(PROMO_API_BASE_URL + '/' + promo_ID, Promo);

    }

    deletePromocode(promo_ID){

        return axios.delete(PROMO_API_BASE_URL + '/' + promo_ID);

    }

    searchPromos(keyword){
        return axios.get(PROMO_API_BASE_URL + '/search/' + keyword);
    }

}

export default new PromoService()