import { cn } from '@/lib/utils';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInRight, FadeInUp, Layout } from 'react-native-reanimated';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

const CATEGORIES = ['Все', 'Точные науки', 'Гуманитарные', 'IT и Технологии', 'Языки', 'Искусство'];

const COURSES = [
    {
        id: 1,
        title: "Основы тригонометрии",
        category: "Точные науки",
        lessons: 12,
        rating: 4.8,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-UwqKfObVCpuE0oUgdf_0_fagDSksFyWdkGDH1A3C6cNONkvc_rQTFdGoy-UYfD2ZyiSyFXpkWB669V31v8tiiwt1tC4m7WGq6PtU8MaU2gW_3eU_n7Z2c4HOBYboKoucOXgZGlyNt7F7sV3VFKS4WM9cfKw-l-BycAgGxeDBsiUsdJWFdv9qcwAUFj-KNXDEikMF2WztrdKeRHTr7qCWkUXcqbRAjQznr7rAAjhCbBEVzbk-ObZowUg0PTRY2JHohSy1bZxXQFro",
        code: "MATH-101",
        color: "text-blue-600",
        bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
        id: 2,
        title: "Python для Data Science",
        category: "IT и Технологии",
        lessons: 24,
        rating: 4.9,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC134ZjcbDAU5laV_be-o9x66lvPrk2KmkuFvJJDJbfzNX9-kIz2hpnNSwRvzlJS4KWdSq2OmDwbvs08dD634HbyUFdVrKDRBQ719tATZJGahi6-UHGsabxKq-RH_eexECamlPoXrNPF4Ar_qNvIWc5mLs5uUKeQHoYut5PtRP3C2VPgxM9y4pCaUkT7QqkUpdUt4fgEtJV94k-PU4rULp88ljUT4mMxbttPVD2a4gUyK2LDqenk7X9-dbLRol42IsNyMtF3FxwgQOE",
        code: "PY-202",
        color: "text-amber-600",
        bgColor: "bg-amber-50 dark:bg-amber-900/20"
    },
    {
        id: 3,
        title: "Визуальная семиотика",
        category: "Искусство",
        lessons: 8,
        rating: 4.7,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-mFyqBzWOgf3fvrQoAAVG5WBxd-c2mvF18-esBW2-3KpGxl_7QNkabZe-UQO7kjLkk1thY0DKxwgVzLPrkzNd4uizGbN369Rft1W2XQADRqZBn7lkMPDSCx5CrDj-5DF14sKxY-AfcaZHHzMs11EV72jKGPDyUtjVGPAE1nUJ40n_IcEpZNamEzdB1PCLB4UwlPZVt-Iy5JS3QLM_-AcIZVQUjviY6NDEzXNoMPsR-jETOmo_N3eC8X8HLjiRwmM8XI-gzR4kXx0Y",
        code: "ART-305",
        color: "text-purple-600",
        bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
        id: 4,
        title: "Молекулярная физика",
        category: "Точные науки",
        lessons: 16,
        rating: 4.9,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC134ZjcbDAU5laV_be-o9x66lvPrk2KmkuFvJJDJbfzNX9-kIz2hpnNSwRvzlJS4KWdSq2OmDwbvs08dD634HbyUFdVrKDRBQ719tATZJGahi6-UHGsabxKq-RH_eexECamlPoXrNPF4Ar_qNvIWc5mLs5uUKeQHoYut5PtRP3C2VPgxM9y4pCaUkT7QqkUpdUt4fgEtJV94k-PU4rULp88ljUT4mMxbttPVD2a4gUyK2LDqenk7X9-dbLRol42IsNyMtF3FxwgQOE", // Placeholder reused
        code: "PHY-401",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50 dark:bg-emerald-900/20"
    },
    {
        id: 5,
        title: "Business English C1",
        category: "Языки",
        lessons: 20,
        rating: 4.6,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-UwqKfObVCpuE0oUgdf_0_fagDSksFyWdkGDH1A3C6cNONkvc_rQTFdGoy-UYfD2ZyiSyFXpkWB669V31v8tiiwt1tC4m7WGq6PtU8MaU2gW_3eU_n7Z2c4HOBYboKoucOXgZGlyNt7F7sV3VFKS4WM9cfKw-l-BycAgGxeDBsiUsdJWFdv9qcwAUFj-KNXDEikMF2WztrdKeRHTr7qCWkUXcqbRAjQznr7rAAjhCbBEVzbk-ObZowUg0PTRY2JHohSy1bZxXQFro", // Placeholder reused
        code: "ENG-500",
        color: "text-cyan-600",
        bgColor: "bg-cyan-50 dark:bg-cyan-900/20"
    }
];

