import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome PipesDemo');
  });

  it('should display India message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('India');
  });
});
