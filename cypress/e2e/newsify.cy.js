describe('Newsify App', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should display the Top Stories divider', () => {
      cy.contains('Top Stories').should('be.visible');
    });
  
    it('should display news cards', () => {
      cy.get('.news-card').should('have.length.greaterThan', 0);
      cy.get('.news-link').should('have.length.greaterThan', 0);
    });
  
    it('should navigate to news detail page on card click', () => {
      cy.get('.news-link').first().click();
      cy.url().should('include', '/news/');
      cy.get('.news-detail').should('be.visible');
    });
  
    it('should show loading overlay when loading', () => {
      cy.get('.loading-overlay').should('be.visible');
    });
  
    it('should show No Data component when no news is available', () => {
        cy.visit('/news/test-id123');
      cy.get('.no-data').should('be.visible');
    });
  });