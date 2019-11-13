export const state = () => ({
  ogDescription: "Evidencia de lo que está pasando en Chile"
});

export const mutations = {
  changeOgDescription (state, text) {
    state.ogDescription = text;
  }
};
