export default {
  get() {
    return document.title;
  },
  set(title) {
    document.title = title;
  },
};
