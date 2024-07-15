import { Page } from '@playwright/test';

export class BasePage {
  constructor(readonly testPage: Page) {}
}
