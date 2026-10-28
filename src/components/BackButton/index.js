import BackIcon from '../../assets/icons/BackIcon';
import { Container } from './styles';

/** @param {{ onPress: () => void }} props */
export default function BackButton({ onPress }) {
  return (
    <Container accessibilityRole="button" accessibilityLabel="Voltar" onPress={onPress}>
      <BackIcon />
    </Container>
  );
}
