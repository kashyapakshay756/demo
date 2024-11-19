describe('Template Spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080'); // Ensure you include the protocol (http:// or https://)
  });

  it('verifies email with an invalid input', () => {
    cy.visit('http://localhost:8080')
    cy.get('#filled-hidden-label-normal').type('test');
    cy.get('.orange-btn > .MuiButtonBase-root').click();
    cy.get('#filled-hidden-label-normal-helper-text')
      .should('be.visible')
      .and('contain.text', 'Please enter valid Email Address'); 
  });
  
  it('verifies email with an invalid input syntex', () => {
    cy.visit('http://localhost:8080')
    cy.get('#filled-hidden-label-normal').type('test.com');
    cy.get('.orange-btn > .MuiButtonBase-root').click();
    cy.get('#filled-hidden-label-normal-helper-text')
      .should('be.visible')
      .and('contain.text', 'Please enter valid Email Address'); 
  });

  it('verifies email with an invalid input by number', () => {
    cy.visit('http://localhost:8080')
    cy.get('#filled-hidden-label-normal').type('456781368456');
    cy.get('.orange-btn > .MuiButtonBase-root').click();
    cy.get('#filled-hidden-label-normal-helper-text')
      .should('be.visible')
      .and('contain.text', 'Please enter valid Email Address'); 
  });

  it('verifies email with an invalid input by symbol', () => {
    cy.visit('http://localhost:8080')
    cy.get('#filled-hidden-label-normal').type('&*%^*&%&^&*');
    cy.get('.orange-btn > .MuiButtonBase-root').click();
  });

  it('verifies email with an Blank input', () => {
    cy.visit('http://localhost:8080')
    cy.get('#filled-hidden-label-normal').type('  ');
    cy.get('.orange-btn > .MuiButtonBase-root').click();

  });
  
  it('verifies email with an valid input', () => {
    cy.visit('http://localhost:8080')
    cy.get('#filled-hidden-label-normal').type('admin@zeebra.com');
    cy.get('.orange-btn > .MuiButtonBase-root').click();
    cy.get('#outlined-adornment-password-helper-text')
      .should('be.visible')
      .and('contain.text', 'Please enter Password'); 
  });

  
  it('verifies password with an Blank input', () => {
    cy.visit('http://localhost:8080')
    cy.get('#filled-hidden-label-normal').type('admin@zeebra.com');
    cy.get('#outlined-adornment-password').type('  ');
    cy.get('.orange-btn > .MuiButtonBase-root').click();

  });

  
  it('verifies password with an invalid input', () => {
    cy.visit('http://localhost:8080')
    cy.get('#filled-hidden-label-normal').type('admin@zeebra.com');
    cy.get('#outlined-adornment-password').type('sdjghakjshg');
    cy.get('.orange-btn > .MuiButtonBase-root').click();
  });
  
    
  it('verifies password with an valid input', () => {
    cy.visit('http://localhost:8080')
    cy.get('#filled-hidden-label-normal').type('admin@zeebra.com');
    cy.get('#outlined-adornment-password').type('Admin@123');
    cy.get('.orange-btn > .MuiButtonBase-root').click();
  });

});
