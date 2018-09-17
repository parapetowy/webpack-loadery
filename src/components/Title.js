import React from 'react';

class Title extends React.Component {
    
    render() {
        const titles = this.props.data.map(function(elem){
            return(
                <li key={elem.id} >
                    <p>{elem.text}</p>
                </li>
                );
        });

        return (
        <div>
            <h1>ToDo App - ToDo's left - {this.props.data.length}</h1>
            <ul>{titles}</ul>
        </div>
      );
    }
}

export default Title;