describe("Impacta", () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/eventos/novo');
    });

    it('Adicionando Novo Evento', () => {
        cy.get('#descricao').type('Ver Aula');
        cy.wait(2000);
        cy.get('#data').type('2020-10-17');
        cy.wait(2000);
        cy.get("#preco").clear().type('20');
        cy.wait(4000);
        cy.get(".btn.btn-primary").click();
    });
})