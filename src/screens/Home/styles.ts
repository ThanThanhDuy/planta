import { StyleSheet } from 'react-native'
import { COLOR, FONT_SIZE, FONT_WEIGHT, SIZE } from '../../constant'

const styles = StyleSheet.create({
    containerBg: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 20,
        backgroundColor: COLOR.BG
    },
    container: {
        backgroundColor: COLOR.BG,
        flex: 1
    },
    textBg: {
        fontSize: FONT_SIZE.H1,
        fontWeight: FONT_WEIGHT.BOLD,
        color: COLOR.TEXT_BLACK
    },
    boxIconBg: {
        padding: 12,
        backgroundColor: COLOR.WHITE,
        borderRadius: 100
    },
    iconCart: {
        width: 22,
        height: 22
    },
    textBg2: {
        marginTop: 6
    },
    textViewNewPro: {
        fontSize: 16,
        color: COLOR.PRIMARY,
        marginRight: 8
    },
    boxViewNewPro: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        paddingHorizontal: 24
    },
    containerBoxBg: {
        position: 'relative'
    },
    bgImg: {
        width: SIZE.WIDTH,
        position: 'absolute',
        zIndex: -1,
        top: 55
    }
})

export default styles
