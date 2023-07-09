import React, { useEffect, useState, CSSProperties } from 'react'

import DotLoader from "react-spinners/DotLoader";
import '../src/loader.css';
// const override: CSSProperties = {
//     display: "flex",
//     margin: "0 auto",
//     borderColor: "red",
//     alignContent: "center"

// };

function Loaders() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    return (
        <div className="sweet-loading mystyle5">
            {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
            <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

            <DotLoader
                color={"#885322"}
                loading={loading}
                // cssOverride={override}
                size={60}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Loaders 