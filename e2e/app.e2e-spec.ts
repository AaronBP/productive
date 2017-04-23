import { ProductiveWebAppPage } from './app.po';

describe('productive-web-app App', () => {
  let page: ProductiveWebAppPage;

  beforeEach(() => {
    page = new ProductiveWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
