import { DataService } from "./dataService";

const eventService = {
  get_events: async (data) => {
    return DataService.get("/vendor/get-event", data);
  },
  add_events: async (data) => {
    return DataService.post("/vendor/add-event", data);
  },
  update_events: async (data) => {
    return DataService.put("/vendor/update-event", data);
  },
  delete_events: async (data) => {
    return DataService.delete(
      "/vendor/delete-event?event_id=" + data.event_id,
      data
    );
  },
  get_states: async (data) => {
    return DataService.get("/api/static/list-states");
  },
  get_city: async (data = "") => {
    return DataService.get("/api/static/list-cities?state=" + data.state);
  },
  get_business: async (data) => {
    return DataService.get("/api/static/list-businesses", data);
  },
  get_services: async (data) => {
    return DataService.get(
      "/api/static/list-services?business_type=" + data.business_type
    );
  },
  get_cities: async () => {
    return DataService.get("/api/static/list-cities");
  },
};

export default eventService;
