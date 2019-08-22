import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const weatherOption = {
    Haze: {
        iconName: "weather-fog",
        gradient: ["#77A1D3", "#79CBCA", "#E684AE"],
        title: "Haze~~~~~~~~~~",
        subtitle: "안개다~"

    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#4776E6", "#8E54E9"],
        title: "Thunderstorm~~~",
        subtitle: "번개 우르르 쾅쾅~"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#928DAB", "#1F1C2C"],
        title: "Drizzle",
        subtitle: "이슬비~~~"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#85D8CE", "#085078"],
        title: "Rainy~~~",
        subtitle: "비온닷ㅅㅅㅅㅅ"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#1FA2FF", "#12D8FA", "#A6FFCB"],
        title: "Snowy",
        subtitle: "눈이닷ㅅㅅㅅㅅ~~~"
    },
    Atmosphere: {
        iconName: "weather-partlycloudy",
        gradient: ["#2BC0E4", "#EAECC6"],
        title: "Atmoshpere??~",
        subtitle: "분귀기??~~?"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#EDE574", "#E1F5C4"],
        title: "Clear",
        subtitle: "햇빛 쨍쨍~~~"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#232526", "#232526"],
        title: "Cloudy",
        subtitle: "구름꼇다~~~"
    },
    Mist: {
        iconName: "weather-rainy",
        gradient: ["#D7DDE8", "#757F9A"],
        title: "Mist~~",
        subtitle: "미스트 샤워~~"
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#003973", "#E5E5BE"],
        title: "Dust",
        subtitle: "미세먼지 fuck~~"
    }
}
export default function Weather({ temp, condition, local }) {
    return (
        <LinearGradient
            colors={weatherOption[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <Text style={styles.local}>{local}</Text>
                <MaterialCommunityIcons
                    size={96}
                    name={weatherOption[condition].iconName}
                    color="white" />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <View>
                    <Text style={styles.title}>{weatherOption[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOption[condition].subtitle}</Text>
                </View>
            </View>
        </LinearGradient>
    )
}


Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired,
    local: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    },
    local: {
        fontWeight: "300",
        fontSize: 30,
        color: "white"
    }
});