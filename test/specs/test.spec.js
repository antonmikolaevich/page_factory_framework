const { page } = require('../../po');

describe("Practical Task_Introduction to WebdriverIO", () => {
  beforeEach(async () => {
    await page('dashboard').open();
  });

  it("should display logout button", async () => {
    await expect(page('dashboard').header.logoutBtn).toBeDisplayed();
  });

  it("left panel button should be selected when some page from it is opened not from the panel", async () => {
    await page('dashboard').doctorsAvailability.viewAllBtn.click();

    await expect(page('doctors').sideMenu.item('doctors')).toHaveElementClassContaining('sidebar-item doctors active-item');
  });

  it("radiobutton should be checked", async () => {
    await page('dashboard').sideMenu.item('doctors').click();
    await page('doctors').doctorListHeader.addNewDoctorBtn.click()
    await page('doctors').addDoctorModal.femaleRadioBtn.click();

    await expect(page('doctors').addDoctorModal.femaleRadioOption).toBeSelected();
  });

  it("should display 6 li items when clicked on dropdown", async () => {
    await page('dashboard').sideMenu.item('doctors').click();
    await page('doctors').doctorListHeader.addNewDoctorBtn.click();
    await page('doctors').addDoctorModal.departmentDropdown.click();

    await expect(page('doctors').addDoctorModal.departmentDropdownList).toBeElementsArrayOfSize(6);
  });
});

describe("Practical Task_WebdriverIO's Basic commands", () => {

  beforeEach(async () => {
    await page('dashboard').open();
  });

  it("should list item background color gray when hovered", async () => {
    await page('dashboard').doctorsAvailability.firstDoctor.moveTo();
    const liBgColor = await page('dashboard').doctorsAvailability.firstDoctor.getCSSProperty('background-color');
    
    await expect(liBgColor.parsed.hex).toEqual('#f5f5f5');
  });

  it("should gray out chart legend after click on it", async () => {
    await page('dashboard').consultation.firstChartLegend.click();
    const buttonColor = await page('dashboard').consultation.firstChartLegend.getCSSProperty('fill');

    await expect(buttonColor.parsed.hex).toEqual('#d3d3d3');
  });

  it("should open specialists profile", async () => {
    await page('doctors').open();
    const specialistsName = await page('doctors').specialistCard(1).name.getText();
    await page('doctors').specialistCard(1).rootEl.click();

    await expect(await page('doctors').doctorsDetails.doctorsName.getText()).toEqual(specialistsName);
  });

  it("should save a screenshot of the page element", async () => {
    await page('dashboard').counters.todaysCounter.saveScreenshot('./elementScreenshot.png')
  });
  
});

describe("Practical Task_WebdriverIO's Advanced commands", () => {

  beforeEach(async () => {
    await page('dashboard').open();
  });

  it("should not change cell size if a cell has a lot of text", async () => {
    const doctor = await page('dashboard').apointmentsTable.cell(1, 3);
    await browser.execute(function(doctor) {
      doctor.textContent  = "VeryVeryVeryVeryVeryVeryVeryVeryLongText"; //How to check '...'?
    }, doctor);

    await browser.pause(5000)
    await expect(await doctor.nextElement().isDisplayedInViewport()).toEqual(true);
  });

  it("should wait until value is set", async () => {
    await page('dashboard').sideMenu.item('doctors').click();
    await page('doctors').doctorListHeader.addNewDoctorBtn.click();

    setTimeout(async () => {
      await page('doctors').addDoctorModal.input('name').setValue('Hooray')
    }, 1500);

    await browser.waitUntil(
      async function () {
      return (await page('doctors').addDoctorModal.input('name').getValue() === 'Hooray')
    }, {
      timeout: 5000,
      timeoutMsg: 'expected text to be different after 5s'
    });
  });

    it("shoud change text color to black after doubleclick a chart legend button", async () => {
    await page('dashboard').consultation.firstChartLegend.doubleClick();
    const buttonColor = await page('dashboard').consultation.firstChartLegend.getCSSProperty('fill');

    await expect(buttonColor.parsed.hex).toEqual('#353535');
  });
});