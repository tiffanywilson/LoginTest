"use strict";
/**
 * Created by twilson on 6/20/2016.
 */
///<reference path="../Scripts/typings/angular-protractor/angular-protractor.d.ts" />
var LoginAutomation;
(function (LoginAutomation) {
    var Credentials = (function () {
        function Credentials() {
            this.userCredentials = [
                { email: 'emailOne@notavalidemailaddress', password: 'password' },
                { email: 'emailTwo@notavalidemailaddress', password: 'password' },
                { email: 'emailThree@notavalidemailaddress', password: 'password' },
                { email: 'emailFour@notavalidemailaddresss', password: 'password' },
                { email: 'emailFive@notavalidemailaddress', password: 'password' },
            ];
        }
        return Credentials;
    }());
    LoginAutomation.Credentials = Credentials;
})(LoginAutomation = exports.LoginAutomation || (exports.LoginAutomation = {}));
//# sourceMappingURL=Credentials.js.map