import { HapticTab } from '@/components/haptic-tab';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const activeColor = '#13ecc8'; // Primary color
  const inactiveColor = '#94a3b8'; // Slate 400

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            elevation: 0,
            paddingBottom: 0, // Centered icons
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.25,
            shadowRadius: 10,
          },
          default: {
            position: 'absolute',
            bottom: 20,
            left: 20,
            right: 20,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            elevation: 10,
            paddingBottom: 0,
          },
        }),
        tabBarBackground: () => (
          Platform.OS === 'ios' ? (
            <View style={[StyleSheet.absoluteFill, { borderRadius: 35, overflow: 'hidden' }]}>
              <BlurView intensity={40} style={StyleSheet.absoluteFill} tint="light" />
              <View className="absolute inset-0 bg-white/60 dark:bg-slate-900/80" />
            </View>
          ) : (
            <View className="absolute inset-0 bg-white/90 dark:bg-slate-900/95 rounded-[35px] border border-white/20 dark:border-slate-800/50 shadow-2xl" />
          )
        ),
        tabBarItemStyle: {
          paddingTop: 10, // Center vertically
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Обзор',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <View className={`items-center justify-center size-12 rounded-full transition-all ${focused ? 'bg-primary/10 scale-110' : ''}`}>
              <MaterialIcons size={28} name="grid-view" color={color} />
              {focused && <View className="absolute -bottom-2 size-1 rounded-full bg-primary" />}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          title: 'Занятия',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <View className={`items-center justify-center size-12 rounded-full transition-all ${focused ? 'bg-primary/10 scale-110' : ''}`}>
              <MaterialIcons size={28} name="school" color={color} />
              {focused && <View className="absolute -bottom-2 size-1 rounded-full bg-primary" />}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Профиль',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <View className={`items-center justify-center size-12 rounded-full transition-all ${focused ? 'bg-primary/10 scale-110' : ''}`}>
              <MaterialIcons size={28} name="person" color={color} />
              {focused && <View className="absolute -bottom-2 size-1 rounded-full bg-primary" />}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
