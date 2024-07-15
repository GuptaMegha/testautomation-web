import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class ContentPage extends BasePage {
  readonly home = this.testPage.getByTestId("home");
  readonly products = this.testPage.getByTestId("products");
  readonly contact = this.testPage.getByTestId("contact");
  readonly userProfileIcon = this.testPage.getByTestId("user-profile");
  readonly logout = this.testPage.getByTestId("logout");
  readonly content = this.testPage.getByTestId("main-content");

  constructor(parent: Page) {
    super(parent);
  }
}
