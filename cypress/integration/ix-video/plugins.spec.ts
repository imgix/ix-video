context('ix-video: Video.JS plugin support', () => {
  before(() => {
    cy.visit('/videojs-plugin.html');
  });

  it('should have Video.JS defined on the window', () => {
    cy.window().its('videojs').should('exist');
  });

  it('should have a Video.JS plugin enabled on the video element', () => {
    cy.window().its('videojsSeekButtons').should('exist');
  });
});
