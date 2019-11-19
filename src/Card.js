import React from "react"

function Card(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: 100,
        width: 100
    }
    
    return (
        <div style={styles}></div>
    )
}
// set default props
Card.defaultProps = {
    cardColor: "blue"
}

export default Card