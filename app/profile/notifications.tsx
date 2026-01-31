import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function NotificationsScreen() {
    const router = useRouter();
    const [settings, setSettings] = useState({
        push: true,
        email: false,
        updates: true,
        marketing: false,
    });

    const toggle = (key: keyof typeof settings) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    }

    return (
        <ScreenWrapper className="bg-slate-50 dark:bg-slate-950">
            <View className="px-6 pt-safe-top pb-4 flex-row items-center gap-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 active:bg-slate-200"
                >
                    <MaterialIcons name="arrow-back" size={24} className="text-slate-900 dark:text-white" />
                </TouchableOpacity>
                <Text className="text-xl font-bold text-slate-900 dark:text-white">Уведомления</Text>
            </View>

            <View className="p-6 gap-4">
                {[
                    { key: 'push', title: 'Push-уведомления', desc: 'Моментальные оповещения о важных событиях' },
                    { key: 'email', title: 'Email рассылка', desc: 'Дайджест новостей и отчетов' },
                    { key: 'updates', title: 'Обновления системы', desc: 'Информация о новых функциях' },
                    { key: 'marketing', title: 'Акции и предложения', desc: 'Специальные скидки и бонусы' },
                ].map((item) => (
                    <View key={item.key} className="bg-white dark:bg-card-dark p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex-row items-center justify-between">
                        <View className="flex-1 mr-4">
                            <Text className="font-bold text-slate-900 dark:text-white text-base mb-1">{item.title}</Text>
                            <Text className="text-xs text-slate-500 leading-tight">{item.desc}</Text>
                        </View>
                        <Switch
                            value={settings[item.key as keyof typeof settings]}
                            onValueChange={() => toggle(item.key as keyof typeof settings)}
                            trackColor={{ true: '#13ecc8' }}
                        />
                    </View>
                ))}
            </View>
        </ScreenWrapper>
    );
}
