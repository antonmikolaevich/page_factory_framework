const BasePage = require('./base.page');
const { AddDoctorModal, DoctorListHeader, SpecialistCard, SideMenu, DoctorsDetails } = require('../components');

class DoctorsPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/doctors');
    this.addDoctorModal = new AddDoctorModal();
    this.sideMenu = new SideMenu();
    this.doctorListHeader = new DoctorListHeader();
    this.doctorsDetails = new DoctorsDetails();
  }

  specialistCard(id) {
    return new SpecialistCard(id);
  }
}

module.exports = DoctorsPage;
