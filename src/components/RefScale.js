import React, { useContext } from 'react'
import { ReferenceValuesContext } from './AppContext'

import RefItem from './RefItem'

const RefScale = () => {
  const referenceValues = useContext(ReferenceValuesContext)
  const list = referenceValues.map((ref, index) => {
    return <RefItem key={index} color={ref.color} label={ref.label} min={ref.min} max={ref.max} />
  })
  return (
    <>
      <h4>Reference values</h4>
      <div className='ui middle aligned divided list'>{list}</div>
    </>
  )
}

export default RefScale
