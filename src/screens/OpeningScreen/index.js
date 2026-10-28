import { useEffect } from 'react';
import { router } from 'expo-router';
import BrandLogo from '../../components/BrandLogo';
import { Container } from './styles';

export default function OpeningScreen() {
  useEffect(() => {
    const timeout = setTimeout(() => router.replace('/acesso'), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return <Container><BrandLogo /></Container>;
}
