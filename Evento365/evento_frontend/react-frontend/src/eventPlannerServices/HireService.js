
import  axios from 'axios';
const Hire_Api_Base_URL= "http://localhost:8090/api/v1/Hiring"
const Hire_Api_Base_URL2= "http://localhost:8090/api/v1/Hiring2"
class HireService{


gethiring(){

    return axios.get(Hire_Api_Base_URL);
}

    createHire(hire){

        return axios.post(Hire_Api_Base_URL,hire);
    }

    getHireById(hireId){
      return axios.get(Hire_Api_Base_URL + '/' + hireId);
    }
  
    getHireByDate(date){
        return axios.get(Hire_Api_Base_URL2 +'?date='+date);
    }

    updateHiring(hire,hireId){

       return axios.put(Hire_Api_Base_URL+ '/' + hireId,hire);

    }



    deleteHiring(hireId){
       
        return axios.delete(Hire_Api_Base_URL + '/' + hireId);
    }
    
}

export default new HireService()