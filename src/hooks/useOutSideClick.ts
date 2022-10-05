import { useEffect } from 'react';

interface Props {
  ref: any;
  handler: (event: any) => void;
}
const useOutsideClick = ({ ref, handler }: Props) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export default useOutsideClick;
