import { Button } from '../Button';
import { Icon, type IconNames } from '../Icon';
import { Tooltip } from '../Tooltip';

import { useCopy } from './hooks';

type CopyProps = {
  clipboardData: string;
};

export const Copy = ({ clipboardData }: CopyProps) => {
  const { isCopied, handleCopyToClipboard } = useCopy();
  const copyIcon: IconNames = isCopied ? 'check' : 'copy';

  return (
    <Tooltip label="Copy to clipboard">
      <Button
        asChild
        size="icon"
        variant="secondary"
        onClick={handleCopyToClipboard(clipboardData)}
        className="!size-7 p-1.5"
      >
        <Icon id={copyIcon} size={16} />
      </Button>
    </Tooltip>
  );
};

Copy.displayName = 'Copy';
