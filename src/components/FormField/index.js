import { useState } from 'react';
import { useTheme } from 'styled-components/native';
import EyeIcon from '../../assets/icons/EyeIcon';
import { EyeButton, Field, Input, InputBox, Label } from './styles';

/** @param {{ label: string, value: string, onChangeText: (text: string) => void, placeholder: string, error?: boolean, password?: boolean, keyboardType?: 'default' | 'email-address', autoCapitalize?: 'none' | 'words', autoComplete?: 'email' | 'name' | 'password' | 'new-password' }} props */
export default function FormField({ label, value, onChangeText, placeholder, error = false, password = false, keyboardType = 'default', autoCapitalize = 'none', autoComplete }) {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();
  return (
    <Field>
      <Label>{label}</Label>
      <InputBox style={{ borderWidth: 1, borderColor: error ? theme.colors.error : 'transparent' }}>
        <Input accessibilityLabel={label} accessibilityHint={error ? 'Confira a mensagem de erro do formulário.' : undefined} value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor={theme.colors.textSecondary} secureTextEntry={password && !visible} keyboardType={keyboardType} autoCapitalize={autoCapitalize} autoComplete={autoComplete} autoCorrect={false} />
        {password && <EyeButton accessibilityRole="button" accessibilityLabel={visible ? 'Ocultar senha' : 'Mostrar senha'} accessibilityState={{ checked: visible }} onPress={() => setVisible((previous) => !previous)}><EyeIcon hidden={!visible} /></EyeButton>}
      </InputBox>
    </Field>
  );
}
