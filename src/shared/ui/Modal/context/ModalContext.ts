import { createContext } from 'react';

import { DisclosureContextValue } from '~/shared/types/ui';

export interface ModalContextValue extends DisclosureContextValue {
  closeDisabled: boolean;
}

export const ModalContext = createContext<ModalContextValue | undefined>(
  undefined,
);
