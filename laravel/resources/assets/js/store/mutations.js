import * as types from "./mutation-types";

export default {
  [types.UPDATE_POSTS](state, { posts }) {
    state.posts = posts;
  }
}

