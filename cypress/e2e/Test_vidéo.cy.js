

describe("Creation d'un nouveau compte PLayPlay avec API", () => {
  it("Create an account", () => {
    cy.visit("https://staging.playplay.com/");
    cy.viewport("macbook-16");
    cy.get('[class="ButtonGroup__BtnStyle-sc-1usw1pe-0 jYJSgu"]').click();
    cy.get('[id="log_in_link"]').click();
    cy.get('[id="email"]').click().type("nightwatch.playplay@gmail.com");
    cy.get('[id="password"]').click().type("hctawthgin");
    cy.get('[class="ds__button-primary__loader ds__loader"]').click({
      force: true,
    });
    cy.wait(20000);
    cy.get('[class="pp__media-card__content-container"]').eq(0).click({
      force: true,
    });
    cy.wait(5000);
cy.get(
      '[data-heap-label="pp__add-a-new-screen-button-large__add-screen"]'
    ).click({
      force: true,
    });
    cy.get('[class="pp__add-a-new-screen-catalog-item square"]').eq(0).click({
      force: true,
    });
cy.wait(6000);
    cy.get('[class="media-uploader-container media-uploader"]').eq(0).click({
      force: true,
    });
    cy.wait(2000);
    cy.get('[data-vv-as="media"]').eq(0).click({
      force: true,
    });
    cy.get('[data-heap-label="pp__library-panel__corporates"]').click();
    cy.get('.media-thumbnail > .media-wrapper > .media-title-tooltip > .media-image-item').drag('.upload-container');
  })
})
