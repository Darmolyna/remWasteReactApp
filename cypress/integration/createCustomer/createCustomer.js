/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
before(function () {
    cy.fixture('example').then(function (data) {
        this.data = data
    })
    cy.wrap(`user_${Date.now()}@example.com`).as('Email');
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

Then('I click Customer', function () {
    cy.get('a').contains('Customers').click()
})

When('I click Create button', function () {
    cy.get('a').contains('Create').click()
})

Then('I enter Customer details', function () {
    cy.get('input[name="first_name"]').type(`Firstname${Math.floor(Math.random() * 1000000)}`)
    cy.get('input[name="last_name"]').type(`Lastname${Math.floor(Math.random() * 1000000)}`)
    cy.get('input[name="email"]').type(this.Email)
    const today = new Date().toISOString().split('T')[0];
    cy.get('input[type="date"][name="birthday"]').clear().type(today);
    cy.get('textarea[name="address"]').type(`${Math.floor(Math.random() * 1000)} Street`)
    cy.get('input[name="city"]').type(`City${Math.random().toString(36).substring(2, 7)}`)
    cy.get('input[name="stateAbbr"]').type(`State${Math.random().toString(36).substring(2, 4)}`)
    cy.get('input[name="zipcode').type(`${Math.floor(Math.random() * 10000 + 90000)}`)
    cy.get('input[name="password"').type(`Password@1`)
    cy.get('input[name="confirm_password"').type(`Password@1`)
})

When('i click save button', function () {
    cy.get('button').contains('Save').click()
})

Then('I validate that customer was created successfully', function () {
    cy.get('div').contains('Customer created').should('exist')
})