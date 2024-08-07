import { Controller, useFormContext } from 'react-hook-form';

import * as S from './index.style';
import TitleText from '../TitleText';

import { Card, CardBody, CardHeader, Input, InputWrapper } from '~/components';
import { cardRegsitFormValidate } from '~/utils/cardRegistFormValidate';
import { validateHelper } from '~/utils/validateHelper';

const InputCardUser = () => {
  const { control, getValues } = useFormContext();
  const currentInputLength = getValues('cardUser')
    ? getValues('cardUser').length
    : 0;

  const MAX_LENGTH = 30;

  return (
    <Card>
      <CardHeader>
        <S.HeaderContainer>
          <TitleText label={`카드 사용자 이름(선택, 최대 ${MAX_LENGTH}자)`} />
          <S.InputLenghtStatus>
            ({currentInputLength}/{MAX_LENGTH})
          </S.InputLenghtStatus>
        </S.HeaderContainer>
      </CardHeader>
      <CardBody>
        <InputWrapper>
          <Controller
            name='cardUser'
            rules={{
              validate: (value) =>
                validateHelper(cardRegsitFormValidate.cardUser, value),
            }}
            control={control}
            render={({ field: { onChange } }) => (
              <Input
                onChange={onChange}
                placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
                maxLength={MAX_LENGTH}
              />
            )}
          />
        </InputWrapper>
      </CardBody>
    </Card>
  );
};

export default InputCardUser;
