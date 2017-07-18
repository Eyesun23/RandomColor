import { ColorAngularPage } from './app.po';

describe('color-angular App', () => {
  let page: ColorAngularPage;

  beforeEach(() => {
    page = new ColorAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
