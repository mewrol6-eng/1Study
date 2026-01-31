import { cn } from '@/lib/utils';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/ui/Button';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function VerificationScreen() {
    const router = useRouter();
    const [code, setCode] = useState(['', '', '', '']);
    const inputs = useRef<TextInput[]>([]);
    const [timer, setTimer] = useState(59);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleInput = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if (text && index < 3) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleBackspace = (text: string, index: number) => {
        if (!text && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    }

    return (
        <ScreenWrapper className="bg-white dark:bg-slate-950">
            {/* Background Decoration */}
            <View className="absolute top-0 left-0 right-0 h-[60%] overflow-hidden">
                <LinearGradient
                    colors={['rgba(59, 130, 246, 0.1)', 'rgba(255, 255, 255, 0)']}
                    className="absolute inset-0"
                />
                <View className="absolute -top-20 -left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
                <View className="absolute top-40 -right-20 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />
            </View>

            <View className="flex-row items-center justify-between px-6 pt-safe-top py-4 z-10">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="size-10 items-center justify-center rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700"
                >
                    <MaterialIcons name="arrow-back" size={20} className="text-slate-900 dark:text-white" />
                </TouchableOpacity>
                <View className="px-3 py-1 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800">
                    <Text className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Вход</Text>
                </View>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1 justify-center px-6"
            >
                <View className="items-center mb-10">
                    <View className="size-24 bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl shadow-blue-500/20 flex items-center justify-center mb-8 border border-white dark:border-slate-800 relative">
                        <LinearGradient
                            colors={['rgba(59, 130, 246, 0.1)', 'rgba(255, 255, 255, 0)']}
                            className="absolute inset-0 rounded-[2rem]"
                        />
                        <MaterialIcons name="security" size={40} className="text-blue-500" />
                        <View className="absolute -bottom-2 -right-2 bg-green-500 size-8 rounded-full border-4 border-white dark:border-slate-900 items-center justify-center">
                            <MaterialIcons name="check" size={16} color="white" />
                        </View>
                    </View>

                    <Text className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold text-center mb-3">
                        Код подтверждения
                    </Text>
                    <Text className="text-slate-500 dark:text-slate-400 text-base text-center leading-relaxed max-w-[280px]">
                        Мы отправили 4-значный код на ваш номер телефона
                    </Text>
                </View>

                <View className="flex-row gap-4 mb-10 justify-center">
                    {[0, 1, 2, 3].map((i) => (
                        <View key={i} className="relative">
                            <TextInput
                                ref={(ref) => { if (ref) inputs.current[i] = ref }}
                                className={cn(
                                    "w-[70px] h-[80px] text-center text-3xl font-bold rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border shadow-sm transition-all duration-200",
                                    code[i]
                                        ? "border-blue-500 ring-4 ring-blue-500/10 shadow-blue-500/20"
                                        : "border-slate-100 dark:border-slate-800 shadow-slate-200/50"
                                )}
                                keyboardType="number-pad"
                                maxLength={1}
                                value={code[i]}
                                onChangeText={(text) => handleInput(text, i)}
                                onKeyPress={({ nativeEvent }) => {
                                    if (nativeEvent.key === 'Backspace') {
                                        handleBackspace(code[i], i)
                                    }
                                }}
                                selectionColor="#3b82f6"
                            />
                            {/* Decorative dot when empty */}
                            {!code[i] && (
                                <View className="absolute inset-0 items-center justify-center pointer-events-none">
                                    <View className="size-2 rounded-full bg-slate-200 dark:bg-slate-700" />
                                </View>
                            )}
                        </View>
                    ))}
                </View>

                <View className="items-center gap-4">
                    {timer > 0 ? (
                        <View className="px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full">
                            <Text className="text-slate-500 font-medium text-sm">
                                Отправить повторно через <Text className="text-slate-900 dark:text-white font-bold font-mono">00:{timer < 10 ? `0${timer}` : timer}</Text>
                            </Text>
                        </View>
                    ) : (
                        <TouchableOpacity>
                            <Text className="text-blue-500 font-bold text-sm">Отправить код повторно</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </KeyboardAvoidingView>

            <View className="p-6 pb-12 w-full bg-white/50 dark:bg-slate-950/50 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800">
                <Button
                    label="Подтвердить"
                    size="lg"
                    className="w-full bg-slate-900 dark:bg-white h-16 rounded-[1.25rem] shadow-xl shadow-slate-900/20"
                    textClassName="text-white dark:text-slate-900 text-lg font-bold"
                    onPress={() => router.push('/subscription/plans')}
                />
            </View>
        </ScreenWrapper>
    );
}
