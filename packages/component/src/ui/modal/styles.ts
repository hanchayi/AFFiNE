import ModalUnstyled from '@mui/base/ModalUnstyled';
import type { CSSProperties } from 'react';

import { styled } from '../../styles';
import { Wrapper } from '../layout';

export const StyledBackdrop = styled('div')(({ theme }) => {
  return {
    zIndex: '-1',
    position: 'fixed',
    right: '0',
    bottom: '0',
    top: '0',
    left: '0',
    backgroundColor:
      theme.palette.mode === 'light'
        ? 'rgba(58, 76, 92, 0.2)'
        : 'rgba(34, 34, 34, 0.6)',
  };
});

export const StyledModal = styled(ModalUnstyled, {
  shouldForwardProp: prop => {
    return !['justifyContent', 'alignItems'].includes(prop as string);
  },
})<{
  alignItems: CSSProperties['alignItems'];
  justifyContent: CSSProperties['justifyContent'];
}>(({ theme, alignItems, justifyContent }) => {
  return {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems,
    justifyContent,
    position: 'fixed',
    left: '0',
    top: '0',
    zIndex: theme.zIndex.modal,
    '*': {
      WebkitTapHighlightColor: 'transparent',
      outline: 'none',
    },
  };
});

export const StyledWrapper = styled(Wrapper)(() => {
  return {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  };
});
