import { AuthenticationExamplePage } from './app.po';

describe('authentication-example App', () => {
  let page: AuthenticationExamplePage;

  beforeEach(() => {
    page = new AuthenticationExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
