type propsType = {
    textContent: string;
};
export declare const useCopyToClipboard: ({ textContent }: propsType) => {
    handleCopy: () => Promise<void>;
    isCopied: boolean;
};
export {};
