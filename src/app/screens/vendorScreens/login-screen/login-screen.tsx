import React from 'react'
import {View, Text, Button, TextInput, Image} from 'react-native'
import PrimaryButton from '../../../components/primary-button.js'
import SecondaryButton from '../../../components/secondary-button.js'

console.disableYellowBox = true;
import * as css from "../../style"
import gql from 'graphql-tag';
import { client } from '../../../main'
import { inject, observer } from 'mobx-react';
import { RootStore, RootStoreModel } from '../../../stores/root-store';
import { Vendor } from '../../../stores/vendor-store';

interface loginScreenProps {
    // injected props
    rootStore?: RootStore;
  }

@inject("rootStore")
@observer
class LoginScreen extends React.Component<loginScreenProps, any> {

    constructor(props) {
        super(props)
        this.state = {
            name: "none"
        }
    }

    componentWillReceiveProps(props) {
        console.log(props);
    }

    loginHandler = async () => {
        const { rootStore } = this.props
        await rootStore.initializeVendors()
        rootStore.increment()
        // this.props.navigation.navigate("Tabs")
    }

    render() {
        return (
            <View style={css.screen.defaultScreen}>
                <Text style={css.text.logo}>
                    hedwig. {this.props.rootStore.number} {this.state.name}
                    <Image source={require('../../../img/hedwig.png')} style={css.image.logo} />
                </Text> 

                <Text style={css.text.regularText}>
                    Email
                </Text>

                <TextInput 
                    style = {css.text.textInput}
                    placeholder = "Enter email"
                />

                <Text style={css.text.regularText}>
                    Password
                </Text>
                
                <TextInput 
                    style = {css.text.textInput}
                    placeholder="Enter password"
                />        
    
                <PrimaryButton
                    title ="Sign In"
                    onPress={this.loginHandler}
                />

                <SecondaryButton
                    title ="Create Account"
                />

            </View>
        )
    }
}

export default LoginScreen