import React from 'react'
import {Button} from '@chakra-ui/react'

export interface ButtonProps {
  label: string;
  handleClick(): any;
}

const ButtonMain = (props: ButtonProps) => {
  return (
    <Button onClick={() => {props.handleClick}}>{props.label}</Button>
  )
}

export default ButtonMain