import { DataService } from "./dataService";

const masterServices = {
  get_customer: async (data) => {
    return DataService.get("/admin/list-users", data);
  },
  get_user_details: async (data) => {
    return DataService.get("/admin/get-user-details", data);
  },
  update_customer_status: async (data) => {
    return DataService.patch("/admin/update-user-status", data);
  },

  //Services

  get_services: async (data) => {
    return DataService.get("/vendor/list-services", data);
  },
  update_service_status: async (data) => {
    return DataService.patch("/admin/update-service-status", data);
  },
  add_services: async (data) => {
    return DataService.post("/admin/add-service", data);
  },

  update_services: async (data) => {
    return DataService.put("/admin/update-service", data);
  },

  delete_service: async (data) => {
    return DataService.delete("/admin/delete-service", data);
  },

  // Subscription
  get_subscription: async (data) => {
    return DataService.get("/admin/list-subscriptions", data);
  },
  update_subscription_status: async (data) => {
    return DataService.patch("/admin/update-subscription-status", data);
  },
};

export default masterServices;
