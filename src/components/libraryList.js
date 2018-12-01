import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './listItem';

class LibraryList extends Component {

    renderItem(library)  {
        return <ListItem library={library} />
    }

    render() {
        // console.log(this.props.libraries);
        return (

            <FlatList 
                data={this.props.libraries}
                renderItem={({item}) => this.renderItem(item)}
                keyExtractor={library => library.id.toString()}
                
            />
        );
    }
}


const mapStateToProps = state => {
    return {libraries: state.libraries}
};

export default connect(mapStateToProps)(LibraryList);