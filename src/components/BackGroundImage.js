import React,{Component} from 'react';
import {Image} from 'react-native';

export default class BackGroundImage extends Component {

    render() {
        return (
            <Image source={require('../assets/ban-leaf.jpg')}>

                    {this.props.children}

            </Image>
        )
    }
}
