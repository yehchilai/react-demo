import React, { Component } from 'react';
import classes from './Person.css'
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClassOther'

class Person extends Component {

    render() {
        console.log('[Person] rendering...');

        // (hoc) use higher order component
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name}></input>
            </Aux>
        )

        // (Optional), use list with keys
        // return [
        //     <p key='item1' onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>,
        //     <p key='item2'>{this.props.children}</p>,
        //     <input key='item3' type='text' onChange={this.props.changed} value={this.props.name}></input>
        // ]

        // (Original)
        // return (
        //     <div className={classes.Person}>
        //         <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
        //         <p>{this.props.children}</p>
        //         <input type='text' onChange={this.props.changed} value={this.props.name}></input>
        //     </div>
        // )

    }

}

export default withClass(Person, classes.Person);