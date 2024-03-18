import * as React from 'react';
import { useState, forwardRef } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".copy_btn{all:unset;border-radius:6px;box-sizing:border-box;color-scheme:light dark;cursor:pointer;display:grid;height:2.5rem;padding:.5rem 1rem;place-content:center;transition:color .2s ease,background-color .2s ease;width:3rem}@media (prefers-color-scheme:dark){.copy_btn:hover{background-color:#1e293b;color:#fff}}@media (prefers-color-scheme:light){.copy_btn:hover{background-color:#f1f5f9;color:#000}}.copy_btn>div>span{display:grid;left:50%;place-content:center;position:absolute;top:50%;transition:transform .2s ease-in-out,opacity .2s ease}";
styleInject(css_248z);

const useCopyToClipboard = ({ textContent }) => {
    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = async () => {
        if (!navigator?.clipboard) {
            console.warn("Clipboard not supported");
            return;
        }
        try {
            await navigator.clipboard.writeText(textContent);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
        catch (err) {
            console.warn("Copy failed", err);
        }
    };
    return { handleCopy, isCopied };
};

const CopySnippet = ({ className, text, ...props }, snipRef) => {
    const textContent = snipRef?.current?.textContent ||
        text ||
        "Please provide something to copy 😅";
    const { handleCopy, isCopied } = useCopyToClipboard({ textContent });
    return (React.createElement("button", { onClick: handleCopy, disabled: isCopied, ...props, className: `copy_btn ${className}` },
        React.createElement("div", { style: { position: "relative" } },
            React.createElement("span", { style: {
                    transform: `translate(-50%, -50%) scale(${isCopied ? 0 : 1})`,
                } },
                React.createElement("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 512 512", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("rect", { width: "336", height: "336", x: "128", y: "128", fill: "none", strokeLinejoin: "round", strokeWidth: "32", rx: "57", ry: "57" }),
                    React.createElement("path", { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24" }))),
            React.createElement("span", { style: {
                    transform: `translate(-50%, -50%) scale(${!isCopied ? 0 : 1})`,
                } },
                React.createElement("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 448 512", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" }))))));
};
var CopySnippet$1 = forwardRef(CopySnippet);

export { CopySnippet$1 as default, useCopyToClipboard };
