describe("navifation buttons", () => {
  it("navigating from home to about", () => {
    cy.visit("http://localhost:8080/");
    cy.contains("button", "Go To About Page From Here");
    cy.get('[data-test="about-button"]').click();
    cy.location("pathname").should("equal", "/about");
    cy.contains("h1", "This the about page");
  });
  it("navigating from about to home", () => {
    cy.visit("http://localhost:8080/about");
    cy.contains("h1", "This the about page");
    cy.get('[data-test="home-button"]').click();
    cy.location("pathname").should("equal", "/");
    cy.contains("button", "Go To About Page From Here");
  });
});
