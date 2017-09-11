import { Week2AssignmentPage } from './app.po';

describe('week2-assignment App', () => {
  let page: Week2AssignmentPage;

  beforeEach(() => {
    page = new Week2AssignmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
