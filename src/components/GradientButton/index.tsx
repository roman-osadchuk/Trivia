import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'src/constants/colors';

type GradientButtonProps = {
  title: string;
  disabled?: boolean;
  onPress: () => void;
};

const GradientButton = ({ title = 'TRUE', disabled = false, onPress }: GradientButtonProps) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.gradientButton} disabled={disabled}>
      <LinearGradient
        style={styles.gradientContainer}
        colors={disabled ? [Colors.GREY, Colors.GREY] : [Colors.ORANGE, Colors.RED]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={[styles.buttonText, disabled ? { color: Colors.PRIMARY_BLUE } : { color: Colors.WHITE }]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
};

export default memo(GradientButton);
