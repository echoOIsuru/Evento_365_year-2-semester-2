import axios from 'axios';

const VEHICLE_API_BASE_URL = "http://localhost:8090/api/v1/vehicles";
const VEHICLE_API_AVILABLE_URL = "http://localhost:8090/api/v1/available";
const VEHICLE_API_SEARCH_URL = "http://localhost:8090/api/v1//vehicles/search";


class VehicleService{

    getVehicles(){
        return axios.get(VEHICLE_API_BASE_URL);
    }

    createVehicle(vehicle){
        return axios.post(VEHICLE_API_BASE_URL, vehicle);
    }

    getVehicleById(vehicleId){
        return axios.get(VEHICLE_API_BASE_URL + '/' + vehicleId);
    }

    updateVehicle(vehicle,vehicleId){
        return axios.put(VEHICLE_API_BASE_URL + '/' + vehicleId,vehicle);
    }

    deleteVehicle(vehicleId){
        return axios.delete(VEHICLE_API_BASE_URL + '/' + vehicleId);
    }

    getAvailableVehicles(){
        return axios.get(VEHICLE_API_AVILABLE_URL);
    }
    searchVehicle(keyword){
        return axios.get(VEHICLE_API_SEARCH_URL + '/' + keyword);
    }


}

export default new VehicleService()