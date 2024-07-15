import { test, expect } from "@playwright/test";
import { Login } from "../pageobjects/loginPage";
import { testUsers } from "../resources/users";
import { labels } from "tests/resources/labels";
import { ContentPage } from "../pageobjects/contentPage";

test.describe("Login Scenarios", { tag: "@login" }, () => {
  let login: Login;
  let contentPage: ContentPage;

  test.beforeEach(async ({ page, baseURL }) => {
    login = new Login(page);
    contentPage = new ContentPage(page);
    await login.navigateTO(baseURL);
  });

  testUsers.forEach(
    (testUser: { role: string; email: string; password: string }) => {
      test(`Successful Login for ${testUser.role} on Abn Amro website`, async () => {
        await login.sigIn(testUser.email!, testUser.password!);
        await expect(contentPage.home).toBeVisible();
        await expect(contentPage.products).toBeVisible();
        await expect(contentPage.contact).toBeVisible();
        await expect(contentPage.userProfileIcon).toBeVisible();
        await expect(contentPage.content.locator("p").first()).toHaveText(
          labels.mainPage_content_text1
        );
      });
    }
  );

  testUsers.forEach(
    (testUser: { role: string; email: string; password: string }) => {
      test(`Successful Logout for ${testUser.role} on Abn Amro website`, async () => {
        await login.sigIn(testUser.email!, testUser.password!);
        await contentPage.userProfileIcon.click();
        await contentPage.logout.click();
        await expect(contentPage.userProfileIcon).toBeHidden();
        await expect(login.loginButton).toBeVisible();
        await expect(login.loginPageText).toContainText(
          labels.loginPage_header_text
        );
      });
    }
  );

  test("Unsuccessful login for Invalid user on Abn Amro website", async ({
    page,
  }) => {
    await login.sigIn("invalid@invalid.com", "invalid");
    await expect(login.invalidLogin).toHaveText(labels.invalidLogin_text);
    await expect(contentPage.home).toBeHidden();
  });
});
