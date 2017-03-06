import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Scene,
  TabBar,
  Router,
} from 'react-native-router-flux';

import CardScene from './CardScene';
import List from './List';
import Attendance from './Attendance';
import Loading from './Loading';
import TabIcon from './TabIcon';

const getMemberImageUrl = (member) => {
  if (member.photo && member.photo.highres_link) {
    return member.photo.highres_link;
  }

  if (member.photo && member.photo.photo_link) {
    return member.photo.photo_link;
  }

  return 'http://combonetwork.com/img/empty_profile.png';
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#eee',
    borderTopWidth: 0.5,
    borderTopColor: '#828287',
  }
})

class App extends React.Component {
  constructor(props) {
    super(props);

    console.disableYellowBox = true;

    this.state = {
      members: [],
    };

    // fetch('https://api.meetup.com/WebDevelopment-Nederland/events/237701686/rsvps?photo-host=public&sig_id=148936292&sig=791565ae64fe83088cdcd2bc5d464b7a715c7f47')
    // .then(response => response.json())
    new Promise.resolve(require('./data/meetup-api.json'))
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
          <Scene key="tabbar" tabs hideNavBar style={styles.tabBar}>
            <Scene
              key="tab_list"
              icon={TabIcon}
              iconName="list"
              title="List"
            >
              <Scene
                key="list"
                component={List}
                title="List"
                members={this.state.members}
              />
              <Scene
                key="card"
                component={CardScene}
                title="Card"
              />
            </Scene>
            <Scene
              key="tab_attendance"
              icon={TabIcon}
              iconName="calendar-check-o"
              title="Attendance"
            >
              <Scene
                key="attendance"
                component={Attendance}
                title="Attendance"
                members={this.state.members}
              />
            </Scene>
          </Scene>
        </Router>
      );
    } else {
      return <Loading />;
    }
  }
}

export default App;
