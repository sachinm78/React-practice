import React from "react"
import PropTypes from "prop-types"

// written as a function
function Card(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }
    
    return (
        <div style={styles}></div>
    )
}
// set default props
Card.defaultProps = {
    cardColor: "blue",
    height: 100,
    width: 100
}

// set propType
Card.propTypes = {
    cardColor: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
}

// written as a class
// class Card extends React.Component {
//     static defaultProps = {
//         cardColor: "blue",
//         height: 100,
//         width: 100
//     }
    
//     render() {
//         const styles = {
//             backgroundColor: this.props.cardColor,
//             height: this.props.height,
//             width: this.props.width
//         }
        
//         return (
//             <div style={styles}></div>
//         )
//     }
// }

export default Card