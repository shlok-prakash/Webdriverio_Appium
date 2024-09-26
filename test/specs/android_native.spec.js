describe('Android Native Feature Test', async() => { 
    xit('Access an Activity directly', async()=>{
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")

        await driver.pause(5000);

        //Assertion
        await expect($('//*[@text = "App/Alert Dialogs"]')).toExist();

    })

    it('Working with Dialog Boxes', async() => {

        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")

        await expect($('//*[@text = "App/Alert Dialogs"]')).toExist();

        //click on first dialog box
        (await $('//*[@resource-id = "io.appium.android.apis:id/two_buttons" ]')).click();

        await driver.pause(10000);
        /*
        // Get alert Text
        console.log("ALERT DIALOGUE TEXT -->" ,await driver.getAlertText());
        
        //accept Alert
        // await driver.acceptAlert();

        //dismiss alert
        // await driver.dismissAlert();

        // click on the "ok" button
        (await $('//*[@resource-id="android:id/button1"]')).click()

        // assertion - alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();*/
    })
    
    it.only('Vertical Scrolling', async()=>{

        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.ApiDemos")
        await expect($('//*[@text = "Custom Title"]')).toExist();
        
        //Scroll to End (Not Stable if element gets moved)
        // await $('android - new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')

        //scrollTextIntoView
        (await $('android - new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")')).click();
        // (await $('~Secure Surfaces')).click();.
        await expect($('//*[@text = "Secure Dialog"]')).toExist();
    })

})