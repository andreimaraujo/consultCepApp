import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { Home } from '../containers/Home';
import { Details } from '../containers/Details';

const navigation = createStackNavigator({
    Home: {
        screen: Home
    },
    Details: {
        screen: Details
    }
});

const Routes = createAppContainer(navigation);

export default Routes;