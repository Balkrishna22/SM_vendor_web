import { DataService } from "./dataService";

const enquiryService = {
  getEnquiry: async (data) => {
    return DataService.get("/vendor/list-quote", data);
  },
  quoteServiceupdate: async (data) => {
    return DataService.put("/vendor/reply-quote", data);
  },

  quoteUpdate: async (data) => {
    return DataService.put("/vendor/reply-quote-message", data);
  },
  getExclusiveEnquiry: async (data) => {
    return DataService.get("/vendor/list-exclusive-quote", data);
  },

  addQuoteEnquiry: async (data) => {
    return DataService.post("/vendor/add-quote-by-vendor", data);
  },

  
};

export default enquiryService;
