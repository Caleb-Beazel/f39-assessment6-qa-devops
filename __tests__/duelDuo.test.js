const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("test if clicking 'draw' displays div with id='choices'", async () => {
    
    await driver.get("http://localhost:8000")
    
    await driver.findElement(By.id('draw')).click()
    
    await driver.wait(until.elementLocated(By.id('choices')))
    
  })

  test("Test that a robot is added to the player's duo",async () => {
    
    await driver.get("http://localhost:8000")
    
    await driver.findElement(By.id('draw')).click()
    
    await driver.findElement(By.className('bot-btn')).click()

    expect(await driver.findElement(By.id('player-duo'))).toContain(driver.findElement(By.className('bot-btn')))
    
  })

});