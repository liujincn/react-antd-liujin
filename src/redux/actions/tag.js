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

export { addTag, closeTag, closeAllTag }
