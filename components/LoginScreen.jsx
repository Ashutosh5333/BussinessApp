import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser"
import * as WebBrowser from "expo-web-browser"
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession()


export const LoginScreen = () => {
    useWarmUpBrowser()
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" })

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow()

            if (createdSessionId) {
                setActive({ session: createdSessionId })
            } else {
                //  sign in method
            }
        }
        catch (err) {
            console.error("OAuth Error", err)
        }
    }, [])


    return (
        <View>
            {/* <Text>LoginScreen</Text> */}
            <View style={{
                display: "flex",
                alignItems: "center",
                marginTop: 10
            }}>
                <Image
                    source={require("./../assets/images/LoginScreen.jpg")}
                    style={{
                        width: 220,
                        height: 450,
                        borderRadius: 20, borderWidth: 6,
                        borderColor: "#000"
                    }}
                />
            </View>

            {/* ============= */}
            <View style={styles.subContainer}>
                <Text style={{
                    fontSize: 30,
                    fontFamily: "outfit-bold",
                    textAlign: "center", paddingLeft: 10
                }}>Your Ultimate {" "}

                    <Text style={{ color: Colors.PRIMARY }}>Community Bussiness Directory </Text>
                    App
                </Text>
                <Text style={{
                    fontSize: 15, fontFamily: "outfit",
                    textAlign: "center",
                    marginVertical: 15
                }}>Find your favorite Bussiness
                    near your and post your own business to your community
                </Text>

                <TouchableOpacity style={styles.btn}
                 onPress={onPress}
                >
                    <Text style={{
                        textAlign: "center",
                        color: "#fff",
                        fontFamily: "outfit"
                    }}> Let's Get Started</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    subContainer: {
        backgroundColor: "#fff",
        padding: 20,
        marginTop: -20,
        color: Colors.Gray
    },
    btn: {
        backgroundColor: Colors.PRIMARY
        , padding: 16,
        borderRadius: 99,
        marginTop: 20
    }
})
export default LoginScreen;
