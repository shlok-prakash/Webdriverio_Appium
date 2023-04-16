describe( "Android Elements Tests ",()=>{
    it('Find elemnet by accessibility Id', async()=>{
        //find elemnt by accessibility id 
        const appOption = await $('~App');

        //Here ~ represnts the accessibility id and 
        //the function click is used for clicking on the element 
        //driver.pause is used to pause the run for the time alloted 
        //toBeExisting() =====  WebdriverIO.Element -> isExisting to check whether the element is existing or not !
        /*except  === When you're writing tests,
        you often need to check that values meet certain 
        conditions. expect gives you access to a number of "matchers"
        that let you validate different things on the browser, an element or mock object.*/

        //click on elemnt 
        await appOption.click();
        await driver.pause(5000); 

        //assertion
        const actionBar = await $('~Action Bar');
        await expect (actionBar).toBeExisting();
    })

    it('Find elements by class Name', async ()=>{
        //find element by class name 
        const className = await $('android.widget.TextView');

        console.log(await className.getText());

        //assertion 
        await expect(className).toHaveText("API Demos");
        
    })

    xit ('Find element by xpath', async ()=>{
        //xpath ---->  (//tagname[@attribute = value])
        await $('//android.widget.TextView[@content-desc = "Alert Dialogs"]').click();

        //find using resource id 
        await $('//android.widget.Button[@resource-id = "io.appium.android.apis:id/select_button"]').click();

        //find using text
        await $('//android.widget.TextView[@text= "Command two"]').click();
        
        //find by class assertion
        const className = await $('//android.widget.TextView');
        await expect(className).toHaveText("You selected: 1 , Command two");
    });

    it ('Find element using android UI automator', async ()=> {

         //find element by text contains
        await $('android=new UiSelector().textContains("Alert")').click();
    })

});