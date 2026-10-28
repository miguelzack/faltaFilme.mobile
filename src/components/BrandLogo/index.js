import { Accent, Container, Underline, Wordmark } from './styles';

export default function BrandLogo() {
  return (
    <Container accessibilityRole="image" accessibilityLabel="FaltaFilme">
      <Wordmark>FALTA<Accent>FILME</Accent></Wordmark>
      <Underline />
    </Container>
  );
}
