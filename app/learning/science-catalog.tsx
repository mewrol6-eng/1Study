import { MaterialIcons } from '@expo/vector-icons';
import { cn } from '@/lib/utils';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function ScienceCatalogScreen() {
    return (
        <ScreenWrapper>
            <View className="bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 pt-safe-top">
                <View className="flex-row items-center justify-between px-4 py-4">
                    <Text className="text-primary-dark dark:text-white text-lg font-semibold tracking-tight uppercase text-center w-full">
                        Каталог наук
                    </Text>
                </View>
                <View className="px-4 pb-3">
                    <View className="relative">
                        <TextInput
                            className="w-full border border-slate-200 dark:border-slate-700 rounded-none px-3 py-2 text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary-dark"
                            placeholder="Поиск дисциплины..."
                            placeholderTextColor="#9ca3af"
                        />
                        <MaterialIcons name="search" size={20} className="absolute right-3 top-2 text-slate-500" />
                    </View>
                </View>
            </View>

            <View className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark">
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8, gap: 24 }}>
                    <TouchableOpacity className="border-b-2 border-primary-dark pb-1">
                        <Text className="text-[10px] font-bold uppercase tracking-widest text-primary-dark dark:text-primary">Все дисциплины</Text>
                    </TouchableOpacity>
                    {['Точные', 'Языковые', 'Стратегия', 'Естествознание'].map((cat, i) => (
                        <TouchableOpacity key={i} className="pb-1">
                            <Text className="text-[10px] font-medium uppercase tracking-widest text-slate-500">{cat}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <ScrollView className="flex-1 px-4 mt-6" contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Exact Sciences */}
                <View className="mb-10">
                    <View className="flex-row items-center justify-between mb-4 border-l-4 border-academic-blue pl-3">
                        <Text className="text-xs font-bold uppercase tracking-widest text-primary-dark dark:text-white">Точные науки</Text>
                        <Text className="text-[10px] text-slate-500 uppercase font-medium">01 // Math & Phys</Text>
                    </View>
                    <View className="flex-row gap-4">
                        {[
                            { code: "104", title: "Основы тригонометрии", sub: "Чертеж & Анализ", icon: "architecture", color: "text-academic-blue" },
                            { code: "208", title: "Квантовая динамика", sub: "Схемотехника", icon: "settings-input-component", color: "text-academic-orange" }
                        ].map((item, i) => (
                            <View key={i} className="flex-1 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800">
                                <View className="h-32 bg-slate-50 dark:bg-slate-900 relative flex items-center justify-center overflow-hidden">
                                    {/* Placeholder for blueprint grid */}
                                    <MaterialIcons name={item.icon as any} size={40} className={item.color} />
                                </View>
                                <View className="p-3">
                                    <Text className={cn("text-[9px] font-bold uppercase mb-1", item.color)}>{`Курс ${item.code}`}</Text>
                                    <Text className="text-[11px] font-bold leading-tight mb-2 uppercase min-h-[2.5rem] text-slate-900 dark:text-white">{item.title}</Text>
                                    <View className="flex-row items-center gap-1 border-t border-slate-100 dark:border-slate-800 pt-2 text-slate-500">
                                        <MaterialIcons name="category" size={14} className="text-slate-500" />
                                        <Text className="text-[8px] uppercase tracking-tighter text-slate-500">{item.sub}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Languages */}
                <View className="mb-10">
                    <View className="flex-row items-center justify-between mb-4 border-l-4 border-academic-green pl-3">
                        <Text className="text-xs font-bold uppercase tracking-widest text-primary-dark dark:text-white">Языки и Литература</Text>
                        <Text className="text-[10px] text-slate-500 uppercase font-medium">02 // Linguistic</Text>
                    </View>
                    <View className="flex-row gap-4">
                        {[
                            { code: "312", title: "Фонетический анализ", sub: "Аудио-схемы", icon: "record-voice-over", color: "text-academic-green" },
                            { code: "505", title: "Теория шахматных окончаний", sub: "Логика ходов", icon: "extension", color: "text-primary-dark dark:text-white" }
                        ].map((item, i) => (
                            <View key={i} className="flex-1 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800">
                                <View className="h-32 bg-slate-50 dark:bg-slate-900 relative flex items-center justify-center overflow-hidden">
                                    <MaterialIcons name={item.icon as any} size={40} className={item.color} />
                                </View>
                                <View className="p-3">
                                    <Text className={cn("text-[9px] font-bold uppercase mb-1", item.color)}>{`Курс ${item.code}`}</Text>
                                    <Text className="text-[11px] font-bold leading-tight mb-2 uppercase min-h-[2.5rem] text-slate-900 dark:text-white">{item.title}</Text>
                                    <View className="flex-row items-center gap-1 border-t border-slate-100 dark:border-slate-800 pt-2 text-slate-500">
                                        <MaterialIcons name="category" size={14} className="text-slate-500" />
                                        <Text className="text-[8px] uppercase tracking-tighter text-slate-500">{item.sub}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
}
