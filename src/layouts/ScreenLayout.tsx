import { SafeAreaView } from "react-native-safe-area-context"
import { COLORS } from "../constants"

interface ScreenLayoutProps {
    children: React.ReactNode
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({ children }) => {
    return <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>{children}</SafeAreaView>
}

export default ScreenLayout