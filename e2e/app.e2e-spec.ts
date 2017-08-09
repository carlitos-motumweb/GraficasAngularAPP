import { GraficasAPPPage } from './app.po';

describe('graficas-app App', () => {
  let page: GraficasAPPPage;

  beforeEach(() => {
    page = new GraficasAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
