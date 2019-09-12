import React from 'react';

export default class StoreInput extends React.Component<any, any> {

    constructor(props:  {text: string }) {
        super(props)

    }

    render() {
        return <button> {this.props.text}</button> 
    }
}