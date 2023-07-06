import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { 
    Nearbyjobs,
    ScreenHeaderBtn,
    Welcome
} from '../components'

import ScreenLayout from '../layouts/ScreenLayout';
import { useState } from 'react';

const Home: React.FC = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <ScreenLayout>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerTitle: ""
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: SIZES.medium
                }}>
                    <Welcome 
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleClick={() => {
                       if(searchTerm.trim()){
                        router.push(`/search/${searchTerm.trim()}`)
                       }
                    }}
                    />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </ScreenLayout>
    )
}

export default Home;