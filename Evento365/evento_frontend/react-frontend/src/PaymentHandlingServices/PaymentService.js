import axios from 'axios';

const PAYMENT_API_BASE_URL = "http://localhost:8080/api/v1/payments";
const CUSTOMER_API_BASE_URL = "http://localhost:8080/api/v1/customer";

class PaymentService{

    getPayments(){
        return axios.get(PAYMENT_API_BASE_URL);
    }

    placeorder(payorder){
        return axios.post(PAYMENT_API_BASE_URL, payorder);
    }

    MakePayment(Payment){
        return axios.post(PAYMENT_API_BASE_URL, Payment);
    }

    getPaymentById(paymentID){

        return axios.get(PAYMENT_API_BASE_URL + '/' + paymentID);

    }

    getCustomerById(customerId){
        return axios.get(CUSTOMER_API_BASE_URL+ '/' + customerId);
        }

    updatePayments(Payment,paymentID){

        return axios.put(PAYMENT_API_BASE_URL + '/' + paymentID, Payment);

    }

    deletePayment(paymentID){

        return axios.delete(PAYMENT_API_BASE_URL + '/' + paymentID);

    }

    getPaymentsByCus(cusID){

        //http://localhost:8080/api/v1/payments/customerId?customerId=C0011
        return axios.get(PAYMENT_API_BASE_URL + '/' +'customerId'+'?'+'customerId'+'='+ cusID); 

    }

}

export default new PaymentService()