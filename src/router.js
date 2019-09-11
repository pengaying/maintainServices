import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from "dva/dynamic";
// import MenuSystem from './routes/MenuSystem';

function RouterConfig({ history, app }) {

  const MSystem = dynamic({
    app,
    models: () => [import('./models/systemModal'),import('./models/windowModal')],
    component: () => import('./routes/MSystem')
  })
  const MSyntheticDisplay = dynamic({
    app,
    models: () => [import('./models/windowModal')],
    component: () => import('./routes/MSyntheticDisplay')
  })
  const MDataManagement = dynamic({
    app,
    models: () => [import('./models/dataManagement'),import('./models/windowModal')],
    component: () => import('./routes/MDataManagement')
  })
  const MService = dynamic({
    app,
    models: () => [import('./models/dataManagement'),import('./models/windowModal')],
    component: () => import('./routes/MService')
  })
  const MWindow = dynamic({
    app,
    models: () => [import('./models/windowModal')],
    component: () => import('./routes/MWindow')
  })

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={MSystem} />
        <Route path="/msyntheticDisplay" exact component={MSyntheticDisplay} />
        <Route path="/mdataManagement" exact component={MDataManagement} />
        <Route path="/mwindow" exact component={MWindow} />
        <Route path="/mservice" exact component={MService} />
      </Switch>
    </Router>
  );

}

export default RouterConfig;

