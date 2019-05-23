import React, { useState } from 'react'
import PropTypes from 'prop-types'

const referenceValues = [
  { color: '#FF0000', label: 'Very severely underweight', max: 16 },
  { color: '#FE642E', label: 'Severely underweight', min: 16, max: 16.99 },
  { color: '#F7D358', label: 'Underweight', min: 17, max: 18.49 },
  { color: '#5FB404', label: 'Normal (healthy weight)', min: 18.5, max: 24.99 },
  { color: '#F7D358', label: 'Overweight', min: 25, max: 29.99 },
  { color: '#FE642E', label: 'Obese Class I', min: 30, max: 34.99 },
  { color: '#FF0000', label: 'Obese Class II', min: 35, max: 39.99 },
  { color: '#8A0808', label: 'Obese Class III', min: 40 }
]

export const HeightContext = React.createContext(null)
export const WeightContext = React.createContext(null)
export const ReferenceValuesContext = React.createContext(null)

const AppContext = ({ children }) => {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)

  return (
    <ReferenceValuesContext.Provider value={referenceValues}>
      <WeightContext.Provider value={{ weight, setWeight }}>
        <HeightContext.Provider value={{ height, setHeight }}>
          { children }
        </HeightContext.Provider>
      </WeightContext.Provider>
    </ReferenceValuesContext.Provider>
  )
}

AppContext.propTypes = {
  children: PropTypes.element
}

export default AppContext
