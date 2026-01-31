import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { cn } from '@/lib/utils';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/ui/Button';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function ClassDetailsScreen() {
    const router = useRouter();

    return (
        <ScreenWrapper>
            <ScrollView className="flex-1 pb-32">
                <View className="relative w-full h-[380px]">
                    <View className="absolute top-0 left-0 w-full z-20 p-4 pt-14 flex-row items-center justify-between">
                        <TouchableOpacity
                            onPress={() => router.back()}
                            className="flex items-center justify-center size-11 rounded-full bg-white/30 backdrop-blur-md border border-white/20"
                        >
                            <Ionicons name="chevron-back" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity className="flex items-center justify-center size-11 rounded-full bg-white/30 backdrop-blur-md border border-white/20">
                            <Ionicons name="share-outline" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <Image
                        source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBEtn4BTUDIHFy7r37LJZF8OrwWevK1XBsaUIZvYzePeBMaJpdbv1e5WpnQKnlR3PeYNJSnb2PF6ZeYbrL166PysHGFyaxLqaTf6WwjQokg6ahJn37o0R_XtM88kl72POQ49rv6cp2nXUzmRcxg_9PdcWMa4QRnmHNen3AcdcCWlUuLrTW46lMuUXp9cjBQnT82TMFsfsW09zGc9C49l9HqP9CGDuaL9TlyfndPvSo9lJb2kdupjeY1-z3wgZmhqGl0-GPHJFnIjv2" }}
                        className="w-full h-full bg-cover"
                    />
                    <View className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/5" />
                </View>

                <View className="relative z-10 -mt-12 bg-white dark:bg-background-dark rounded-t-[2.5rem] shadow-sm px-6 pt-10 pb-8 flex-1 min-h-[500px]">
                    <View className="mb-8">
                        <View className="flex-row items-center justify-between mb-3">
                            <View className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
                                <Text className="text-slate-600 dark:text-slate-300 text-[11px] font-bold uppercase tracking-wider">Шахматы</Text>
                            </View>
                            <View className="flex-row items-center gap-1 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-lg border border-amber-100/50 dark:border-amber-900/30">
                                <MaterialIcons name="star" size={16} className="text-amber-400" />
                                <Text className="text-xs font-bold text-amber-900 dark:text-amber-400">4.9</Text>
                                <Text className="text-[10px] text-amber-700/60 dark:text-amber-500/60 font-medium">(124)</Text>
                            </View>
                        </View>
                        <Text className="text-[32px] font-bold text-slate-900 dark:text-white leading-[1.1] mb-2 tracking-tight">Шахматная стратегия</Text>
                    </View>

                    <View className="flex-row gap-3 mb-8">
                        {[
                            { icon: "school", label: "Уровень", value: "Средний", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20", border: "border-blue-100 dark:border-blue-800" },
                            { icon: "translate", label: "Язык", value: "O'zbek\nLotin", color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20", border: "border-purple-100 dark:border-purple-800" },
                            { icon: "schedule", label: "Время", value: "60 мин", color: "text-green-600", bg: "bg-green-50 dark:bg-green-900/20", border: "border-green-100 dark:border-green-800" },
                        ].map((item, i) => (
                            <View key={i} className={cn("flex-1 items-center justify-center p-3 rounded-2xl border", item.bg, item.border)}>
                                <MaterialIcons name={item.icon as any} size={24} className={item.color} />
                                <Text className={cn("text-[10px] uppercase font-semibold tracking-wide mt-1 opacity-80", item.color)}>{item.label}</Text>
                                <Text className="text-sm font-bold text-slate-700 dark:text-slate-200 text-center leading-tight mt-0.5">{item.value}</Text>
                            </View>
                        ))}
                    </View>

                    <TouchableOpacity className="mb-10 p-4 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex-row items-center gap-4">
                        <View className="relative shrink-0">
                            <Image
                                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1X-ZVp15WScFFFBXDhsOy-meu74UzHEZdoo2VHbme8LLuDdch-bknFihGP38nqpJxUvUgfLuJ-eYX0LolsoK2W2ZGKJN6b9CXm4olXAYZyZv-BsfQhZ9cBIWdPHcLkh7m8ZMrkkSkkGV8pTuKNQFGuheRaYmORm_zpnPchHGJZo48Td5EVElCJidnYbDkJyeiPpOBBOENQhlOJxaj06p40Bt05S-6okt5QOFjhCwkwEYTpR0gNAGsoLYKuxPo7t051h6yiW25epgd" }}
                                className="size-16 rounded-2xl bg-cover"
                            />
                            <View className="absolute -bottom-2 -right-2 bg-slate-900 text-white px-2 py-0.5 rounded-full border-[3px] border-white dark:border-slate-800">
                                <Text className="text-[10px] font-bold text-white">GM</Text>
                            </View>
                        </View>
                        <View className="flex-1 min-w-0">
                            <Text className="font-bold text-slate-900 dark:text-white text-lg leading-tight">Тренер Алишер</Text>
                            <Text className="text-slate-500 text-sm mt-0.5 font-medium">Гроссмейстер</Text>
                        </View>
                        <View className="size-10 rounded-full bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                            <MaterialIcons name="arrow-forward" size={20} className="text-slate-400" />
                        </View>
                    </TouchableOpacity>

                    <View className="mb-8">
                        <Text className="font-bold text-xl text-slate-900 dark:text-white mb-3">О занятии</Text>
                        <Text className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                            На этом уроке мы разберем ключевые принципы шахматной стратегии. Занятие идеально подходит для игроков среднего уровня, желающих углубить понимание позиционной игры, тактических приемов и стратегического планирования в миттельшпиле.
                        </Text>
                        <TouchableOpacity className="mt-3 flex-row items-center gap-1">
                            <Text className="text-brand-teal font-semibold text-sm">Читать далее</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="mb-10">
                        <Text className="font-bold text-xl text-slate-900 dark:text-white mb-4">Навыки</Text>
                        <View className="gap-3">
                            {['Оценка позиции на доске', 'Контроль центра и развитие фигур', 'Построение пешечных структур'].map((skill, i) => (
                                <View key={i} className="flex-row items-start gap-3">
                                    <View className="mt-0.5 p-1 rounded-full bg-teal-50 dark:bg-teal-900/20">
                                        <MaterialIcons name="check" size={16} className="text-brand-teal" />
                                    </View>
                                    <Text className="text-slate-700 dark:text-slate-300 text-[15px] pt-0.5">{skill}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    <View className="mb-4 p-5 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-100/50 dark:border-red-900/20 flex-row gap-4 items-start">
                        <View className="size-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0">
                            <MaterialIcons name="priority-high" size={18} className="text-red-600 dark:text-red-400" />
                        </View>
                        <View className="flex-1">
                            <Text className="font-bold text-slate-900 dark:text-white text-sm mb-1">Правила отмены</Text>
                            <Text className="text-slate-500 dark:text-slate-400 text-xs leading-5">
                                При отмене менее чем за 2 часа до начала занятия кредиты не возвращаются.
                            </Text>
                        </View>
                    </View>

                    <View className="h-24" />
                </View>
            </ScrollView>

            <View className="absolute bottom-0 left-0 w-full z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 pb-8 pt-4 px-6">
                <Button
                    label="Забронировать за 3 кредита"
                    icon={<MaterialIcons name="bolt" size={20} color="white" />}
                    className="w-full bg-gradient-to-r from-teal-400 to-emerald-400 rounded-2xl h-14"
                    textClassName="text-white font-bold"
                />
            </View>
        </ScreenWrapper>
    );
}
