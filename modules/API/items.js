import { apiGet, apiPost } from "./methods";

const default_url = `/items`;

export default {
  show: id => {
    return apiGet(`${default_url}/${id}`);
  },
  popular: () => {
    return apiGet(`${default_url}/rand`);
  }
};
