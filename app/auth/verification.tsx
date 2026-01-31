import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button } from '../../components/ui/Button';
import { Header } from '../../components/ui/Header';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function VerificationScreen() {
    const router = useRouter();
    const [code, setCode] = useState(['', '', '', '']);
    const inputs = useRef<TextInput[]>([]);

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
        <ScreenWrapper>
            <Header title="Верификация" />

            <View className="flex-1 items-center pt-8 px-6">
                <View className="size-20 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
                    <MaterialIcons name="school" size={40} className="text-primary" />
                </View>

                <Text className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold text-center pb-2">
                    Подтверждение
                </Text>
                <Text className="text-gray-500 dark:text-gray-400 text-base text-center px-4 mb-10">
                    Мы отправили код на ваш номер/почту
                </Text>

                <View className="flex-row gap-4 mb-8">
                    {[0, 1, 2, 3].map((i) => (
                        <TextInput
                            key={i}
                            ref={(ref) => { if (ref) inputs.current[i] = ref }}
                            className="w-14 h-16 text-center text-2xl font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-background-dark text-slate-900 dark:text-white focus:border-primary focus:border-2"
                            keyboardType="number-pad"
                            maxLength={1}
                            value={code[i]}
                            onChangeText={(text) => handleInput(text, i)}
                            onKeyPress={({ nativeEvent }) => {
                                if (nativeEvent.key === 'Backspace') {
                                    handleBackspace(code[i], i)
                                }
                            }}
                            placeholder="•"
                            placeholderTextColor="#9ca3af"
                        />
                    ))}
                </View>

                <Text className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Не получили код?
                </Text>
                <Button
                    variant="ghost"
                    label="Отправить код повторно через 00:59"
                    textClassName="text-primary font-semibold"
                    size="sm"
                />
            </View>

            <View className="p-6 pb-12">
                <Button
                    label="Продолжить"
                    size="lg"
                    onPress={() => router.push('/subscription/plans')}
                />
                <View className="mt-8 flex items-center">
                    <View className="h-1.5 w-32 bg-gray-200 dark:bg-gray-800 rounded-full" />
                </View>
            </View>
        </ScreenWrapper>
    );
}
