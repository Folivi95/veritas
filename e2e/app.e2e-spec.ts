import { VeritasPage } from './app.po';

describe('veritas App', () => {
  let page: VeritasPage;

  beforeEach(() => {
    page = new VeritasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
