describe('cypress', () => {

  beforeEach(() => {
    cy.visit('index.html');
  });

  it('get and get', () => {
    cy.get('.main')
      .then(ele => {
        console.log(ele);
      })
      .get('.panel')
      .then(ele => {
        console.log(ele);
      })
  });

})
