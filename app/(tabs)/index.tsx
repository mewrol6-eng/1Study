import { cn } from '@/lib/utils';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp, ZoomIn } from 'react-native-reanimated';
import { Button } from '../../components/ui/Button';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

const getGreeting = () => {
  const hours = new Date().getHours();
  if (hours < 12) return 'Доброе утро';
  if (hours < 18) return 'Добрый день';
  return 'Добрый вечер';
};

const getDateString = () => {
  const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const date = new Date();
  return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
}

export default function DashboardScreen() {
  const router = useRouter();
  const greeting = getGreeting();
  const dateString = getDateString();

  return (
    <ScreenWrapper className="bg-slate-50 dark:bg-slate-950">
      {/* Background Decoration */}
      <View className="absolute top-0 left-0 right-0 h-[50%] overflow-hidden" pointerEvents="none">
        <LinearGradient
          colors={['rgba(19, 236, 200, 0.08)', 'rgba(255, 255, 255, 0)']}
          className="absolute inset-0"
        />
        <Animated.View entering={FadeInDown.duration(1000)} className="absolute -top-24 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <Animated.View entering={FadeInDown.duration(1000).delay(200)} className="absolute top-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl" />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 130, paddingTop: 60 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        {/* Header Section */}
        <View className="px-6 mb-8 flex-row justify-between items-start">
          <Animated.View entering={FadeInDown.duration(600)}>
            <Text className="text-slate-600 text-xs font-bold uppercase tracking-widest mb-1">{dateString}</Text>
            <Text className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">
              {greeting}, <Text className="text-emerald-600">Saidamir</Text>
            </Text>
          </Animated.View>

          <Animated.View entering={ZoomIn.duration(600).delay(100)}>
            <TouchableOpacity onPress={() => router.push('/(tabs)/profile')} className="size-12 rounded-full border-2 border-white dark:border-slate-800 shadow-lg relative overflow-hidden bg-slate-200">
              <LinearGradient colors={['#13ecc8', '#0f766e']} className="absolute inset-0 items-center justify-center">
                <Text className="text-white font-bold text-lg">S</Text>
              </LinearGradient>
            </TouchableOpacity>
            <View className="absolute -bottom-1 -right-1 size-5 bg-white dark:bg-slate-900 rounded-full items-center justify-center border-2 border-slate-50 dark:border-slate-950">
              <View className="size-2.5 bg-green-500 rounded-full animate-pulse" />
            </View>
          </Animated.View>
        </View>

        {/* Hero Card: Balance & Stats */}
        <Animated.View entering={FadeInUp.duration(600).delay(200)} className="px-6 mb-8">
          <View className="w-full h-48 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 relative bg-slate-900">
            <LinearGradient
              colors={['#0f172a', '#1e293b']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="absolute inset-0"
            />
            {/* Abstract Art in Card */}
            <View className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
            <View className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent" />

            <View className="p-6 flex-1 justify-between">
              <View className="flex-row justify-between items-start">
                <View>
                  <Text className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Текущий баланс</Text>
                  <View className="flex-row items-baseline gap-1">
                    <Text className="text-4xl font-extrabold text-white tracking-tight">15.00</Text>
                    <Text className="text-emerald-400 font-bold text-sm">CRD</Text>
                  </View>
                </View>
                <View className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/5">
                  <Text className="text-white text-xs font-bold">Pro Account</Text>
                </View>
              </View>

              <View className="flex-row items-center gap-4">
                <Button
                  label="Пополнить"
                  size="sm"
                  className="bg-primary px-6 h-10 rounded-xl"
                  textClassName="text-slate-900 font-bold"
                  onPress={() => router.push('/subscription/plans')}
                />
                <TouchableOpacity className="size-10 rounded-xl bg-white/10 items-center justify-center border border-white/5">
                  <MaterialIcons name="history" size={20} className="text-white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Animated.View>

        {/* Quick Actions Grid */}
        <View className="px-6 mb-8 relative z-50">
          <Text className="text-lg font-bold text-slate-900 dark:text-white mb-4">Быстрые действия</Text>
          <View className="flex-row gap-4">
            {[
              { icon: 'school', label: 'Уроки', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20', route: '/courses' },
              { icon: 'event-note', label: 'Расписание', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20', route: '/schedule' },
              { icon: 'leaderboard', label: 'Рейтинг', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20', route: '/leaderboard' },
              { icon: 'support-agent', label: 'Помощь', color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/20', route: '/support' },
            ].map((item, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => router.push(item.route as any)}
                activeOpacity={0.6}
                delayPressIn={0}
                className="flex-1 items-center gap-2"
                hitSlop={8}
              >
                <View className={cn("size-16 rounded-[1.5rem] items-center justify-center shadow-sm border border-slate-100 dark:border-slate-800 active:scale-95 transition-all", item.bg)} pointerEvents="none">
                  <MaterialIcons name={item.icon as any} size={28} className={item.color} />
                </View>
                <Text className="text-xs font-bold text-slate-600 dark:text-slate-400" pointerEvents="none">{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Up Next / Live Section */}
        <Animated.View entering={FadeInUp.duration(600).delay(400)} className="px-6 mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-bold text-slate-900 dark:text-white">На очереди</Text>
            <View className="flex-row items-center gap-2">
              <View className="px-2 py-0.5 bg-red-500/10 rounded-md border border-red-500/20">
                <Text className="text-[10px] font-bold text-red-500 uppercase tracking-wider animate-pulse">Live</Text>
              </View>
              <MaterialIcons name="chevron-right" size={20} className="text-slate-300" />
            </View>
          </View>

          <TouchableOpacity
            className="bg-white dark:bg-card-dark rounded-[2rem] p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex-row gap-4 items-center active:scale-[0.99] transition-all"
            onPress={() => router.push('/courses/1')}
          >
            <View className="relative w-20 h-20 rounded-2xl bg-slate-900 overflow-hidden items-center justify-center">
              <Text className="text-white font-extrabold text-xl">14:00</Text>
              <Text className="text-slate-300 text-[9px] font-bold uppercase mt-1">Сегодня</Text>
            </View>

            <View className="flex-1">
              <Text className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1">Точные науки</Text>
              <Text className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-1">Основы тригонометрии</Text>
              <View className="flex-row items-center gap-2">
                <View className="flex-row items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                  <Ionicons name="time-outline" size={10} className="text-slate-500" />
                  <Text className="text-[10px] text-slate-500 font-bold">45 мин</Text>
                </View>
                <Text className="text-[10px] text-slate-500 font-bold">• Проф. Петрова</Text>
              </View>
            </View>

            <View className="size-10 rounded-full bg-slate-50 dark:bg-slate-800 items-center justify-center border border-slate-100 dark:border-slate-700">
              <MaterialIcons name="play-arrow" size={20} className="text-slate-900 dark:text-white" />
            </View>
          </TouchableOpacity>
        </Animated.View>

        {/* Continue Learning */}
        <Animated.View entering={FadeInUp.duration(600).delay(500)} className="px-6 mb-4">
          <Text className="text-lg font-bold text-slate-900 dark:text-white mb-4">Продолжить</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingRight: 24 }}>
            {[
              { title: 'Python Basics', progress: 75, color: 'bg-emerald-500', icon: 'code' },
              { title: 'UX Design', progress: 40, color: 'bg-purple-500', icon: 'brush' },
              { title: 'Marketing', progress: 20, color: 'bg-orange-500', icon: 'campaign' },
            ].map((item, i) => (
              <TouchableOpacity key={i} onPress={() => router.push('/courses/1')} className="w-36 bg-white dark:bg-card-dark rounded-[1.5rem] p-4 shadow-sm border border-slate-100 dark:border-slate-800 relative z-10 active:scale-95 transition-all">
                <View className={cn("size-8 rounded-full items-center justify-center mb-3", item.color, "bg-opacity-20")}>
                  <MaterialIcons name={item.icon as any} size={16} className={item.color.replace('bg-', 'text-')} />
                </View>
                <Text className="text-sm font-bold text-slate-900 dark:text-white mb-3 leading-tight">{item.title}</Text>
                <View className="h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <View className={cn("h-full rounded-full", item.color)} style={{ width: `${item.progress}%` }} />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>

      </ScrollView>
    </ScreenWrapper>
  );
}
