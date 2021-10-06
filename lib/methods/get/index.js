const org = require('./org');
const vdDaireler = require('./vdDaireler');
const vdIller = require('./vdIller');

module.exports = ({ connector }) => ({
  org: org({ connector }),
  vdDaireler: vdDaireler({ connector }),
  vdIller: vdIller({ connector }),
});
