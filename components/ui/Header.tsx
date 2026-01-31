import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { cn } from 'nativewind';
import { Text, TouchableOpacity, View } from 'react-native';

interface HeaderProps {
    title?: string;
    showBack?: boolean;
    rightElement?: React.ReactNode;
    className?: string;
}

export function Header({ title, showBack = true, rightElement, className }: HeaderProps) {
    const router = useRouter();

    return (
        <View className={cn("flex-row items-center justify-between px-4 py-3 bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800", className)}>
            <View className="flex-row items-center flex-1">
                {showBack && (
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="mr-3 p-2 -ml-2 rounded-full active:bg-slate-100 dark:active:bg-slate-800"
                    >
                        <Ionicons name="chevron-back" size={24} className="text-slate-900 dark:text-white" />
                    </TouchableOpacity>
                )}
                {title && (
                    <Text className="text-lg font-bold text-slate-900 dark:text-white flex-1 text-center pr-8" numberOfLines={1}>
                        {title}
                    </Text>
                )}
            </View>
            {rightElement && <View>{rightElement}</View>}
        </View>
    );
}
