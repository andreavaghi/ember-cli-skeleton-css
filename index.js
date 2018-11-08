/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-skeleton-css',

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/skeleton/css/normalize.css');
    app.import('vendor/skeleton/css/skeleton.css');
  }
};
