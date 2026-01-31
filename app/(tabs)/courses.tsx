import { MaterialIcons } from '@expo/vector-icons';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function CoursesScreen() {
    return (
        <ScreenWrapper>
            <View className="bg-white dark:bg-card-dark border-b border-slate-200 dark:border-slate-800 pt-safe-top">
                <View className="flex-row items-center justify-between px-4 py-4">
                    <Text className="text-primary-dark dark:text-white text-lg font-semibold tracking-tight uppercase text-center w-full">
                        Каталог курсов
                    </Text>
                </View>
                <View className="px-4 pb-3">
                    <View className="relative">
                        <TextInput
                            className="w-full border border-slate-200 dark:border-slate-700 rounded-none px-3 py-2 text-sm text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900 focus:border-primary-dark"
                            placeholder="Поиск дисциплины..."
                            placeholderTextColor="#9ca3af"
                        />
                        <MaterialIcons name="search" size={20} className="absolute right-3 top-2 text-slate-500" />
                    </View>
                </View>
            </View>

            <View className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8, gap: 24 }}>
                    <TouchableOpacity className="border-b-2 border-primary-dark pb-1">
                        <Text className="text-xs font-bold uppercase tracking-widest text-primary-dark dark:text-primary">Все дисциплины</Text>
                    </TouchableOpacity>
                    {['Точные науки', 'Гуманитарные', 'Естествознание'].map((cat, i) => (
                        <TouchableOpacity key={i} className="pb-1">
                            <Text className="text-xs font-medium uppercase tracking-widest text-slate-500">{cat}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <ScrollView className="flex-1 px-4 mt-4" contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Exact Sciences Section */}
                <View className="mb-8">
                    <View className="flex-row items-center gap-2 mb-4 border-l-4 border-primary-dark pl-3">
                        <MaterialIcons name="architecture" size={20} className="text-primary-dark dark:text-primary" />
                        <Text className="text-sm font-bold uppercase tracking-widest text-primary-dark dark:text-white">Точные науки</Text>
                    </View>
                    <View className="flex-row gap-4">
                        {/* Course Card 1 */}
                        <View className="flex-1 border border-slate-200 dark:border-slate-800 bg-white dark:bg-card-dark">
                            <View className="h-32 bg-slate-100 relative overflow-hidden">
                                <Image
                                    source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-UwqKfObVCpuE0oUgdf_0_fagDSksFyWdkGDH1A3C6cNONkvc_rQTFdGoy-UYfD2ZyiSyFXpkWB669V31v8tiiwt1tC4m7WGq6PtU8MaU2gW_3eU_n7Z2c4HOBYboKoucOXgZGlyNt7F7sV3VFKS4WM9cfKw-l-BycAgGxeDBsiUsdJWFdv9qcwAUFj-KNXDEikMF2WztrdKeRHTr7qCWkUXcqbRAjQznr7rAAjhCbBEVzbk-ObZowUg0PTRY2JHohSy1bZxXQFro" }}
                                    className="w-full h-full bg-cover grayscale opacity-50 contrast-125"
                                />
                                <View className="absolute inset-0 border-[0.5px] border-black/5" />
                            </View>
                            <View className="p-3">
                                <Text className="text-[10px] text-slate-500 font-medium uppercase mb-1">Курс 104</Text>
                                <Text className="text-xs font-bold leading-tight mb-2 uppercase min-h-[2rem] text-slate-900 dark:text-white">Основы тригонометрии</Text>
                                <View className="flex-row items-center gap-1 border-t border-slate-100 dark:border-slate-800 pt-2 mt-2">
                                    <MaterialIcons name="account-tree" size={14} className="text-slate-500" />
                                    <Text className="text-[9px] uppercase tracking-tighter text-slate-500">Теоретический блок</Text>
                                </View>
                            </View>
                        </View>

                        {/* Course Card 2 */}
                        <View className="flex-1 border border-slate-200 dark:border-slate-800 bg-white dark:bg-card-dark">
                            <View className="h-32 bg-slate-100 relative overflow-hidden">
                                <Image
                                    source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuC134ZjcbDAU5laV_be-o9x66lvPrk2KmkuFvJJDJbfzNX9-kIz2hpnNSwRvzlJS4KWdSq2OmDwbvs08dD634HbyUFdVrKDRBQ719tATZJGahi6-UHGsabxKq-RH_eexECamlPoXrNPF4Ar_qNvIWc5mLs5uUKeQHoYut5PtRP3C2VPgxM9y4pCaUkT7QqkUpdUt4fgEtJV94k-PU4rULp88ljUT4mMxbttPVD2a4gUyK2LDqenk7X9-dbLRol42IsNyMtF3FxwgQOE" }}
                                    className="w-full h-full bg-cover grayscale opacity-50 contrast-125"
                                />
                                <View className="absolute inset-0 border-[0.5px] border-black/5" />
                            </View>
                            <View className="p-3">
                                <Text className="text-[10px] text-slate-500 font-medium uppercase mb-1">Курс 208</Text>
                                <Text className="text-xs font-bold leading-tight mb-2 uppercase min-h-[2rem] text-slate-900 dark:text-white">Квантовая логика</Text>
                                <View className="flex-row items-center gap-1 border-t border-slate-100 dark:border-slate-800 pt-2 mt-2">
                                    <MaterialIcons name="schema" size={14} className="text-slate-500" />
                                    <Text className="text-[9px] uppercase tracking-tighter text-slate-500">Практикум</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Applied Sciences Section */}
                <View className="mb-8">
                    <View className="flex-row items-center gap-2 mb-4 border-l-4 border-primary-dark pl-3">
                        <MaterialIcons name="terminal" size={20} className="text-primary-dark dark:text-primary" />
                        <Text className="text-sm font-bold uppercase tracking-widest text-primary-dark dark:text-white">Прикладные дисциплины</Text>
                    </View>
                    <View className="flex-row gap-4">
                        {/* Course Card 3 */}
                        <View className="flex-1 border border-slate-200 dark:border-slate-800 bg-white dark:bg-card-dark">
                            <View className="h-32 bg-slate-100 relative overflow-hidden">
                                <Image
                                    source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-mFyqBzWOgf3fvrQoAAVG5WBxd-c2mvF18-esBW2-3KpGxl_7QNkabZe-UQO7kjLkk1thY0DKxwgVzLPrkzNd4uizGbN369Rft1W2XQADRqZBn7lkMPDSCx5CrDj-5DF14sKxY-AfcaZHHzMs11EV72jKGPDyUtjVGPAE1nUJ40n_IcEpZNamEzdB1PCLB4UwlPZVt-Iy5JS3QLM_-AcIZVQUjviY6NDEzXNoMPsR-jETOmo_N3eC8X8HLjiRwmM8XI-gzR4kXx0Y" }}
                                    className="w-full h-full bg-cover grayscale opacity-50"
                                />
                            </View>
                            <View className="p-3">
                                <Text className="text-[10px] text-slate-500 font-medium uppercase mb-1">Курс 312</Text>
                                <Text className="text-xs font-bold leading-tight mb-2 uppercase min-h-[2rem] text-slate-900 dark:text-white">Визуальная семиотика</Text>
                                <View className="flex-row items-center gap-1 border-t border-slate-100 dark:border-slate-800 pt-2 mt-2">
                                    <MaterialIcons name="grid-view" size={14} className="text-slate-500" />
                                    <Text className="text-[9px] uppercase tracking-tighter text-slate-500">Спецкурс</Text>
                                </View>
                            </View>
                        </View>

                        {/* Course Card 4 */}
                        <View className="flex-1 border border-slate-200 dark:border-slate-800 bg-white dark:bg-card-dark">
                            <View className="h-32 bg-slate-100 flex items-center justify-center p-4">
                                <MaterialIcons name="biotech" size={40} className="text-slate-300" />
                            </View>
                            <View className="p-3">
                                <Text className="text-[10px] text-slate-500 font-medium uppercase mb-1">Курс 401</Text>
                                <Text className="text-xs font-bold leading-tight mb-2 uppercase min-h-[2rem] text-slate-900 dark:text-white">Молекулярный синтез</Text>
                                <View className="flex-row items-center gap-1 border-t border-slate-100 dark:border-slate-800 pt-2 mt-2">
                                    <MaterialIcons name="science" size={14} className="text-slate-500" />
                                    <Text className="text-[9px] uppercase tracking-tighter text-slate-500">Лаборатория</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
}
