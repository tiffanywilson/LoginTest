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
    var _loop_1 = function(i) {
        var testCredentials = credentials.userCredentials[i];
        it('should fail login attempt using first set of invalid credentials', function () {
            login.login(testCredentials.email, testCredentials.password);
            expect(login.getCurrentUrl()).toContain('/login.php');
        });
    };
    for (var i = 0; i < 5; i++) {
        _loop_1(i);
    }
});
//# sourceMappingURL=Login.spec.js.map