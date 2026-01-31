import { MaterialIcons } from '@expo/vector-icons';
import { cn } from 'nativewind';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function ProfileScreen() {
    return (
        <ScreenWrapper>
            <View className="bg-white dark:bg-card-dark border-b border-slate-200 dark:border-slate-800 pt-safe-top">
                <View className="flex-row items-center p-4">
                    <View className="size-10 rounded-full bg-primary/20 mr-3 overflow-hidden">
                        <Image
                            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDuz3vs2Be0dZP_ifUag_1fW7urBqIRNP1ddA9T_ihZdkKDwtsgGOgBR5Ex9YrRL3_A2m5aymcta69ULhXQKA11q_H4cyA2EJq6HPrgI3S_UlyxfTzgRPiVIkA1zRF72za-tERXGMdC0oEkDmwkAr99RgIOZ7raWd1JCTDtQCrDOz_XdSRXn0obMOnPpzw7SNGxBpc4KlwYKVgqNQDlBaNAqGcCVNFxGtym0rAMYoaoKnjtcM4JV7mgpLqdexlrl2lkx45EaPgxHZe" }}
                            className="w-full h-full bg-cover"
                        />
                    </View>
                    <View className="flex-1">
                        <Text className="text-xs font-medium text-slate-500">Администратор</Text>
                        <Text className="text-lg font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">Мария Иванова</Text>
                    </View>
                    <TouchableOpacity className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                        <MaterialIcons name="notifications" size={24} className="text-slate-900 dark:text-white" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Stats Section */}
                <View className="p-4">
                    <Text className="text-slate-900 dark:text-white text-lg font-bold mb-3 px-1">Обзор</Text>
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
                <View className="px-4">
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

                {/* Penalties List */}
                <View className="p-4">
                    <View className="flex-row items-center justify-between mb-3 px-1">
                        <Text className="text-slate-900 dark:text-white text-lg font-bold">Штрафы за пропуски</Text>
                        <TouchableOpacity><Text className="text-primary text-sm font-medium">Все</Text></TouchableOpacity>
                    </View>
                    <View className="gap-3">
                        {[
                            { name: "Алексей Смирнов", info: "Математика • 2 часа назад", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBbw8vdaNg_zSc-lPs_ejmABLPXC1_XrtzP3NMDzwRYb987l1bd9s_7qXCcw7iO8gh3Zzo1HArmMWosbJ3XXiQlIg9EKIeeqaTrTQqdmKSAp4EIDHI-TxXCcyGiMhklGfKeNOHK2n346gcx-Zhs1Y-xEjQwYoOs-29S5gzeDYGqTQF9-sSXz850Zfo_bY6QkadLCqdIK6wLI1-nGfM9ZIEL6tZsGmoKt0NZXScnfAodZ-htfgNuiaEEVkilzvd6xGwhZuiGnGFS9s7" },
                            { name: "Елена Козлова", info: "Физика • Вчера, 14:30", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2DWVBWqIFSy41ZaFNICMAkN9AwI8Q4OUlAXr0Ib1JOJK8UipsQmFJETXg8MiaUfDQlvd3c_yXQL0n2ukl9VV6dFqlfk1sutU1PNchB_qj4qlsN9knqcZEc8o3UFYAqhztzno03ybtWqMYwaejU4_AkrorLe7ijvYUIARRbFuHznqPGEYdhT_uUWNcozKDb-BSaKJ5F6Kz0z49sACIggQtdX82c95WRBMyiGfBUnyLVEs8NSPzLVqHpkCPKtUaq1AEySsXpDI-Xq23" },
                            { name: "Дмитрий Волков", info: "Английский • 12 Окт", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoKrbIEJeksEB1eeRaPCRHMPUGJnjqNSS2IoSxwlyKF3x31x179VCjCAAIJaQ1rUTxJc5IAhvLl3P0dsQ40ZCu6LT386I9D30G3pgbiGBgOdvnAHtlbqUDLD7-dvBO0GWszOpLJe_fcJqhxGyGY1-M3VJUAXeki_xiXmqpW8XLUlKRfLLpv40LsmOZX498vKPpwJ1ZMePs1wlF7m8Tntg1gcqw-G6p58coIe548ZThJoT0AaUpk8_T_KDoaVdGK02dBpKTvcxOcOZg" },
                        ].map((student, i) => (
                            <View key={i} className="flex-row items-center gap-4 rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm border border-slate-200 dark:border-slate-800">
                                <View className="relative">
                                    <Image source={{ uri: student.img }} className="size-12 rounded-full" />
                                    <View className="absolute -bottom-1 -right-1 size-5 items-center justify-center rounded-full bg-red-50 border border-white dark:border-card-dark">
                                        <MaterialIcons name="block" size={12} color="#dc2626" />
                                    </View>
                                </View>
                                <View className="flex-1">
                                    <Text className="text-slate-900 dark:text-white text-sm font-bold truncate">{student.name}</Text>
                                    <Text className="text-slate-500 text-xs truncate">{student.info}</Text>
                                </View>
                                <TouchableOpacity className="items-center justify-center rounded-lg bg-primary/10 px-4 py-2 hover:bg-primary">
                                    <Text className="text-sm font-medium text-primary">Оштрафовать</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
}
