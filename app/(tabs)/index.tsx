import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Home } from "lucide-react-native";
import React from "react";
import { Image } from "react-native";

export default function HomeScreen() {
  return (
    <Box className="flex-1 bg-error-500 px-6 pt-10">
      <VStack className="flex-1 justify-between">
        {/* Header */}
        <HStack className="items-center gap-2">
          <Icon as={Home} size="lg" className="text-typography-900" />
          <Text className="text-xl font-semibold text-typography-900">
            Welcome
          </Text>
        </HStack>

        {/* Middle: image + chip */}
        <Center>
          <Box className="mb-4">
            <Image
              source={require("../../assets/coffee-shop.png")}
              style={{ width: 260, height: 180, resizeMode: "contain" }}
            />
          </Box>
        </Center>

        {/* Bottom: title, subtitle, button */}
        <VStack className="mb-8 space-y-4">
          <VStack className="items-center space-y-1">
            <Text className="text-3xl font-extrabold text-typography-400 text-center">
              CoffeePreorder
            </Text>
            <Text className="text-sm text-typography-400 text-center">
              Order your favorite coffee effortlessly
            </Text>
          </VStack>

          <Button className="bg-info-500 rounded-full h-12 items-center justify-center">
            <Text className="text-typography-0 text-md font-semibold">
              Order now
            </Text>
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}
