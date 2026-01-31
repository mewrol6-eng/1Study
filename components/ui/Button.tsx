import { cn } from '@/lib/utils';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

interface ButtonProps extends React.ComponentProps<typeof TouchableOpacity> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    label: string;
    loading?: boolean;
    icon?: React.ReactNode;
    textClassName?: string;
}

export function Button({
    variant = 'primary',
    size = 'md',
    label,
    loading,
    icon,
    className,
    textClassName,
    disabled,
    ...props
}: ButtonProps) {
    const baseStyles = "flex-row items-center justify-center rounded-xl transition-all active:scale-95";

    const variants = {
        primary: "bg-primary shadow-lg shadow-primary/20",
        secondary: "bg-slate-100 dark:bg-slate-800",
        outline: "bg-transparent border-2 border-slate-900 dark:border-white",
        ghost: "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800",
    };

    const sizes = {
        sm: "px-3 py-2",
        md: "px-4 py-3",
        lg: "px-6 py-4",
    };

    const textBaseStyles = "font-bold text-center";
    const textVariants = {
        primary: "text-slate-900",
        secondary: "text-slate-900 dark:text-white",
        outline: "text-slate-900 dark:text-white",
        ghost: "text-slate-600 dark:text-slate-400",
    };

    const textSizes = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
    };

    return (
        <TouchableOpacity
            className={cn(
                baseStyles,
                variants[variant],
                sizes[size],
                disabled && "opacity-50",
                className
            )}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? (
                <ActivityIndicator color={variant === 'primary' ? '#000' : '#888'} />
            ) : (
                <>
                    {icon}
                    <Text className={cn(
                        textBaseStyles,
                        textVariants[variant],
                        textSizes[size],
                        icon && "ml-2",
                        textClassName
                    )}>
                        {label}
                    </Text>
                </>
            )}
        </TouchableOpacity>
    );
}
