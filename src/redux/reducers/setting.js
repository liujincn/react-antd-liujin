const initialState = {
  isCollapsed: false,
}
const collapse = (state = initialState, action) => {
  switch (action.type) {
    case 'setCollapse':
      return action.data;
    default:
      return state;
  }
};
export { collapse };

