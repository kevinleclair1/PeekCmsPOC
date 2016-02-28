import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import {OtherApp, App, MeteorData} from './components/app.jsx';
import {Units} from '../lib/Collections/collections.js';
import {setSelectedUnit} from './helpers.jsx';

FlowRouter.route("/", {
  action() {
    mount(MeteorData, {
        render: data => <App data={data} />
    });
  }
});

FlowRouter.route('/unitOverview/:unit', {
  action(params) {
    //Need to set the Session value here
    mount(MeteorData, {
        render: data => <App data={data} />,
        routeControl: () => {
          setSelectedUnit(params.unit)
        }
    });  
  }
})