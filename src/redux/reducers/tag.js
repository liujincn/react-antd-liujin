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
      return initialState
      break;
    case 'closeLeftTag':
      console.log(action.data)
      return action.data
      break;

    default:
      return state;
  }
};
export { tagList };

