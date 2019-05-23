import React from 'react'
import PropTypes from 'prop-types'

const RefItem = ({ userBMI, min, max, color, label }) => {
  const displayValue = () => {
    if (userBMI) {
      return userBMI
    }

    if (!min && max) {
      return <span>&lt; {max}</span>
    }

    if (min && !max) {
      return <span>&ge; {min}</span>
    }

    return `${min} - ${max}`
  }

  return (
    <div className='item'>
      <div className='right floated content'>
        <div className='ui'>{displayValue()}</div>
      </div>
      <span className='left floated content' style={{ backgroundColor: color, width: '15px', height: '15px' }} />
      <div className='content'>
        {label}
      </div>
    </div>
  )
}

RefItem.propTypes = {
  userBMI: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  color: PropTypes.string,
  label: PropTypes.string
}

export default RefItem
