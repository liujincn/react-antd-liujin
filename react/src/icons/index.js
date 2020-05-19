const path = require('path');
const Svgs = {};
const req = require.context('./svg', false, /\.svg$/);
const requireAll = req =>
  req.keys().map(filePath => {
    return (Svgs[path.basename(filePath, '.svg')] = req(filePath))
  });
requireAll(req);

export default Svgs
