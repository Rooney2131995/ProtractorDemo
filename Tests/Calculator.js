let calculatorHome = require('../Pages/CalculatorMainPage');

describe('demo calculator test', function(){

    it('additionTest', function(){
        
        //browser.get('http://juliemr.github.io/protractor-demo/');
        calculatorHome.initateURL('http://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('5');
        calculatorHome.enterFirstNumber('5');

        //element(by.model('second')).sendKeys('6');
        calculatorHome.enterSecondNumber('6');


        //element(by.css('[ng-click="doAddition()"]')).click();
        calculatorHome.clickGo();


        //let result = element(by.cssContainingText('.ng-binding', '11'))
        //expect(result.getText()).toBe('11');

        calculatorHome.verifyResult('11');

        browser.sleep(3000);
    })


    it('Subtraction Test', function(){
        
        //browser.get('http://juliemr.github.io/protractor-demo/');
        calculatorHome.initateURL('http://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('5');
        calculatorHome.enterFirstNumber('5');

        //element(by.model('second')).sendKeys('6');
        calculatorHome.enterSecondNumber('6');


        //element(by.css('[ng-click="doAddition()"]')).click();
        calculatorHome.clickGo1();


        //let result = element(by.cssContainingText('.ng-binding', '11'))
        //expect(result.getText()).toBe('11');

        calculatorHome.verifyResult('11');

        browser.sleep(2000);
    })

});