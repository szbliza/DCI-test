const {Builder, By, Browser, until} = require('selenium-webdriver')

async function shoppingCartTest() {

    let driver = await new Builder().forBrowser(Browser.FIREFOX).build()
    
    try{

        await driver.get("https://tst.datatronic.cloud")
        
        let shopLink = await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/header/div[1]/div/nav/a[1]/span')))
        await shopLink.click()

    }catch(error){

        console.log(error)

    }

    finally{

    }
}

shoppingCartTest()

