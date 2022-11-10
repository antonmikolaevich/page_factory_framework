const BaseComponent = require('../common/base.component');

class DoctorsDetails extends BaseComponent {
  constructor() {
    super('div.doctor-details-container');
  }

  get doctorsName() {
    return this.rootEl.$('div.name');
  }
}

module.exports = DoctorsDetails;
