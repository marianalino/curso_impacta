describe("Impacta", () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200/eventos');
    });

    it('Filtrando a lista', () => {
        cy.get("#descricao").type('webservice');
        cy.get("#descricao").should('have.value', 'webservice');
        cy.get("#descricao").clear();
    });
})