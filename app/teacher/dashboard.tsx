import { MaterialIcons } from '@expo/vector-icons';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../../components/ui/Header';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function TeacherDashboardScreen() {
    return (
        <ScreenWrapper>
            <Header title="Панель Учителя" />
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>

                {/* Penalties List */}
                <View className="p-4">
                    <View className="flex-row items-center justify-between mb-3 px-1">
                        <Text className="text-slate-900 dark:text-white text-lg font-bold">Управление студентами</Text>
                    </View>
                    <View className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl mb-6 border border-yellow-100 dark:border-yellow-900/40">
                        <Text className="text-sm font-bold text-yellow-800 dark:text-yellow-400 mb-1">Внимание</Text>
                        <Text className="text-xs text-yellow-700 dark:text-yellow-500">
                            У 3 студентов низкая посещаемость на этой неделе.
                        </Text>
                    </View>

                    <View className="flex-row items-center justify-between mb-3 px-1">
                        <Text className="text-slate-900 dark:text-white text-base font-bold">Штрафы за пропуски</Text>
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
