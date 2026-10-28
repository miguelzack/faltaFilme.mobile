import {useEffect, useRef, useState} from 'react';
import {Animated, FlatList, Image, useWindowDimensions} from 'react-native';
import {imageUrl} from '../../services/movieService';
import {Caption, Dot, Dots, Fallback, ImageFrame, Slide} from './styles';

/** @param {{ movie: import('../../services/movieService').Movie, width: number, onPress: () => void }} props */
function FeaturedSlide({movie, width, onPress}) {
    const [imageFailed, setImageFailed] = useState(false);
    const url = imageUrl(movie.backdrop_path, 'w780');
    return (<Slide accessibilityRole="button" accessibilityLabel={`Ver detalhes de ${movie.title}`} onPress={onPress}
                   style={{width}}>
        <ImageFrame>{url && !imageFailed ?
            <Image source={{uri: url}} style={{width: '100%', height: '100%'}} resizeMode="cover"
                   onError={() => setImageFailed(true)}/> : <Fallback>Imagem indisponível</Fallback>}</ImageFrame>
        <Caption numberOfLines={1}>{movie.title}</Caption>
    </Slide>);
}

/** @param {{ movies: import('../../services/movieService').Movie[], onMoviePress: () => void }} props */
export default function FeaturedCarousel({movies, onMoviePress}) {
    const {width} = useWindowDimensions();
    const slideWidth = Math.max(1, Math.min(width - 48, 452));
    const featured = movies.filter((movie) => movie.backdrop_path).slice(0, 3);
    const slides = featured.length ? featured : movies.slice(0, 3);
    const [active, setActive] = useState(0);
    const [dragging, setDragging] = useState(false);
    const listRef = useRef(/** @type {FlatList<import('../../services/movieService').Movie> | null} */ (null));
    const [opacity] = useState(() => new Animated.Value(1));

    useEffect(() => {
        if (slides.length < 2 || dragging) return;
        const timeout = setTimeout(() => {
            const next = (active + 1) % slides.length;
            Animated.timing(opacity, {toValue: 0, duration: 300, useNativeDriver: true}).start(({finished}) => {
                if (!finished) return;
                listRef.current?.scrollToOffset({offset: next * slideWidth, animated: false});
                setActive(next);
                Animated.timing(opacity, {toValue: 1, duration: 300, useNativeDriver: true}).start();
            });
        }, 5000);
        return () => clearTimeout(timeout);
    }, [active, dragging, opacity, slideWidth, slides.length]);

    useEffect(() => () => opacity.stopAnimation(), [opacity]);

    if (!slides.length) return null;
    return (<>
        <Animated.View style={{opacity}}><FlatList ref={listRef} horizontal pagingEnabled data={slides} keyExtractor={(movie) => String(movie.id)}
                  renderItem={({item}) => <FeaturedSlide movie={item} width={slideWidth} onPress={onMoviePress}/>}
                  showsHorizontalScrollIndicator={false}
                  onScrollBeginDrag={() => {
                      opacity.stopAnimation();
                      opacity.setValue(1);
                      setDragging(true);
                  }}
                  onScrollEndDrag={(event) => {
                      setActive(Math.round(event.nativeEvent.contentOffset.x / slideWidth));
                      setDragging(false);
                  }}
                  onMomentumScrollEnd={(event) => setActive(Math.round(event.nativeEvent.contentOffset.x / slideWidth))}/></Animated.View>
        {slides.length > 1 &&
            <Dots accessibilityLabel={`Destaque ${active + 1} de ${slides.length}`}>{slides.map((movie, index) => <Dot
                key={movie.id}
                style={{opacity: active === index ? 1 : 0.3, width: active === index ? 24 : 8}}/>)}</Dots>}
    </>);
}
