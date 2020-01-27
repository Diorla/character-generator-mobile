import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Character, Story, Feedback, Help, Profile, Settings } from './screens';
 
// thin, normal, thick, bushy eyebrows
// spies always make use of reflective surfaces to catch a tail
// e.g. a puddle of water, a silver plate or coating, mirrors etc.
// using none obvious equipment like water will make it harder for 
// the enemy to know you're unto them.

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
