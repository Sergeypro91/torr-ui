import { cn } from '@torr-app/utils/src';

import { Button } from '../Button';
import { Icon, type IconNames } from '../Icon';
import { Tooltip } from '../Tooltip';

import { useCopy } from './hooks';

type CopyProps = {
  clipboardData: string;
};

export const Copy = ({ clipboardData }: CopyProps) => {
  const { isCopied, handleCopyToClipboard } = useCopy();
  const copyIcon: IconNames = isCopied ? 'copy-check' : 'copy';

  return (
    <Tooltip label="Copy to clipboard">
      <Button
        size="icon"
        variant="secondary"
        onClick={handleCopyToClipboard(clipboardData)}
        className={cn(
          '!size-7',
          'transition delay-150 duration-300',
          isCopied && '!bg-green-300',
        )}
      >
        <Icon
          id={copyIcon}
          size={16}
          className={cn(
            'transition delay-150 duration-300',
            isCopied && 'text-green-700',
          )}
        />
      </Button>
    </Tooltip>
  );
};
