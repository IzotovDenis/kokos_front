import { combineReducers } from "redux";
import catalog from "./catalog";
import cart from "./cart";
import user from "./user";
import group from "./group";
import posts from "./posts";
import mobileMenu from "./mobileMenu";
import item from "./item";

export default combineReducers({
  catalog,
  cart,
  user,
  group,
  posts,
  mobileMenu,
  item
});
