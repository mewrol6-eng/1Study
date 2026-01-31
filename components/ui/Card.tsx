import { cn } from '@/lib/utils';
import { View } from 'react-native';

interface CardProps extends React.ComponentProps<typeof View> {
    variant?: 'default' | 'outline' | 'elevated';
}

export function Card({ variant = 'default', className, ...props }: CardProps) {
    const variants = {
        default: "bg-white dark:bg-card-dark rounded-xl",
        outline: "bg-transparent border border-slate-200 dark:border-slate-800 rounded-xl",
        elevated: "bg-white dark:bg-card-dark rounded-xl shadow-lg shadow-slate-200/50 dark:shadow-none",
    };

    return (
        <View className={cn("p-4", variants[variant], className)} {...props} />
    );
}
