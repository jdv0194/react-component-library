import React from 'react'

export interface ButtonProps {
  label: string;
  color: string;
}

const ButtonTwo = (props: ButtonProps) => {
  return (
    <button style={{color:props.color}}>{props.label}</button>
  )
}

export default ButtonTwo