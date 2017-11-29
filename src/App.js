import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDlGrJGVuHVNzeUfFG1ptLvLypqy6Wg91A",
            authDomain: "auth-3dfd7.firebaseapp.com",
            databaseURL: "https://auth-3dfd7.firebaseio.com",
            projectId: "auth-3dfd7",
            storageBucket: "auth-3dfd7.appspot.com",
            messagingSenderId: "830768954953"
          });

          firebase.auth().onAuthStateChanged((user) => {
             if(user) {
                 this.setState({ loggedIn: true });
             } else {
                 this.setState({ loggedIn: false });
             }
          });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;