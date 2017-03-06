import React from 'react';
import {
  View
} from 'react-native';

import _ from 'lodash';

import List from './List';
import Tinder from './Tinder';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      members: [],
    };

    fetch('https://api.meetup.com/WebDevelopment-Nederland/events/237701686/rsvps?photo-host=public&sig_id=148936292&sig=791565ae64fe83088cdcd2bc5d464b7a715c7f47')
      .then(response => response.json())
      .then((json) => {
        const members = json.map(item => {
          return {
            name: _.get(item, 'member.name', 'no name'),
            imageUrl: _.get(item, 'member.photo.highres_link', 'http://combonetwork.com/img/empty_profile.png'),
            response: item.response,
          };
        });

        this.setState({ members });
      });
  }

  render() {  
    if (this.state.members.length) {
      return <List members={this.state.members} />
      // return <Tinder members={this.state.members} />
    } else {
      return <View />;
    }
  }
}

export default App;
