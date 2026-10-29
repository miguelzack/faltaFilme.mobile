import {useCallback} from 'react';
import {Alert} from 'react-native';
import {router} from 'expo-router';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BottomNavigation from '../../components/BottomNavigation';
import CinemaMap from '../../components/CinemaMap';
import {
    Card, Content, Header, HeaderSubtitle, HeaderTitle, Root, Scroll
} from './styles';

// Troque pelos dados reais do cinema
const CINEMA = {
    title: 'FaltaFilme',
    address: 'Endereço do cinema',
    latitude: -23.55052,
    longitude: -46.633308,
};

export default function AboutScreen() {
    const insets = useSafeAreaInsets();

    const unavailable = useCallback((/** @type {string} */ name) => {
        const label = name.toLowerCase();
        if (label.includes('sobre')) return;
        if (label.includes('início') || label.includes('inicio') || label.includes('home')) {
            router.replace('/home');
            return;
        }
        Alert.alert(name, 'Em breve.');
    }, []);

    return (<Root>
        <Scroll contentContainerStyle={{paddingTop: Math.max(insets.top, 24), paddingBottom: 32}}>
            <Content>
                <Header>
                    <HeaderTitle>Sobre nós</HeaderTitle>
                    <HeaderSubtitle>Conheça o cinema FaltaFilme</HeaderSubtitle>
                </Header>
            </Content>
        </Scroll>
        <BottomNavigation onUnavailable={unavailable}/>
    </Root>);
}