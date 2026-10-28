import { useCallback, useState } from 'react';
import { router } from 'expo-router';
import ActionButton from '../../components/ActionButton';
import AuthLayout from '../../components/AuthLayout';
import FormField from '../../components/FormField';
import useFeedbackTimeout from '../../hooks/useFeedbackTimeout';
import { AuthError, registerAccount } from '../../services/authService';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(/** @type {AuthError | null} */ (null));
  const [busy, setBusy] = useState(false);
  const clearFeedback = useCallback(() => setError(null), []);
  useFeedbackTimeout(error, clearFeedback);

  async function handleRegister() {
    if (busy) return;
    setBusy(true);
    setError(null);
    try {
      await registerAccount({ name, email, password });
      router.replace({ pathname: '/login', params: { criado: '1' } });
    } catch (error) {
      setError(error instanceof AuthError ? error : new AuthError('Não foi possível criar a conta. Tente novamente.', 'storage'));
    } finally {
      setBusy(false);
    }
  }

  return (
    <AuthLayout title="Crie sua conta" subtitle="Crie sua conta e compre seu ingresso." footerText="Já tem conta?" footerAction="Entrar" footerRoute="/login" message={error?.message}>
      <FormField label="Nome completo" placeholder="Seu nome" value={name} onChangeText={(value) => { setName(value); setError(null); }} error={error?.field === 'name'} autoCapitalize="words" autoComplete="name" />
      <FormField label="E-mail" placeholder="seu@email.com" value={email} onChangeText={(value) => { setEmail(value); setError(null); }} error={error?.field === 'email'} keyboardType="email-address" autoComplete="email" />
      <FormField label="Senha" placeholder="Mínimo de 6 caracteres" value={password} onChangeText={(value) => { setPassword(value); setError(null); }} error={error?.field === 'password'} password autoComplete="new-password" />
      <ActionButton label={busy ? 'Criando conta...' : 'Criar conta'} onPress={handleRegister} />
    </AuthLayout>
  );
}
