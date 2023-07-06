import React from 'react'
import { View, Text, Image, ImageSourcePropType } from 'react-native'

import styles from './screenheader.style'
import { TouchableOpacity } from 'react-native'

interface ScreenHeaderBtnProps {
  iconUrl: ImageSourcePropType;
  dimension: string;
  handlePress?: () => undefined
}

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = (props) => {
  const {iconUrl, dimension, handlePress} = props;

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image 
      source={iconUrl}
      resizeMode='cover'
      style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn