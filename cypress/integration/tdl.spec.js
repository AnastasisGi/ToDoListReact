describe("To do list ", function (){

    it(' Should render a heading', () => {
        cy.visit('/')
        cy.get("#toDoList-heading").should("contain", "A react to do List")
    });


    it('can save and show a todo that has index as well', () => {
        cy.visit('/')
        cy.get('#toDoList-textbox').type("My todo number 1")
        cy.get('#toDoList-button').click()
        cy.get("#todos-0").should("contain", "My todo number 1")
        
    });

    it('can show a todo with a checkbox that you can strikethrough ', () => {
        cy.visit('/')
        cy.get('#toDoList-textbox').type("My todo number 1")
        cy.get('#toDoList-button').click()
        cy.get("#todos-0-checkbox").click()
        cy.get("#todos-0").should("have.css", "text-decoration", "line-through solid rgb(0, 0, 0)" )

    });

})