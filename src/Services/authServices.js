import { DataService } from "./dataService";
const authServices = {
  registration_first: async (data) => {
    return DataService.post("/vendor/personal-details", data);
  },

  registration_second: async (data) => {
    return DataService.put("/vendor/business-details", data);
  },

  registration_third: async (data) => {
    return DataService.put("/vendor/business-verification", data);
  },
  // http://192.168.1.162:8000/api/vendor/launch/sign-in
  //vendor lunch

  login: async (data) => {
    return DataService.post("/api/vendor/vendor-log-in", data);
  },
  register: async (data) => {
    return DataService.post("/api/vendor/vendor-registration", data);
  },
  register_market: async (data) => {
    return DataService.post("/api/market/register-market-vendor", data);
  },
  enquiryForm: async (data) => {
    return DataService.post("/api/vendor/vendor-promotion", data);
  },
  // login: async (data) => {
  //   return DataService.post("/vendor/launch/sign-in", data);
  // },
  registration_launch_first: async (data) => {
    return DataService.put("/vendor/launch/personal-details", data);
  },
  registration_launch_second: async (data) => {
    return DataService.put("/vendor/launch/business-details", data);
  },
  registration_launch_third: async (data) => {
    return DataService.put("/vendor/launch/business-verification", data);
  },
};
export default authServices;
