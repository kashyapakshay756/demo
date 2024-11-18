describe('Login Page', () => {
  // Before each test, visit the login page
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should have email and password fields', () => {
    // Check if the email and password input fields are visible
    cy.get('#email').should('be.visible');
    cy.get('#password').should('be.visible');
  });

  it('should login successfully with valid credentials', () => {
    // Input valid email and password
    const validEmail = 'testuser@example.com';
    const validPassword = 'password123';

    // Type valid credentials into the email and password fields
    cy.get('#email').type(validEmail);
    cy.get('#password').type(validPassword);

    // Submit the form (assuming a button with id 'loginButton')
    cy.get('#loginButton').click();

    // After submitting, expect to be redirected to the dashboard or home page
    // (Adjust the URL accordingly based on your app's behavior)
    cy.url().should('include', '/dashboard'); // Change this to your expected URL after login
    cy.contains('Welcome').should('be.visible'); // Optionally, check for some welcome message or dashboard content
  });

  it('should show an error with invalid credentials', () => {
    // Input invalid email and password
    const invalidEmail = 'wronguser@example.com';
    const invalidPassword = 'wrongpassword';

    cy.get('#email').type(invalidEmail);
    cy.get('#password').type(invalidPassword);

    // Submit the form
    cy.get('#loginButton').click();

    // Check for an error message after submitting
    cy.contains('Invalid email or password').should('be.visible'); // Change this to match the error message from your app
  });
});
