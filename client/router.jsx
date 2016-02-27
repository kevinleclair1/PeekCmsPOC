import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import {OtherApp, App, MeteorData} from './app.jsx';

FlowRouter.route("/", {
  action() {
    mount(MeteorData, {
        render: data => <App data={data} />
    });
  }
});

FlowRouter.route("/test", {
  action() {
    mount(MeteorData, {
        render: data => <OtherApp data={data} />
    });
  }
});