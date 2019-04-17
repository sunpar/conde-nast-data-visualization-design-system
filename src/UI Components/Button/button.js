import React from 'react';

const Button = ({bg, children}) => (
    <button style={{backgroundColor: bg}} className="text-2xl"> {children}</button>
)

export default Button;