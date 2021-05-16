import React, { useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { paddingSizes, fontSizes } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMillies = (min) => min * 1000 * 60;
const formatTime = (time) => time < 10 ? `0${time}` : time;
export const Countdown = ({
  minutes = 0.1, isPaused, onProgress, onEnd
}) => {
  const interval = React.useRef(null)
  const [millis, setMillis] = useState(null);
  const countDown = () => {
    setMillis((time) => {
      if(time === 0) {
        clearInterval(interval.current);
        return time;
      }
    const timeLeft = time - 1000;
    return timeLeft;
    });
  };

useEffect(() => {
  setMillis(minutesToMillies(minutes))
}, [minutes])

useEffect(() => {
  onProgress(millis / minutesToMillies(minutes))
  if(millis === 0){
    onEnd()
  }
},[millis]);
 
useEffect(()=> {
  if(isPaused) {
      if(interval.current) clearInterval(interval.current);
      return;
    }
    interval.current =  setInterval(countDown,1000);
    return () => clearInterval(interval.current)
  }, [isPaused]);

  const minute = Math.floor(millis /1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: paddingSizes.lg,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
  },
});
