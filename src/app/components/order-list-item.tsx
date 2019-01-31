import * as React from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { color, typography } from '../../theme';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Order from './temporary-mock-order';
// import { Order } from "../stores/order-store"
// Using temporary Order object instead of order-store Order object

interface OrderListItemProps {
    order : Order
}

class OrderListItem extends React.Component<OrderListItemProps, any> {
    constructor(props) {
        super(props);
        this.singleOrderPress = this.singleOrderPress.bind(this);
    }

    // Define action when pressing entire list item
    singleOrderPress() {
        this.props.navigation.navigate('SingleOrder', {
            order : this.props.order,
        }); 
    }

    // Define action when pressing "plus" button
    addOrderPress() {
        console.log("Trying to add order");
    }
    
    render() {
        let { firstName, lastName } = this.props.order.user;
        let { location } = this.props.order;
        let { pending, onTheWay, fulfilled } = this.props.order.status;

        // Fold all item names and quantities down to single string
        // actually, don't need to display order items, but still keeping this line 
        // cus one-liners are dope.
        let items = this.props.order.items.reduce((accu, curr) => 
            accu + curr.item.itemName + " x" + curr.quantity.toString() + "  ", "");

        return (
            <TouchableHighlight onPress={this.singleOrderPress}>
                <View style={styles.row}>
                    <View style={styles.row_cell}>
                        <Text style={styles.row_location}> {location} </Text>
                        <Text style={styles.row_name}> {firstName + ' ' + lastName}</Text>
                        <Text style={styles.row_time}> {pending}</Text>
                    </View>

                    <TouchableHighlight onPress={this.addOrderPress}>
                        <Icon name="add" size={50} color="black" />
                    </TouchableHighlight>
                    
                </View>
            </TouchableHighlight>
        )
    }
}

// Because this component is not a screen, it is not automatically passed the 
// "navigation" prop, thus, we have to use this wrapper "withNavigation"
export default withNavigation(OrderListItem);


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