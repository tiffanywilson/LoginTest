"use strict";
/**
 * Created by twilson on 6/20/2016.
 */
///<reference path="../Scripts/typings/angular-protractor/angular-protractor.d.ts" />
var LoginAutomation;
(function (LoginAutomation) {
    var Credentials = (function () {
        function Credentials() {
            this.personOne = {
                email: 'emailOne@notavalidemailaddress.',
                password: 'password1'
            };
            this.personTwo = {
                email: 'emailTwo@notavalidemailaddress',
                password: 'password1'
            };
            this.personThree = {
                email: 'emailThree@notavalidemailaddress',
                password: 'password1'
            };
            this.personFour = {
                email: 'emailFour@notavalidemailaddress',
                password: 'password1'
            };
            this.personFive = {
                email: 'emailFive@notavalidemailaddress',
                password: 'password1'
            };
        }
        return Credentials;
    }());
    LoginAutomation.Credentials = Credentials;
})(LoginAutomation = exports.LoginAutomation || (exports.LoginAutomation = {}));
//# sourceMappingURL=Credentials.js.map