const BaseComponent = require('../common/base.component');

class Consultation extends BaseComponent {
  constructor() {
    super('#chartcontainer_svg');
  }

  get firstChartLegend() {
    return this.rootEl.$('text[id="chartcontainer_chart_legend_text_0"]');
  }
}

module.exports = Consultation;