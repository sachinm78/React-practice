import React from "react"
import PropTypes from "prop-types"

// written as a function (written as a class below)
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

// set propType (more examples below)
// note: isRequired isn't really doing much here because we also have default props
Card.propTypes = {
    cardColor: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number
}

export default Card

// MORE EXAMPLES

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

// Scrimba's Challenges
// Challenge: Add prop types for the height and width. Make at least one of them required.
// Extra Challenge: Make it so your incoming cardColor is only valid if it is "blue" or "red".

// Card.propTypes = {
//     cardColor: PropTypes.oneOf(["red", "blue", "green", "yellow"]),
//     height: PropTypes.number.isRequired,
//     width: PropTypes.number
// }