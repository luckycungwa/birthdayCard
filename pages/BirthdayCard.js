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
    "Dear, Jane & John Doe Twins, Even if you can’t escape growing old, that doesn’t mean you have to act your age! Live it up while you can, friends! Happy birthday."
  ); //customized message
  const [activeBG, setActiveBG] = useState(backgroundImages[0]); //initialize images
  const [ageValue, setAgeValue] = useState(""); //states for age values

  const randomizeImage = () => {
    console.log("selected image: " + activeBG);
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setActiveBG(backgroundImages[randomIndex]);
  };

  //   Handl the birthday message
  const handleInputChange = (text) => {
    setGreeting(text);
   
  };
  //   handle the age input (integer)
  const handleAgeInput = (age) => {
    // Validate the input to ensure it's a number and within the desired range
    const numValue = parseInt(age);
    // no one is older than 200 lol | cap and <=0 && <=200 (numbers only resttriction)
    if (!isNaN(numValue) && numValue >= 0 && numValue <= 200) {
      setAgeValue(age);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digital Birthday Card</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type in a birthday message..."
          onChangeText={handleInputChange}
          value={greeting}
          maxLength={200} //limitt to 200charcters to avoid ovelapping.
        />
        {/* <Button title="Clear" onPress={() => setGreeting("")} /> */}

        <TouchableOpacity
          onPress={() => setGreeting("")}
          style={styles.clearBtn}
        >
          <Text style={styles.clearBtn}>clear</Text>
        </TouchableOpacity>
        {/* <Button title="Randomize Image" onPress={randomizeImage} /> */}
      </View>

      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image source={activeBG} style={styles.cardImg} resizeMode="cover" />
          <View style={styles.imageText}>
            <TextInput
              style={styles.mainText}
              onChangeText={handleAgeInput}
              keyboardType="numeric" //accept numerics only
              maxLength={3} //limit to 3 degit years (200)
              value={ageValue}
              placeholder="1"
            />
            {/* <Text style={styles.supText}>th</Text> */}
            {/* <Text style={styles.mainText}>40</Text>     //make dynamic later */}
          </View>
        </View>
        <View>
          <Text style={styles.cardHeading}>Happy Birthday!</Text>
        </View>

        {/* <View style={styles.imgContainer}>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.pexels.com/photos/4252892/pexels-photo-4252892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
        </View> */}

        <Text style={styles.cardText}>
          {greeting || "Type in a birthday message!"}
        </Text>
        {/* Download icon */}
        <View style={styles.iconContainer}>
          <Image
            style={styles.saveIcon}
            source={{
              uri: "https://thenounproject.com/api/private/icons/1044722/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0",
            }}
          />
        </View>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.ctaBtnrBtn} onPress={randomizeImage}>
          <Text style={styles.cardText}>Randomize Image</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.userTips}>Change message: Type in inputfield</Text>
        <Text style={styles.userTips}>Change Age: Click on the number</Text>
        <Text style={styles.userTips}>
          Change Background image: Click 'Randomize Image'
        </Text>
        <Text style={styles.userTips}>
          Download or Share Birthday Card: Click share Icon
        </Text>
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
    // width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "auto",
    height: 40,
    borderColor: "#363636",
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
    fontWeight: 800,
    width: 140,
    textAlign: "center",
    alignContent: "center",
    color: "#2c2c2c",
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
    width: "auto",
    height: 50,
    fontSize: 40,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  clearBtn: {
    fontSize: 14,
    letterSpacing: 0.8,
    alignContent: "center",
    textAlign: "center",
    justifyContent: "center",
    height: 40,
    height: 40,
    backgroundColor: "#ffb380",
    borderRadius: 50,
    padding: 8,
    marginLeft: 0,
  },
  ctaBtn: {
    backgroundColor: "#ff9b21",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: 34,
    marginHorizontal: 24,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionContainer: {
    width: 250,
    height: 40,
    justifyContent: "center",
    backgroundColor: "#ffb380",
    borderRadius: 24,
    marginTop: 12,
  },
  ctaText: {
    fontSize: 24,
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
  // Not active because might have to change dynamically (2nd, 5th, 3rd)
  supText: {
    fontSize: 16,
    fontWeight: "bold",
    position: "absolute",
    top: 0,
    right: -6,
  },
  iconContainer: {
    height: 32,
    width: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    position: "absolute",
    borderWidth: 2,
    borderColor: "#1e1e1e",
    bottom: 12,
    right: 12,
    borderRadius: 100,
  },
  saveIcon: {
    width: 30,
    height: 30,
    zIndex: 4,
  },
  userTips: {
    fontSize: 12,
    textAlign: "left",
    fontWeight: 100,
    letterSpacing: 0.8,
    marginVertical: 2,
    bottom: 0,
    justifyContent: "space-between",
  },
  tipContainer: {
    marginTop: 24,
  },
});

export default BirthdayCard;
