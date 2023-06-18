import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from 'react-native'
import React, { useState } from 'react'
import { COLOR, LOGIN_IMG } from '../../constant'
import styles from './styles'

const Login = () => {
    const [focus, setFocus] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')

    const handleFocus = () => {
        setFocus(true)
    }

    const handleBlur = () => {
        setFocus(false)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                style={{ flex: 1 }}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'space-evenly'
                    }}
                >
                    <View>
                        <View style={styles.containerBgHeader}>
                            <View style={styles.containerBg}>
                                <Image source={LOGIN_IMG} />
                            </View>
                        </View>
                        <Text style={styles.textTitle}>Planta</Text>
                        <View style={styles.textDesBox}>
                            <Text style={[styles.textDes]}>
                                Mua sắm và trải nghiệm sản phẩm cây trồng cùng
                                phụ kiện độc đáo duy nhất tại Việt Nam
                            </Text>
                        </View>
                        <View style={styles.textInputBox}>
                            <TextInput
                                placeholder="Email"
                                style={[
                                    styles.textInputEmail,
                                    {
                                        borderBottomColor: email
                                            ? COLOR.BLACK
                                            : focus
                                            ? COLOR.BLACK
                                            : COLOR.HOLDER,
                                        color: email
                                            ? COLOR.BLACK
                                            : focus
                                            ? COLOR.BLACK
                                            : COLOR.HOLDER
                                    }
                                ]}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onChange={e => setEmail(e.nativeEvent.text)}
                                value={email}
                            />
                            <Pressable
                                disabled={!email}
                                style={({ pressed }) => [
                                    {
                                        backgroundColor: email
                                            ? COLOR.BLACK
                                            : COLOR.HOLDER,
                                        opacity: pressed ? 0.7 : 1
                                    },
                                    styles.btn
                                ]}
                            >
                                <Text style={styles.textBtn}>
                                    Đăng nhập / Đăng ký
                                </Text>
                            </Pressable>
                            <Text style={styles.textOther}>
                                Chưa phải bây giờ
                            </Text>
                        </View>
                    </View>
                    <View style={{ height: 160 }}></View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Login
