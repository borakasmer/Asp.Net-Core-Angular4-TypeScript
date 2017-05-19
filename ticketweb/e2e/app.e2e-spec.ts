import { TicketwebPage } from './app.po';

describe('ticketweb App', () => {
  let page: TicketwebPage;

  beforeEach(() => {
    page = new TicketwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
