import { LEAD_PAGE } from "../fixtures/locators"

export default class LeadPage {

    //Getter Methods

    getAddLeadButton() {
        return cy.get(LEAD_PAGE.ADD_LEAD_BUTTON)
    }

    getAddModal() {
        return cy.get(LEAD_PAGE.ADD_MODAL)
    }

    getInputDetails() {
        return cy.get(LEAD_PAGE.MODAL_INPUT_BOX)
    }

    getTitleInputDetails() {
        return cy.get(LEAD_PAGE.INPUT_TITLE_KEY)
    }

    getOtherInputDetails() {
        return cy.get(LEAD_PAGE.PHONE_NUMBER_INPUT_KEY)
    }

    getSaveButton() {
        return cy.get(LEAD_PAGE.SAVE_BUTTON)
    }

    getRowInputPage() {
        return cy.get(LEAD_PAGE.ROW_PAGE)
    }

    getArchiveButton() {
        return cy.get(LEAD_PAGE.ARCHIVE_BUTTON)
    }

    getArchiveIcon() {
        return cy.get(LEAD_PAGE.ARCHIVE_ICON)
    }

    getUnarchiveButton() {
        return cy.get(LEAD_PAGE.UNARCHIVE_BUTTON)
    }

    getCreatedPopup() {
        return cy.get(LEAD_PAGE.CREATED_POPUP)
    }

    getInboxIcon() {
        return cy.get(LEAD_PAGE.INBOX_ICON)
    }

    //Action Methods

    clickOnAddLeadButton() {
        cy.intercept('POST','/v1/t').as('addModal')
        this.getAddLeadButton().should('be.visible').click();
        cy.wait('@addModal')
    }

    enterAllInputDetails(contactName, leadName, organizationName, phoneNumber) {
        this.getInputDetails().eq(0).should('be.visible').clear().type(contactName);
        this.getInputDetails().eq(1).should('be.visible').clear().type(leadName);
        this.getTitleInputDetails().should('be.visible').clear().type(organizationName);
        this.getOtherInputDetails().should('be.visible').type(phoneNumber);
    }

    clickOnSaveButton() {
        cy.intercept('POST','/v1/t').as('saveLead')
        this.getSaveButton().should('be.visible').click();
        cy.wait('@saveLead')
    }

    selectLead(organizationName) {
        cy.intercept('POST','/v1/t').as('openModal')
        this.getRowInputPage().contains(organizationName).click();
        cy.wait('@openModal')
    }

    archiveLead(organizationName) {
        this.selectLead(organizationName);
        cy.intercept('POST','/v1/t').as('archiveLead')
        this.getArchiveButton().should('be.visible').click();
        cy.wait('@archiveLead')
    }

    clickOnArchiveIcon() {
        this.getArchiveIcon().should('be.visible').click()
    }

    clickOnUnarchiveButton() {
        cy.intercept('POST','/leads/archived').as('unarchiveLead')
        this.getUnarchiveButton().should('be.visible').click()
        cy.wait('@unarchiveLead')
    }

    clickOnInboxIcon() {
        this.getInboxIcon().should('be.visible').click()
    }

    //Verification Methods

    verifyAddModalPopupAppears() {
        this.getAddModal().should('be.visible').and('include.text', "Add lead");
    }

    verifyLeadIsPresentInLeadList(organizationName) {
        this.getRowInputPage().should('be.visible').and('contain', organizationName);
    }

    verifyCreatedPopupAppears(organizationName) {
        this.getCreatedPopup().should('be.visible').and('contain', organizationName);
    }
}