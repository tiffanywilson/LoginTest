
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [ 
        'LoginTest/Login.spec.js',
    ],

    multiCapabilities: [
		{
			'browserName': 'chrome',
			'chromeOptions': {
				binary: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
				args: [],
				extensions: []
			}
		},
    ],

    framework: 'jasmine2',
    onPrepare: function () {
        browser.driver.manage().window().maximize();
    },
    allScriptsTimeout: 300000, // amount of time to wait for an asynchronous script to finish execution
    jasmineNodeOpts: { defaultTimeoutInterval: 300000 } // 5min timeout
}

