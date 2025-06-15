import { useEffect, useState } from 'react';

export const useLogic = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
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
