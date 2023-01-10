import axios from "axios";
import Utils from "../utils";

export class Loading {

  constructor(show = false, loadApi = false) {
    this.show = Boolean(show);
    this.loadApi = Boolean(loadApi);
  }

}

export async function stacRequest(cx, link) {
  let opts;
  let headers = {
    'Accept-Language': cx.acceptedLanguages
  };
  Object.assign(headers, cx.state.requestHeaders);
  if (Utils.isObject(link)) {
    let method = typeof link.method === 'string' ? link.method.toLowerCase() : 'get';
    if (Utils.isObject(link.headers)) {
      Object.assign(headers, link.headers);
    }
    opts = {
      method,
      url: cx.getters.getRequestUrl(link.href),
      headers,
      data: link.body
      // ToDo: Support for merge property from STAC API
    };
  }
  else if (typeof link === 'string') {
    opts = {
      method: 'get',
      url: cx.getters.getRequestUrl(link),
      headers
    };
  }
  else {
    opts = link;
  }
  return await axios(opts);
}

export function processSTAC(state, stac) {
  if (typeof state.preprocessSTAC === 'function') {
    stac = state.preprocessSTAC(stac, state);
  }
  return Object.freeze(stac);
}

export function isAuthenticationError(error) {
  return [401, 403].includes(error?.response?.status);
}

export function addQueryIfNotExists(uri, query) {
  if (Utils.size(query) == 0) {
    return uri;
  }
  for (let key in query) {
    if (!uri.hasQuery(key)) {
      uri.addQuery(key, query[key]);
    }
  }
  return uri;
}