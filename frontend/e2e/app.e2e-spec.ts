import { TsnvsPage } from './app.po';

describe('tsnvs App', function() {
  let page: TsnvsPage;

  beforeEach(() => {
    page = new TsnvsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
