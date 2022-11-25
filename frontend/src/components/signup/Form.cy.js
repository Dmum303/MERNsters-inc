import From from './Form'
const navigate = () => {}

describe("Signing up", () => {
  it("should be able to sign up", () => {
    cy.visit("http://localhost:3000/signup")
    // cy.get("input[name='userName']").type("test")
    // cy.get("input[name='firstName']").type("test")
    // cy.get("input[name='lastName']").type("test")
    // cy.get("input[name='email']").type("test")
    // cy.get("input[name='password']").type("test")
    // cy.get("input[name='confirmPassword']").type("test")
    // cy.get("input[name='birthday']").type("test")
    // cy.get("input[name='gender']").type("test")

    cy.get("#submit").click();
    cy.wait('@signUpRequest').then( interception => {
      expect(interception.response.body.message).to.eq("OK")
    })
  })
})


  