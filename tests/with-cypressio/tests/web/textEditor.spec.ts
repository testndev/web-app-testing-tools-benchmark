/* eslint-disable cypress/no-unnecessary-waiting */
const iframeLocator = 'iframe[title="Rich Text Area"]';
const richTextAreaLocator = '#tinymce'; // vaild inside the iframe
const initialText = 'Your content goes here.';
const textFirstParagraph = 'Hello! this should be the title of our text.';
const textMiddleParagraph = 'This is a paragraph in the middle of the text.';
const textLastParagraph = 'This is the last paragraph. Good bye!';
const newText = [textFirstParagraph, textMiddleParagraph, textLastParagraph].join('\n');

const littlePause = 2000;

describe('The-Internet, WYSIWYG text editor [S_2]', () => {

    beforeEach(() => {
        cy.visit('/tinymce');
        cy.get('h3').should('have.text', 'An iFrame containing the TinyMCE WYSIWYG Editor');
        cy.get(iframeLocator)
            .its('0.contentDocument').should('not.be.empty')
            .its('body')
            .as('body')
        cy.get('@body')
            .should('be.visible')
            .should('not.be.empty')

    });

    it('should have an initial text [T_20]', () => {
        cy.get(iframeLocator)
            .then(iframe => cy.wrap(iframe.contents().find(richTextAreaLocator)))
            .within(() => {
                cy.get('p').should('include.text', initialText);
            });
    });

    it('should be able to replace initial text by new one [T_21]', () => {
        cy.get(iframeLocator)
            .then(iframe => {
                cy.wrap(iframe.contents().find(richTextAreaLocator)).as('richTextArea');
                cy.wait(littlePause);
                cy.get('@richTextArea').type('{ctrl}A')
                cy.wait(littlePause);
                cy.get('@richTextArea').type(newText);
                cy.get('@richTextArea').within(() => {
                    cy.contains(textFirstParagraph).should('be.visible');
                    cy.contains(textLastParagraph).should('be.visible');
                    cy.contains(initialText).should('not.exist');
                });
            });
    });

    it('should be able to delete last paragraph with keyboard shortcuts [T_22]', () => {
        cy.get(iframeLocator)
            .then(iframe => {
                cy.wrap(iframe.contents().find(richTextAreaLocator)).as('richTextArea');
                cy.wait(littlePause);
                cy.get('@richTextArea').type('{ctrl}A');
                cy.wait(littlePause);
                cy.get('@richTextArea').type(newText);
                cy.get('@richTextArea').within(() => {
                    cy.contains(textFirstParagraph).should('be.visible');
                    cy.contains(textLastParagraph).should('be.visible');
                    cy.contains(initialText).should('not.exist');
                });
                cy.get('@richTextArea').type('{end}');
                cy.wait(littlePause);
                cy.get('@richTextArea').type('{ctrl+shift+uparrow}');
                cy.wait(littlePause);
                cy.get('@richTextArea').type('{del}');
                cy.wait(littlePause);
                cy.get('@richTextArea').within(() => {
                    cy.contains(textFirstParagraph).should('be.visible')
                    //FIXME: last paragraph still exists
                    cy.contains(textLastParagraph).should('not.exist')
                })
            });
    });

});