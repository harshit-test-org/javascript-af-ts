describe("basic tests", () => {
    it("can visit the homepage", () => {
    cy.visit("/");
  });
  it('has a login DOM-node',()=>{
      cy.visit('/').getByText('Login')
  })
});