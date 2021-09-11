import axios from "axios";

const VRENT_API_BASE_URL = "http://localhost:8090/api/v1/vehicleRents";

class VehicleRentService{

    getVehicleRent(){
        return axios.get(VRENT_API_BASE_URL);
    }
    createRent(rent){
        return axios.post(VRENT_API_BASE_URL, rent);
    }
}

export default new VehicleRentService()