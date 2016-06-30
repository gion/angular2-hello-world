import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HelloWorldAppAppComponent } from '../app/hello-world-app.component';

beforeEachProviders(() => [HelloWorldAppAppComponent]);

describe('App: HelloWorldApp', () => {
  it('should create the app',
      inject([HelloWorldAppAppComponent], (app: HelloWorldAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'hello-world-app works!\'',
      inject([HelloWorldAppAppComponent], (app: HelloWorldAppAppComponent) => {
    expect(app.title).toEqual('hello-world-app works!');
  }));
});
