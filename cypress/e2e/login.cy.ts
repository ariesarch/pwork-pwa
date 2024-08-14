describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("renders the login form", () => {
    cy.get("h3").contains("Login");
    cy.get("button").contains("Log in");
  });

  // it("switches tabs between Email and Phone number", () => {
  //   cy.get("button").contains("Phone number").click();
  //   cy.get('input[placeholder="Phone number"]').should("be.visible");
  //   cy.get("button").contains("Email").click();
  //   cy.get('input[placeholder="Email address"]').should("be.visible");
  // });

  it("submits the form with valid email and password", () => {
    cy.get('input[placeholder="Email address"]').type("test@example.com");
    cy.get('input[placeholder="Enter your password"]').type("password123");
    cy.get("button").contains("Log in").click();
  });

  it("shows error messages with invalid email", () => {
    cy.get('input[placeholder="Email address"]').type("invalid-email@mail");
    cy.get('input[placeholder="Enter your password"]').type("password123");
    cy.get("button").contains("Log in").click();
    cy.get("span").should("contain", "Please provide a valid email");
  });

  // it("submits the form with valid phone and password", () => {
  //   cy.get("button").contains("Phone number").click();
  //   cy.get('input[placeholder="Phone number"]').type("1234567890");
  //   cy.get('input[placeholder="Enter your password"]').type("password123");
  //   cy.get("button").contains("Log in").click();
  // });

  // it("shows error messages with invalid phone number", () => {
  //   cy.get("button").contains("Phone number").click();
  //   cy.get('input[placeholder="Phone number"]').type("invalid-phone");
  //   cy.get('input[placeholder="Enter your password"]').type("password123");
  //   cy.get("button").contains("Log in").click();
  //   cy.get("span").should("contain", "Phone is required");
  // });

  it("checks for forgot password link", () => {
    cy.get("p").contains("Forgot your password?").click();
  });
});
