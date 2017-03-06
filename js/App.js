import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  Scene,
  Router
} from 'react-native-router-flux';

import List from './List';
import Tinder from './Tinder';
import Loading from './Loading';

const getMemberImageUrl = (member) => {
  if (member.photo && member.photo.highres_link) {
    return member.photo.highres_link;
  }

  if (member.photo && member.photo.photo_link) {
    return member.photo.photo_link;
  }

  return 'http://combonetwork.com/img/empty_profile.png';  
}

class App extends React.Component {
  constructor(props) {
    super(props);

    // console.disableYellowBox = true;

    this.state = {
      loading: true,
      members: [],
    };

    fetch('https://api.meetup.com/WebDevelopment-Nederland/events/237701686/rsvps?photo-host=public&sig_id=148936292&sig=791565ae64fe83088cdcd2bc5d464b7a715c7f47')
      .then(response => response.json())
      .then((json) => {
        const members = json.map(item => {
          return {
            name: item.member.name,
            imageUrl: getMemberImageUrl(item.member),
            response: item.response,
          };
        });

        this.setState({ members });
      });
  }

  render() {  
    if (this.state.members.length) {
      return (
        <Router>
          <Scene key={List} component={List} members={this.state.members} />
        </Router>
      );
    } else {
      return <Loading />;
    }
  }
}

export default App;
