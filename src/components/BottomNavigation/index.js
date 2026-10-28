import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HomeIcon from '../../assets/icons/HomeIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import TicketsIcon from '../../assets/icons/TicketsIcon';
import PersonIcon from '../../assets/icons/PersonIcon';
import {Active, ActiveLabel, Bar, Item} from './styles';

/** @param {{ onUnavailable: (name: string) => void }} props */
export default function BottomNavigation({onUnavailable}) {
    const insets = useSafeAreaInsets();
    return (<Bar style={{paddingBottom: Math.max(insets.bottom, 12)}}>
        <Item accessibilityRole="button" accessibilityLabel="Início"
              accessibilityState={{selected: true}}><Active><HomeIcon/><ActiveLabel>Início</ActiveLabel></Active></Item>
        <Item accessibilityRole="button" accessibilityLabel="Pesquisa"
              onPress={() => onUnavailable('Pesquisa')}><SearchIcon/></Item>
        <Item accessibilityRole="button" accessibilityLabel="Ingressos"
              onPress={() => onUnavailable('Ingressos')}><TicketsIcon/></Item>
        <Item accessibilityRole="button" accessibilityLabel="Sobre nós"
              onPress={() => onUnavailable('Sobre nós')}><PersonIcon/></Item>
    </Bar>);
}
