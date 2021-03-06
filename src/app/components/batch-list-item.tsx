import * as React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import { ListItem } from 'react-native-elements';
import { color, typography } from '../../theme';
import { withNavigation, NavigationScreenProp } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Order from './temporary-mock-order';
// import { Order } from "../stores/order-store"
// Using temporary Order object instead of order-store Order object

interface BatchListItemProps {
    batch : any,
    name: String,
    navigation: NavigationScreenProp<any, any>
}

class BatchListItem extends React.Component<BatchListItemProps, any> {
    constructor(props) {
        super(props);
        this.singleOrderPress = this.singleOrderPress.bind(this);
    }

    // Define action when pressing entire list item
    singleOrderPress() {
      console.log("navigating")
        this.props.navigation.navigate('SingleBatchList', {
            batchID : this.props.batch._id
        }); 
    }

    addOrderPress() {
      console.log("Trying to add order");
    }

    render() {

        return (
            <TouchableOpacity onPress={this.singleOrderPress}>
                <View style={styles.row}>
                    <View style={styles.row_cell}>
                        <Text style={styles.row_location}> {`${this.props.name}'s Batch`} </Text>  
                    </View>
                    <Icon name="chevron-right" size={50} color="black" />
                    
                </View>
            </TouchableOpacity>
        )
    }
}

// Because this component is not a screen, it is not automatically passed the "navigation" prop,
// thus, we have to use this wrapper "withNavigation"
export default withNavigation(BatchListItem);


// We need to centralize these to be reusible/importable
const styles = StyleSheet.create({
    row: {
        elevation: 1,
        backgroundColor: color.background,
        flex: 1,
        flexDirection: 'row',  // main axis
        justifyContent: 'flex-start', // main axis
        alignItems: 'center', // cross axis
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 14,
        paddingRight: 16,
        marginLeft: 6,
        marginRight: 6,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff'    
      },
      row_cell: {
        flex: 1,
        flexDirection: 'column',
      },
      row_location: {
        paddingLeft : 0,
        color: color.storybookTextColor,
        textAlignVertical: 'top',
        includeFontPadding: false,
        flex: 0,
        fontSize: 30,
        // fontFamily: typography.primary,
      },
      row_name: {
        paddingLeft : 0,
        color: color.storybookTextColor,
        // textAlignVertical: 'bottom',
        includeFontPadding: false,
        flex: 0,
        fontSize: 18,
        // fontFamily: typography.primary,
      },
      row_time: {
        paddingLeft : 0,
        color: color.storybookTextColor,
        textAlignVertical: 'bottom',
        // textAlign:'center',
        includeFontPadding: false,
        flex: 0,
        fontSize: 10,
        // fontFamily: typography.primary,
      },
});