// @flow

import { connect } from 'react-redux'

import { sayHello } from '../action/hello'
import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'Say hello',
})

const mapDispatchToProps = (dispatch: Function) => ({
  handleClick: () => { dispatch(sayHello('Hello REDUX!')) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
