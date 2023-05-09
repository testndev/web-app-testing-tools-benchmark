const iframeLocator = 'iframe[title="Rich Text Area"]';

const littlePause = 2000;
const initialText = 'Your content goes here.';
const textFirstParagraph = 'Hello! this should be the title of our text.';
const textMiddleParagraph = 'This is a paragraphin the middle';
const textLastParagraph = 'This is the last paragraph. Good bye!';
const newText = [textFirstParagraph, textMiddleParagraph, textLastParagraph].join('\n');
describe('The-Internet WYSIWYG editor', () => {

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
            .should(iframe => expect(iframe.contents().find('body')).to.exist)
            .then(iframe => cy.wrap(iframe.contents().find('body')))
            .within(($body) => {
                cy.get('p').should('include.text', initialText);
            });
    });

    it('should be able to replace initial text by new one [T_21]', () => {
        cy.get(iframeLocator)
            .should(iframe => expect(iframe.contents().find('body')).to.exist)
            .then(iframe => {
                const iframeContent = iframe.contents();
                cy.wrap(iframeContent.find('body'))
                    .wait(littlePause)
                    .type('{ctrl}A')
                    .wait(littlePause)
                    .type(newText)
                    .within(($body) => {
                        cy.contains('p', textFirstParagraph).should('be.visible')
                        cy.contains('p', textLastParagraph).should('be.visible')
                        cy.contains('p', initialText).should('not.be.exist')
                    });

            });
    });

    it.skip('should be able to delete last paragraph with keyboard shortcuts [T_22]', () => {
        cy.get(iframeLocator)
        .should(iframe => expect(iframe.contents().find('body')).to.exist)
        .then(iframe => {
            const iframeContent = iframe.contents();
            cy.wrap(iframeContent.find('body'))
                .wait(littlePause)
                .type('{ctrl}A')
                .wait(littlePause)
                .type(newText)
                .within(($body) => {
                    cy.contains('p', textFirstParagraph).should('be.visible')
                    cy.contains('p', textLastParagraph).should('be.visible')
                    cy.contains('p', initialText).should('not.be.exist')
                })
                .type('{end}')
                .wait(littlePause)
                .type('{ctrl+shift+uparrow}')
                .wait(littlePause)
                .type('{del}')
                .wait(littlePause)
                .within(($body) => {
                    cy.contains('p', textFirstParagraph).should('be.visible')
                    cy.contains('p', textLastParagraph).should('not.exist')
                })

        });
    });

});
