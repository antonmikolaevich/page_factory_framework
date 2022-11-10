const BaseComponent = require('../common/base.component');

class ApointmentsTable extends BaseComponent {
  constructor() {
    super('div[class="e-gridcontent e-responsive-header"]');
  }

  cell(row, column) {
    return this.rootEl.$(`tr:nth-child(${row})`).$(`td:nth-child(${column})`);
  }
}

module.exports = ApointmentsTable;