import { useRouter } from 'expo-router';

export default function CoursesScreen() {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState('Все');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCourses = COURSES.filter(course => {
        const matchesCategory = selectedCategory === 'Все' || course.category === selectedCategory;
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <ScreenWrapper className="bg-slate-50 dark:bg-slate-950">
            {/* Background Decoration */}
            <View className="absolute top-0 left-0 right-0 h-[40%] overflow-hidden">
                <LinearGradient
                    colors={['rgba(59, 130, 246, 0.05)', 'rgba(255, 255, 255, 0)']}
                    className="absolute inset-0"
                />
            </View>

            <View className="pt-safe-top px-4 pb-4 bg-slate-50/80 dark:bg-slate-950/80 z-20 backdrop-blur-xl sticky top-0">
                <Animated.View entering={FadeInDown.duration(600)} className="flex-row items-center justify-between py-4">
                    <Text className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Каталог
                    </Text>
                    <TouchableOpacity className="size-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 items-center justify-center shadow-sm">
                        <MaterialIcons name="tune" size={20} className="text-slate-900 dark:text-white" />
                    </TouchableOpacity>
                </Animated.View>

                {/* Search Bar */}
                <Animated.View entering={FadeInDown.duration(600).delay(100)} className="relative shadow-sm mb-4">
                    <TextInput
                        className="w-full h-14 bg-white dark:bg-slate-900 rounded-[1.25rem] pl-12 pr-4 text-base font-medium text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                        placeholder="Найти курс..."
                        placeholderTextColor="#9ca3af"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <MaterialIcons name="search" size={24} className="absolute left-4 top-4 text-slate-400" />
                </Animated.View>

                {/* Categories */}
                <Animated.View entering={FadeInRight.duration(600).delay(200)}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingRight: 24 }}>
                        {CATEGORIES.map((cat, i) => (
                            <TouchableOpacity
                                key={i}
                                onPress={() => setSelectedCategory(cat)}
                                className={cn(
                                    "px-5 py-2.5 rounded-full border shadow-sm transition-all",
                                    selectedCategory === cat
                                        ? "bg-slate-900 dark:bg-white border-slate-900 dark:border-white shadow-slate-900/20"
                                        : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                                )}
                            >
                                <Text className={cn(
                                    "text-xs font-bold uppercase tracking-wider",
                                    selectedCategory === cat
                                        ? "text-white dark:text-slate-900"
                                        : "text-slate-600"
                                )}>{cat}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </Animated.View>
            </View>

            <ScrollView className="flex-1 px-4" contentContainerStyle={{ paddingBottom: 130 }} showsVerticalScrollIndicator={false}>
                {/* Featured Hero if 'All' is selected and no search */}
                {selectedCategory === 'Все' && searchQuery === '' && (
                    <Animated.View entering={FadeInUp.duration(600).delay(300)} className="mb-8 mt-2">
                        <View className="flex-row items-center justify-between mb-4 px-2">
                            <Text className="text-lg font-bold text-slate-900 dark:text-white">Популярное</Text>
                            <TouchableOpacity><Text className="text-emerald-600 text-xs font-bold uppercase tracking-wider">См. все</Text></TouchableOpacity>
                        </View>
                        <TouchableOpacity className="w-full h-48 bg-slate-900 dark:bg-white rounded-[2rem] p-1 shadow-2xl shadow-blue-500/20 active:scale-[0.98] transition-all">
                            <View className="relative w-full h-full bg-slate-800 dark:bg-slate-100 rounded-[1.75rem] overflow-hidden">
                                <Image
                                    source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuC134ZjcbDAU5laV_be-o9x66lvPrk2KmkuFvJJDJbfzNX9-kIz2hpnNSwRvzlJS4KWdSq2OmDwbvs08dD634HbyUFdVrKDRBQ719tATZJGahi6-UHGsabxKq-RH_eexECamlPoXrNPF4Ar_qNvIWc5mLs5uUKeQHoYut5PtRP3C2VPgxM9y4pCaUkT7QqkUpdUt4fgEtJV94k-PU4rULp88ljUT4mMxbttPVD2a4gUyK2LDqenk7X9-dbLRol42IsNyMtF3FxwgQOE" }}
                                    className="absolute inset-0 w-full h-full opacity-60"
                                    resizeMode="cover"
                                />
                                <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} className="absolute inset-0" />
                                <View className="absolute bottom-0 left-0 right-0 p-6">
                                    <View className="flex-row items-center gap-2 mb-2">
                                        <View className="bg-primary px-2 py-1 rounded-lg">
                                            <Text className="text-[10px] font-bold uppercase text-white">Новинка</Text>
                                        </View>
                                        <Text className="text-white/80 text-xs font-bold uppercase tracking-wider">IT и Технологии</Text>
                                    </View>
                                    <Text className="text-2xl font-bold text-white mb-2 leading-tight">Machine Learning: Старт в профессии</Text>
                                    <View className="flex-row items-center gap-4">
                                        <View className="flex-row items-center gap-1">
                                            <MaterialIcons name="star" size={16} className="text-amber-500" />
                                            <Text className="text-white font-bold">4.9</Text>
                                        </View>
                                        <Text className="text-white/60 text-sm">• 32 урока</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Animated.View>
                )}

                <Animated.View layout={Layout.springify()} className="gap-4">
                    {filteredCourses.map((course, index) => (
                        <Animated.View
                            key={course.id}
                            entering={FadeInUp.duration(600).delay(400 + (index * 100))}
                        >
                            <TouchableOpacity onPress={() => router.push(`/courses/${course.id}`)} className="bg-white dark:bg-card-dark rounded-[2rem] p-3 shadow-sm border border-slate-100 dark:border-slate-800 flex-row gap-4 active:scale-[0.98] transition-all">
                                <View className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-[1.5rem] relative overflow-hidden">
                                    <Image
                                        source={{ uri: course.image }}
                                        className="w-full h-full bg-cover"
                                    />
                                    <View className="absolute top-2 left-2 bg-white/90 dark:bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg">
                                        <Text className="text-[8px] font-bold text-slate-900 dark:text-white">{course.code}</Text>
                                    </View>
                                </View>

                                <View className="flex-1 py-1 pr-1 justify-between">
                                    <View>
                                        <View className="flex-row justify-between items-start mb-1">
                                            <Text className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex-1">{course.category}</Text>
                                            <View className="flex-row items-center gap-1">
                                                <MaterialIcons name="star" size={14} className="text-amber-400" />
                                                <Text className="text-xs font-bold text-slate-700 dark:text-slate-300">{course.rating}</Text>
                                            </View>
                                        </View>
                                        <Text className="text-base font-bold text-slate-900 dark:text-white leading-tight mb-1">{course.title}</Text>
                                        <Text className="text-xs text-slate-500 font-medium">{course.lessons} модулей • 24ч контента</Text>
                                    </View>

                                    <View className="flex-row justify-between items-center mt-2">
                                        <View className="flex-row -space-x-2">
                                            {[1, 2, 3].map(i => (
                                                <View key={i} className="size-6 rounded-full border-2 border-white dark:border-card-dark bg-slate-200 dark:bg-slate-800" />
                                            ))}
                                            <View className="size-6 rounded-full border-2 border-white dark:border-card-dark bg-slate-100 dark:bg-slate-900 items-center justify-center">
                                                <Text className="text-[8px] font-bold text-slate-500">+12</Text>
                                            </View>
                                        </View>
                                        <View className={cn("size-8 rounded-full items-center justify-center", course.bgColor)}>
                                            <MaterialIcons name="arrow-forward" size={16} className={course.color} />
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Animated.View>
                    ))}

                    {filteredCourses.length === 0 && (
                        <View className="items-center py-20 opacity-50">
                            <MaterialIcons name="search-off" size={48} className="text-slate-300 mb-4" />
                            <Text className="text-slate-500 font-bold">Ничего не найдено</Text>
                        </View>
                    )}
                </Animated.View>
            </ScrollView>
        </ScreenWrapper>
    );
}
