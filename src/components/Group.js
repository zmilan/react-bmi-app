import React from 'react'
import PropTypes from 'prop-types'

const Group = (props) => {
  return props.children ? <div className='ui segment'>{props.children}</div> : null
}

Group.propTypes = {
  children: PropTypes.element
}

export default Group
