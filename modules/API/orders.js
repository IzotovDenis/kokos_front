import { apiGet, apiPost } from "./methods";

const default_url = `/orders`;

export default {
  create: body => {
    return apiPost(`${default_url}`, body);
  },
  getCartItems: body => {
    return apiPost(`${default_url}/getOrderItems`, body);
  }
};
