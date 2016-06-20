///<reference path="../Scripts/typings/angular-protractor/angular-protractor.d.ts" />
///<reference path="../Scripts/typings/jasmine/jasmine.d.ts" />
"use strict";
var LoginModule = require('./Login');
var CredentialsModule = require('./Credentials');
describe('Login', function () {
    var login = new LoginModule.LoginAutomation.Login();
    var credentials = new CredentialsModule.LoginAutomation.Credentials();
    beforeEach(function () {
        login.launchFacebook();
    });
    it('should fail login attempt using first set of invalid credentials', function () {
        login.login(credentials.personOne.email, credentials.personOne.password);
        expect(login.isIncorrectPasswordErrorDisplayed()).toBe(true);
    });
    it('should fail login attempt using second set of invalid credentials', function () {
        login.login(credentials.personTwo.email, credentials.personTwo.password);
        expect(login.isIncorrectPasswordErrorDisplayed()).toBe(true);
    });
    it('should fail login attempt using third set of invalid credentials', function () {
        login.login(credentials.personThree.email, credentials.personThree.password);
        expect(login.isIncorrectPasswordErrorDisplayed()).toBe(true);
    });
    it('should fail login attempt using fourth set of invalid credentials', function () {
        login.login(credentials.personFour.email, credentials.personFour.password);
        expect(login.isIncorrectPasswordErrorDisplayed()).toBe(true);
    });
    it('should fail login attempt using fifth set of invalid credentials', function () {
        login.login(credentials.personFive.email, credentials.personFive.password);
        expect(login.isIncorrectPasswordErrorDisplayed()).toBe(true);
    });
});
//# sourceMappingURL=Login.spec.js.map