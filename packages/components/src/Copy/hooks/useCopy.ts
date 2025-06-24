import { useEffect, useState } from 'react';

export const useCopy = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = (clipboardData: string) => () => {
    navigator.clipboard.writeText(clipboardData).then(() => {
      setIsCopied(true);
    });
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isCopied]);

  return { isCopied, handleCopyToClipboard };
};
