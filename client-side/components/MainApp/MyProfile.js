import {Ionicons} from '@expo/vector-icons';
import {formatDistance} from 'date-fns';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../SignUpForm/FormStyleSheet';

export const MyProfile = ({navigation, route}) => {
  const credentials = route.params;

  // We rearrange the phone number:
  function formatNumber(number) {
    const newNumber = number.split('');

    const def = `${newNumber.slice(0, 3).join('')} ${newNumber
      .slice(3, 6)
      .join('')} ${newNumber.slice(6).join('')}`;

    return def;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Pressable
        title="Back"
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={[styles.backButton]}
      >
        <Ionicons name="ios-return-up-back" size={40} color="#6EE16B" />
      </Pressable>

      <View style={profStyles.titleView}>
        <Text style={profStyles.title}>My Profile</Text>
      </View>

      <View style={profStyles.piView}>
        <View style={profStyles.formHeader}>
          <Text style={profStyles.formTitle}>Personal Information</Text>
        </View>

        <View>
          <View style={profStyles.each}>
            <Text style={profStyles.name}>
              {credentials.name} {credentials.surname}
            </Text>
          </View>

          <View style={profStyles.each}>
            <Text style={profStyles.eachText}>{credentials.type}</Text>
          </View>

          {credentials.address ? (
            <View style={profStyles.each}>
              <Text style={profStyles.eachText}>{credentials.address}</Text>
            </View>
          ) : null}

          <View style={profStyles.each}>
            <Text style={profStyles.eachText}>
              {formatNumber(`${credentials.phoneNumber}`)}
            </Text>
          </View>

          <View style={profStyles.each}>
            <Text style={profStyles.eachText}>{credentials.email}</Text>
          </View>

          <View style={profStyles.each}>
            <Text style={[profStyles.eventsTrack, profStyles.eachText]}>
              Events Launched: {Math.floor(Math.random() * 15)}
            </Text>
          </View>

          <View style={[profStyles.each, {alignItems: 'flex-start'}]}>
            <Text
              style={[
                profStyles.eventsTrack,
                profStyles.eachText,
                {fontSize: 8, color: 'grey'},
              ]}
            >
              {' '}
              {'\n'}
              Account created{' '}
              {formatDistance(new Date(credentials.createdAt), new Date())} ago
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const profStyles = StyleSheet.create({
  titleView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#6EE16B',
    borderBottomWidth: 3,
    marginHorizontal: '25%',
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 25,
    color: '#6EE16B',
    textAlign: 'center',
    padding: '1%',
  },
  piView: {
    marginTop: '5%',
    marginHorizontal: '8%',
  },
  formHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formTitle: {
    color: '#AEDFAD',
    fontFamily: 'Inter-Regular',
    fontSize: 22,
  },
  name: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
  },
  eventsTrack: {
    fontStyle: 'italic',
  },
  each: {
    marginTop: '2%',
  },
  eachText: {
    fontSize: 20,
    fontFamily: 'Inter-Light',
  },
  newInputs: {
    flexDirection: 'row',
  },
});
