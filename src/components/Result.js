import React, { useContext } from 'react'

import { HeightContext, WeightContext, ReferenceValuesContext } from './AppContext'
import RefItem from './RefItem'
import { validateInput } from '../helpers'

const Result = () => {
  const { height } = useContext(HeightContext)
  const { weight } = useContext(WeightContext)
  const referenceValues = useContext(ReferenceValuesContext)

  const showDefaultMsg = () => {
    return <div>Please fill form with your data to see your result.</div>
  }

  const findUserScore = () => {
    if (!validateInput(height) || !validateInput(weight)) {
      return showDefaultMsg()
    }
    // convert height to meters
    const meters = height / 100
    // calculate user BMI
    const userBMI = Number((weight / (meters * meters)).toFixed(2))
    // find user range
    const ref = referenceValues.find(item => {
      if (!item.min && item.max > userBMI) {
        return true
      }
      if (item.min < userBMI && item.max > userBMI) {
        return true
      }
      if (!item.max && item.min <= userBMI) {
        return true
      }

      return false
    })

    if (!ref) {
      return showDefaultMsg()
    } else {
      return <RefItem color={ref.color} label={ref.label} userBMI={userBMI} />
    }
  }

  return <div className='ui middle aligned list'>{findUserScore()}</div>
}

export default Result
