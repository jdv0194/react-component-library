/// <reference types="react" />
interface ButtonProps$1 {
    label: string;
    handleClick(): any;
}
declare const ButtonMain: (props: ButtonProps$1) => JSX.Element;

interface ButtonProps {
    label: string;
    color: string;
}
declare const ButtonTwo: (props: ButtonProps) => JSX.Element;

export { ButtonMain, ButtonTwo };
