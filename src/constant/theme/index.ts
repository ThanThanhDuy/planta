import { Dimensions } from 'react-native'

const COLOR = {
    PRIMARY: '#007537',
    HOLDER: '#ABABAB',
    BLACK: '#000000',
    WHITE: '#FFFFFF',
    BG: '#F6F6F6',
    TEXT_BLACK: '#221F1F'
}

const SIZE = {
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height
}

const FONT_SIZE = {
    H1: 24,
    H3: 18,
    SUB: 16,
    BODY: 14
}

type font_weight =
    | '500'
    | '700'
    | '400'
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '600'
    | '800'
    | '900'
    | undefined

interface font_weight_interface {
    MEDIUM: font_weight
    BOLD: font_weight
    REGULAR: font_weight
}

const FONT_WEIGHT: font_weight_interface = {
    MEDIUM: '500',
    BOLD: '700',
    REGULAR: '400'
}

export { COLOR, SIZE, FONT_SIZE, FONT_WEIGHT }
