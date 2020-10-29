import * as React from 'react'
import { Provider } from 'react-redux'
import store from '../src/store'

interface Props {
  children: any
}

const TestStoreWrapper: React.SFC<Props> = (props) => {
  return <Provider store={store} >{props.children}</Provider>
}

export default TestStoreWrapper
