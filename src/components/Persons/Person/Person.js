import React, { Component } from 'react';
import classes from './Person.css'
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClassOther'
import PropTypes from 'prop-types'

class Person extends Component {

    constructor(props) {
        super(props)
        this.elementRef = React.createRef()
    }

    componentDidMount() {
        // old way to use ref. Support all version
        //this.element.focus();

        // new way to use red. Support 16.3+
        this.elementRef.current.focus();
    }

    render() {
        console.log('[Person] rendering...');

        // (hoc) use higher order component
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type='text'
                    // old way to use ref. Support all version
                    // ref={(el) => {this.element = el}}
                    // new way to use red. Support 16.3+
                    ref={this.elementRef}
                    onChange={this.props.changed}
                    value={this.props.name}>
                </input>
            </Aux>
        )
    }

}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);