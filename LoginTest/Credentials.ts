/**
 * Created by twilson on 6/20/2016.
 */
///<reference path="../Scripts/typings/angular-protractor/angular-protractor.d.ts" />
export module LoginAutomation {
    
    export class Credentials {

        public userCredentials:{email:string, password:string } [] =
            [
                {email: 'emailOne@notavalidemailaddress', password: 'password'},
                {email: 'emailTwo@notavalidemailaddress', password: 'password'},
                {email: 'emailThree@notavalidemailaddress', password: 'password'},
                {email: 'emailFour@notavalidemailaddresss', password: 'password'},
                {email: 'emailFive@notavalidemailaddress', password: 'password'},
            ];
    }
}