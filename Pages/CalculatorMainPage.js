let mainPage = function(){

    let firstNumber = element(by.model('first'));

    let secondNumber = element(by.model('second'));

    let clickOnGo = element(by.css('[ng-click="doAddition()"]'));

    this.initateURL = function(URL){
        browser.get(URL);
    }

    this.enterFirstNumber = function(firstNo){
        firstNumber.sendKeys(firstNo);
    }

    this.enterSecondNumber = function(secondNo){
        secondNumber.sendKeys(secondNo);
    }

    this.clickGo = function(){
        clickOnGo.click();
    }

    this.verifyResult = function(output){
        let result = element(by.cssContainingText('.ng-binding', output))
        expect(result.getText()).toBe(output);
    }



};

module.exports = new mainPage();
