import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import React, { useRef, useState } from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/dimensions";

type ImageCarouselProps = {
  images: string[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = useRef((viewableItems: any) => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveIndex(viewableItems.viewableItems[0].index || 0);
    }
  });
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        style={{ width: SCREEN_WIDTH * 0.5, height: SCREEN_HEIGHT * 0.18 }}
        renderItem={(item) => (
          <Image source={{ uri: item.item }} style={styles.image} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SCREEN_WIDTH * 0.5}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      ></FlatList>
      <View style={styles.dots}>
        {images?.map((image, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? "#5D3EBD" : "#F2F0FD",
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: SCREEN_HEIGHT * 0.25,
    backgroundColor: "white",
    paddingTop: 15,
  },
  image: {
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_HEIGHT * 0.21,
    resizeMode: "stretch",
  },
  dots: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 20,
    marginVertical: 2,
    marginHorizontal: 5,
  },
});
