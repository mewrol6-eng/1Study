import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/ui/Button';
import { Header } from '../../components/ui/Header';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function SubscriptionPlansScreen() {
    const router = useRouter();

    return (
        <ScreenWrapper>
            <Header title="Выбор тарифа" />

            <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 100 }}>
                <View className="items-center mb-8">
                    <Text className="text-2xl font-bold text-slate-900 dark:text-white text-center">
                        Выберите план обучения
                    </Text>
                    <Text className="text-slate-500 mt-2 text-sm text-center">
                        Инвестируйте в свои знания эффективно
                    </Text>
                </View>

                <View className="gap-6">
                    {/* Basic Plan */}
                    <TouchableOpacity className="relative flex-col rounded-2xl border border-slate-200 bg-white dark:bg-card-dark p-6 shadow-sm active:scale-[0.98]">
                        <View className="flex-row justify-between items-start mb-4">
                            <View>
                                <Text className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Базовый</Text>
                                <Text className="text-slate-900 dark:text-white text-xl font-bold">Обычная</Text>
                            </View>
                            <View className="bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                                <Text className="text-slate-600 dark:text-slate-300 text-xs font-semibold">12 уроков</Text>
                            </View>
                        </View>
                        <View className="flex-row items-baseline gap-1 mb-4">
                            <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">350,000 UZS</Text>
                            <Text className="text-slate-400 text-sm">/мес</Text>
                        </View>
                        <View className="flex-row items-center gap-2 mb-6">
                            <MaterialIcons name="storage" size={20} className="text-slate-400" />
                            <Text className="text-slate-600 dark:text-slate-300 text-sm">
                                Эквивалент: <Text className="font-bold">12 кредитов</Text>
                            </Text>
                        </View>
                        <Button variant="outline" label="Выбрать" onPress={() => router.push('/(tabs)')} />
                    </TouchableOpacity>

                    {/* Standard Plan */}
                    <TouchableOpacity className="relative flex-col rounded-3xl border-2 border-primary bg-white dark:bg-card-dark p-6 shadow-md ring-4 ring-primary/5 active:scale-[0.98]">
                        <View className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary px-4 py-1.5 rounded-full shadow-md z-10">
                            <Text className="text-white text-[11px] font-bold uppercase tracking-wider">Популярный выбор</Text>
                        </View>
                        <View className="flex-row justify-between items-start mb-4 mt-2">
                            <View>
                                <Text className="text-primary text-[10px] font-bold uppercase tracking-widest">Оптимальный</Text>
                                <Text className="text-slate-900 dark:text-white text-xl font-bold">Стандартная</Text>
                            </View>
                            <View className="bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                                <Text className="text-primary text-xs font-semibold">24 урока</Text>
                            </View>
                        </View>
                        <View className="flex-row items-baseline gap-1 mb-4">
                            <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">650,000 UZS</Text>
                            <Text className="text-slate-400 text-sm">/мес</Text>
                        </View>
                        <View className="gap-2 mb-6">
                            <View className="flex-row items-center gap-2">
                                <MaterialIcons name="storage" size={20} className="text-primary" />
                                <Text className="text-slate-600 dark:text-slate-300 text-sm">
                                    Эквивалент: <Text className="font-bold">24 кредита</Text>
                                </Text>
                            </View>
                            <View className="flex-row items-center gap-2">
                                <MaterialIcons name="star" size={20} className="text-primary" />
                                <Text className="text-slate-600 dark:text-slate-300 text-sm">Все предметы включены</Text>
                            </View>
                        </View>
                        <Button variant="primary" label="Выбрать" onPress={() => router.push('/(tabs)')} />
                    </TouchableOpacity>

                    {/* Premium Plan */}
                    <TouchableOpacity className="relative flex-col rounded-2xl border border-slate-200 bg-slate-900 p-6 shadow-sm active:scale-[0.98] overflow-hidden">
                        {/* Blur effect simulation */}
                        <View className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />

                        <View className="flex-row justify-between items-start mb-4 relative z-10">
                            <View>
                                <Text className="text-purple-400 text-[10px] font-bold uppercase tracking-widest">Премиум</Text>
                                <Text className="text-white text-xl font-bold">Продвинутая</Text>
                            </View>
                            <View className="bg-purple-500/20 px-3 py-1 rounded-full">
                                <Text className="text-purple-300 text-xs font-semibold">36 уроков</Text>
                            </View>
                        </View>
                        <View className="flex-row items-baseline gap-1 mb-4 relative z-10">
                            <Text className="text-2xl font-extrabold text-white">900,000 UZS</Text>
                            <Text className="text-slate-400 text-sm">/мес</Text>
                        </View>
                        <View className="gap-2 mb-6 relative z-10">
                            <View className="flex-row items-center gap-2">
                                <MaterialIcons name="storage" size={20} className="text-purple-400" />
                                <Text className="text-slate-300 text-sm">
                                    Эквивалент: <Text className="font-bold text-white">36 кредитов</Text>
                                </Text>
                            </View>
                            <View className="flex-row items-center gap-2">
                                <MaterialIcons name="support-agent" size={20} className="text-purple-400" />
                                <Text className="text-slate-300 text-sm">Персональный куратор 24/7</Text>
                            </View>
                        </View>
                        <Button
                            label="Выбрать"
                            className="bg-purple-600 shadow-purple-500/30"
                            textClassName="text-white"
                            onPress={() => router.push('/(tabs)')}
                        />
                    </TouchableOpacity>
                </View>

                <View className="mt-12 mb-8 gap-4 px-6 items-center">
                    <Text className="text-slate-400 text-xs text-center">
                        Подписка продлевается автоматически каждый месяц. Вы можете отменить её в любое время в настройках профиля.
                    </Text>
                    <View className="flex-row gap-6">
                        <Text className="text-[11px] font-semibold text-slate-500">Условия</Text>
                        <Text className="text-[11px] font-semibold text-slate-500">Конфиденциальность</Text>
                        <Text className="text-[11px] font-semibold text-slate-500">Поддержка</Text>
                    </View>
                </View>
            </ScrollView>

            <View className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 p-4 pb-8 flex-row items-center justify-between">
                <View>
                    <Text className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Лучшая цена</Text>
                    <Text className="text-slate-900 dark:text-white font-bold">от 25,000 UZS / урок</Text>
                </View>
                <Button variant="secondary" label="Восстановить" size="sm" className="rounded-full" />
            </View>
        </ScreenWrapper>
    );
}
