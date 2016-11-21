import { ACRoutingPage } from './app.po';

describe('ac-routing App', function() {
  let page: ACRoutingPage;

  beforeEach(() => {
    page = new ACRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
