import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ListRenderItem } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'

interface TabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;

}

const TabButton = () => (
  <TouchableOpacity>

  </TouchableOpacity>
)

const Tabs: React.FC<TabsProps> = (props) => {
  const { tabs, setActiveTab, activeTab } = props;

  const renderItem: ListRenderItem<string> = ({ item }) => (
    <TouchableOpacity
      style={styles.btn(item, activeTab)}
      onPress={() => setActiveTab(item)}
    >
      <Text style={styles.btnText(item, activeTab)}>{item}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <FlatList 
        data={tabs}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap: SIZES.small / 2}}
      />
    </View>
  )
}

export default Tabs