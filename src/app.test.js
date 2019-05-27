import React from 'react'
import {shallow} from 'enzyme' 
import App from './App'

const props={onClick:jest.fn()}
describe('App component',()=>{
    it('should render dom',()=>{
        const wrapper = shallow (<App{...props}/>) //加载Demo为Dom
        expect(wrapper.find('a').text()).toContain('123');//内容包含123的dom
        // expect(wrapper.props.children[0].props.children).to.equal(‘demo’);//内容等于demo

    })
})