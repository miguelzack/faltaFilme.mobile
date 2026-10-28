import { Button, Label } from './styles';

/** @param {{ label: string, onPress: () => void }} props */
export default function ActionButton({ label, onPress }) {
  return (
    <Button
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => ({ opacity: pressed ? 0.8 : 1 })}
    >
      <Label>{label}</Label>
    </Button>
  );
}
