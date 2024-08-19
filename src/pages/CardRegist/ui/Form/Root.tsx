import { FormProvider, useForm } from 'react-hook-form';

import * as S from './Form.style';

import {
  CardDesign,
  CompanyField,
  CardUserField,
  NumbersField,
  CVCField,
  PasswordField,
  ExpirationDateField,
} from '~/features/RegistCard';
import { useDisclosure } from '~/shared/hooks';
import { Drawer } from '~/shared/ui';

const Root = () => {
  const methods = useForm({
    defaultValues: {
      numbers: ['', '', '', ''],
      expirationDate: {
        month: '',
        year: '',
      },
      cardUser: '',
      company: undefined,
      securityCode: '',
      password: ['', ''],
      alias: '',
    },
    mode: 'onBlur',
  });
  const companyDrawerDisclosure = useDisclosure();
  // const passwordDrawerDisclosre = useDisclosure();

  return (
    <S.Container>
      <FormProvider {...methods}>
        <CardDesign onClick={companyDrawerDisclosure.onOpen} />
        <Drawer.Root {...companyDrawerDisclosure}>
          <Drawer.Overlay />
          <Drawer.Content>
            <CompanyField />
          </Drawer.Content>
        </Drawer.Root>
        <S.FieldContainer>
          <NumbersField />
        </S.FieldContainer>
        <S.FieldContainer>
          <ExpirationDateField />
        </S.FieldContainer>
        <S.FieldContainer>
          <CardUserField />
        </S.FieldContainer>
        <S.FieldContainer>
          <CVCField />
        </S.FieldContainer>
        <S.FieldContainer>
          <PasswordField />
        </S.FieldContainer>
      </FormProvider>
    </S.Container>
  );
};

export default Root;
