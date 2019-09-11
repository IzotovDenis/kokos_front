import { actionTypes } from "../store/actionTypes";
import API from "modules/API";

function getCatalog() {
  return API.groups.index();
}

export function setCatalog(catalog) {
  return {
    type: actionTypes.SET_CATALOG,
    catalog: catalog
  };
}

export function actionGetCatalog() {
  return function(dispatch) {
    return getCatalog()
      .then(catalog => dispatch(setCatalog(catalog)))
      .catch(error => console.log(error));
  };
}

export function tougleNode(nodeId) {
  return {
    type: actionTypes.TOUGLE_NODE,
    nodeId: nodeId
  };
}
