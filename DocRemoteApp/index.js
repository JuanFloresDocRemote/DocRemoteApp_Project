/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import LogIn from './src/components/LogIn/LogIn.js'
import ModalNumber from './src/components/ModalNumber/ModalNumber.js'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LogIn);
