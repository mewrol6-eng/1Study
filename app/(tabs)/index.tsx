import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { cn } from 'nativewind';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Header } from '../../components/ui/Header';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function DashboardScreen() {
  return (
    <ScreenWrapper className="pb-24">
      {/* Top App Bar */}
      <Header
        showBack={false}
        title=""
        className="bg-white/90 dark:bg-background-dark/90 backdrop-blur-md"
        rightElement={
          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center gap-3">
              <View className="size-9 rounded-full border border-primary/20 p-0.5 overflow-hidden">
                <Image
                  source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlTjWkoctqZk0kVN7DWWJ6qbRNI04pI4PZ393ygzP5wNuv-6UiPwrcvDo3G4VvY85Cbo5FVf_9Ydqgbdxxpw3_vmcr9K0Fy5woPfrBdEsHI0ojW1HEOgfCiurXR2T7IHvCnkjllzJiQXfsbKA-dzDQmeZ6vzsV_Jkc4x2Roy4A1AJepDrhACccnrZI-RSaUhmUB3mg_tgmLW7rIYTKjnkL2c1QBfqJft0nukvSWK1g7EM5FRy7xnwmU2ezynhiTXEqZjYO7OhWwqLY" }}
                  className="w-full h-full bg-cover"
                />
              </View>
              <View>
                <Text className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">Студент</Text>
                <Text className="text-primary text-sm font-bold leading-tight">Александр В.</Text>
              </View>
            </View>
            <TouchableOpacity className="p-2">
              <Ionicons name="notifications-outline" size={24} className="text-primary" />
            </TouchableOpacity>
          </View>
        }
      />

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Credit Balance */}
        <View className="p-4">
          <Card className="flex-row justify-between items-center p-5 border border-slate-200 dark:border-slate-800">
            <View className="gap-1">
              <Text className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold">Доступный баланс</Text>
              <View className="flex-row items-baseline gap-1">
                <Text className="text-2xl font-bold tracking-tight text-primary">15.00</Text>
                <Text className="text-xs font-medium text-slate-500">CRD</Text>
              </View>
            </View>
            <Button label="Пополнить" size="sm" className="px-4 py-2" />
          </Card>
        </View>

        {/* Next Lesson */}
        <View className="px-4">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500">Ближайшее занятие</Text>
            <Text className="text-[10px] text-primary font-mono font-bold">ID: 482-TX</Text>
          </View>
          <View className="bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
            <View className="h-32 bg-slate-50 dark:bg-slate-900 relative items-center justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800">
              {/* Blueprint grid effect would be here, handled by image or CSS bg */}
              <View className="relative z-10 text-center px-6">
                <Text className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Курс: Высшая математика</Text>
                <Text className="text-lg font-bold text-primary tracking-tight">Основы тригонометрии</Text>
              </View>
            </View>
            <View className="flex-row divide-x divide-slate-200 dark:divide-slate-800 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-card-dark">
              {['00', '45', '12'].map((val, i) => (
                <View key={i} className="flex-1 py-3 items-center">
                  <Text className="text-xs font-mono font-bold text-primary">{val}</Text>
                  <Text className="text-[8px] uppercase tracking-tighter text-slate-500">{['Часов', 'Минут', 'Секунд'][i]}</Text>
                </View>
              ))}
            </View>
            <View className="p-4 flex-row items-center justify-between">
              <View>
                <Text className="text-[9px] uppercase tracking-wider text-slate-500 font-medium">Преподаватель</Text>
                <Text className="text-xs font-bold text-primary">Анна Петрова, PhD</Text>
              </View>
              <Button variant="outline" label="Войти в класс" size="sm" className="border-primary text-primary" textClassName="text-primary" />
            </View>
          </View>
        </View>

        {/* Analytics */}
        <View className="p-4">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500">Аналитика прогресса</Text>
            <Text className="text-[10px] text-emerald-600 font-bold">+12.4%</Text>
          </View>
          <Card className="p-5 border border-slate-200 dark:border-slate-800">
            <View className="h-32 w-full mb-4 flex-row items-end justify-between gap-1">
              {/* Bars simulation */}
              {[35, 25, 30, 95, 20, 38, 5].map((h, i) => (
                <View key={i} className="flex-1 flex-col items-center gap-2 h-full justify-end">
                  <View className={cn("w-full rounded-t-sm", i === 3 ? "bg-primary" : "bg-primary/20", `h-[${h}%]`)} />
                  <Text className={cn("text-[8px] font-medium", i === 3 ? "text-primary font-bold" : "text-slate-500")}>
                    {['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'][i]}
                  </Text>
                </View>
              ))}
            </View>
            <View className="flex-row items-end justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <View>
                <Text className="text-2xl font-bold tracking-tighter text-primary">4.5<Text className="text-xs ml-1 font-medium text-slate-500">h</Text></Text>
                <Text className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Активность за неделю</Text>
              </View>
              <View className="items-end">
                <Text className="text-xs font-bold text-primary">92/100</Text>
                <Text className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Индекс KPI</Text>
              </View>
            </View>
          </Card>
        </View>

        {/* Recommendations Carousel */}
        <View className="pb-8">
          <View className="flex-row items-center justify-between px-4 mb-3">
            <Text className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500">Рекомендации</Text>
            <TouchableOpacity><Text className="text-primary text-[10px] font-bold uppercase tracking-widest">Каталог</Text></TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}>
            {[
              { code: "Design-01", title: "Основы UI/UX Дизайна", modules: 12, opacity: false },
              { code: "Prog-04", title: "Python для анализа данных", modules: 24, opacity: true },
            ].map((item, i) => (
              <View key={i} className={cn("flex-none w-56 border border-slate-200 dark:border-slate-800 bg-white dark:bg-card-dark", item.opacity && "opacity-80")}>
                <View className={cn("h-2", i === 0 ? "bg-primary" : "bg-slate-500")} />
                <View className="p-4">
                  <Text className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">{item.code}</Text>
                  <Text className="text-sm font-bold text-primary leading-tight mb-4">{item.title}</Text>
                  <View className="flex-row items-center justify-between">
                    <Text className="text-[9px] font-mono text-slate-500 text-primary-dark">{item.modules} МОДУЛЕЙ</Text>
                    <MaterialIcons name="arrow-forward" size={14} className="text-primary" />
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
