describe('Template Spec', () => {
  // Visit the page before each test to avoid redundancy
  beforeEach(() => {
    cy.visit('https://zeebra.appworkdemo.com/login'); // Ensure you include the protocol (http:// or https://)
  });

  it('verifies email with an invalid input', () => {
    cy.get('#filled-hidden-label-normal').type('test');
    cy.get('.orange-btn > .MuiButtonBase-root').click();
    cy.get('#filled-hidden-label-normal-helper-text')
      .should('be.visible')
      .and('contain.text', 'Please enter valid Email Address');
  });

  it('verifies email with an invalid syntax', () => {
    cy.get('#filled-hidden-label-normal').type('test.com');
    cy.get('.orange-btn > .MuiButtonBase-root').click();
    cy.get('#filled-hidden-label-normal-helper-text')
      .should('be.visible')
      .and('contain.text', 'Please enter valid Email Address');
  });

  it('verifies email with a number input', () => {
    cy.get('#filled-hidden-label-normal').type('456781368456');
    cy.get('.orange-btn > .MuiButtonBase-root').click();
    cy.get('#filled-hidden-label-normal-helper-text')
      .should('be.visible')
      .and('contain.text', 'Please enter valid Email Address');
  });

  it('verifies email with a symbol input', () => {
    cy.get('#filled-hidden-label-normal').type('&*%^*&%&^&*');
    cy.get('.orange-btn > .MuiButtonBase-root').click();
  });

  it('verifies email with a blank input', () => {
    cy.get('#filled-hidden-label-normal').type('  ');
    cy.get('.orange-btn > .MuiButtonBase-root').click();
  });

  it('verifies email with a valid input', () => {
    cy.get('#filled-hidden-label-normal').type('admin@zeebra.com');
    cy.get('.orange-btn > .MuiButtonBase-root').click();
    cy.get('#outlined-adornment-password-helper-text')
      .should('be.visible')
      .and('contain.text', 'Please enter Password');
  });

  it('verifies password with a blank input', () => {
    cy.get('#filled-hidden-label-normal').type('admin@zeebra.com');
    cy.get('#outlined-adornment-password').type('  ');
    cy.get('.orange-btn > .MuiButtonBase-root').click();
  });

  it('verifies password with an invalid input', () => {
    cy.get('#filled-hidden-label-normal').type('admin@zeebra.com');
    cy.get('#outlined-adornment-password').type('sdjghakjshg');
    cy.get('.orange-btn > .MuiButtonBase-root').click();
  });

  it('verifies password with a valid input', () => {
    cy.get('#filled-hidden-label-normal').type('admin@zeebra.com');
    cy.get('#outlined-adornment-password').type('Admin@123');
    cy.get('.orange-btn > .MuiButtonBase-root').click();
  });
});
