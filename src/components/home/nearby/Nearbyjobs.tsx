import { View, Text, TouchableOpacity, ActivityIndicator, ListRenderItem } from 'react-native'
import { useRouter } from 'expo-router'


import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants'
import useFetch from '../../../hooks/useFetch'

import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'

const Nearbyjobs = () => {
  const router = useRouter();
  const {data, isLoading, error} = useFetch('search', {
    query: 'Software Engineer',
    num_pages: 1
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Featured jobs</Text>
      </View>

    <View style={styles.cardsContainer}>
      {isLoading ? (
        <ActivityIndicator size='large' color={COLORS.primary}/>
      ): error ? (
        <Text>Something went wrong</Text>
      ): (
        data?.map((job) => (
          <NearbyJobCard 
            job={job}
            key={`nearby-job-${job?.job_id}`}
            handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
          />
        ))
      )}
    </View>
    </View>
  )
}

export default Nearbyjobs