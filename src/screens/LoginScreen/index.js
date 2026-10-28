import {useCallback, useState} from 'react';
import {router, useLocalSearchParams} from 'expo-router';
import ActionButton from '../../components/ActionButton';
import AuthLayout from '../../components/AuthLayout';
import FormField from '../../components/FormField';
import useFeedbackTimeout from '../../hooks/useFeedbackTimeout';
import {AuthError, loginAccount} from '../../services/authService';

export default function LoginScreen() {
    const {criado} = useLocalSearchParams();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(criado === '1' ? 'Conta criada! Entre com seus dados.' : '');
    const [error, setError] = useState(/** @type {AuthError | null} */ (null));
    const [busy, setBusy] = useState(false);
    const clearFeedback = useCallback(() => {
        setError(null);
        setMessage('');
    }, []);
    useFeedbackTimeout(error || message, clearFeedback);

    async function handleLogin() {
        if (busy) return;
        setBusy(true);
        setMessage('');
        setError(null);
        try {
            await loginAccount({email, password});
            router.replace('/home');
        } catch (error) {
            setError(error instanceof AuthError ? error : new AuthError('Não foi possível entrar. Tente novamente.', 'storage'));
        } finally {
            setBusy(false);
        }
    }

    return (<AuthLayout title="Olá novamente" subtitle="Entre para comprar ingressos para as sessões."
                        footerText="Ainda não tem uma conta?" footerAction="Criar conta" footerRoute="/cadastro"
                        message={error?.message || message} messageType={error ? 'error' : 'success'}>
        <FormField label="E-mail" placeholder="seu@email.com" value={email} onChangeText={(value) => {
            setEmail(value);
            setError(null);
        }} error={error?.field === 'email' || error?.field === 'credentials'} keyboardType="email-address"
                   autoComplete="email"/>
        <FormField label="Senha" placeholder="Digite sua senha" value={password} onChangeText={(value) => {
            setPassword(value);
            setError(null);
        }} error={error?.field === 'password' || error?.field === 'credentials'} password autoComplete="password"/>
        <ActionButton label={busy ? 'Entrando...' : 'Entrar'} onPress={handleLogin}/>
    </AuthLayout>);
}
