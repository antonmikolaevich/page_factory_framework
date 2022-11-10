const BaseComponent = require('../common/base.component');

class DoctorsAvailability extends BaseComponent {
  constructor() {
    super('div.doctor-availability');
  }

  get viewAllBtn() {
    return this.rootEl.$('//a[@routerlink="/doctors"]');
  }

  get firstDoctor() {
    return this.rootEl.$('div[class="doctor-availability"] ul[class="e-list-parent e-ul "] > :first-child');
  }
}

module.exports = DoctorsAvailability;