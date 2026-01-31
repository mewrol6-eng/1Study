import { MaterialIcons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function CoursesIndexScreen() {
    const router = useRouter();

    const courses = [
        { id: 1, title: 'Основы тригонометрии', category: 'Точные науки', duration: '8 часов', lessons: 12, rating: 4.8, color: 'bg-emerald-500', icon: 'functions' },
        { id: 2, title: 'Python для начинающих', category: 'Программирование', duration: '12 часов', lessons: 24, rating: 4.9, color: 'bg-blue-500', icon: 'code' },
        { id: 3, title: 'UX/UI Дизайн', category: 'Дизайн', duration: '10 часов', lessons: 18, rating: 4.7, color: 'bg-purple-500', icon: 'brush' },
        { id: 4, title: 'Digital Маркетинг', category: 'Маркетинг', duration: '6 часов', lessons: 8, rating: 4.6, color: 'bg-orange-500', icon: 'campaign' },
    ];

    return (
        <ScreenWrapper className="bg-slate-50 dark:bg-slate-950">
            <Animated.View entering={FadeInDown.duration(600)} className="pt-safe-top px-6 py-4 flex-row items-center gap-4">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="size-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700"
                >
                    <MaterialIcons name="arrow-back" size={20} className="text-slate-900 dark:text-white" />
                </TouchableOpacity>
                <Text className="text-2xl font-bold text-slate-900 dark:text-white">Все курсы</Text>
            </Animated.View>

            <ScrollView className="flex-1 px-6 pt-4" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                <View className="gap-6">
                    {courses.map((course, i) => (
                        <Animated.View key={course.id} entering={FadeInUp.duration(600).delay(i * 100)}>
                            <Link href={`/courses/${course.id}` as any} asChild>
                                <TouchableOpacity className="bg-white dark:bg-card-dark rounded-[2rem] p-5 shadow-sm border border-slate-100 dark:border-slate-800 active:scale-[0.98] transition-all">
                                    <View className="flex-row justify-between items-start mb-4">
                                        <View className={`size-12 rounded-2xl items-center justify-center ${course.color} bg-opacity-10`}>
                                            <MaterialIcons name={course.icon as any} size={24} className="text-white" />
                                        </View>
                                        <View className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg">
                                            <Text className="text-[10px] font-bold text-slate-500 uppercase">{course.category}</Text>
                                        </View>
                                    </View>

                                    <Text className="text-xl font-bold text-slate-900 dark:text-white mb-2">{course.title}</Text>

                                    <View className="flex-row items-center gap-4">
                                        <View className="flex-row items-center gap-1">
                                            <MaterialIcons name="schedule" size={14} className="text-slate-400" />
                                            <Text className="text-xs text-slate-500 font-medium">{course.duration}</Text>
                                        </View>
                                        <View className="flex-row items-center gap-1">
                                            <MaterialIcons name="star" size={14} className="text-amber-400" />
                                            <Text className="text-xs text-slate-700 dark:text-slate-200 font-bold">{course.rating}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </Link>
                        </Animated.View>
                    ))}
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
}
