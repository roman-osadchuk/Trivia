import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import React, { ElementType } from 'react';

type PropsWithChildren<P> = P & {
  children?: React.ReactNode;
}

const DismissKeyboardHOC = (Comp: PropsWithChildren<typeof React.Component>) => {
  return ({ children, ...props }: { children: JSX.Element | JSX.Element[] }) => (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <Comp {...props}>{children}</Comp>
    </TouchableWithoutFeedback>
  );
};
export const DismissKeyboardView = DismissKeyboardHOC(View);
