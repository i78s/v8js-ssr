import * as types from "./mutation-types";
import axios from "axios/index";

export const fetchList = ({ commit }) => {
  return axios.get('api/posts')
    .then(res => {
      const posts = res.data;
      commit(types.UPDATE_POSTS, { posts })
    });
};
