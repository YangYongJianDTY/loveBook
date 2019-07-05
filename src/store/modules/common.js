import { HEADER_TITLE } from "../mutation-types";

const state = {
  systemName: '书籍阅读',
  headerTitle: '',
}

const mutations = {
  [HEADER_TITLE](state, newData){
    state.headerTitle = newData;
  }
}

export default {
  state,
  mutations
}
