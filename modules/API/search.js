import { apiPost } from "./methods";

const default_url = `/search`;

export default {
  index: body => {
    return apiPost(`${default_url}`, body);
  }
};
