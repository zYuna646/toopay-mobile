import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@rneui/base';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.continaer}>
      <Button>Button</Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  continaer: {
    flex:1,
  }
});
