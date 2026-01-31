import { cn } from '@/lib/utils';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Animated, { Extrapolation, FadeInUp, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { Button } from '../../components/ui/Button';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

const { width, height } = Dimensions.get('window');

export default function CourseDetailScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const scrollY = useSharedValue(0);
    const [selectedTab, setSelectedTab] = useState('syllabus'); // syllabus, teacher, reviews

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y;
        },
    });

    const headerStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(scrollY.value, [200, 300], [0, 1], Extrapolation.CLAMP),
            transform: [
                { translateY: interpolate(scrollY.value, [200, 300], [10, 0], Extrapolation.CLAMP) }
            ]
        };
    });

    const imageStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: interpolate(scrollY.value, [-height, 0], [2, 1], Extrapolation.CLAMP),
                },
                {
                    translateY: interpolate(scrollY.value, [-height, 0], [-height / 2, 0], Extrapolation.CLAMP),
                }
            ],
        };
    });

    return (
        <ScreenWrapper className="bg-slate-50 dark:bg-slate-950" safeArea={false}>
            {/* Header Actions */}
            <View className="absolute top-0 left-0 right-0 z-[100] pt-14 px-6 flex-row justify-between items-center" pointerEvents="box-none">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="size-12 items-center justify-center rounded-full bg-black/20 backdrop-blur-xl border border-white/10 shadow-sm"
                    hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                >
                    <MaterialIcons name="arrow-back" size={24} className="text-white" />
                </TouchableOpacity>

                <Animated.View style={headerStyle} className="flex-1 mx-4 p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-full border border-slate-200 dark:border-slate-800 shadow-sm items-center">
                    <Text className="text-sm font-bold text-slate-900 dark:text-white" numberOfLines={1}>Основы тригонометрии</Text>
                </Animated.View>

                <TouchableOpacity className="size-12 items-center justify-center rounded-full bg-black/20 backdrop-blur-xl border border-white/10 shadow-sm">
                    <MaterialIcons name="bookmark-border" size={24} className="text-white" />
                </TouchableOpacity>
            </View>

            <Animated.ScrollView
                scrollEventThrottle={16}
                onScroll={scrollHandler}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 120 }}
                className="flex-1"
                bounces={false}
            >
                {/* Hero Section */}
                <View className="h-[500px] w-full relative">
                    <Animated.Image
                        source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-UwqKfObVCpuE0oUgdf_0_fagDSksFyWdkGDH1A3C6cNONkvc_rQTFdGoy-UYfD2ZyiSyFXpkWB669V31v8tiiwt1tC4m7WGq6PtU8MaU2gW_3eU_n7Z2c4HOBYboKoucOXgZGlyNt7F7sV3VFKS4WM9cfKw-l-BycAgGxeDBsiUsdJWFdv9qcwAUFj-KNXDEikMF2WztrdKeRHTr7qCWkUXcqbRAjQznr7rAAjhCbBEVzbk-ObZowUg0PTRY2JHohSy1bZxXQFro" }}
                        className="absolute inset-0 w-full h-full"
                        style={imageStyle}
                        resizeMode="cover"
                    />
                    <LinearGradient
                        colors={['rgba(0,0,0,0.3)', 'transparent', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.8)']}
                        locations={[0, 0.4, 0.8, 1]}
                        className="absolute inset-0"
                    />

                    <View className="absolute bottom-12 left-0 right-0 px-6">
                        <Animated.View entering={FadeInUp.duration(600).delay(200)} className="flex-row gap-2 mb-4">
                            <View className="bg-emerald-500/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-400/30">
                                <Text className="text-[10px] font-bold uppercase text-white tracking-wide">Точные науки</Text>
                            </View>
                            <View className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                                <Text className="text-[10px] font-bold uppercase text-white tracking-wide">Advanced</Text>
                            </View>
                        </Animated.View>

                        <Animated.Text entering={FadeInUp.duration(600).delay(300)} className="text-4xl font-extrabold text-white mb-3 shadow-lg leading-[1.1]">
                            Основы тригонометрии
                        </Animated.Text>

                        <Animated.View entering={FadeInUp.duration(600).delay(400)} className="flex-row items-center gap-4">
                            <View className="flex-row items-center gap-1.5 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                                <MaterialIcons name="star" size={16} className="text-amber-400" />
                                <Text className="text-white font-bold">4.8</Text>
                                <Text className="text-white/70 text-xs">(128)</Text>
                            </View>
                            <Text className="text-white/90 text-sm font-medium">12 модулей • 8 часов</Text>
                        </Animated.View>
                    </View>
                </View>

                {/* Content Sheet */}
                <View className="-mt-8 bg-slate-50 dark:bg-slate-950 rounded-t-[2.5rem] overflow-hidden">
                    <View className="p-6">
                        {/* Tabs */}
                        <View className="flex-row mb-8 p-1 bg-slate-200/50 dark:bg-slate-900/50 rounded-2xl">
                            {['Программа', 'Преподаватель', 'Отзывы'].map((tab, i) => {
                                const key = i === 0 ? 'syllabus' : i === 1 ? 'teacher' : 'reviews';
                                const isActive = selectedTab === key;
                                return (
                                    <TouchableOpacity
                                        key={i}
                                        onPress={() => setSelectedTab(key)}
                                        className={cn(
                                            "flex-1 py-3 items-center rounded-xl transition-all",
                                            isActive ? "bg-white dark:bg-slate-800 shadow-sm" : ""
                                        )}
                                    >
                                        <Text className={cn(
                                            "text-xs font-bold uppercase tracking-wider",
                                            isActive ? "text-slate-900 dark:text-white" : "text-slate-500"
                                        )}>
                                            {tab}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>

                        {/* Syllabus Content */}
                        <View className="gap-8">
                            <View>
                                <Text className="text-xl font-bold text-slate-900 dark:text-white mb-3">О курсе</Text>
                                <Text className="text-slate-500 dark:text-slate-400 leading-relaxed text-[15px]">
                                    Этот курс охватывает все основные аспекты тригонометрии, от базовых определений до сложных уравнений.
                                    Идеально подходит для подготовки к экзаменам и улучшения понимания математического анализа.
                                </Text>
                            </View>

                            <View>
                                <View className="flex-row justify-between items-end mb-4">
                                    <Text className="text-xl font-bold text-slate-900 dark:text-white">Модули</Text>
                                    <Text className="text-sm font-bold text-emerald-600">Показать все</Text>
                                </View>
                                <View className="gap-3">
                                    {[
                                        { num: '01', title: 'Введение в тригонометрию', time: '45 мин' },
                                        { num: '02', title: 'Синус и Косинус: Основы', time: '60 мин' },
                                        { num: '03', title: 'Тангенс и Котангенс', time: '55 мин' },
                                        { num: '04', title: 'Тригонометрические тождества', time: '90 мин' },
                                        { num: '05', title: 'Решение треугольников', time: '120 мин' },
                                    ].map((module, i) => (
                                        <TouchableOpacity
                                            key={i}
                                            onPress={() => router.push('/learning/lesson/1')}
                                            className="flex-row items-center gap-4 p-4 bg-white dark:bg-card-dark rounded-[1.5rem] shadow-sm border border-slate-100 dark:border-slate-800 active:scale-[0.98]"
                                        >
                                            <View className={cn(
                                                "size-12 rounded-2xl items-center justify-center border",
                                                i === 0 ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800" : "bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700"
                                            )}>
                                                {i === 0 ? (
                                                    <MaterialIcons name="play-arrow" size={24} className="text-emerald-600" />
                                                ) : (
                                                    <Text className="text-slate-500 font-bold text-xs">{module.num}</Text>
                                                )}
                                            </View>
                                            <View className="flex-1">
                                                <Text className="text-slate-900 dark:text-white font-bold text-base mb-1" numberOfLines={1}>{module.title}</Text>
                                                <Text className="text-slate-400 text-xs font-medium">{module.time} • Видеоурок</Text>
                                            </View>
                                            {i === 0 && (
                                                <View className="bg-emerald-100 dark:bg-emerald-900/40 px-2 py-1 rounded-lg">
                                                    <Text className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400">Current</Text>
                                                </View>
                                            )}
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Animated.ScrollView>

            {/* Bottom Action Bar */}
            <View className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 px-6 pt-4 pb-10 shadow-up">
                <View className="flex-row items-center gap-6">
                    <View>
                        <Text className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Стоимость</Text>
                        <View className="flex-row items-baseline gap-1">
                            <Text className="text-3xl font-extrabold text-slate-900 dark:text-white">4.0</Text>
                            <Text className="text-sm font-bold text-emerald-600">CRD</Text>
                        </View>
                    </View>
                    <Button
                        label="Начать обучение"
                        size="lg"
                        className="flex-1 bg-emerald-600 h-16 rounded-[1.25rem] shadow-xl shadow-emerald-500/25"
                        textClassName="text-white font-bold text-lg"
                        onPress={() => router.push('/learning/lesson/1')}
                    />
                </View>
            </View>
        </ScreenWrapper>
    );
}
