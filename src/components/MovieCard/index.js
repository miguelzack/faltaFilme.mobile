import {useState} from 'react';
import {Image} from 'react-native';
import StarIcon from '../../assets/icons/StarIcon';
import {genreName, imageUrl} from '../../services/movieService';
import {Card, Details, Genre, Poster, PosterPlaceholder, Rate, RateText, Title} from './styles';

/** @param {{ movie: import('../../services/movieService').Movie, onPress: () => void }} props */
export default function MovieCard({movie, onPress}) {
    const [imageFailed, setImageFailed] = useState(false);
    const poster = imageUrl(movie.poster_path, 'w342');
    return (<Card accessibilityRole="button" accessibilityLabel={movie.title} onPress={onPress}>
        <Poster>
            {poster && !imageFailed ?
                <Image source={{uri: poster}} style={{width: '100%', height: '100%'}} resizeMode="cover"
                       onError={() => setImageFailed(true)}/> : <PosterPlaceholder>Sem imagem</PosterPlaceholder>}
            {movie.vote_average > 0 &&
                <Rate><StarIcon/><RateText>{(movie.vote_average / 2).toFixed(1)}</RateText></Rate>}
        </Poster>
        <Details><Title
            numberOfLines={1}>{movie.title}</Title><Genre>{genreName(movie.genre_ids || [])}</Genre></Details>
    </Card>);
}
