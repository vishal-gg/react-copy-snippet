import { useState } from "react";

type propsType = {
  textContent: string;
};

export const useCopyToClipboard = ({ textContent } : propsType) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported")
      return
    }

    try {
      await navigator.clipboard.writeText(textContent)
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.warn("Copy failed", err)
    }
  }
  return { handleCopy, isCopied }
}
