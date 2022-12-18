/* eslint global-require: 0 */
let typer = { VueTyper: { render: () => '' } };

if (process.isClient) {
  typer = require('vue-typer');
}

module.exports = typer;
