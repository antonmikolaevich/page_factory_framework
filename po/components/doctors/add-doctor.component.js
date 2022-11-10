const BaseComponent = require('../common/base.component');

class AddDoctorComponent extends BaseComponent {
  constructor() {
    super('.new-doctor-dialog');
  }

  get closeBtn() {
    return this.rootEl.$('.button-container button.e-btn:not(.e-primary)');
  }

  get saveBtn() {
    return this.rootEl.$('.button-container button.e-primary');
  }

  get femaleRadioBtn() {
    return this.rootEl.$('//label[@for="patientCheckFemale"]');
  }

  get femaleRadioOption() {
    return this.rootEl.$('input[value="Female"]');
  }
  
  get departmentDropdown() {
    return this.rootEl.$('div[class="e-float-input e-control-wrapper e-input-group doctor-department e-field e-ddl e-lib e-keyboard e-valid-input"]');
  }

  get departmentDropdownList() {
    return $$('ul[id=Specialization_options] li');
  }

  /**
   * @param name {'name' | 'phone' | 'email' | 'education' | 'designation'}
   */
  input(name) {
    const selectors = {
      name: '#Name input',
      phone: 'input#DoctorMobile',
      email: 'input[name="Email"]',
      education: 'input[name="Education"]',
      designation: 'input[name="Designation"]',
    };

    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = AddDoctorComponent;
