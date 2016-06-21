///<reference path="../Scripts/typings/angular-protractor/angular-protractor.d.ts" />

export module LoginAutomation {

    export class Login {

        private baseUrl = ('https://www.facebook.com');
        private emailTextBox = browser.element(by.id('email'));
        private passwordTextBox = browser.element(by.id('pass'));
        private loginButton = browser.element(by.css('[value="Log In"]'));

        public launchFacebook() {
            browser.ignoreSynchronization = true;
            browser.get(this.baseUrl);
        }

        public login(email, password) {
            browser.ignoreSynchronization = true;
                this.emailTextBox.sendKeys(email);
                this.passwordTextBox.sendKeys(password);
                this.loginButton.click();
        }

        public getCurrentUrl() {
            browser.ignoreSynchronization = true;
            return browser.getCurrentUrl();
        }
    }
}

