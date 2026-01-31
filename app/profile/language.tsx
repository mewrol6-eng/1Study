import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function LanguageSettingsScreen() {
    const router = useRouter();
    const [selected, setSelected] = useState('ru');

    const languages = [
        { code: 'ru', name: 'Русский', icon: '🇷🇺' },
        { code: 'en', name: 'English', icon: '🇺🇸' },
        { code: 'uz', name: 'O\'zbek', icon: '🇺🇿' },
    ];

    return (
        <ScreenWrapper className="bg-slate-50 dark:bg-slate-950">
            <View className="px-6 pt-safe-top pb-4 flex-row items-center gap-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 active:bg-slate-200"
                >
                    <MaterialIcons name="arrow-back" size={24} className="text-slate-900 dark:text-white" />
                </TouchableOpacity>
                <Text className="text-xl font-bold text-slate-900 dark:text-white">Язык приложения</Text>
            </View>

            <View className="p-6 gap-4">
                {languages.map((lang) => (
                    <TouchableOpacity
                        key={lang.code}
                        onPress={() => setSelected(lang.code)}
                        className={`flex-row items-center justify-between p-4 rounded-2xl border ${selected === lang.code ? 'bg-white dark:bg-card-dark border-primary shadow-sm' : 'bg-white dark:bg-card-dark border-slate-100 dark:border-slate-800'}`}
                    >
                        <View className="flex-row items-center gap-4">
                            <Text className="text-2xl">{lang.icon}</Text>
                            <Text className={`font-bold text-lg ${selected === lang.code ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>{lang.name}</Text>
                        </View>
                        {selected === lang.code && (
                            <View className="size-6 rounded-full bg-primary items-center justify-center">
                                <MaterialIcons name="check" size={14} className="text-slate-900" />
                            </View>
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </ScreenWrapper>
    );
}
