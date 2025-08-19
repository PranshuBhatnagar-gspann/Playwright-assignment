export class SignUpPage{
    constructor(page){
        this.page=page
        this.firstNameLoc=page.getByRole('textbox', { name: 'First Name' })
        this.lastNameLoc=page.getByRole('textbox', { name: 'Last Name' })
        this.addressLoc=page.locator('textarea')
        this.emailLoc=page.locator('input[type="email"]')
        this.phoneNumberLoc=page.locator('input[type="tel"]')
        this.genderCheckboxLoc=page.getByRole('radio', { name: 'Male', exact: true })
        this.firstHobbieLoc=page.locator('#checkbox1')
        this.secondHobbieLoc=page.locator('#checkbox3')
        this.languageBoxLoc=page.locator('#msdd')
        this.firstLanguageLoc=page.getByText('English')
        this.techSkillLoc=page.locator('#Skills')
        this.countryFieldLoc=page.locator('b')
        this.countrySelectLoc=page.getByRole('treeitem', { name: 'India' })
        this.yearDOBLoc=page.locator('#yearbox')
        this.monthDOBLoc=page.locator('#basicBootstrapForm div').filter({ hasText: 'Date Of Birth year' }).getByRole('combobox').nth(1)
        this.dateDOBLoc=page.locator('#daybox')
        this.passwordLoc=page.locator('#firstpassword')
        this.confirmPasswordLoc=page.locator('#secondpassword')
        this.submitBtnLoc=page.getByRole('button', { name: 'Submit' })
    }

    async launchTheApp(){
        await this.page.goto('https://demo.automationtesting.in/Register.html')
    }
    async enterFirstName(fname){
        await this.firstNameLoc.fill(fname)
    }
    async enterLastName(lname){
        await this.lastNameLoc.fill(lname)
    }
    async enterAddress(address){
        await this.addressLoc.fill(address)
    }
    async enterEmail(email){
        await this.emailLoc.fill(email)
    }
    async enterPhoneNumber(number){
        await this.phoneNumberLoc.fill(number)
    }
    async selectGender(){
        await this.genderCheckboxLoc.check()
    }
    async selectAllHobbies(){
        await this.firstHobbieLoc.check()
        await this.secondHobbieLoc.check()
    }
    async selectLanguageBox(){
        await this.languageBoxLoc.click()
        await this.firstLanguageLoc.click()
    }
    async enterSkill(skill){
        await this.techSkillLoc.selectOption(skill)
    }
    async enterCountry(){
        await this.countryFieldLoc.click()
        await this.countrySelectLoc.click()
    }
    async enterYearDOB(year){
        await this.yearDOBLoc.selectOption(year)
    }
    async enterMonthDOB(month){
        await this.monthDOBLoc.selectOption(month)
    }
    async enterDateDOB(date){
        await this.dateDOBLoc.selectOption(date)
    }
    async enterPassword(passwrod){
        await this.passwordLoc.fill(passwrod)
    }
    async enterConfirmPassword(cpassword){
        await this.confirmPasswordLoc.fill(cpassword)
    }
    async clickOnSubmit(){
        await this.submitBtnLoc.click()
    }
}