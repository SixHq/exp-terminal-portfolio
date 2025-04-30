
import { useMemo } from 'react';

interface SplitTextProps {
  text: string;
  splitBy?: 'word' | 'character';
}

export const useSplitText = ({ text, splitBy = 'character' }: SplitTextProps) => {
  const elements = useMemo(() => {
    const splitPattern = splitBy === 'word' ? /\s+/ : '';
    return text.split(splitPattern).map((char, index) => ({
      char: char === ' ' ? '\u00A0' : char, // Use non-breaking space
      key: `${char}-${index}`,
    }));
  }, [text, splitBy]);

  return elements;
};

export default useSplitText;