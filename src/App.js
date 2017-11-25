import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDlGrJGVuHVNzeUfFG1ptLvLypqy6Wg91A",
            authDomain: "auth-3dfd7.firebaseapp.com",
            databaseURL: "https://auth-3dfd7.firebaseio.com",
            projectId: "auth-3dfd7",
            storageBucket: "auth-3dfd7.appspot.com",
            messagingSenderId: "830768954953"
          });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>An app</Text>
            </View>
        );
    }
}

export default App;