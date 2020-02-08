import React, {useState, useEffect} from 'react'

function NavIcon(props) {
    const [clicked, setClicked] = useState(false);
    const [backgroundCol, setBackgroundCol] = useState('#3451B8')
    let clickedStyle;

    useEffect(() => {
        // clickedStyle = {
        //     backgroundColor: clicked ? "#102368" : "#3451B8"
        // }
        // console.log("color is: ", clickedStyle)
        if (clicked) {
            setBackgroundCol('#102368')
        } else {
            setBackgroundCol('#3451B8')
        }
    });


    return(
        <div 
            className="search-container" 
            dangerouslySetInnerHTML={{__html: props.icon}}
            onClick={() => clicked ? setClicked(false) : setClicked(true)}
            style={{top: props.top, backgroundColor: backgroundCol}}>
        </div>
    )
}

export default NavIcon