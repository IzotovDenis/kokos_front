import { apiGet, apiPost } from "./methods";

const default_url = `/discounts`;

export default {
  index: () => {
    return apiGet(`${default_url}`);
  },
  show: id => {
    return apiGet(`${default_url}/${id}`);
  }
};
