describe("basic tests", () => {
  it("can visit the homepage", () => {
    cy.visit("/");
  });
  it("has a login DOM-node", () => {
    cy.visit("/");
    // TODO: add cypress-testing-library TS support
    // .getByText("Login");
  });
});
