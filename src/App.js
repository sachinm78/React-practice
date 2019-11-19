import React from "react"
import Card from "./Card"

function App() {
    return (
              // without fragments
        // <div>
        //     <Card cardColor="red" />
        //     <Card cardColor="blue" />
        //     <Card cardColor="green" />
        // </div>

        // with fragments, wrap in <Fragment> </Fragment>
        // note the word fragment can also be completely removed
        <>
            <Card cardColor="red" height={200} width={400} />
            <Card cardColor="yellow" />
            <Card cardColor="green" />
        </>
    )
}

export default App