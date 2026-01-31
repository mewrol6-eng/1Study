import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function PersonalDataScreen() {
    const router = useRouter();

    return (
        <ScreenWrapper className="bg-slate-50 dark:bg-slate-950">
            {/* Header */}
            <View className="px-6 pt-safe-top pb-4 flex-row items-center gap-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 active:bg-slate-200"
                >
                    <MaterialIcons name="arrow-back" size={24} className="text-slate-900 dark:text-white" />
                </TouchableOpacity>
                <Text className="text-xl font-bold text-slate-900 dark:text-white">Личные данные</Text>
            </View>

            <View className="p-6 gap-6">
                <View className="items-center mb-6">
                    <View className="size-28 rounded-full bg-slate-200 dark:bg-slate-800 items-center justify-center border-4 border-white dark:border-slate-700 shadow-sm relative">
                        <Text className="text-4xl font-bold text-slate-400">S</Text>
                        <TouchableOpacity className="absolute bottom-0 right-0 bg-primary p-2 rounded-full border-[3px] border-white dark:border-slate-900">
                            <MaterialIcons name="camera-alt" size={16} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="gap-4">
                    <View>
                        <Text className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Имя</Text>
                        <TextInput
                            value="Saidamir"
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-4 font-bold text-slate-900 dark:text-white"
                        />
                    </View>
                    <View>
                        <Text className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Фамилия</Text>
                        <TextInput
                            value="Askhodjaev"
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-4 font-bold text-slate-900 dark:text-white"
                        />
                    </View>
                    <View>
                        <Text className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Email</Text>
                        <TextInput
                            value="saidamir@example.com"
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-4 font-bold text-slate-900 dark:text-white"
                        />
                    </View>
                    <View>
                        <Text className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Телефон</Text>
                        <TextInput
                            value="+998 90 123 45 67"
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-4 font-bold text-slate-900 dark:text-white"
                        />
                    </View>
                </View>

                <TouchableOpacity className="mt-4 bg-slate-900 dark:bg-white py-4 rounded-2xl shadow-lg shadow-slate-900/20 items-center">
                    <Text className="text-white dark:text-slate-900 font-bold text-lg">Сохранить</Text>
                </TouchableOpacity>
            </View>
        </ScreenWrapper>
    );
}
