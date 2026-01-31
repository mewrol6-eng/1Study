import { cn } from '@/lib/utils';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../../components/ui/Header';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function EmployeeDashboardScreen() {
    const router = useRouter();

    return (
        <ScreenWrapper>
            <Header title="Панель Сотрудника" />
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Admin Stats Section */}
                <View className="p-4">
                    <Text className="text-slate-900 dark:text-white text-lg font-bold mb-3 px-1">Обзор Центра</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 16, paddingBottom: 8 }}>
                        {[
                            { label: "Активные подписки", value: "1,245", trend: "+12%", icon: "subscriptions", color: "text-primary" },
                            { label: "Загрузка центров", value: "85%", trend: "+5%", icon: "domain", color: "text-blue-500", progress: true },
                            { label: "Инциденты", value: "14", trend: "+2%", icon: "warning", color: "text-orange-500" },
                        ].map((stat, i) => (
                            <View key={i} className="min-w-[200px] flex-col gap-1 rounded-xl p-5 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 shadow-sm">
                                <View className="flex-row items-center justify-between mb-2">
                                    <View className={cn("p-2 rounded-lg bg-opacity-10", stat.color.replace('text-', 'bg-'))}>
                                        <MaterialIcons name={stat.icon as any} size={20} className={stat.color} />
                                    </View>
                                    <View className={cn("px-2 py-0.5 rounded-full bg-opacity-10", stat.color.replace('text-', 'bg-'))}>
                                        <Text className={cn("text-sm font-bold", stat.color)}>{stat.trend}</Text>
                                    </View>
                                </View>
                                <Text className="text-slate-500 text-sm font-medium">{stat.label}</Text>
                                <Text className="text-2xl font-bold leading-tight text-slate-900 dark:text-white">{stat.value}</Text>
                                {stat.progress && (
                                    <View className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
                                        <View className="bg-blue-500 h-1.5 rounded-full" style={{ width: '85%' }} />
                                    </View>
                                )}
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* Actions Section */}
                <View className="px-4 mb-6">
                    <Text className="text-slate-900 dark:text-white text-lg font-bold mb-3 px-1">Действия</Text>
                    <View className="flex-row gap-3">
                        {[
                            { title: "Управление заявками", icon: "assignment", bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYnCZyCeMVwdRubm1mZ8TzvG3tGUmSsj1a5_xQ__WCFpvMST9RlrlSkgBQ_LOFai-QrixWNz6wnVn0xXA49s4CRnhPBsgvzOaRJXI-z50XlMa0S8OjbUyuUz0WgIv0mfxmasDeAE0GmDyL60NfFHpumTtyFrW7g_22mk-7r3-H87qoed_aAHIuY1OyqXnMfLCul0AFbLzrAN-kSRZ-HecPxwgWC14tPDBOqXd_-zYZEfgi2SyasKQPIDvA2sHpBGAwfcXnPZvrkCv1" },
                            { title: "Модерация предметов", icon: "verified-user", bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJZ2E5VcfKAQ9xYHrD1pCxL4ir5qQ_JzsmZfyQ4HYf09q9jxYa1A4jYn99HSfWiQmW4yqGVp8Ck5RgBnzo6tBs3tDA31spXYEFHimsu-PRgm_qruZG0FQdbqab-V2Zeamt4PsFKGKYdHamwlsN5fIinGUU9PvMTBThSeM99Uiqbq5TwXcvLYYpK--zr8PALnmu6ryJzT2cPaM6TRFzpyA98xq__zYmrtoZUjqkLOd2m-Ew-p6H6d4GTM-JgK63N7u5zujYVqvknjkE" }
                        ].map((action, i) => (
                            <TouchableOpacity key={i} className="flex-1 relative overflow-hidden rounded-xl bg-white dark:bg-card-dark shadow-sm border border-slate-200 dark:border-slate-800 aspect-[4/3]">
                                <Image source={{ uri: action.bg }} className="absolute inset-0 w-full h-full" style={{ opacity: 0.8 }} />
                                <View className="absolute inset-0 bg-black/40" />
                                <View className="absolute inset-0 flex-col justify-end p-4">
                                    <View className="mb-2 w-8 h-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                                        <MaterialIcons name={action.icon as any} size={14} color="white" />
                                    </View>
                                    <Text className="text-white text-sm font-bold leading-tight">{action.title}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View className="px-4">
                    <TouchableOpacity onPress={() => router.push('/teacher/dashboard')} className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 flex-row items-center justify-between">
                        <Text className="font-bold text-slate-900 dark:text-white">Перейти в панель учителя</Text>
                        <MaterialIcons name="arrow-forward" size={20} className="text-slate-500" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
}
