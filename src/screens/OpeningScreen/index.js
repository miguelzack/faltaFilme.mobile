import {useEffect} from 'react';
import {router} from 'expo-router';
import BrandLogo from '../../components/BrandLogo';
import {getSession} from '../../services/authService';
import {Container} from './styles';

export default function OpeningScreen() {
    useEffect(() => {
        let active = true;
        const timeout = setTimeout(async () => {
            const session = await getSession();
            if (active) router.replace(session ? '/home' : '/acesso');
        }, 2000);
        return () => {
            active = false;
            clearTimeout(timeout);
        };
    }, []);

    return <Container><BrandLogo/></Container>;
}
