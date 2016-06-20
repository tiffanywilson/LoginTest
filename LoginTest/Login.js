"use strict";
///<reference path="../Scripts/typings/angular-protractor/angular-protractor.d.ts" />
var LoginAutomation;
(function (LoginAutomation) {
    var Login = (function () {
        function Login() {
            this.baseUrl = ('https://www.facebook.com');
            this.emailTextBox = browser.element(by.css('[type="email"]'));
            this.passwordTextBox = browser.element(by.css('[type="password"]'));
            this.loginButton = browser.element(by.css('[value="Log In"]'));
            this.incorrectPasswordError = browser.element(by.className('_1tp8'));
        }
        Login.prototype.launchFacebook = function () {
            browser.ignoreSynchronization = true;
            browser.get(this.baseUrl);
        };
        Login.prototype.login = function (email, password) {
            browser.ignoreSynchronization = true;
            this.emailTextBox.sendKeys(email);
            this.passwordTextBox.sendKeys(password);
            this.loginButton.click();
        };
        Login.prototype.isIncorrectPasswordErrorDisplayed = function () {
            return this.incorrectPasswordError.isDisplayed();
        };
        return Login;
    }());
    LoginAutomation.Login = Login;
})(LoginAutomation = exports.LoginAutomation || (exports.LoginAutomation = {}));
//# sourceMappingURL=Login.js.map