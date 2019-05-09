import React from 'react'
import Enzyme from 'enzyme'
import ReactSixteenAdapter from 'enzyme-adapter-react-16'

import App from './App'

Enzyme.configure({ adapter: new ReactSixteenAdapter() })

describe('App component', () => {
    const wrapper = Enzyme.shallow(<App />)

    it('render 1 <div />', () => {
        expect(wrapper).toHaveLength(1)
    })

    it('render Hello World! text', () => {
        expect(wrapper.text()).toEqual('Hello World!')
    })
})
