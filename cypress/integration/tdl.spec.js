describe("To do list ", function (){

    it(' Should render a heading', () => {
        cy.visit('/')
        cy.get("#toDoList-heading").should("contain", "A react to do List")
    });

})