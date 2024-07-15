import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class Login extends BasePage {
  readonly userName = this.testPage.getByTestId("username");
  readonly password = this.testPage.getByTestId("password");
  readonly loginButton = this.testPage.getByTestId("login-btn");
  readonly loginPageText = this.testPage.getByTestId("welcome-text");
  readonly invalidLogin = this.testPage.getByTestId("invalid-login");

  async navigateTO(baseURL: string | undefined) {
    await this.testPage.goto(baseURL!, { waitUntil: "load" });
  }

  async sigIn(username: string, password: string) {
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  constructor(parent: Page) {
    super(parent);
  }
}
