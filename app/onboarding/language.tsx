import { cn } from '@/lib/utils';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/ui/Button';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function LanguageScreen() {
    const router = useRouter();
    const [selectedLanguage, setSelectedLanguage] = useState<string>('ru');

    const languages = [
        { code: 'en', flag: '🇺🇸', name: 'English', sub: 'English' },
        { code: 'ru', flag: '🇷🇺', name: 'Русский', sub: 'Russian' },
        { code: 'uz_lat', flag: '🇺🇿', name: "O'zbek (Lotin)", sub: 'Uzbek (Latin)' },
        { code: 'uz_cyr', flag: '🇺🇿', name: 'Ўзбек (Кирил)', sub: 'Uzbek (Cyrillic)' },
    ];

    return (
        <ScreenWrapper>
            <View className="flex-row items-center justify-between p-6 z-10 pt-safe-top">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="flex size-10 items-center justify-center rounded-full active:bg-slate-100 dark:active:bg-slate-800 transition-colors"
                >
                    <MaterialIcons name="arrow-back-ios" size={24} className="text-slate-900 dark:text-white" />
                </TouchableOpacity>
                <View className="w-10" />
            </View>

            <ScrollView className="flex-1 px-6 pb-32" showsVerticalScrollIndicator={false}>
                <View className="mb-8 mt-2">
                    <Text className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white mb-3">
                        Выберите язык приложения
                    </Text>
                    <Text className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed">
                        Это будет основной язык интерфейса. Вы сможете изменить его позже в настройках.
                    </Text>
                </View>

                <View className="gap-4">
                    {languages.map((lang) => (
                        <TouchableOpacity
                            key={lang.code}
                            onPress={() => setSelectedLanguage(lang.code)}
                            className={cn(
                                "flex-row items-center justify-between rounded-3xl border p-6 shadow-sm transition-all duration-300",
                                selectedLanguage === lang.code
                                    ? "border-emerald-500 bg-emerald-50 shadow-md"
                                    : "border-slate-100 dark:border-slate-800 bg-white dark:bg-card-dark hover:shadow-md"
                            )}
                        >
                            <View className="flex-row items-center gap-4">
                                <View className={cn(
                                    "flex h-12 w-12 items-center justify-center rounded-full text-2xl",
                                    selectedLanguage === lang.code ? "bg-emerald-100" : "bg-slate-50 dark:bg-slate-800"
                                )}>
                                    <Text className="text-2xl">{lang.flag}</Text>
                                </View>
                                <View className="flex-col">
                                    <Text className={cn(
                                        "text-lg font-bold",
                                        selectedLanguage === lang.code ? "text-emerald-700" : "text-slate-900 dark:text-white"
                                    )}>
                                        {lang.name}
                                    </Text>
                                    <Text className="text-sm font-medium text-slate-500">
                                        {lang.sub}
                                    </Text>
                                </View>
                            </View>
                            <View className="relative flex items-center justify-center">
                                <View className={cn(
                                    "h-6 w-6 rounded-full border-2 transition-all",
                                    selectedLanguage === lang.code
                                        ? "border-emerald-500 bg-emerald-500"
                                        : "border-slate-300 dark:border-slate-600 bg-transparent"
                                )}>
                                    {selectedLanguage === lang.code && (
                                        <View className="absolute inset-0 items-center justify-center">
                                            <MaterialIcons name="check" size={16} color="white" />
                                        </View>
                                    )}
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <View className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white dark:from-background-dark dark:via-background-dark to-transparent z-20">
                <Button
                    label="Далее"
                    size="lg"
                    className="w-full shadow-lg shadow-primary/30"
                    onPress={() => router.push('/onboarding/flexibility')}
                />
            </View>
        </ScreenWrapper>
    );
}
