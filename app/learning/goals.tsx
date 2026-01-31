import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { cn } from 'nativewind';
import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/ui/Button';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function LearningGoalsScreen() {
    const router = useRouter();
    const [selectedTopics, setSelectedTopics] = useState<string[]>(['Math']);

    const toggleTopic = (topic: string) => {
        if (selectedTopics.includes(topic)) {
            setSelectedTopics(selectedTopics.filter(t => t !== topic));
        } else {
            setSelectedTopics([...selectedTopics, topic]);
        }
    };

    return (
        <ScreenWrapper>
            {/* Header with Progress Steps */}
            <View className="bg-white/90 dark:bg-background-dark/90 backdrop-blur-md pt-safe-top border-b border-slate-100 dark:border-slate-800">
                <View className="flex-row items-center justify-center gap-3 py-6">
                    <View className="h-1.5 w-1.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                    <View className="h-1.5 w-8 rounded-full bg-primary shadow-lg shadow-primary/50" />
                    <View className="h-1.5 w-1.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                    <View className="h-1.5 w-1.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                </View>
            </View>

            <ScrollView className="flex-1 px-6 pb-28">
                <View className="mb-6 mt-4">
                    <Text className="text-3xl font-bold leading-tight tracking-tight mb-3 text-slate-900 dark:text-white">
                        Что вы хотите изучать?
                    </Text>
                    <Text className="text-slate-500 text-base font-normal leading-relaxed max-w-md">
                        Выберите предметы, которые хотите освоить. Ваши кредиты действуют для всех выбранных направлений.
                    </Text>
                </View>

                {/* Main Subjects */}
                <View className="mb-8">
                    <View className="flex-row items-center gap-2 mb-4">
                        <MaterialIcons name="stars" size={20} className="text-primary" />
                        <Text className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">Основные предметы</Text>
                    </View>

                    <View className="flex-row gap-4">
                        {/* Topic 1 */}
                        <TouchableOpacity
                            onPress={() => toggleTopic('Math')}
                            className={cn("flex-1 aspect-[4/5] rounded-2xl overflow-hidden relative border-2", selectedTopics.includes('Math') ? "border-primary" : "border-transparent")}
                        >
                            <Image
                                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuC04X9mohv3AEJk9hR697tFzGAF1hqBSPD539dlFcoF29s7Jz5zaPy8z4djOEg6MLd2kv5FtSr3slbAvP6m6fzxY4sUFp4EGSZ6Uzp7p5Wy7Uu4pN7jTfi22Nt2Gg8xCc09AWp4TPzVyAT7BSdaRBJcz2wFWTEq0ahgWT3LwQuf2anm0eHrM1MT21A3a8tZqIDWj4Aq01cUmilplo54RnMBwr5EFkRAlABgf74J0IqbIYXiE2osZTizEt8DCn1w23YDeFxBlS9E0vBh" }}
                                className="absolute inset-0 w-full h-full bg-cover"
                            />
                            <View className="absolute inset-0 bg-black/40" />
                            {selectedTopics.includes('Math') && (
                                <View className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-primary z-10">
                                    <MaterialIcons name="check" size={16} color="black" />
                                </View>
                            )}
                            <View className="absolute bottom-0 left-0 right-0 p-4">
                                <View className="inline-flex items-center justify-center p-2 rounded-lg bg-white/20 backdrop-blur-md mb-3 self-start">
                                    <MaterialIcons name="calculate" size={24} color="white" />
                                </View>
                                <Text className="font-bold text-lg text-white leading-tight">Математика</Text>
                                <Text className="text-xs text-slate-200 mt-1">Алгебра, анализ и др.</Text>
                            </View>
                        </TouchableOpacity>

                        {/* Topic 2 */}
                        <TouchableOpacity
                            onPress={() => toggleTopic('Chess')}
                            className={cn("flex-1 aspect-[4/5] rounded-2xl overflow-hidden relative border-2 bg-slate-100 dark:bg-slate-800", selectedTopics.includes('Chess') ? "border-primary" : "border-slate-200 dark:border-slate-700")}
                        >
                            <Image
                                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZXkHa6mrY6YF6fu7Oxmi9oyIdqPAWByAYBhUpObOIQ7GZZc_ylcvld8xVkpkckfiqyxkAe67sFDdppyJMfurjWEiQlWGMHqxFb0pJTHeN2NOPVmwdHepqMYRUepI4pUMfdWFLW1sqQIj79JHG0wUKfltG3eFATTMBR-yr9v6y4Mr6MrKSWB60oQf01iggDnejkqi4TGGzWkw8pVUEm9AaaEKnBBvMtp-Rnhf_7It12KzQcBAJocx7bug5iED_El3W2b5MNcENYYeJ" }}
                                className={cn("absolute inset-0 w-full h-full bg-cover transition-all", selectedTopics.includes('Chess') ? "opacity-100" : "grayscale opacity-80")}
                            />
                            <View className="absolute inset-0 bg-black/10" />
                            {selectedTopics.includes('Chess') ? (
                                <View className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-primary z-10">
                                    <MaterialIcons name="check" size={16} color="black" />
                                </View>
                            ) : (
                                <View className="absolute top-3 right-3 h-7 w-7 rounded-full border-2 border-white/50 z-10" />
                            )}
                            <View className="absolute bottom-0 left-0 right-0 p-4">
                                <View className="inline-flex items-center justify-center p-2 rounded-lg bg-white/10 backdrop-blur-md mb-3 self-start">
                                    <MaterialIcons name="extension" size={24} color="white" />
                                </View>
                                <Text className="font-bold text-lg text-white leading-tight">Шахматы</Text>
                                <Text className="text-xs text-slate-300 mt-1">Стратегия и тактика</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Languages */}
                <View className="mb-6">
                    <View className="flex-row items-center gap-2 mb-4">
                        <MaterialIcons name="translate" size={20} className="text-primary" />
                        <Text className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">Языки</Text>
                    </View>

                    <View className="gap-3 pb-24">
                        {[
                            { code: "EN", title: "Английский", sub: "Все уровни сложности", selected: true },
                            { code: "RU", title: "Русский", sub: "Грамматика и правописание", selected: false },
                            { code: "UZ", title: "Узбекский (Латиница)", sub: "Современное письмо", selected: false },
                            { code: "UZ", title: "Узбекский (Кириллица)", sub: "Традиционное письмо", selected: false },
                        ].map((lang, i) => (
                            <TouchableOpacity
                                key={i}
                                className={cn("flex-row items-center gap-4 rounded-xl p-4 border", lang.selected ? "bg-white dark:bg-card-dark border-primary shadow-sm" : "bg-white dark:bg-card-dark border-slate-200 dark:border-slate-800")}
                            >
                                <View className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-bold text-sm tracking-tighter border", lang.selected ? "bg-primary/10 text-primary border-primary/20" : "bg-slate-50 dark:bg-slate-800 text-slate-500 border-slate-100 dark:border-slate-700")}>
                                    <Text className={cn("font-bold text-sm", lang.selected ? "text-primary" : "text-slate-500")}>{lang.code}</Text>
                                </View>
                                <View className="flex-1 min-w-0">
                                    <Text className="font-bold text-slate-900 dark:text-white text-lg">{lang.title}</Text>
                                    <Text className={cn("text-sm truncate", lang.selected ? "text-primary font-medium" : "text-slate-500")}>{lang.sub}</Text>
                                </View>
                                {lang.selected ? (
                                    <View className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                                        <MaterialIcons name="check" size={14} color="white" />
                                    </View>
                                ) : (
                                    <View className="h-6 w-6 shrink-0 rounded-full border-2 border-slate-300 dark:border-slate-600" />
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>

            <View className="absolute bottom-0 left-0 right-0 p-6 pt-12 bg-gradient-to-t from-white via-white dark:from-background-dark dark:via-background-dark to-transparent">
                <Button
                    label="Продолжить"
                    size="lg"
                    icon={<MaterialIcons name="arrow-forward" size={20} color="black" />}
                    className="flex-row-reverse gap-2"
                    onPress={() => router.push('/(tabs)')}
                />
            </View>
        </ScreenWrapper>
    );
}
