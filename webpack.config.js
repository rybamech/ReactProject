const path = require('path');

module.exports = () => {
  return {
    context: __dirname,
    entry: {
      concted: ['./app.js','./app1.js']
    },
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, './dist')
    }
  };
};
