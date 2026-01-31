import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function SecurityScreen() {
    const router = useRouter();

    return (
        <ScreenWrapper className="bg-slate-50 dark:bg-slate-950">
            <View className="px-6 pt-safe-top pb-4 flex-row items-center gap-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 active:bg-slate-200"
                >
                    <MaterialIcons name="arrow-back" size={24} className="text-slate-900 dark:text-white" />
                </TouchableOpacity>
                <Text className="text-xl font-bold text-slate-900 dark:text-white">Безопасность</Text>
            </View>

            <View className="p-6 gap-4">
                <TouchableOpacity className="bg-white dark:bg-card-dark p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex-row items-center">
                    <View className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 items-center justify-center mr-4">
                        <MaterialIcons name="lock" size={20} className="text-blue-500" />
                    </View>
                    <View className="flex-1">
                        <Text className="font-bold text-slate-900 dark:text-white">Сменить пароль</Text>
                        <Text className="text-xs text-slate-500">Последнее изменение: 30 дней назад</Text>
                    </View>
                    <MaterialIcons name="chevron-right" size={24} className="text-slate-300" />
                </TouchableOpacity>

                <TouchableOpacity className="bg-white dark:bg-card-dark p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex-row items-center">
                    <View className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 items-center justify-center mr-4">
                        <MaterialIcons name="devices" size={20} className="text-slate-500" />
                    </View>
                    <View className="flex-1">
                        <Text className="font-bold text-slate-900 dark:text-white">Активные сессии</Text>
                        <Text className="text-xs text-slate-500">iPhone 14 Pro • Tashkent</Text>
                    </View>
                    <MaterialIcons name="chevron-right" size={24} className="text-slate-300" />
                </TouchableOpacity>

                <TouchableOpacity className="bg-white dark:bg-card-dark p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex-row items-center">
                    <View className="size-10 rounded-full bg-red-50 dark:bg-red-900/20 items-center justify-center mr-4">
                        <MaterialIcons name="delete-outline" size={20} className="text-red-500" />
                    </View>
                    <View className="flex-1">
                        <Text className="font-bold text-slate-900 dark:text-white">Удалить аккаунт</Text>
                        <Text className="text-xs text-slate-500">Безвозвратное удаление данных</Text>
                    </View>
                    <MaterialIcons name="chevron-right" size={24} className="text-slate-300" />
                </TouchableOpacity>
            </View>
        </ScreenWrapper>
    );
}
