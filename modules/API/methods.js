import axios from "axios";
import Cookies from "js-cookie";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const HOST = publicRuntimeConfig.appApi;

function buildUri(path, data = {}, token = undefined) {
  let promise = new Promise((resolve, reject) => {
    try {
      let request_token = Cookies.get("token") || token || undefined;
      if (request_token) {
        data.token = request_token;
      }
      let params = [];
      let url = `${HOST}${path}`;
      for (let d in data) {
        params.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
      }
      let str = params.join("&");
      resolve(`${url}?${str}`);
    } catch (e) {
      reject(e);
    }
  });
  return promise;
}

function apiGet(uri, params = undefined, token = undefined) {
  let promise = new Promise(async (resolve, reject) => {
    let url = await buildUri(uri, params, token);
    axios
      .get(url)
      .then(response => {
        resolve(response.data);
      })
      .catch(e => reject(e));
  });
  return promise;
}

function apiPost(uri, body) {
  let promise = new Promise(async (resolve, reject) => {
    let url = await buildUri(uri);
    axios
      .post(url, body)
      .then(response => {
        resolve(response.data);
      })
      .catch(e => reject(e));
  });
  return promise;
}

function apiPatch(uri, body) {
  let promise = new Promise(async (resolve, reject) => {
    let url = await buildUri(uri);
    axios
      .patch(url, body)
      .then(response => {
        resolve(response.data);
      })
      .catch(e => reject(e));
  });
  return promise;
}

export { apiGet, apiPost, apiPatch };
