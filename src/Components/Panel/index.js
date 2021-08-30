import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Animated} from 'react-native';
import {styles} from './styles.js';

const icons = {
    chevronUp: require('../../Assets/pngs/chevron_up.png'),
    chevronDown: require('../../Assets/pngs/chevron_down.png'),
};

const Panel = ({children, title}) => {
    const [expanded, setExpanded] = useState(false);
    const [icon, setIcon] = useState(icons['chevronDown']);

    const onArrowPressed = () => {
        if (expanded) {
            setExpanded(false);
            setIcon(icons['chevronDown']);
        } else {
            setExpanded(true);
            setIcon(icons['chevronUp']);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onArrowPressed}>
                <View style={expanded ? styles.titleExpandedContainer : styles.titleCollidedContainer} >
                    <Text style={styles.title} >{title}</Text>
                    <Image source={icon} ></Image>
                </View>
            </TouchableOpacity>

            {expanded ? <View style={styles.childrenContainer}>{children}</View> : null}
        </View>
    );
}

export default Panel;