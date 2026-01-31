import { cn } from '@/lib/utils';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { Button } from '../../components/ui/Button';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

const { width } = Dimensions.get('window');

export default function SubscriptionPlansScreen() {
    const router = useRouter();
    const [selectedPlan, setSelectedPlan] = useState('standard');

    return (
        <ScreenWrapper className="bg-slate-50 dark:bg-slate-950">
            {/* Background Decoration */}
            <View className="absolute top-0 left-0 right-0 h-[60%] overflow-hidden">
                <LinearGradient
                    colors={['rgba(19, 236, 200, 0.1)', 'rgba(255, 255, 255, 0)']}
                    className="absolute inset-0"
                />
                <Animated.View entering={FadeInDown.duration(1000)} className="absolute -top-[20%] -right-[20%] w-[100%] aspect-square bg-blue-500/5 rounded-full blur-3xl" />
                <Animated.View entering={FadeInUp.duration(1000)} className="absolute top-[10%] -left-[10%] w-[70%] aspect-square bg-purple-500/5 rounded-full blur-3xl" />
            </View>

            <Animated.View entering={FadeInDown.duration(600)} className="flex-row items-center justify-between px-6 pt-safe-top py-4 z-10">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="size-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700"
                >
                    <MaterialIcons name="close" size={20} className="text-slate-900 dark:text-white" />
                </TouchableOpacity>
                <View className="px-3 py-1 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-full border border-slate-200 dark:border-slate-700">
                    <Text className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Тарифы</Text>
                </View>
            </Animated.View>

            <ScrollView className="flex-1 px-5 pt-2" contentContainerStyle={{ paddingBottom: 160 }} showsVerticalScrollIndicator={false}>
                <Animated.View entering={FadeInUp.duration(600).delay(200)} className="items-center mb-10">
                    <Text className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-3">
                        Инвестируйте в <Text className="text-emerald-600">будущее</Text>
                    </Text>
                    <Text className="text-slate-500 text-base text-center max-w-[300px] leading-relaxed">
                        Выберите подходящий план и начните обучение уже сегодня
                    </Text>
                </Animated.View>

                {/* Switcher (Monthly/Yearly) - Visual only for now */}
                <Animated.View entering={FadeInUp.duration(600).delay(300)} className="flex-row bg-slate-200/50 dark:bg-slate-800 p-1 rounded-2xl self-center mb-8">
                    <TouchableOpacity className="px-6 py-2 bg-white dark:bg-slate-700 rounded-xl shadow-sm">
                        <Text className="font-bold text-slate-900 dark:text-white text-sm">Ежемесячно</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="px-6 py-2">
                        <Text className="font-medium text-slate-500 text-sm">Годовая (-20%)</Text>
                    </TouchableOpacity>
                </Animated.View>

                <View className="gap-6">
                    {/* Basic Plan */}
                    <Animated.View entering={FadeInUp.duration(600).delay(400)}>
                        <TouchableOpacity
                            onPress={() => setSelectedPlan('basic')}
                            className={cn(
                                "relative flex-col rounded-[2rem] p-6 transition-all duration-200 border-2",
                                selectedPlan === 'basic'
                                    ? "bg-white dark:bg-slate-900 border-slate-900 dark:border-white shadow-xl shadow-slate-200/50"
                                    : "bg-white/60 dark:bg-slate-900/60 border-transparent"
                            )}
                        >
                            <View className="flex-row justify-between items-start mb-4">
                                <View className="size-12 rounded-2xl bg-slate-100 dark:bg-slate-800 items-center justify-center">
                                    <MaterialIcons name="person-outline" size={24} className="text-slate-600 dark:text-slate-300" />
                                </View>
                                <View className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
                                    <Text className="text-slate-600 dark:text-slate-300 text-xs font-bold">12 уроков</Text>
                                </View>
                            </View>
                            <Text className="text-slate-900 dark:text-white text-xl font-bold mb-1">Базовый</Text>
                            <View className="flex-row items-baseline gap-1 mb-6">
                                <Text className="text-3xl font-extrabold text-slate-900 dark:text-white">350k</Text>
                                <Text className="text-slate-400 text-sm font-medium">UZS / мес</Text>
                            </View>
                            <View className="gap-3">
                                {['Доступ к общим материалам', 'Стандартная поддержка', '12 кредитов'].map((feature, i) => (
                                    <View key={i} className="flex-row items-center gap-3">
                                        <MaterialIcons name="check" size={16} className="text-slate-400" />
                                        <Text className="text-slate-600 dark:text-slate-300 text-sm">{feature}</Text>
                                    </View>
                                ))}
                            </View>
                        </TouchableOpacity>
                    </Animated.View>

                    {/* Standard Plan (Highlighted) */}
                    <Animated.View entering={FadeInUp.duration(600).delay(500)}>
                        <TouchableOpacity
                            onPress={() => setSelectedPlan('standard')}
                            className={cn(
                                "relative flex-col rounded-[2.5rem] p-8 border-2 transition-all duration-200 overflow-hidden",
                                selectedPlan === 'standard'
                                    ? "bg-slate-900 dark:bg-white border-transparent shadow-2xl shadow-primary/20 scale-[1.02]"
                                    : "bg-white dark:bg-slate-900 border-transparent shadow-lg opacity-80"
                            )}
                        >
                            {/* Gradient Background for Highlighted Card */}
                            <LinearGradient
                                colors={selectedPlan === 'standard' ? ['#1e293b', '#0f172a'] : ['#ffffff', '#ffffff']}
                                className="absolute inset-0"
                            />

                            <View className="absolute top-0 right-0 p-6">
                                <View className={cn("px-3 py-1 rounded-full", selectedPlan === 'standard' ? "bg-primary" : "bg-primary/10")}>
                                    <Text className={cn("text-[10px] font-bold uppercase tracking-wider", selectedPlan === 'standard' ? "text-slate-900" : "text-emerald-600")}>Популярный</Text>
                                </View>
                            </View>

                            <View className="flex-row justify-between items-start mb-6">
                                <View className={cn("size-14 rounded-2xl items-center justify-center", selectedPlan === 'standard' ? "bg-white/10" : "bg-primary/10")}>
                                    <MaterialIcons name="local-fire-department" size={28} className={selectedPlan === 'standard' ? "text-emerald-600" : "text-emerald-600"} />
                                </View>
                            </View>

                            <Text className={cn("text-2xl font-bold mb-1", selectedPlan === 'standard' ? "text-white dark:text-slate-900" : "text-slate-900 dark:text-white")}>Стандарт</Text>
                            <View className="flex-row items-baseline gap-1 mb-8">
                                <Text className={cn("text-4xl font-extrabold", selectedPlan === 'standard' ? "text-white dark:text-slate-900" : "text-slate-900 dark:text-white")}>650k</Text>
                                <Text className={cn("text-sm font-medium", selectedPlan === 'standard' ? "text-slate-400 dark:text-slate-500" : "text-slate-500 dark:text-slate-400")}>UZS / мес</Text>
                            </View>

                            <View className="gap-4">
                                {[
                                    { text: '24 кредита', highlight: true },
                                    { text: 'Все предметы включены', highlight: false },
                                    { text: 'Приоритетная поддержка', highlight: false }
                                ].map((item, i) => (
                                    <View key={i} className="flex-row items-center gap-3">
                                        <View className={cn("size-5 rounded-full items-center justify-center", selectedPlan === 'standard' ? "bg-primary" : "bg-primary/10")}>
                                            <MaterialIcons name="check" size={12} className={selectedPlan === 'standard' ? "text-slate-900" : "text-emerald-600"} />
                                        </View>
                                        <Text className={cn("text-sm font-medium", selectedPlan === 'standard' ? (item.highlight ? "text-white dark:text-slate-900" : "text-slate-300 dark:text-slate-500") : "text-slate-700 dark:text-slate-300")}>
                                            {item.text}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </TouchableOpacity>
                    </Animated.View>

                    {/* Premium Plan */}
                    <Animated.View entering={FadeInUp.duration(600).delay(600)}>
                        <TouchableOpacity
                            onPress={() => setSelectedPlan('premium')}
                            className={cn(
                                "relative flex-col rounded-[2rem] p-6 transition-all duration-200 border-2",
                                selectedPlan === 'premium'
                                    ? "bg-white dark:bg-slate-900 border-slate-900 dark:border-white shadow-xl shadow-slate-200/50"
                                    : "bg-white/60 dark:bg-slate-900/60 border-transparent"
                            )}
                        >
                            <View className="flex-row justify-between items-start mb-4">
                                <View className="size-12 rounded-2xl bg-purple-50 dark:bg-purple-900/20 items-center justify-center">
                                    <MaterialIcons name="diamond" size={24} className="text-purple-500" />
                                </View>
                                <View className="bg-purple-50 dark:bg-purple-900/20 px-3 py-1.5 rounded-full">
                                    <Text className="text-purple-600 dark:text-purple-300 text-xs font-bold">36 уроков</Text>
                                </View>
                            </View>
                            <Text className="text-slate-900 dark:text-white text-xl font-bold mb-1">Премиум</Text>
                            <View className="flex-row items-baseline gap-1 mb-6">
                                <Text className="text-3xl font-extrabold text-slate-900 dark:text-white">900k</Text>
                                <Text className="text-slate-400 text-sm font-medium">UZS / мес</Text>
                            </View>
                            <View className="gap-3">
                                {['Персональный куратор', 'Индивидуальный план', '36 кредитов'].map((feature, i) => (
                                    <View key={i} className="flex-row items-center gap-3">
                                        <MaterialIcons name="check" size={16} className="text-purple-400" />
                                        <Text className="text-slate-600 dark:text-slate-300 text-sm">{feature}</Text>
                                    </View>
                                ))}
                            </View>
                        </TouchableOpacity>
                    </Animated.View>
                </View>

                {/* Terms */}
                <Animated.View entering={FadeInUp.duration(600).delay(700)} className="mt-10 items-center">
                    <Text className="text-slate-400 text-xs text-center leading-relaxed">
                        Нажимая кнопку "Продолжить", вы соглашаетесь с <Text className="underline">Условиями использования</Text> и <Text className="underline">Политикой конфиденциальности</Text>.
                    </Text>
                </Animated.View>
            </ScrollView>

            <Animated.View entering={FadeInUp.duration(600).delay(800)} className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 p-4 pb-8 z-20">
                <Button
                    label="Продолжить"
                    size="lg"
                    className="w-full bg-primary h-14 rounded-2xl shadow-lg shadow-primary/20"
                    textClassName="text-slate-900 font-bold text-lg"
                    onPress={() => router.push('/(tabs)')}
                />
            </Animated.View>
        </ScreenWrapper>
    );
}
