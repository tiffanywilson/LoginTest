///<reference path="../Scripts/typings/angular-protractor/angular-protractor.d.ts" />
///<reference path="../Scripts/typings/jasmine/jasmine.d.ts" />

import LoginModule = require('./Login');
import CredentialsModule = require('./Credentials');

describe('Login', function() {
    const login = new LoginModule.LoginAutomation.Login();
    const credentials = new CredentialsModule.LoginAutomation.Credentials();

    beforeEach(() => {
        login.launchFacebook();
    });
    
    it('should fail login attempt using first set of invalid credentials', () => {
        login.login(credentials.personOne.email, credentials.personOne.password);
        expect(login.isIncorrectPasswordErrorDisplayed()).toBe(true);
    });

    it('should fail login attempt using second set of invalid credentials', () => {
        login.login(credentials.personTwo.email, credentials.personTwo.password);
        expect(login.isIncorrectPasswordErrorDisplayed()).toBe(true);
    });

    it('should fail login attempt using third set of invalid credentials', () => {
        login.login(credentials.personThree.email, credentials.personThree.password);
        expect(login.isIncorrectPasswordErrorDisplayed()).toBe(true);
    });

    it('should fail login attempt using fourth set of invalid credentials', () => {
        login.login(credentials.personFour.email, credentials.personFour.password);
        expect(login.isIncorrectPasswordErrorDisplayed()).toBe(true);
    });

    it('should fail login attempt using fifth set of invalid credentials', () => {
        login.login(credentials.personFive.email, credentials.personFive.password);
        expect(login.isIncorrectPasswordErrorDisplayed()).toBe(true);
    });

})

