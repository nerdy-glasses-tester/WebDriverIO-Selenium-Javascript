import {expect} from 'chai'
import {short, medium, long} from '../lib/timeouts'
import App from '../page-objects/App'


describe('Sort Results Test', () => {
    it('Should navigate to homepage and select Decor and Display Shelves & Picture Ledges category then sort by lowest to highest price', () => {
        App.openHomepage()
        browser.pause(medium)
        browser.waitAndClick('#Nav_Decor')
        browser.pause(medium)
        browser.waitAndClick('=Display Shelves & Picture Ledges')
        browser.pause(medium)
        browser.waitAndClick('#top-container-sortBy-btn')
        browser.waitAndClick('.//li[@class="sort-option  " and contains(text(), "Price, low to high")]')
        $$('.regPrice').map((result) =>{
            let rs1 = result[0].getText() 
            let rs2 = result[1].getText()
            let rs3 = result[2].getText()
            let rs4 = result[3].getText()
            let rs5 = result[4].getText()
            expect(rs2).to.be.above(rs1)
            expect(rs3).to.be.above(rs2)
            expect(rs4).to.be.above(rs3)
            expect(rs5).to.be.above(rs4)
        })
    })


})