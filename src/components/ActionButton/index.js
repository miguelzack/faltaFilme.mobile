import {Button, Label} from './styles';
import {useTheme} from 'styled-components/native';

/** @param {{ label: string, onPress: () => void, darkText?: boolean }} props */
export default function ActionButton({label, onPress, darkText = false}) {
    const theme = useTheme();
    return (<Button
        accessibilityRole="button"
        accessibilityLabel={label}
        onPress={onPress}
        style={({pressed}) => ({opacity: pressed ? 0.8 : 1})}
    >
        <Label style={darkText ? {color: theme.colors.background} : undefined}>{label}</Label>
    </Button>);
}
