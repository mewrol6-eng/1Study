import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function CatalogDiscoveryScreen() {
    return (
        <ScreenWrapper className="bg-background-light dark:bg-background-dark">
            <View className="bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md pt-safe-top">
                <View className="flex-row items-center justify-between px-4 py-4">
                    <Text className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Каталог</Text>
                    <View className="flex-row items-center gap-2 px-3 py-1.5 rounded-full bg-surface-light dark:bg-card-dark shadow-sm border border-gray-200 dark:border-slate-700">
                        <MaterialIcons name="filter-list" size={16} className="text-gray-500 dark:text-gray-400" />
                        <Text className="text-xs font-medium text-gray-700 dark:text-gray-300">Фильтры</Text>
                    </View>
                </View>

                <View className="px-4 pb-4">
                    <View className="relative">
                        <Ionicons name="search" size={20} className="absolute left-3 top-2.5 z-10 text-gray-400" />
                        <TextInput
                            className="w-full h-10 rounded-xl bg-surface-light dark:bg-card-dark border-none pl-10 pr-4 text-sm shadow-sm text-gray-900 dark:text-white"
                            placeholder="Поиск предметов..."
                            placeholderTextColor="#9ca3af"
                        />
                    </View>
                </View>
            </View>

            <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Categories Grid */}
                <View className="p-4 grid gap-4">
                    <View className="flex-row gap-4 mb-4">
                        <TouchableOpacity className="flex-1 aspect-square bg-white dark:bg-card-dark rounded-2xl p-4 shadow-sm justify-between">
                            <View className="self-start p-2 rounded-xl bg-purple-100 dark:bg-purple-900/30">
                                <MaterialIcons name="functions" size={24} className="text-purple-600 dark:text-purple-400" />
                            </View>
                            <View>
                                <Text className="font-bold text-gray-900 dark:text-white mb-1">Математика</Text>
                                <Text className="text-xs text-gray-500">12 курсов</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-1 aspect-square bg-white dark:bg-card-dark rounded-2xl p-4 shadow-sm justify-between">
                            <View className="self-start p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                                <MaterialIcons name="public" size={24} className="text-blue-600 dark:text-blue-400" />
                            </View>
                            <View>
                                <Text className="font-bold text-gray-900 dark:text-white mb-1">Языки</Text>
                                <Text className="text-xs text-gray-500">8 курсов</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row gap-4">
                        <TouchableOpacity className="flex-1 aspect-square bg-white dark:bg-card-dark rounded-2xl p-4 shadow-sm justify-between">
                            <View className="self-start p-2 rounded-xl bg-green-100 dark:bg-green-900/30">
                                <MaterialIcons name="biotech" size={24} className="text-green-600 dark:text-green-400" />
                            </View>
                            <View>
                                <Text className="font-bold text-gray-900 dark:text-white mb-1">Биология</Text>
                                <Text className="text-xs text-gray-500">5 курсов</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-1 aspect-square bg-white dark:bg-card-dark rounded-2xl p-4 shadow-sm justify-between">
                            <View className="self-start p-2 rounded-xl bg-orange-100 dark:bg-orange-900/30">
                                <MaterialIcons name="extension" size={24} className="text-orange-600 dark:text-orange-400" />
                            </View>
                            <View>
                                <Text className="font-bold text-gray-900 dark:text-white mb-1">Шахматы</Text>
                                <Text className="text-xs text-gray-500">3 курса</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Popular Courses */}
                <View className="px-4 mt-2">
                    <Text className="text-lg font-bold text-gray-900 dark:text-white mb-3">Популярное</Text>
                    {/* List items would go here */}
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
}
