import React, { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Transport } from '../modules/transport'
import { Housing } from '../modules/housing'
import { Layout } from './layout'

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/transport">
            <Transport />
          </Route>

          <Route exact path="/housing">
            <Housing />
          </Route>

          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
