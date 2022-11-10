const Header = require('./common/header.component');
const SideMenu = require('./common/sidemenu.component');

const AddDoctorModal = require('./doctors/add-doctor.component');
const DoctorListHeader = require('./doctors/list-header.component');
const SpecialistCard = require('./doctors/specialist-card.component');
const DoctorsDetails = require('./doctors/doctors-details.component');

const DoctorsAvailability = require('./dashboard/doctors-availability.component');
const Consultation = require('./dashboard/consultation.component');
const Counters = require('./dashboard/counters.component');
const ApointmentsTable = require('./dashboard/apointments-table.component');

module.exports = {
  Header,
  SideMenu,
  AddDoctorModal,
  DoctorListHeader,
  SpecialistCard,
  DoctorsAvailability,
  Consultation,
  DoctorsDetails,
  Counters,
  ApointmentsTable
};
