///<reference path="../Scripts/typings/angular-protractor/angular-protractor.d.ts" />
"use strict";
var LoginAutomation;
(function (LoginAutomation) {
    var Login = (function () {
        function Login() {
            this.baseUrl = ('https://www.facebook.com');
            this.emailTextBox = browser.element(by.id('email'));
            this.passwordTextBox = browser.element(by.id('pass'));
            this.loginButton = browser.element(by.css('[value="Log In"]'));
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
        Login.prototype.getCurrentUrl = function () {
            browser.ignoreSynchronization = true;
            return browser.getCurrentUrl();
        };
        return Login;
    }());
    LoginAutomation.Login = Login;
})(LoginAutomation = exports.LoginAutomation || (exports.LoginAutomation = {}));
//# sourceMappingURL=Login.js.map