import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { Button } from '../../components/ui/Button';
import { Header } from '../../components/ui/Header';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function FlexibilityScreen() {
    const router = useRouter();

    return (
        <ScreenWrapper>
            <Header />
            <View className="flex-row items-center justify-between px-4 pb-2">
                <View className="flex-1 items-center">
                    <Text className="font-medium text-sm text-gray-500">Шаг 3 из 3</Text>
                </View>
                <View className="w-12" />
            </View>

            <View className="flex-1 items-center justify-center px-6">
                <View className="w-full mb-8 items-center bg-primary/10 rounded-3xl p-8 min-h-[320px] justify-center">
                    {/* Placeholder for the illustration */}
                    <View className="relative w-48 h-48 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex items-center justify-center">
                        <View className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                            <MaterialIcons name="calendar-today" size={32} color="white" />
                        </View>
                        <View className="flex-col gap-3 w-full px-6">
                            <View className="h-3 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-full" />
                            <View className="h-3 w-1/2 bg-gray-100 dark:bg-gray-700 rounded-full" />
                            <View className="h-8 w-full bg-primary/20 rounded-lg border border-primary/30 flex-row items-center px-2">
                                <View className="h-2 w-2 rounded-full bg-primary mr-2" />
                                <View className="h-2 w-12 bg-primary/40 rounded-full" />
                            </View>
                            <View className="h-3 w-2/3 bg-gray-100 dark:bg-gray-700 rounded-full" />
                        </View>
                        <View className="absolute -bottom-6 -left-4 w-12 h-12 bg-background-dark rounded-full flex items-center justify-center shadow-lg">
                            <MaterialIcons name="history" size={20} color="white" />
                        </View>
                    </View>
                </View>

                <Text className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold text-center pb-3 pt-6 font-display">
                    Учитесь в своем ритме
                </Text>
                <Text className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-relaxed pb-3 pt-1 text-center max-w-[300px]">
                    Бронируйте и переносите занятия в 2 клика
                </Text>

                <View className="flex-row items-center justify-center gap-3 py-8">
                    <View className="h-1.5 w-1.5 rounded-full bg-gray-200 dark:bg-gray-700" />
                    <View className="h-1.5 w-1.5 rounded-full bg-gray-200 dark:bg-gray-700" />
                    <View className="h-1.5 w-6 rounded-full bg-primary" />
                </View>
            </View>

            <View className="p-6 pb-12">
                <Button
                    label="Начать обучение"
                    size="lg"
                    onPress={() => router.push('/auth/verification')}
                />
            </View>
        </ScreenWrapper>
    );
}
