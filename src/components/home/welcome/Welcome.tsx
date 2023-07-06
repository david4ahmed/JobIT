import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, ListRenderItem, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import { useRouter } from 'expo-router';

import { icons, SIZES } from '../../../constants'

import styles from './welcome.style'

interface WelcomeProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleClick: () => void;
}

interface IArr {
  id: string;
  name: string
}

const jobTypes: IArr[] = [
  {
    id: '1',
    name: 'Full-Time'
  },
  {
    id: '2',
    name: 'Part-Time'
  },
  {
    id: '3',
    name: 'Contractor'
  },
];

const Welcome : React.FC<WelcomeProps> = (props) => {
  const {searchTerm, setSearchTerm, handleClick } = props;
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hi David</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
          style={styles.searchInput} 
          value={searchTerm}
          onChangeText={text => setSearchTerm(text)}
          placeholder='What are you looking for?'
          />
        </View>

      <TouchableOpacity 
      style={styles.searchBtn} 
      onPress={handleClick}>
        <Image 
          source={icons.search}
          resizeMode='contain'
          style={styles.searchBtnImage}
        />
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome