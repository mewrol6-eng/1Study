import { cn } from '@/lib/utils';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function LeaderboardScreen() {
    const router = useRouter();

    const leaders = [
        { name: 'Алина В.', score: 2450, change: '+120', avatar: 'https://i.pravatar.cc/150?u=1' },
        { name: 'Тимур К.', score: 2340, change: '+85', avatar: 'https://i.pravatar.cc/150?u=2' },
        { name: 'Saidamir', score: 2100, change: '+240', avatar: undefined, isMe: true }, // Current User
        { name: 'Елена Д.', score: 1980, change: '-20', avatar: 'https://i.pravatar.cc/150?u=4' },
        { name: 'Максим С.', score: 1850, change: '+45', avatar: 'https://i.pravatar.cc/150?u=5' },
    ];

    return (
        <ScreenWrapper className="bg-slate-50 dark:bg-slate-950">
            <View className="absolute top-0 left-0 right-0 h-[40%] overflow-hidden">
                <LinearGradient
                    colors={['rgba(245, 158, 11, 0.08)', 'rgba(255, 255, 255, 0)']} // Amber tint
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
                <Text className="text-2xl font-bold text-slate-900 dark:text-white">Рейтинг</Text>
            </Animated.View>

            <ScrollView className="flex-1 px-6 pt-4" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                {/* Top 3 Podium (Simplified Layout for now) */}
                <View className="flex-row justify-center items-end gap-4 mb-10 h-48">
                    {[leaders[1], leaders[0], leaders[2]].map((leader, i) => (
                        <Animated.View
                            key={i}
                            entering={FadeInUp.duration(600).delay(i * 150)}
                            className={cn("items-center", i === 1 ? "-mb-0 bg-amber-100/50 p-4 rounded-t-3xl border-t border-x border-amber-200" : "")}
                        >
                            <TouchableOpacity onPress={() => router.push('/(tabs)/profile')} className="items-center">
                                <View className={cn("size-16 rounded-full border-4 shadow-lg mb-2 relative", i === 1 ? "border-amber-400 size-20" : "border-slate-200")}>
                                    {leader.avatar ? (
                                        <Image source={{ uri: leader.avatar }} className="w-full h-full rounded-full" />
                                    ) : (
                                        <View className="w-full h-full bg-slate-200 rounded-full items-center justify-center"><Text className="font-bold text-slate-500">S</Text></View>
                                    )}
                                    <View className={cn("absolute -bottom-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full", i === 1 ? "bg-amber-500" : "bg-slate-400")}>
                                        <Text className="text-[10px] font-bold text-white">{i === 1 ? "1" : i === 0 ? "2" : "3"}</Text>
                                    </View>
                                </View>
                                <Text className="font-bold text-slate-900 dark:text-white text-sm mb-0.5">{leader.name}</Text>
                                <Text className="text-xs font-bold text-emerald-600">{leader.score}</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    ))}
                </View>

                {/* List */}
                <View className="gap-3">
                    {leaders.slice(3).map((leader, i) => (
                        <Animated.View key={i} entering={FadeInUp.duration(600).delay(400 + (i * 100))}>
                            <TouchableOpacity onPress={() => router.push('/(tabs)/profile')} className="flex-row items-center bg-white dark:bg-card-dark p-4 rounded-[1.5rem] shadow-sm border border-slate-100 dark:border-slate-800 active:scale-[0.98]">
                                <Text className="w-8 text-center font-bold text-slate-500">{i + 4}</Text>
                                <View className="size-10 rounded-full bg-slate-100 mx-3 overflow-hidden">
                                    {leader.avatar && <Image source={{ uri: leader.avatar }} className="w-full h-full" />}
                                </View>
                                <Text className="flex-1 font-bold text-slate-900 dark:text-white">{leader.name}</Text>
                                <View className="items-end">
                                    <Text className="font-bold text-slate-900 dark:text-white">{leader.score}</Text>
                                </View>
                            </TouchableOpacity>
                        </Animated.View>
                    ))}
                </View>
            </ScrollView>
        </ScreenWrapper >
    );
}
