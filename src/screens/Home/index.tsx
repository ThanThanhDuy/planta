import { SafeAreaView, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { Feather, AntDesign } from '@expo/vector-icons'
import { COLOR, HOME_BG } from '../../constant'

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerBoxBg}>
                <View style={styles.containerBg}>
                    <View>
                        <Text style={styles.textBg}>Planta - tỏa sáng</Text>
                        <Text style={[styles.textBg, styles.textBg2]}>
                            Không gian nhà bạn
                        </Text>
                    </View>
                    <Pressable style={styles.boxIconBg}>
                        <Feather
                            name="shopping-cart"
                            size={22}
                            color={COLOR.TEXT_BLACK}
                        />
                    </Pressable>
                </View>
                <Pressable style={styles.boxViewNewPro}>
                    <Text style={styles.textViewNewPro}>Xem hàng mới về</Text>
                    <AntDesign
                        name="arrowright"
                        size={22}
                        color={COLOR.PRIMARY}
                    />
                </Pressable>
                <Image source={HOME_BG} style={styles.bgImg} />
            </View>
            <View></View>
        </SafeAreaView>
    )
}

export default Home
