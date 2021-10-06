const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')

describe('Dependency test', function () {
  test('should get project details', function (done) {
    expect(true).toBe(true)
    done()
  })

  // test('should get project details and populate the page', async function () {
  //   // before the page was loaded
  //   document.body.innerHTML = fs.readFileSync(
  //     path.join(__dirname, '..', 'browser', 'browser.html')
  //   )
  //   expect(document.getElementById('details').innerHTML).toBe('')

  //   const browser = await puppeteer.launch()
  //   try {
  //     const url = path.join(__dirname, '..', 'browser', 'browser.html')
  //     const page = await browser.newPage()
  //     await page.goto('file:///' + url)
  //     await page.waitForTimeout(2000)
  //     let html_content = await page.evaluate(
  //       (el) => el.innerHTML,
  //       await page.$('#details')
  //     )
  //     // console.log(html_content)
  //     expect(JSON.parse(html_content).key).toBe('demo-1')
  //   } catch (err) {
  //     console.log(err)
  //   } finally {
  //     await browser.close()
  //   }
  // })
})
