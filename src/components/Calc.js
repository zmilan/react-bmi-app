import React, { useContext, useState } from 'react'

import { HeightContext, WeightContext } from './AppContext'
import { validateInput } from '../helpers'
import './Calc.css'

const Calc = () => {
  const { setHeight } = useContext(HeightContext)
  const { setWeight } = useContext(WeightContext)
  let heightField = null
  const errorMessage = 'Only number are allowed.'
  const [formErrors, setFormError] = useState({ height: false, weight: false })

  const updateErrors = newObj => {
    setFormError({
      ...formErrors,
      ...newObj
    })
  }

  const onWeightChangeHandler = event => {
    const value = event.target.value
    const isValid = validateInput(value)
    updateErrors({ weight: !isValid })
    setWeight(isValid ? value : null)
  }

  const onHeightChangeHandler = event => {
    const value = event.target.value
    const isValid = validateInput(value)
    updateErrors({ height: !isValid })
    setHeight(isValid ? value : null)
  }

  const onWeightKeyUp = event => {
    if (event.key === 'Enter') {
      heightField.focus()
    }
  }
  /*
  const onHeightKeyUp = event => {
    if (event.key === 'Enter' && !weightField.value) {
      weightField.focus()
    }
  }
  */

  return (
    <>
      <form>
        <div className='form-row'>
          <div>
            <label htmlFor='weight-input'>Weight [kg]</label>
          </div>
          <div className={formErrors.weight ? 'error' : null}>
            <input
              id='weight-input'
              autoFocus
              type='text'
              onChange={onWeightChangeHandler}
              onKeyUp={onWeightKeyUp}
            />
            <br />
            { formErrors.weight ? <span className='error-message'>{errorMessage}</span> : null }
          </div>
        </div>
        <div className='form-row'>
          <div>
            <label htmlFor='height-input'>Height [cm]</label>
          </div>
          <div className={formErrors.height ? 'error' : null}>
            <input
              id='height-input'
              ref={input => { heightField = input }}
              type='text'
              onChange={onHeightChangeHandler}
            />
            <br />
            { formErrors.height ? <span className='error-message'>{errorMessage}</span> : null }
          </div>
        </div>
      </form>
    </>
  )
}

export default Calc
