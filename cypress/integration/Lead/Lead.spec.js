import LeadPage from "../../pages/leadPage"
import LoginPage from "../../pages/loginPage"
import { ContactName, organizationName, phoneNumber, name} from "../../fixtures/helpers/constants"

const leadPage = new LeadPage();
const loginPage = new LoginPage();



describe('Lead Smoke Test Cases', () => {

  beforeEach('Login Application',()=>{

    cy.visit('https://neova.pipedrive.com/leads/inbox');
    loginPage.loginApplication();
    loginPage.waitforPageToLoad();
  })

  it('Creating a Lead', () => {

    leadPage.clickOnAddLeadButton();
    leadPage.verifyAddModalPopupAppears();
    leadPage.enterAllInputDetails(ContactName, name, organizationName, phoneNumber);
    leadPage.clickOnSaveButton();
    leadPage.verifyLeadIsPresentInLeadList(organizationName);

  })

  it('Archive a lead', ()=> {

    leadPage.verifyLeadIsPresentInLeadList(organizationName);
    leadPage.selectLead(organizationName);
    leadPage.verifyCreatedPopupAppears(organizationName);
    leadPage.archiveLead(organizationName);
    leadPage.clickOnArchiveIcon();
    leadPage.verifyLeadIsPresentInLeadList(organizationName);

  })

  it('Unarchive a Lead', ()=> {

    leadPage.clickOnArchiveIcon();
    leadPage.verifyLeadIsPresentInLeadList(organizationName);
    leadPage.selectLead(organizationName);
    leadPage.clickOnUnarchiveButton();
    leadPage.clickOnInboxIcon();
    leadPage.verifyLeadIsPresentInLeadList(organizationName);

  })
})