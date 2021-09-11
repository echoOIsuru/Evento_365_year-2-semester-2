import axios from 'axios';

const RENTALITEM_API_BASE_URL = "http://localhost:8080/api/v1/rentalitems";
const TEMPORARYITEMCART_API_BASE_URL = "http://localhost:8080/api/v1/temporaryitems"
const RETRIEVE_ITEMS_API_BASE_URL = "http://localhost:8080/api/v1/retrieveitems"
const HISTORY_API_BASE_URL = "http://localhost:8080/api/v1/itemrents"
const UPDATE_AVAILABLE_API_BASE_URL = "http://localhost:8080/api/v1/updateavailable"

class RentalItemService{

    getRentalItems(){
        return axios.get(RENTALITEM_API_BASE_URL);
    }

    createItem(rentalitem){
            return axios.post(RENTALITEM_API_BASE_URL, rentalitem);
    }

    getItemsById(rentalitemid){
        return axios.get(RENTALITEM_API_BASE_URL + '/' + rentalitemid);
    }

    updateItem(rentalitem, rentalitemid){
        return axios.put(RENTALITEM_API_BASE_URL + '/' + rentalitemid, rentalitem);
    }

    updateAvailable(rentalitem, rentalitemid){
        return axios.put(UPDATE_AVAILABLE_API_BASE_URL + '/' + rentalitemid, rentalitem);
    }

    deleteItem(rentalitemid){
        return axios.delete(RENTALITEM_API_BASE_URL + '/' + rentalitemid);
    }

    getTemporaryItems(){
        return axios.get(TEMPORARYITEMCART_API_BASE_URL);
    }

    //retrieve items according to the booking_id
    retrieveItems(booking_id){
        return axios.get(RETRIEVE_ITEMS_API_BASE_URL + '/' + booking_id);
    }

    /*createTemporaryItemCart(createTemporaryItemCart){
        return axios.post(TEMPORARYITEMCART_API_BASE_URL, createTemporaryItemCart);
    }*/

    createTemporaryItemCart(temporaryitem){
        return axios.post(TEMPORARYITEMCART_API_BASE_URL, temporaryitem);
    }

    deleteTemporaryitem(rentalid){
        return axios.delete(TEMPORARYITEMCART_API_BASE_URL + '/' + rentalid)
    }

    createRentHistory(rent){
        return axios.post(HISTORY_API_BASE_URL, rent);
    }
}

export default new RentalItemService()