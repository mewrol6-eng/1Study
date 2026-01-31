import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInLeft, FadeInRight, FadeInUp, ZoomIn } from 'react-native-reanimated';
import { Button } from '../../components/ui/Button';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

const { width } = Dimensions.get('window');

export default function FlexibilityScreen() {
    const router = useRouter();

    return (
        <ScreenWrapper className="bg-white dark:bg-slate-950">
            {/* Background Decoration */}
            <View className="absolute top-0 left-0 right-0 h-[60%] overflow-hidden">
                <LinearGradient
                    colors={['rgba(19, 236, 200, 0.15)', 'rgba(255, 255, 255, 0)']}
                    className="absolute inset-0"
                />
                <Animated.View entering={FadeInRight.duration(1000).delay(300)} className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                <Animated.View entering={FadeInLeft.duration(1000).delay(500)} className="absolute top-40 -left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
            </View>

            <View className="flex-1 px-6 pt-safe-top">
                {/* Header / Config */}
                <Animated.View entering={FadeInDown.duration(600)} className="flex-row items-center justify-between py-4">
                    <View className="flex-row gap-1">
                        <View className="h-1.5 w-1.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                        <View className="h-1.5 w-1.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                        <Animated.View
                            entering={ZoomIn.duration(500).delay(200)}
                            className="h-1.5 w-8 rounded-full bg-primary shadow-lg shadow-primary/30"
                        />
                    </View>
                    <TouchableOpacity onPress={() => router.back()} className="px-3 py-1 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800">
                        <Text className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Введение</Text>
                    </TouchableOpacity>
                </Animated.View>

                {/* Main Content Area */}
                <View className="flex-1 items-center justify-center">

                    {/* Illustration Container */}
                    <View className="w-full aspect-square max-h-[380px] relative items-center justify-center mb-10">
                        {/* Central Card */}
                        <Animated.View entering={ZoomIn.duration(700).springify()} className="w-[75%] aspect-[3/4] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 relative z-10 overflow-hidden">
                            <LinearGradient
                                colors={['rgba(255,255,255,1)', 'rgba(248,250,252,1)']}
                                className="absolute inset-0"
                            />

                            {/* Calendar Header */}
                            <View className="bg-slate-900 p-6 pt-8 pb-10 rounded-b-[2rem]">
                                <View className="flex-row justify-between items-center mb-4">
                                    <View className="flex-row gap-2">
                                        <View className="size-2 rounded-full bg-red-400" />
                                        <View className="size-2 rounded-full bg-yellow-400" />
                                        <View className="size-2 rounded-full bg-green-400" />
                                    </View>
                                    <MaterialIcons name="more-horiz" color="white" size={20} className="opacity-50" />
                                </View>
                                <Text className="text-white text-2xl font-bold">Сентябрь</Text>
                                <Text className="text-slate-400 text-sm font-medium">Ваше расписание</Text>
                            </View>

                            {/* Calendar Items */}
                            <View className="p-5 gap-3">
                                {/* Item 1 */}
                                <Animated.View entering={FadeInLeft.duration(600).delay(500)} className="flex-row items-center gap-3 p-3 rounded-2xl bg-primary/10 border border-primary/20">
                                    <View className="size-10 rounded-xl bg-primary items-center justify-center shadow-lg shadow-primary/30">
                                        <Text className="text-white font-bold text-xs">12</Text>
                                    </View>
                                    <View className="flex-1">
                                        <Text className="font-bold text-slate-900 dark:text-white text-sm">Математика</Text>
                                        <Text className="text-xs text-slate-500">14:00 - 15:30</Text>
                                    </View>
                                    <View className="size-6 rounded-full bg-white border border-primary/20 items-center justify-center">
                                        <MaterialIcons name="check" size={14} className="text-emerald-600" />
                                    </View>
                                </Animated.View>

                                {/* Item 2 */}
                                <Animated.View entering={FadeInLeft.duration(600).delay(700)} className="flex-row items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 opacity-60">
                                    <View className="size-10 rounded-xl bg-slate-200 items-center justify-center">
                                        <Text className="text-slate-500 font-bold text-xs">14</Text>
                                    </View>
                                    <View className="flex-1">
                                        <Text className="font-bold text-slate-900 dark:text-white text-sm">Физика</Text>
                                        <Text className="text-xs text-slate-500">09:00 - 10:30</Text>
                                    </View>
                                </Animated.View>
                            </View>

                            {/* Floating Elements */}
                            <Animated.View entering={ZoomIn.duration(400).delay(900)} className="absolute bottom-6 right-6 size-12 bg-slate-900 rounded-2xl items-center justify-center shadow-xl shadow-slate-900/30">
                                <MaterialIcons name="add" color="white" size={24} />
                            </Animated.View>
                        </Animated.View>

                        {/* Background Floating Elements for Depth */}
                        <Animated.View entering={FadeInRight.duration(800).delay(400)} className="absolute top-10 right-0 w-32 h-32 bg-blue-500/10 rounded-[2rem] -rotate-12 blur-sm z-0" />
                        <Animated.View entering={FadeInLeft.duration(800).delay(600)} className="absolute bottom-10 left-4 w-24 h-24 bg-primary/10 rounded-[2rem] rotate-6 blur-sm z-0" />

                        {/* Badge */}
                        <Animated.View entering={FadeInDown.duration(600).delay(1000).springify()} className="absolute -right-2 top-20 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 flex-row gap-3 items-center z-20">
                            <View className="size-10 bg-green-100 rounded-full items-center justify-center">
                                <Ionicons name="notifications" size={20} className="text-green-600" />
                            </View>
                            <View>
                                <Text className="text-xs font-bold text-slate-900 dark:text-white">Напоминание</Text>
                                <Text className="text-[10px] text-slate-500">Через 15 мин</Text>
                            </View>
                        </Animated.View>
                    </View>

                    {/* Text Content */}
                    <Animated.View entering={FadeInUp.duration(600).delay(300)} className="items-center max-w-[320px]">
                        <Text className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-4 leading-tight tracking-tight">
                            Учитесь в <Text className="text-emerald-600">своем</Text> ритме
                        </Text>
                        <Text className="text-center text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                            Гибкое расписание, которое подстраивается под вас. Бронируйте и переносите занятия в 2 клика.
                        </Text>
                    </Animated.View>
                </View>

                {/* Footer Action */}
                <Animated.View entering={FadeInUp.duration(600).delay(600)} className="pt-8 pb-12 w-full">
                    <Button
                        label="Начать обучение"
                        size="lg"
                        onPress={() => router.push('/auth/login')}
                        className="w-full shadow-xl shadow-primary/20 bg-slate-900 dark:bg-white h-16 rounded-[1.25rem]"
                        textClassName="text-white dark:text-slate-900 text-lg font-bold"
                        icon={<MaterialIcons name="arrow-forward" size={20} color="white" />}
                    />
                </Animated.View>
            </View>
        </ScreenWrapper>
    );
}
