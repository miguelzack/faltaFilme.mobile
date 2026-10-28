import { useEffect, useState } from 'react';
import { Animated, useAnimatedValue } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Feedback, Message } from './styles';

/** @param {{ message?: string, messageType: 'error' | 'success' }} props */
export default function AnimatedFeedback({ message, messageType }) {
  const theme = useTheme();
  const progress = useAnimatedValue(0);
  const [displayed, setDisplayed] = useState(/** @type {{ message: string, type: 'error' | 'success' } | null} */ (null));
  if (message && (displayed?.message !== message || displayed.type !== messageType)) {
    setDisplayed({ message, type: messageType });
  }

  useEffect(() => {
    const animation = Animated.timing(progress, {
      toValue: message ? 1 : 0,
      duration: 220,
      useNativeDriver: true,
    });
    animation.start(({ finished }) => {
      if (finished && !message) setDisplayed(null);
    });

    return () => animation.stop();
  }, [message, messageType, progress]);

  if (!displayed) return null;

  return (
    <Animated.View style={{ opacity: progress, transform: [{ translateY: progress.interpolate({ inputRange: [0, 1], outputRange: [-8, 0] }) }] }}>
      <Feedback style={{ borderColor: displayed.type === 'error' ? theme.colors.error : theme.colors.primary }}>
        <Message accessibilityLiveRegion="polite">{displayed.message}</Message>
      </Feedback>
    </Animated.View>
  );
}
