import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.064,
    backgroundColor: "#f7d102",
  },
  headerOne: {
    height: height * 0.064,
    width: "80%",
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: "3%",
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
  },
  image: {
    width: 30,
    height: 30,
  },
  headerOneView: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    borderLeftWidth: 2,
    borderLeftColor: "#f3f2fd",
    paddingLeft: 8,
  },
  textView: {
    width: width - 210,
  },
  headerTwo: {
    height: height * 0.064,
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginLeft: 15,
  },
});

export default styles;
