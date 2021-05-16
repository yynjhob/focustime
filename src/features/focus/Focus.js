import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { paddingSizes, fontSizes } from '../../utils/sizes';
import { colors } from '../../utils/colors'
import { Countdown } from "../../components/Countdown"
// You can import from local files
export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}> What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: paddingSizes.md }}
            onSubmitEditing={({ nativeEvent }) => {
              setSubject(nativeEvent.text);
            }}
          />
          <RoundedButton
            size={50}
            title="+"
            onPress={() => {
              addSubject(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex:0.5,
    },
    innerContainer: {
      flex: 1,
      padding: paddingSizes.md,
      justifyContent: 'center',
    },
    title: {
      color: colors.white,
      fontWeight: 'bold',
      fontSize: fontSizes.lg,
    },
    inputContainer: {
      paddingTop: paddingSizes.md,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
