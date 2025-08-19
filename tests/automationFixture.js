import { test as base, expect } from "@playwright/test";
import { SignUpPage } from "../pages/signUpPage";

export const test = base.extend({
  signUpPage: async ({ page }, use) => {
    await use(new SignUpPage(page));
  }
});

export { expect };
