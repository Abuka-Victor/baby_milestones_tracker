import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

import { OnboardFlow } from 'react-native-onboard';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <OnboardFlow
        style={{ backgroundColor: '#ff6363' }}
        onDone={() => navigation.navigate('Tabs')}
        pages={[
          {
            title: 'Welcome to Toddly',
            subtitle: "Track your baby's milestones, step by step",
            imageComponent: (
              <View
                style={{
                  width: 400,
                  height: 400,
                  marginTop: 40,
                }}
              >
                <LottieView
                  source={require('../assets/animations/anim1.json')}
                  autoPlay
                  loop
                  style={{
                    width: 400,
                    height: 400,
                  }}
                />
              </View>
            ),
            subtitleStyle: {
              color: '#fff',
            },
          },
          {
            title: 'Sync Across Devices',
            subtitle: 'Always stay in the loop on the go',
            imageComponent: (
              <View
                style={{
                  width: 400,
                  height: 400,
                  marginTop: 40,
                }}
              >
                <LottieView
                  source={require('../assets/animations/anim2.json')}
                  autoPlay
                  loop
                  style={{
                    width: 400,
                    height: 400,
                  }}
                />
              </View>
            ),
            subtitleStyle: {
              color: '#fff',
            },
          },
          {
            title: 'Easy To Use',
            subtitle: 'Designed to be intuitive and user friendly',
            imageComponent: (
              <View
                style={{
                  width: 400,
                  height: 400,
                  marginTop: 40,
                }}
              >
                <LottieView
                  source={require('../assets/animations/anim3.json')}
                  autoPlay
                  loop
                  style={{
                    width: 400,
                    height: 400,
                  }}
                />
              </View>
            ),
            subtitleStyle: {
              color: '#fff',
            },
          },
        ]}
        type={'fullscreen'}
        paginationColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  stuff: {},
});

export default OnboardingScreen;
