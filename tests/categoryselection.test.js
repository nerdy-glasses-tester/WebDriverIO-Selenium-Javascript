import {expect} from 'chai'
import {short, medium, long} from '../lib/timeouts'
import App from '../page-objects/App'


describe('Category Selection Test', () => {
    it('Should navigate to homepage and select Furniture and Accent Chairs category', () => {
        App.openHomepage()
        browser.pause(medium)
        browser.waitAndClick('#Nav_Furniture')
        browser.pause(medium)
        browser.waitAndClick('=Accent Chairs')
        browser.pause(medium)
        $$('.product-name-text').map((result) =>{
            let rs = result.getText() 
            expect(rs).to.contains.oneOf(['Chair', 'Armchair', 'chair'])
        })
    })


})