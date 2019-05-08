import * as React from 'react'
import * as Enzyme from 'enzyme'
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16'

import App from './App'

const adapter = ReactSixteenAdapter as any
Enzyme.configure({ adapter: new adapter.default() })

describe('App component', () => {
    const wrapper = Enzyme.shallow(<App />)

    it('render 1 <div />', () => {
        expect(wrapper).toHaveLength(1)
    })

    it('render Hello World! text', () => {
        expect(wrapper.text()).toEqual('Hello World!')
    })
})
