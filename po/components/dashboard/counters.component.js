const BaseComponent = require('../common/base.component');

class Counters extends BaseComponent {
  constructor() {
    super('div[class="row"]:has(div[class="e-card card day-events-container"])');
  }

  get todaysCounter() {
    return this.rootEl.$('div[class="e-card card day-events-container"]');
  }
}

module.exports = Counters;