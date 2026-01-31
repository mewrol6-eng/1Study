import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScreenWrapper } from '../../components/ui/ScreenWrapper';

export default function ChatScreen() {
    const router = useRouter();
    const [messages, setMessages] = useState([
        { id: 1, text: 'Здравствуйте! Чем я могу вам помочь сегодня?', sender: 'support', time: '10:00' },
    ]);
    const [inputText, setInputText] = useState('');

    const sendMessage = () => {
        if (!inputText.trim()) return;
        setMessages([...messages, { id: Date.now(), text: inputText, sender: 'user', time: '10:05' }]);
        setInputText('');
    };

    return (
        <ScreenWrapper className="bg-slate-50 dark:bg-slate-950">
            {/* Header */}
            <View className="pt-safe-top px-4 pb-2 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm z-10">
                <View className="flex-row items-center justify-between py-2">
                    <TouchableOpacity onPress={() => router.back()} className="size-10 items-center justify-center">
                        <MaterialIcons name="arrow-back" size={24} className="text-slate-900 dark:text-white" />
                    </TouchableOpacity>
                    <View className="items-center">
                        <Text className="font-bold text-lg text-slate-900 dark:text-white">Поддержка</Text>
                        <Text className="text-xs text-emerald-500 font-medium">Онлайн</Text>
                    </View>
                    <View className="size-10" />
                </View>
            </View>

            <FlatList
                data={messages}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ padding: 16, gap: 16 }}
                renderItem={({ item }) => (
                    <View className={`max-w-[80%] rounded-2xl p-4 ${item.sender === 'user' ? 'bg-primary self-end rounded-tr-none' : 'bg-white dark:bg-card-dark self-start rounded-tl-none border border-slate-100 dark:border-slate-800'}`}>
                        <Text className={`text-base ${item.sender === 'user' ? 'text-slate-900 font-medium' : 'text-slate-900 dark:text-white'}`}>
                            {item.text}
                        </Text>
                        <Text className={`text-[10px] mt-1 text-right ${item.sender === 'user' ? 'text-slate-700' : 'text-slate-400'}`}>
                            {item.time}
                        </Text>
                    </View>
                )}
            />

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex-row gap-3 items-center">
                    <TouchableOpacity className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 items-center justify-center">
                        <MaterialIcons name="add" size={24} className="text-slate-500" />
                    </TouchableOpacity>
                    <TextInput
                        className="flex-1 h-12 bg-slate-50 dark:bg-slate-800 rounded-full px-4 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700"
                        placeholder="Напишите сообщение..."
                        placeholderTextColor="#9ca3af"
                        value={inputText}
                        onChangeText={setInputText}
                    />
                    <TouchableOpacity onPress={sendMessage} className="size-10 rounded-full bg-primary items-center justify-center shadow-lg shadow-primary/30">
                        <MaterialIcons name="send" size={20} className="text-slate-900 ml-1" />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScreenWrapper>
    );
}
