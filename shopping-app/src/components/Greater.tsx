import React from "react";

interface GreeterProps {
  person: string;
}

/* the object {person} is a destructor from GreeterProps
interface. Like that we don't need to use props.person
 */
/* 
function Greeter (props: GreeterProps): JSX.Element{
    return <h1>Hello, {props.person}</h1>
}
 */
function Greeter({ person }: GreeterProps): JSX.Element {
  return <h1>Hello, {person}</h1>;
}

export default Greeter;
