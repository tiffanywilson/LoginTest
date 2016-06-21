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
    
    for (let i = 0; i < 5; i++) {
        let testCredentials = credentials.userCredentials[i];
        it('should fail login attempt using first set of invalid credentials', () => {
            login.login(testCredentials.email, testCredentials.password);
                expect(login.getCurrentUrl()).toContain('/login.php');
            });           
    }
});