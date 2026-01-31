import { MaterialIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ScreenWrapper } from '../../../components/ui/ScreenWrapper';

export default function LessonPlayerScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    return (
        <ScreenWrapper className="bg-slate-50 dark:bg-slate-950" safeArea={false}>
            {/* Video Player Placeholder */}
            <View className="w-full aspect-video bg-slate-900 relative justify-center items-center">
                <Text className="text-white/50 font-bold mb-4">Video Player Mockup</Text>
                <TouchableOpacity className="size-16 rounded-full bg-white/20 items-center justify-center backdrop-blur-sm">
                    <MaterialIcons name="play-arrow" size={40} className="text-white ml-1" />
                </TouchableOpacity>

                {/* Overlay Controls */}
                <View className="absolute top-0 left-0 right-0 p-4 pt-12 flex-row justify-between items-center z-50">
                    <TouchableOpacity onPress={() => router.back()} className="size-10 items-center justify-center rounded-full bg-black/50 active:scale-90 transition-all">
                        <MaterialIcons name="keyboard-arrow-down" size={28} className="text-white" />
                    </TouchableOpacity>
                    <View className="flex-row gap-4">
                        <TouchableOpacity className="size-10 items-center justify-center rounded-full bg-black/50">
                            <MaterialIcons name="cast" size={20} className="text-white" />
                        </TouchableOpacity>
                        <TouchableOpacity className="size-10 items-center justify-center rounded-full bg-black/50">
                            <MaterialIcons name="more-vert" size={20} className="text-white" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Progress Bar Mockup */}
                <View className="absolute bottom-0 left-0 right-0 p-4">
                    <View className="flex-row justify-between mb-2">
                        <Text className="text-white/70 text-xs font-medium">12:30</Text>
                        <Text className="text-white/70 text-xs font-medium">45:00</Text>
                    </View>
                    <View className="h-1 bg-white/20 rounded-full overflow-hidden">
                        <View className="h-full w-[30%] bg-emerald-500" />
                    </View>
                </View>
            </View>

            <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-900 rounded-t-[2rem] -mt-6">
                <View className="p-6 pb-32">
                    <View className="flex-row justify-between items-start mb-6">
                        <View className="flex-1 mr-4">
                            <Text className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Модуль 01</Text>
                            <Text className="text-xl font-bold text-slate-900 dark:text-white leading-tight">Введение в тригонометрические функции</Text>
                        </View>
                        <TouchableOpacity className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 items-center justify-center">
                            <MaterialIcons name="bookmark-border" size={24} className="text-slate-900 dark:text-white" />
                        </TouchableOpacity>
                    </View>

                    <Text className="text-slate-500 leading-relaxed mb-8">
                        В этом уроке мы разберем основные понятия тригонометрии, научимся работать с синусом и косинусом на единичной окружности.
                    </Text>

                    <Text className="text-lg font-bold text-slate-900 dark:text-white mb-4">Материалы урока</Text>
                    <View className="gap-4">
                        <TouchableOpacity className="flex-row items-center p-4 bg-white dark:bg-card-dark rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                            <View className="size-10 rounded-xl bg-red-50 dark:bg-red-900/20 items-center justify-center mr-4">
                                <MaterialIcons name="picture-as-pdf" size={24} className="text-red-500" />
                            </View>
                            <View className="flex-1">
                                <Text className="font-bold text-slate-900 dark:text-white">Конспект лекции</Text>
                                <Text className="text-xs text-slate-500">PDF • 2.4 MB</Text>
                            </View>
                            <MaterialIcons name="download" size={20} className="text-slate-400" />
                        </TouchableOpacity>

                        <TouchableOpacity className="flex-row items-center p-4 bg-white dark:bg-card-dark rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                            <View className="size-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 items-center justify-center mr-4">
                                <MaterialIcons name="assignment" size={24} className="text-blue-500" />
                            </View>
                            <View className="flex-1">
                                <Text className="font-bold text-slate-900 dark:text-white">Домашнее задание</Text>
                                <Text className="text-xs text-slate-500">12 задач</Text>
                            </View>
                            <MaterialIcons name="chevron-right" size={24} className="text-slate-400" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
}
