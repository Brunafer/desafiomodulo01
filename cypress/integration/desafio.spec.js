/// <reference types="cypress" />

let chance = require('chance');
chance = new Chance();

context('Cadastro', () => {
    it('Registro de novo usuário', () => {
        cy.visit('index.php');

        cy.get('a[class="login"]').click();
        cy.url().should('contain', '?controller=authentication&back=my-account');


        //clicar para cadastrar
        cy.get('[title^="Log in"]').click();
        cy.get('input#email_create ').type(chance.email())
        cy.get('button#SubmitCreate').click();

        // inserção de dados para o formulário de cadastro
        cy.get('input#id_gender2').check('2');
        cy.get('input#customer_firstname').type(chance.first())
        cy.get('input#customer_lastname').type(chance.last())
        cy.get('input#passwd').type('Passwd');
        cy.get('select#days').select('22');
        cy.get('select#months').select('12');
        cy.get('select#years').select('1992');
        cy.get('input#newsletter').check();
        cy.get('input#firstname').type(chance.first())
        cy.get('input#lastname').type(chance.last())
        cy.get('input#company').type('ltda');
        cy.get('input#address1').type('rua um');
        cy.get('input#city').type('cidade');
        cy.get('select#id_country').select('21');
        cy.get('select#id_state').select('5');
        cy.get('input#postcode').type('34515');        
        cy.get('input#phone_mobile').type('3198524692');
        cy.get('input#alias').type(chance.email())
        cy.get('button#submitAccount').click();

        cy.url().should('contain','http://automationpractice.com/index.php?controller=my-account');
        //cy.get('.page-heading').should('contain','My account');
        cy.contains('Welcome to your account. Here you can manage all of your personal information and orders.')


        
    });
});











// elementos da home
//[title^="Log in"] //botão sign in
//cy.get('a[class="login"]').click();

// elementos da página de criar login
// input#email_create -> input email
// button#SubmitCreate -> botao create account

// dados para criar cadastro
// input#id_gender2 -> radio mrs
// input#customer_firstname -> primeiro nome
// input#customer_lastname -> segundo nome
// input#email -> email cadastro
// input#passwd -> senha
// select#days -> dia de nascimento
// select#months -> mes nascimento
// select#years -> ano nascimento
// input#newsletter -> receber newsletter
// input#firstname -> nome
// input#lastname -> ultimo nome
// input#company -> empresa
// input#address1 -> endereço
// input#city -> cidade
// select#id_state -> estado
// input#postcode -> cep
// select#id_country -> país
// input#phone_mobile -> celular
// input#alias -> segundo email
// button#submitAccount -> registrar


