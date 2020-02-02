import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Character, Story, Feedback, Help, Profile, Settings } from './screens';

const MyDrawerNavigator = createDrawerNavigator({
  Character: {
    screen: Character,
  },
  Story: {
    screen: Story,
  },
  Feedback: {
    screen: Feedback,
  },
  Help : {
    screen: Help,
  },
  Profile : {
    screen: Profile,
  },
  Settings : {
    screen: Settings,
  }
});

export default createAppContainer(MyDrawerNavigator);
