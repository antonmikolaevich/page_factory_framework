const BaseComponent = require('../common/base.component');

class SpecialistCardComponent extends BaseComponent {
  constructor(id) {
    super(`#Specialist_${id}`);
  }

  get name() {
    return this.rootEl.$('.name');
  }

}

module.exports = SpecialistCardComponent;
