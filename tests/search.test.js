import {expect} from 'chai'
import {short, medium, long} from '../lib/timeouts'
import App from '../page-objects/App'


describe('Search Test', () => {
    it('Should navigate to homepage and search for coffee tables', () => {
        App.openHomepage()
        browser.pause(medium)
        browser.switchToFrame($('#attentive_creative'))
        browser.waitAndClick('#closeIconContainer')
        browser.switchToParentFrame();
        browser.waitAndTypeText('#header-header-search-input', 'Coffee Table')
        browser.pause(medium)
        browser.waitAndClick('.header-search-icon.is-active')
        $$('.product-name-text').map((result) =>{
            let rs = result.getText() 
            expect(rs).to.contains.oneOf(['Coffee Table', 'Coffee Tables'])
        })
    })


})