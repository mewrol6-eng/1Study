import { cn } from '@/lib/utils';
import { Text, TextInput, View } from 'react-native';

interface InputProps extends React.ComponentProps<typeof TextInput> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}

export function Input({ label, error, icon, className, ...props }: InputProps) {
    return (
        <View className="mb-4">
            {label && (
                <Text className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                    {label}
                </Text>
            )}
            <View className={cn(
                "flex-row items-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3",
                error && "border-red-500",
                className
            )}>
                {icon && <View className="mr-2">{icon}</View>}
                <TextInput
                    className="flex-1 py-3 text-slate-900 dark:text-white placeholder:text-slate-400"
                    placeholderTextColor="#94a3b8"
                    {...props}
                />
            </View>
            {error && <Text className="mt-1 text-xs text-red-500">{error}</Text>}
        </View>
    );
}
