const addTag = data => {
  return {
    type: 'addTag',
    data
  }
};
const closeTag = data => {
  return {
    type: 'closeTag',
    data
  };
};
const closeAllTag = data => {
  return {
    type: 'closeAllTag',
    data
  };
};
const closeLeftTag = data => {
  return {
    type: 'closeLeftTag',
    data
  };
};

export { addTag, closeTag, closeAllTag, closeLeftTag }
