export const state = () => ({
  ogDescription: "Evidencia de lo que está pasando en Chile",
  currentPage: 1
});

export const mutations = {
  changeOgDescription(state, text) {
    state.ogDescription = text;
  },
  setCurrentPage(state, page) {
    state.currentPage = page;
  }
};
