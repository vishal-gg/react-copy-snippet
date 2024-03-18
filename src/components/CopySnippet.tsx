import * as React from "react";
import "./CopySnippet.css";
import { forwardRef, ButtonHTMLAttributes } from "react";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";


interface propsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const CopySnippet = (
  { className, text, ...props }: propsType,
  snipRef: any
) => {
  const textContent =
    snipRef?.current?.textContent ||
    text ||
    "Please provide something to copy 😅";
  const { handleCopy, isCopied } = useCopyToClipboard({ textContent });

  return (
    <button
      onClick={handleCopy}
      disabled={isCopied}
      {...props}
      className={`copy_btn ${className}`}
    >
      <div style={{ position: "relative" }}>
        <span
          style={{
            transform: `translate(-50%, -50%) scale(${isCopied ? 0 : 1})`,
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="336"
              height="336"
              x="128"
              y="128"
              fill="none"
              strokeLinejoin="round"
              strokeWidth="32"
              rx="57"
              ry="57"
            ></rect>
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"
            ></path>
          </svg>
        </span>
        <span
          style={{
            transform: `translate(-50%, -50%) scale(${!isCopied ? 0 : 1})`,
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
          </svg>
        </span>
      </div>
    </button>
  )
}

export default forwardRef(CopySnippet);
