/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
before(function () {
    cy.fixture('example').then(function (data) {
        this.data = data
    })
})

Given('I navigate to base URL', function () {
    cy.viewport(1800, 1000);
    cy.visit(Cypress.env("baseUrl"))
})

When('I enter valid username and password', function () {
    cy.get('input[name="username"]').type('demo')
    cy.get('input[name="password"]').type('demo')
})

When('I click login Button', function () {
    cy.get('button[type="submit"]').click()
})
Then('I validate successfull login', function () {
    cy.get('button').contains('Jane Doe').should('exist')
})