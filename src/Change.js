import React, { Component } from 'react';

// function Change (props) {
//     return ( 
//         <div>
//             <h2>my name is {props.name}</h2>
//             <h2>my color is {props.color}</h2>
//         </div>
//     );
// }

// export default Change ;

class Change extends Component { 
    render(props) { 
        return (
            <div>
                <h2>my name is {this.props.name}</h2>
                <h2>my color is {this.props.color}</h2>
            </div>
        )
    }
}

export default Change;