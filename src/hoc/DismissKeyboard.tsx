import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

const DismissKeyboardHOC = (Comp: any) => {
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
