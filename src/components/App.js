import React from 'react'

import Group from './Group'
import Result from './Result'
import Calc from './Calc'
import RefScale from './RefScale'
import Intro from './Intro'
import AppContext from './AppContext'

const App = () => (
  <AppContext>
    <div className='ui container' style={{ marginTop: '10px' }}>
      <Group>
        <Result />
      </Group>
      <Group>
        <Calc />
      </Group>
      <Group>
        <RefScale />
      </Group>
      <Group>
        <Intro />
      </Group>
    </div>
  </AppContext>
)

export default App
