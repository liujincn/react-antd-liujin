const initialState =
  [
    {
      title: '首页',
      path: '/home'
    },
  ]

const tagList = (state = initialState, action) => {
  switch (action.type) {
    case 'addTag':
      let arr = state.concat(action.data);
      let hash = {};
      arr = arr.reduce((item, next) => {
        /* eslint-disable */
        hash[next.path] ? '' : (hash[next.path] = true && item.push(next));
        return item;
      }, []);
      return arr;
      break;

    case 'closeTag':
      return action.data
      break;

    case 'closeAllTag':
      console.log(initialState)
      return initialState
      break;

    default:
      return state;
  }
};
export { tagList };

