import { test, expect } from './automationFixture';

test('signUpTest', async ({signUpPage}) => {
    await signUpPage.launchTheApp()
    await signUpPage.enterFirstName("Pranshu")
    await signUpPage.enterLastName("Bhatnagar")
    await signUpPage.enterAddress("Delhi")
    await signUpPage.enterEmail("qwerty@qwerty.com")
    await signUpPage.enterPhoneNumber("1212121212")
    await signUpPage.selectGender()
    await signUpPage.selectAllHobbies()
    await signUpPage.selectLanguageBox()
    await signUpPage.enterSkill("Java")
    await signUpPage.enterCountry()
    await signUpPage.enterYearDOB("2001")
    await signUpPage.enterMonthDOB("April")
    await signUpPage.enterDateDOB("27")
    await signUpPage.enterPassword("prprpr@bhbh")
    await signUpPage.enterConfirmPassword("prprpr@bhbh")
    await signUpPage.clickOnSubmit()
});
