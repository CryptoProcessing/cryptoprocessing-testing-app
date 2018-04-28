import { CryptoprocessingTestingPage } from './app.po';

describe('cryptoprocessing-testing App', () => {
  let page: CryptoprocessingTestingPage;

  beforeEach(() => {
    page = new CryptoprocessingTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
