import React from "react";

class Header extends React.Component {
    render(){
        return(
            <header className="header">{this.props.title}</header>
        )
        
    }

    inputClick(){console.log("Clicked")}
    mouseClick(){console.log('Mouse over')}
}

export default Header;