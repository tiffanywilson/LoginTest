///<reference path="../Scripts/typings/angular-protractor/angular-protractor.d.ts" />
export module LoginAutomation {

    export class Login {

        private baseUrl = ('https://www.facebook.com');
        private emailTextBox = browser.element(by.css('[type="email"]'));
        private passwordTextBox = browser.element(by.css('[type="password"]'));
        private loginButton = browser.element(by.css('[value="Log In"]'));
        private incorrectPasswordError = browser.element(by.className('_1tp8'));

        public launchFacebook() {
            browser.ignoreSynchronization = true;
            browser.get(this.baseUrl);
        }

        public login(email : string, password : string){
            browser.ignoreSynchronization = true;
            this.emailTextBox.sendKeys(email);
            this.passwordTextBox.sendKeys(password);
            this.loginButton.click();
        }

        isIncorrectPasswordErrorDisplayed() {
            return this.incorrectPasswordError.isDisplayed();
        }
    }
}