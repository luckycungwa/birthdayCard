import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

//   IMPORT IMAGES FOR Randomised background spice up

const BirthdayCard = () => {
  const backgroundImages = [
    require("../assets/00.jpg"),
    require("../assets/01.jpg"),
    require("../assets/02.jpg"),
    require("../assets/03.jpg"),
    require("../assets/04.jpg"),
    require("../assets/05.jpg"),
    require("../assets/07.jpg"),
  ];
  const [greeting, setGreeting] = useState(
    "Even if you can’t escape growing old, that doesn’t mean you have to act your age! Live it up while you can, friend! Happy birthday."
  ); //customized message
  const [activeBG, setActiveBG] = useState(backgroundImages[0]); //initialize images

  const randomizeImage = () => {
    console.log("selected image: " + activeBG);
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setActiveBG(backgroundImages[randomIndex]);
  };

  const handleInputChange = (text) => {
    setGreeting(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digital Birthday Card</Text>
      <TextInput
        style={styles.input}
        placeholder="Type in a birthday message..."
        onChangeText={handleInputChange}
        value={greeting}
      />

      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image source={activeBG} style={styles.cardImg} resizeMode="cover" />
          <View style={styles.imageText}>
            <Text style={styles.mainText}>40</Text>
          </View>
        </View>
        <View>
          <Text style={styles.cardHeading}>Happy Birthday!</Text>
        </View>

        {/* <View style={styles.imgContainer}>
          <Image
            style={styles.cardImg}
            source={{
              uri: "https://images.pexels.com/photos/4252892/pexels-photo-4252892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
        </View> */}

        <Text style={styles.cardText}>
          {greeting || "Type in a birthday message!"}
        </Text>
      </View>
      <TouchableOpacity style={styles.clearBtn} onPress={randomizeImage}>
        <Text>Randomize Image</Text>
      </TouchableOpacity>
      {/* <Button title="Randomize Image" onPress={randomizeImage} /> */}
      <View style={styles.actionContainer}>
        {/* <Button title="Clear" onPress={() => setGreeting("")} /> */}
        <TouchableOpacity
          onPress={() => setGreeting("")}
          style={styles.clearBtn}
        >
          <Text style={styles.ctaText}>CLEAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  cardText: {
    fontSize: 18,
    textAlign: "center",
    alignContent: "center",
  },
  mainText: {
    fontSize: 72,
    fontWeight: "bold",
  },
  card: {
    borderWidth: 2,
    borderColor: "#242424",
    borderRadius: 10,
    padding: 20,
    width: "auto",
    height: "50%",
    marginBottom: 20,
    backgroundColor: "#f2f2f2",
  },
  cardHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    alignContent: "center",
  },
  card2: {
    borderWidth: 2,
    borderColor: "#007f83",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    marginBottom: 20,
  },
  cardImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 10,
  },

  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 150,
    // backgroundColor: "#ff0",
    marginBottom: 24,
  },
  imageText: {
    width: 50,
    height: 50,

    fontSize: 40,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  clearBtn: {
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: 34,
  },
  actionContainer: {
    width: 250,
    height: 40,
    justifyContent: "center",
    backgroundColor: "#8880ff",
    borderRadius: 24,
    marginTop: 12,
  },
  ctaText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  randomBtn: {
    marginTop: 12,
    marginBotton: 24,
    backgroundColor: "#fffa714",
  },
});

export default BirthdayCard;
