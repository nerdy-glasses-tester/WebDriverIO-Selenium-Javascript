import {expect} from 'chai'
import {short, medium, long} from '../lib/timeouts'
import App from '../page-objects/App'


describe('Filter Results Test', () => {
    it('Should navigate to homepage and select Furniture and Sofas category then filter by slipcovers type', () => {
        App.openHomepage()
        browser.pause(medium)
        browser.waitAndClick('#Nav_Furniture')
        browser.pause(medium)
        browser.waitAndClick('=Sofas')
        browser.pause(medium)
        browser.waitAndClick('.filter-button-text')
        browser.waitAndClick('.//div[@class="a11y-drawers undefined"][3]')
        browser.waitAndClick('.//span[@class="checkbox-label-name" and contains(text(), "Slipcovers")]')
        $$('.product-name-text').map((result) =>{
            let rs = result.getText() 
            expect(rs).to.contains.oneOf(['Slipcover'])
        })
        let selectedfilter = $('.//button[@class="selected-filter-button" and contains(text(), "Slipcovers")]')
        selectedfilter.isDisplayed()
    })


})