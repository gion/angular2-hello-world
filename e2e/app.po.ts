export class HelloWorldAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hello-world-app-app h1')).getText();
  }
}
