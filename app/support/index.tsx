import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { LayoutAnimation, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function SupportScreen() {
    const router = useRouter();

    return (
        <ScreenWrapper className="bg-slate-50 dark:bg-slate-950">
            <View className="absolute top-0 left-0 right-0 h-[40%] overflow-hidden">
                <LinearGradient
                    colors={['rgba(16, 185, 129, 0.08)', 'rgba(255, 255, 255, 0)']} // Emerald tint
                    className="absolute inset-0"
                />
            </View>

            <Animated.View entering={FadeInDown.duration(600)} className="pt-safe-top px-6 py-4 flex-row items-center gap-4">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="size-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700"
                >
                    <MaterialIcons name="arrow-back" size={20} className="text-slate-900 dark:text-white" />
                </TouchableOpacity>
                <Text className="text-2xl font-bold text-slate-900 dark:text-white">Помощь</Text>
            </Animated.View>

            <ScrollView className="flex-1 px-6 pt-4" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                <Animated.View entering={FadeInUp.duration(600).delay(100)} className="mb-8">
                    <Text className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Как мы можем <Text className="text-emerald-600">помочь</Text>?</Text>
                    <Text className="text-slate-600">Найдите ответ ниже или напишите нам.</Text>
                </Animated.View>

                <Animated.View entering={FadeInUp.duration(600).delay(200)} className="relative mb-8 shadow-sm">
                    <TextInput
                        className="w-full h-14 bg-white dark:bg-slate-900 rounded-[1.25rem] pl-12 pr-4 text-base font-medium text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                        placeholder="Поиск вопроса..."
                        placeholderTextColor="#9ca3af"
                    />
                    <MaterialIcons name="search" size={24} className="absolute left-4 top-4 text-slate-500" />
                </Animated.View>

                {/* FAQ */}
                <View className="gap-4">
                    <Text className="text-lg font-bold text-slate-900 dark:text-white mb-2">Частые вопросы</Text>
                    {[
                        { id: 1, q: 'Как изменить тарифный план?', a: 'Вы можете изменить тарифный план в разделе "Профиль" -> "Подписка". Новый план вступит в силу с начала следующего расчетного периода.' },
                        { id: 2, q: 'Проблемы с оплатой', a: 'Если у вас возникли проблемы с оплатой, проверьте срок действия вашей карты и лимиты на интернет-платежи. При повторении ошибки обратитесь в поддержку.' },
                        { id: 3, q: 'Как получить сертификат?', a: 'Сертификат выдается автоматически после успешного завершения всех модулей курса и сдачи финального экзамена с результатом не менее 80%.' },
                        { id: 4, q: 'Связаться с куратором', a: 'Вы можете задать вопросы куратору через чат на странице курса или записаться на индивидуальную консультацию в разделе "Менторство".' }
                    ].map((item, i) => (
                        <FAQItem key={i} item={item} index={i} />
                    ))}
                </View>

                <Animated.View entering={FadeInUp.duration(600).delay(700)} className="mt-8 p-6 bg-emerald-600 rounded-[2rem] items-center">
                    <MaterialIcons name="support-agent" size={40} className="text-white mb-3" />
                    <Text className="text-white font-bold text-lg mb-1">Нужна живая помощь?</Text>
                    <Text className="text-emerald-100 text-center text-sm mb-4">Наши операторы онлайн 24/7</Text>
                    <TouchableOpacity onPress={() => router.push('/support/chat')} className="bg-white px-6 py-3 rounded-xl shadow-lg">
                        <Text className="text-emerald-700 font-bold">Написать в чат</Text>
                    </TouchableOpacity>
                </Animated.View>
            </ScrollView>
        </ScreenWrapper>
    );
}

function FAQItem({ item, index }: { item: { id: number, q: string, a: string }, index: number }) {
    const [expanded, setExpanded] = useState(false);

    const toggle = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    };

    return (
        <Animated.View entering={FadeInUp.duration(600).delay(300 + (index * 100))}>
            <TouchableOpacity
                onPress={toggle}
                className="bg-white dark:bg-card-dark p-5 rounded-[1.5rem] shadow-sm border border-slate-100 dark:border-slate-800 active:scale-[0.99] transition-all"
            >
                <View className="flex-row items-center justify-between">
                    <Text className="font-bold text-slate-700 dark:text-slate-200 flex-1 mr-4">{item.q}</Text>
                    <MaterialIcons
                        name={expanded ? "keyboard-arrow-up" : "chevron-right"}
                        size={20}
                        className="text-slate-400"
                    />
                </View>
                {expanded && (
                    <View className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                        <Text className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                            {item.a}
                        </Text>
                    </View>
                )}
            </TouchableOpacity>
        </Animated.View>
    );
}
