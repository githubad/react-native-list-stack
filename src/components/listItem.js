import React, {Component} from 'react';
import {
     Text,
     TouchableWithoutFeedback, 
     View,
     LayoutAnimation,
     Platform,
     UIManager
    }
     from 'react-native';
import {CardSection} from './common';
import * as actions from '../actions';
import {connect} from 'react-redux';

class ListItem extends Component   {
    constructor(props) {
        super(props);
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const {expanded, library} = this.props;
        const {descStyle} = styles;
        if(expanded) {
            return (
                <CardSection>
                <Text style={descStyle}>
                {library.description}
                </Text>
                </CardSection>
            );
        }
    }

    render() {
        const {titleStyle} = styles;
        const {id, title} = this.props.library;

        // console.log(this.props);
        return(
            <TouchableWithoutFeedback
             onPress={() => this.props.selectLibrary(id)}>
                <View>
                <CardSection>
                    <Text style={titleStyle}>
                    {title}
                    </Text>
                </CardSection>
                {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descStyle: {
        fontSize: 16,
        padding: 10,
        flex: 1
    }
}


const mapStateToProps = ({selectedLibraryId}, ownProps) => {
const expanded = selectedLibraryId === ownProps.library.id;
return {expanded};
};

export default connect(mapStateToProps, actions)(ListItem);
