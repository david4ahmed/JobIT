import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking} from 'react-native'

import styles from './footer.style'
import { icons } from '../../../constants'

interface FooterProps {
  url: string;
}

const Footer: React.FC<FooterProps> = (props) => {
  const { url } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity 
      style={styles.applyBtn}
      onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer