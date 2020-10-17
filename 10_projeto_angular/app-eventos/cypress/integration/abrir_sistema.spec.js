describe("Impacta", () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200/eventos');
    });

    it('Abriu Eventos', () => {
        cy.log("Abriu o Sistema");
    });
})