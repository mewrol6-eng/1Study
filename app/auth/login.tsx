import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { Button } from '../../components/ui/Button';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function LoginScreen() {
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <ScreenWrapper className="bg-white dark:bg-slate-950">
            {/* Background Decoration */}
            <View className="absolute top-0 left-0 right-0 h-[60%] overflow-hidden">
                <LinearGradient
                    colors={['rgba(59, 130, 246, 0.1)', 'rgba(255, 255, 255, 0)']}
                    className="absolute inset-0"
                />
                <Animated.View entering={FadeInDown.duration(1000).delay(200)} className="absolute -top-20 -left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
                <Animated.View entering={FadeInUp.duration(1000).delay(400)} className="absolute top-40 -right-20 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                <View className="flex-row items-center justify-between px-6 pt-safe-top py-4 z-10">
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="size-10 items-center justify-center rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700"
                    >
                        <MaterialIcons name="arrow-back" size={20} className="text-slate-900 dark:text-white" />
                    </TouchableOpacity>
                    <View className="px-3 py-1 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800">
                        <Text className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Авторизация</Text>
                    </View>
                </View>

                <View className="flex-1 justify-center px-6">
                    <Animated.View entering={FadeInUp.duration(600).springify()} className="items-center mb-10">
                        <View className="size-24 bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl shadow-blue-500/20 flex items-center justify-center mb-8 border border-white dark:border-slate-800 relative">
                            <LinearGradient
                                colors={['rgba(59, 130, 246, 0.1)', 'rgba(255, 255, 255, 0)']}
                                className="absolute inset-0 rounded-[2rem]"
                            />
                            <MaterialIcons name="person" size={40} className="text-blue-500" />
                        </View>

                        <Text className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold text-center mb-3">
                            Добро пожаловать
                        </Text>
                        <Text className="text-slate-500 dark:text-slate-400 text-base text-center leading-relaxed max-w-[280px]">
                            Введите номер телефона для входа или регистрации
                        </Text>
                    </Animated.View>

                    <Animated.View entering={FadeInUp.duration(600).delay(200).springify()} className="w-full mb-6">
                        <Text className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 ml-2">Номер телефона</Text>
                        <View className="flex-row items-center h-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 shadow-sm focus:border-blue-500 transition-colors">
                            <View className="flex-row items-center gap-2 mr-4 border-r border-slate-200 dark:border-slate-800 pr-4">
                                <Text className="text-2xl">🇺🇿</Text>
                                <Text className="text-lg font-bold text-slate-900 dark:text-white">+998</Text>
                            </View>
                            <TextInput
                                className="flex-1 text-lg font-bold text-slate-900 dark:text-white h-full"
                                placeholder="99 123 45 67"
                                placeholderTextColor="#94a3b8"
                                keyboardType="phone-pad"
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                                autoFocus
                            />
                        </View>
                    </Animated.View>

                    <Animated.View entering={FadeInUp.duration(600).delay(300)} className="w-full gap-3">
                        <TouchableOpacity className="w-full flex-row items-center justify-center gap-3 bg-white dark:bg-slate-900 h-14 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <Image source={{ uri: "https://www.google.com/favicon.ico" }} className="size-5" />
                            <Text className="text-slate-700 dark:text-white font-bold">Войти через Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="w-full flex-row items-center justify-center gap-3 bg-black dark:bg-white h-14 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <Ionicons name="logo-apple" size={20} className="text-white dark:text-black" />
                            <Text className="text-white dark:text-black font-bold">Войти через Apple</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>

                <Animated.View entering={FadeInUp.duration(600).delay(400)} className="p-6 pb-2 w-full bg-white/50 dark:bg-slate-950/50 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800">
                    <Button
                        label="Продолжить"
                        size="lg"
                        className="w-full bg-blue-600 h-16 rounded-[1.25rem] shadow-xl shadow-blue-500/20"
                        textClassName="text-white text-lg font-bold"
                        onPress={() => router.push('/auth/verification')}
                    />
                </Animated.View>
            </KeyboardAvoidingView>
        </ScreenWrapper>
    );
}


