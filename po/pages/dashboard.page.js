const BasePage = require('./base.page');
const { SideMenu, DoctorsAvailability, Consultation, Counters, ApointmentsTable } = require('../components');

class DashboardPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/dashboard');
    this.sideMenu = new SideMenu();
    this.doctorsAvailability = new DoctorsAvailability();
    this.consultation = new Consultation();
    this.counters = new Counters();
    this.apointmentsTable = new ApointmentsTable();
  }
}

module.exports = DashboardPage;
