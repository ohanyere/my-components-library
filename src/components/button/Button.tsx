import React from "react";

type Buttonprops = {
    children :  React.ReactNode
}

const Button = ({children}:Buttonprops) => {
    return ( 
        <button>button</button>
     );
}
 
export default Button;