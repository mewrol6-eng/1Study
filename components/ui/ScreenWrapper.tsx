import { StatusBar } from 'expo-status-bar';
import { cn } from 'nativewind';
import { SafeAreaView, View } from 'react-native';

interface ScreenWrapperProps extends React.ComponentProps<typeof View> {
    bg?: string;
    safeArea?: boolean;
}

export function ScreenWrapper({
    children,
    bg = "bg-background-light dark:bg-background-dark",
    safeArea = true,
    className,
    ...props
}: ScreenWrapperProps) {
    const Container = safeArea ? SafeAreaView : View;

    return (
        <Container className={cn("flex-1", bg, className)} {...props}>
            <StatusBar style="auto" />
            {children}
        </Container>
    );
}
