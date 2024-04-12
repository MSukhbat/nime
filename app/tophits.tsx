import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import useSWR from "swr";
import Constants from "expo-constants";

export default function TopHitsScreen() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, isLoading, error } = useSWR(
    "https://kitsu.io/api/edge/anime",
    fetcher
  );

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error...</Text>;

  return (
    // <SafeAreaView style={{ flex: 1 }}>

    <View style={styles.container}>
      <StatusBar style="auto" />

      <FlatList
        style={styles.prou}
        data={data.data}
        // data1={Array.from({ length: 1 })}
        renderItem={({ item }) => (
          <View>
            <View style={styles.column}>
              <View key={item.id} style={styles.itng}>
                <View style={{}}>
                  <View key={item.id} style={{ gap: 10 }}>
                    <View style={{ position: "relative" }}>
                      <Image
                        width={140}
                        height={200}
                        style={{
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                          borderBottomRightRadius: 20,
                          borderBottomLeftRadius: 20,
                        }}
                        source={{ uri: item.attributes.posterImage.original }}
                      />
                      <View
                        style={{
                          borderWidth: 0,
                          borderBlockColor: "none",
                          backgroundColor: "#06C149",
                          borderStyle: "solid",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "absolute",
                          top: 8,
                          left: 16,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                          borderBottomRightRadius: 10,
                          borderBottomLeftRadius: 10,
                        }}
                      >
                        <Text style={{ color: "#FFF" }}>
                          {Math.floor(item.attributes.averageRating)}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    height: 160,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "black",
                      width: 160,
                    }}
                  >
                    {item.attributes.titles.en_jp}
                  </Text>
                  <Text style={{ color: "#424242" }}>2022 | Japan</Text>
                  <Text style={{ color: "#424242" }}>
                    {item.attributes.ageRatingGuide}
                  </Text>
                  <Button title="+ My List" />
                </View>

                <View>
                  <Text style={{}}>{""}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>

    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  prou: {
    padding: 20,
  },
  itng: {
    display: "flex",
    flexDirection: "row",
    width: 400,
    justifyContent: "space-between",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
});
