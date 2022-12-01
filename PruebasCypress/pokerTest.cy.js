describe('Test Color', () => {
    it('Color', () => {
        cy.visit('https://localhost:7023/Jugada');

        cy.get('.display-4').should('have.text', 'Welcome Poker Game');
        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();

        cy.get(':nth-child(1) > :nth-child(1) > .form-control').type('1');
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('COCO');

        cy.get(':nth-child(2) > :nth-child(1) > .form-control').type('11');
        cy.get(':nth-child(2) > :nth-child(2) > .form-control').type('COCO');

        cy.get(':nth-child(3) > :nth-child(1) > .form-control').type('8');
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('COCO');

        cy.get(':nth-child(4) > :nth-child(1) > .form-control').type('5');
        cy.get(':nth-child(4) > :nth-child(2) > .form-control').type('COCO');

        cy.get(':nth-child(5) > :nth-child(1) > .form-control').type('7');
        cy.get(':nth-child(5) > :nth-child(2) > .form-control').type('COCO');
        cy.get('.btn-primary').click();

        cy.get('.display-4').should('have.text', 'Welcome Poker Game');
        cy.get('th').should('have.text', 'Cartas');
        cy.get('.text-center > :nth-child(3)').should('have.text', 'Jugada: COLOR');
    })
});

describe('Test Full', () => {
    it('Full', () => {
        cy.visit('https://localhost:7023/Jugada');

        cy.get('.display-4').should('have.text', 'Welcome Poker Game');
        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();

        cy.get(':nth-child(1) > :nth-child(1) > .form-control').type('1');
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('COCO');

        cy.get(':nth-child(2) > :nth-child(1) > .form-control').type('1');
        cy.get(':nth-child(2) > :nth-child(2) > .form-control').type('ESPADA');

        cy.get(':nth-child(3) > :nth-child(1) > .form-control').type('1');
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('CORAZON');

        cy.get(':nth-child(4) > :nth-child(1) > .form-control').type('7');
        cy.get(':nth-child(4) > :nth-child(2) > .form-control').type('TREBOL');

        cy.get(':nth-child(5) > :nth-child(1) > .form-control').type('7');
        cy.get(':nth-child(5) > :nth-child(2) > .form-control').type('COCO');
        cy.get('.btn-primary').click();

        cy.get('.display-4').should('have.text', 'Welcome Poker Game');
        cy.get('th').should('have.text', 'Cartas');
        cy.get('.text-center > :nth-child(3)').should('have.text', 'Jugada: FULL');
    })
});

describe('Test Escalera', () => {
    it('Escalera', () => {
        cy.visit('https://localhost:7023/Jugada');

        cy.get('.display-4').should('have.text', 'Welcome Poker Game');
        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();

        cy.get(':nth-child(1) > :nth-child(1) > .form-control').type('10');
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('CORAZON');

        cy.get(':nth-child(2) > :nth-child(1) > .form-control').type('9');
        cy.get(':nth-child(2) > :nth-child(2) > .form-control').type('ESPADA');

        cy.get(':nth-child(3) > :nth-child(1) > .form-control').type('8');
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('COCO');

        cy.get(':nth-child(4) > :nth-child(1) > .form-control').type('7');
        cy.get(':nth-child(4) > :nth-child(2) > .form-control').type('TREBOL');

        cy.get(':nth-child(5) > :nth-child(1) > .form-control').type('6');
        cy.get(':nth-child(5) > :nth-child(2) > .form-control').type('ESPADA');
        cy.get('.btn-primary').click();

        cy.get('.display-4').should('have.text', 'Welcome Poker Game');
        cy.get('th').should('have.text', 'Cartas');
        cy.get('.text-center > :nth-child(3)').should('have.text', 'Jugada: ESCALERA');
    })
});

describe('Test Trio', () => {
    it('Trio', () => {
        cy.visit('https://localhost:7023/Jugada');

        cy.get('.display-4').should('have.text', 'Welcome Poker Game');
        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();

        cy.get(':nth-child(1) > :nth-child(1) > .form-control').type('12');
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('CORAZON');

        cy.get(':nth-child(2) > :nth-child(1) > .form-control').type('12');
        cy.get(':nth-child(2) > :nth-child(2) > .form-control').type('ESPADA');

        cy.get(':nth-child(3) > :nth-child(1) > .form-control').type('12');
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('COCO');

        cy.get(':nth-child(4) > :nth-child(1) > .form-control').type('7');
        cy.get(':nth-child(4) > :nth-child(2) > .form-control').type('TREBOL');

        cy.get(':nth-child(5) > :nth-child(1) > .form-control').type('6');
        cy.get(':nth-child(5) > :nth-child(2) > .form-control').type('ESPADA');
        cy.get('.btn-primary').click();

        cy.get('.display-4').should('have.text', 'Welcome Poker Game');
        cy.get('th').should('have.text', 'Cartas');
        cy.get('.text-center > :nth-child(3)').should('have.text', 'Jugada: TRIO');
    })
});

describe('Validacion test', () => {
    it('Validacion', () => {
        cy.visit('https://localhost:7023/Jugada');

        cy.get('.display-4').should('have.text', 'Welcome Poker Game');
        cy.get('.btn-primary').click();
        cy.get('.field-validation-error').should('have.text', 'Las cartas deben ser al menos 4');

        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();
        cy.get('#btnAddAlternativa').click();

        cy.get(':nth-child(1) > :nth-child(1) > .form-control').type('11');
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('CORAZON');

        cy.get(':nth-child(2) > :nth-child(1) > .form-control').type('11');
        cy.get(':nth-child(2) > :nth-child(2) > .form-control').type('TREBOL');

        cy.get(':nth-child(3) > :nth-child(1) > .form-control').type('9');
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('COCO');

        cy.get(':nth-child(4) > :nth-child(1) > .form-control').type('9');
        cy.get(':nth-child(4) > :nth-child(2) > .form-control').type('TREBOL');

        cy.get(':nth-child(5) > :nth-child(1) > .form-control').type('2');
        cy.get(':nth-child(5) > :nth-child(2) > .form-control').type('COCO');
        cy.get('.btn-primary').click();

        cy.get('.display-4').should('have.text', 'Welcome Poker Game');
        cy.get('th').should('have.text', 'Cartas');
        cy.get('.text-center > :nth-child(3)').should('include.text', 'DOBLE PAREJA');
    })
});