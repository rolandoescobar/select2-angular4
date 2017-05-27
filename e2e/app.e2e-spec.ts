import { CustomSelect2Page } from './app.po';

describe('custom-select2 App', () => {
  let page: CustomSelect2Page;

  beforeEach(() => {
    page = new CustomSelect2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
