import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { Home } from '../containers/Home';
import { Details } from '../containers/Details';

const navigation = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: "FinderCEP",
            headerTitleStyle: {
                color: "#3498db",
                fontSize: 20
            }
        }
    },
    Details: {
        screen: Details
    }
});

const Routes = createAppContainer(navigation);

export default Routes;