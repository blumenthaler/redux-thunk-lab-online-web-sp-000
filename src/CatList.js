import React from 'react';

export default class CatList extends React.Component {
    render() {
        console.log(this.props.catPics)
        const cats = this.props.catPics.map(cat => <img src={cat.url} alt="this is a cat"></img>)
        return (
            <div>{cats}</div>
        )
    }
}