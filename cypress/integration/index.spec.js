/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

import React from 'react';

describe('Visit Home Page', () => {
  context('mock & visit', () => {
    beforeEach(function () {
      // test dummy data to catch error state
      cy.visit('http://localhost:3000');
    });

    it('should render without error', () => {
      // Start from the index page
      cy.visit('http://localhost:3000');

      // Check common behaviour in DOM
      cy.get('p').should('have.text', 'loading...');
      cy.get('h1').should('have.text', 'Films');
      cy.get('.film-list-container > div').should('have.lengthOf', 5);

      // Moving to next page
      cy.findByText(/a new hope/i)
        .should('exist', true)
        .click();
      cy.url().should('eq', 'http://localhost:3000/detail/ZmlsbXM6MQ==');
    });
  });

  context('mock & visit 2', () => {
    beforeEach(function () {
      // test dummy data to catch error state
      cy.visit('http://localhost:3000/detail/ZmlsbXM6MQ==');
    });

    it('should render detail page without', () => {
      cy.findByText(/a new hope/i).should('exist', false);

      cy.get('[data-testid="film-id"]').should('exist');
    });
  });
});
