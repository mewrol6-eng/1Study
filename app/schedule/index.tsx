import { cn } from '@/lib/utils'; // Assuming this exists, based on previous files
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function ScheduleScreen() {
    const router = useRouter();

    const schedule = [
        {
            day: 'Сегодня, 31 Янв', events: [
                { time: '14:00', title: 'Основы тригонометрии', type: 'Лекция', duration: '45 мин', color: 'bg-blue-600' },
                { time: '16:30', title: 'Python Практика', type: 'Семинар', duration: '90 мин', color: 'bg-emerald-600' }
            ]
        },
        {
            day: 'Завтра, 1 Фев', events: [
                { time: '10:00', title: 'UX Исследования', type: 'Воркшоп', duration: '120 мин', color: 'bg-purple-600' }
            ]
        },
        { day: 'Среда, 2 Фев', events: [] }
    ];

    return (
        <ScreenWrapper className="bg-slate-50 dark:bg-slate-950">
            <View className="absolute top-0 left-0 right-0 h-[40%] overflow-hidden">
                <LinearGradient
                    colors={['rgba(244, 63, 94, 0.05)', 'rgba(255, 255, 255, 0)']} // Red/Pink tint
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
                <Text className="text-2xl font-bold text-slate-900 dark:text-white">Расписание</Text>
            </Animated.View>

            <ScrollView className="flex-1 px-6 pt-4" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                {schedule.map((day, i) => (
                    <Animated.View key={i} entering={FadeInUp.duration(600).delay(i * 100)} className="mb-8">
                        <Text className="text-sm font-bold text-slate-600 uppercase tracking-widest mb-4">{day.day}</Text>

                        {day.events.length > 0 ? (
                            <View className="gap-4">
                                {day.events.map((event, j) => (
                                    <TouchableOpacity key={j} onPress={() => router.push('/learning/lesson/1')} className="flex-row gap-4 bg-white dark:bg-card-dark p-4 rounded-[1.5rem] shadow-sm border border-slate-100 dark:border-slate-800 active:scale-[0.98] transition-all">
                                        <View className="items-center justify-center w-16 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                                            <Text className="text-slate-900 dark:text-white font-bold">{event.time}</Text>
                                        </View>
                                        <View className="flex-1 justify-center">
                                            <View className="flex-row items-center gap-2 mb-1">
                                                <View className={cn("size-2 rounded-full", event.color)} />
                                                <Text className="text-[10px] font-bold uppercase text-slate-500">{event.type}</Text>
                                            </View>
                                            <Text className="text-base font-bold text-slate-900 dark:text-white leading-tight">{event.title}</Text>
                                            <Text className="text-xs text-slate-500 mt-1">{event.duration}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ) : (
                            <View className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-[1.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800 items-center">
                                <Text className="text-slate-400 font-medium">Нет занятий</Text>
                            </View>
                        )}
                    </Animated.View>
                ))}
            </ScrollView>
        </ScreenWrapper>
    );
}
