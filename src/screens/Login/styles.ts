import { StyleSheet } from 'react-native'
import { COLOR, FONT_SIZE, FONT_WEIGHT } from '../../constant'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerBg: {
        backgroundColor: COLOR.BG
    },
    containerBgHeader: {
        backgroundColor: COLOR.BG
    },
    textTitle: {
        fontSize: 36,
        fontWeight: FONT_WEIGHT.BOLD,
        textAlign: 'center',
        marginTop: 17,
        color: COLOR.PRIMARY
    },
    textDesBox: {
        alignItems: 'center',
        marginTop: 15
    },
    textDes: {
        textAlign: 'center',
        fontSize: FONT_SIZE.BODY,
        letterSpacing: 0.2,
        width: 300,
        lineHeight: 26
    },
    textInputBox: {
        alignItems: 'center',
        marginTop: 25
    },
    textInputEmail: {
        borderBottomWidth: 1,
        width: 300,
        fontSize: FONT_SIZE.SUB,
        paddingBottom: 5
    },
    btn: {
        width: 300,
        height: 50,
        marginTop: 20,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        fontSize: FONT_SIZE.SUB,
        fontWeight: '600',
        color: COLOR.WHITE
    },
    textOther: {
        fontSize: FONT_SIZE.SUB,
        marginTop: 15,
        textDecorationLine: 'underline'
    }
})

export default styles
