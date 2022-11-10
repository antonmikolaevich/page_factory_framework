const BaseComponent = require('../common/base.component');

class ListHeaderComponent extends BaseComponent {
  constructor() {
    super('.specialization-types');
  }

  get addNewDoctorBtn() {
    return this.rootEl.$('//button[text()="Add New Doctor"]');
  }
}

module.exports = ListHeaderComponent;
