const {Builder, By, Browser} = require('selenium-webdriver')

async function shoppingCartTest() {

    let driver = await new Builder().forBrowser(Browser.FIREFOX).build()
    
    try{

        await driver.get("https://tst.datatronic.cloud")

        let shopLink = await driver.findElement(By.xpath('//*[@id="root"]/div/header/div[1]/div/nav/a[1]'))

        await shopLink.click()

    }catch(error){

    }

    finally{

    }
}

shoppingCartTest()

