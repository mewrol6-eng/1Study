import { cn } from '@/lib/utils';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp, ZoomIn } from 'react-native-reanimated';
import { Button } from '../../components/ui/Button';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function ProfileScreen() {
    const router = useRouter();
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    return (
        <ScreenWrapper className="bg-slate-50 dark:bg-slate-950">
            {/* Background Decoration */}
            <View className="absolute top-0 left-0 right-0 h-[50%] overflow-hidden">
                <LinearGradient
                    colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)']}
                    className="absolute inset-0 z-0"
                />
            </View>

            <Animated.View entering={FadeInDown.duration(800)} className="bg-white dark:bg-card-dark pt-safe-top pb-8 rounded-b-[2.5rem] shadow-xl shadow-slate-200/40 dark:shadow-none z-10 border-b border-slate-100 dark:border-slate-800 relative overflow-hidden">
                {/* Header Pattern */}
                <Animated.View entering={FadeInDown.duration(1000).delay(200)} className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />

                <View className="flex-row justify-between items-center px-6 mb-8 relative z-10">
                    <Text className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Профиль</Text>
                </View>

                <View className="items-center px-6 relative z-10">
                    <View className="relative mb-4">
                        <Animated.View entering={ZoomIn.duration(800).delay(300)} className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-110" />
                        <Animated.View entering={ZoomIn.duration(800).delay(300)} className="size-28 rounded-full border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden bg-slate-100 dark:bg-slate-800 items-center justify-center">
                            <Text className="text-6xl font-bold text-slate-300 dark:text-slate-600">S</Text>
                        </Animated.View>

                    </View>

                    <Animated.Text entering={FadeInUp.duration(600).delay(400)} className="text-3xl font-bold text-slate-900 dark:text-white mt-1 text-center">Saidamir</Animated.Text>
                    <Animated.View entering={FadeInUp.duration(600).delay(500)} className="flex-row items-center gap-2 mt-1 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">
                        <View className="size-2 rounded-full bg-primary animate-pulse" />
                        <Text className="text-slate-500 text-xs font-bold uppercase tracking-wider">Студент</Text>
                    </Animated.View>

                    <Animated.View entering={FadeInUp.duration(600).delay(600)} className="flex-row gap-3 mt-8 w-full">
                        <View className="flex-1 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl items-center border border-slate-100 dark:border-slate-800/50">
                            <Text className="text-2xl font-extrabold text-emerald-600 mb-1">15</Text>
                            <Text className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Кредитов</Text>
                        </View>
                        <View className="flex-1 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl items-center border border-slate-100 dark:border-slate-800/50">
                            <Text className="text-2xl font-extrabold text-blue-600 mb-1">12</Text>
                            <Text className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Уроков</Text>
                        </View>

                    </Animated.View>
                </View>
            </Animated.View>

            <ScrollView className="flex-1 px-6 pt-8" contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
                {/* Account Settings */}
                <Animated.View entering={FadeInUp.duration(600).delay(700)}>
                    <Text className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 ml-2">Аккаунт</Text>
                    <View className="bg-white dark:bg-card-dark rounded-[2rem] p-3 mb-8 shadow-sm border border-slate-100 dark:border-slate-800">
                        {[
                            { icon: "person-outline", label: "Личные данные", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20", route: "/profile/personal-data" },
                            { icon: "notifications-none", label: "Уведомления", color: "text-red-500", bg: "bg-red-50 dark:bg-red-900/20", route: "/profile/notifications" },
                            { icon: "security", label: "Безопасность", color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20", route: "/profile/security" },
                        ].map((item, i) => (
                            <TouchableOpacity key={i} onPress={() => router.push(item.route as any)} className="flex-row items-center p-3 active:bg-slate-50 dark:active:bg-slate-800/50 rounded-2xl transition-all">
                                <View className={cn("size-10 rounded-full items-center justify-center mr-4", item.bg)}>
                                    <MaterialIcons name={item.icon as any} size={20} className={item.color} />
                                </View>
                                <Text className="flex-1 text-base font-bold text-slate-900 dark:text-white">{item.label}</Text>
                                <MaterialIcons name="chevron-right" size={20} className="text-slate-300" />
                            </TouchableOpacity>
                        ))}
                    </View>
                </Animated.View>

                {/* App Settings */}
                <Animated.View entering={FadeInUp.duration(600).delay(800)}>
                    <Text className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 ml-2">Приложение</Text>
                    <View className="bg-white dark:bg-card-dark rounded-[2rem] p-3 mb-8 shadow-sm border border-slate-100 dark:border-slate-800">
                        <View className="flex-row items-center p-3 justify-between">
                            <View className="flex-row items-center">
                                <View className="size-10 rounded-full items-center justify-center mr-4 bg-purple-50 dark:bg-purple-900/20">
                                    <MaterialIcons name="dark-mode" size={20} className="text-purple-500" />
                                </View>
                                <Text className="text-base font-bold text-slate-900 dark:text-white">Темная тема</Text>
                            </View>
                            <Switch value={isDarkMode} onValueChange={setIsDarkMode} trackColor={{ true: '#13ecc8' }} />
                        </View>
                        <TouchableOpacity onPress={() => router.push('/profile/language')} className="flex-row items-center p-3 active:bg-slate-50 dark:active:bg-slate-800/50 rounded-2xl">
                            <View className="size-10 rounded-full items-center justify-center mr-4 bg-orange-50 dark:bg-orange-900/20">
                                <MaterialIcons name="language" size={20} className="text-orange-500" />
                            </View>
                            <Text className="flex-1 text-base font-bold text-slate-900 dark:text-white">Язык</Text>
                            <View className="flex-row items-center">
                                <Text className="text-slate-400 mr-2 font-medium bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg text-xs">Русский</Text>
                                <MaterialIcons name="chevron-right" size={20} className="text-slate-300" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </Animated.View>

                <Animated.View entering={FadeInUp.duration(600).delay(900)}>
                    <Button
                        onPress={() => router.replace('/auth/login')}
                        variant="ghost"
                        label="Выйти из аккаунта"
                        className="mb-8"
                        textClassName="text-red-500 font-bold"
                        icon={<MaterialIcons name="logout" size={20} color="#ef4444" />}
                    />
                </Animated.View>
            </ScrollView>
        </ScreenWrapper>
    );
}
