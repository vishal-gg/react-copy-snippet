import * as React from "react";
import "./CopySnippet.css";
import { ButtonHTMLAttributes } from "react";
interface propsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
}
declare const _default: React.ForwardRefExoticComponent<propsType & React.RefAttributes<unknown>>;
export default _default;
