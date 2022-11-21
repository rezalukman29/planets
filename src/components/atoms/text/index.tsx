import * as React from 'react';

import { Text as RNText, StyleSheet, View } from 'react-native';

import { ThemeInterface } from '../../../theme/ThemeProvider';
import useTheme from '../../../theme/useTheme';
import useThemedStyles from '../../../theme/useThemedStyles';

interface TextPropsI {
    variant: string;
    children: string;
    color: any;
    style?: any
}

const Text = ({ variant, children, color, style, ...restOfProps }: TextPropsI) => {

    const theme = useTheme();
    const styling = useThemedStyles(styles);

    const mapFont: any = {
        700: "SourceSansPro-Bold",
        600: 'SourceSansPro-SemiBold',
        500: 'SourceSansPro-Regular',
        400: 'SourceSansPro-Regular',
        300: 'SourceSansPro-Light',
    }

    const mapStyles: any = {
        h1: {
            fontSize: 20,
            lineHeight: 30,
            fontFamily: mapFont[700]
        },
        h2: {
            fontSize: 20,
            lineHeight: 16,
            fontFamily: mapFont[400]
        },
        h3: {
            fontSize: 16,
            lineHeight: 16,
            fontFamily: mapFont[700]
        },
        h4: {
            fontSize: 16,
            lineHeight: 22,
            fontFamily: "Nunito-Bold"
        },
        h5: {
            fontSize: 14,
            lineHeight: 16,
            fontFamily: mapFont[700]
        },
        title1: {
            fontSize: 18,
            lineHeight: 27,
            fontFamily: mapFont[700]
        },
        title2: {
            fontSize: 14,
            lineHeight: 16,
            fontFamily: mapFont[400],
        },
        title3: {
            fontSize: 14,
            lineHeight: 16,
            fontFamily: mapFont[600],
        },
        title4: {
            fontSize: 14,
            lineHeight: 21,
            fontFamily: mapFont[400],
        },
        title5: {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: mapFont[400],
        },
        title6: {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: mapFont[600],
        },
        title7: {
            fontSize: 14,
            lineHeight: 21,
            fontFamily: mapFont[700],
        },
        subtitle1: {
            fontSize: 12,
            lineHeight: 16,
            fontFamily: mapFont[600]
        },
        subtitle2: {
            fontSize: 12,
            lineHeight: 16,
            fontFamily: mapFont[400]
        },
        body1: {
            fontSize: 12,
            lineHeight: 16,
            fontFamily: "SourceSansPro-Regular"
        },
        body2: {
            fontSize: 12,
            lineHeight: 16,
            fontFamily: mapFont[700]
        },
        body3: {
            fontSize: 12,
            lineHeight: 16,
            fontFamily: mapFont[600]
        },
        button: {
            fontSize: 14,
            lineHeight: 20,
            fontFamily: "Nunito-Black"
        },
        overline: {
            fontSize: 14,
            lineHeight: 20,
            fontFamily: "Nunito-Black"
        },
        number: {
            fontSize: 16,
            lineHeight: 16,
            fontFamily: mapFont[600]
        },
        light1: {
            fontSize: 14,
            lineHeight: 21,
            fontFamily: mapFont[300]
        },
        light2: {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: mapFont[400]
        },
        light3: {
            fontSize: 14,
            lineHeight: 20,
            fontFamily: mapFont[400]
        },

    }



    const mapColor: any = {
        primary: {
            color: theme?.colors.TEXT_PRIMARY,
        },
        secondary: {
            color: theme?.colors.TEXT_SECONDARY
        },
        label: {
            color: theme?.colors.TEXT_LABEL
        },
        light: {
            color: theme?.colors.LIGHT
        },
        black: {
            color: "#353535"
        },
        danger: {
            color: theme?.colors.DANGER
        },
        b1: {
            color: "#232323"
        },
        b7: {
            color: '#6B6B6B'
        },
        active: {
            color: theme?.colors.PRIMARY,
        },
        inActive: {
            color: '#CBCBCB'
        },
        primary2: {
            color: theme?.colors.SECONDARY,
        },
        b6: {
            color: theme?.colors.TEXT_QTY
        },
        b4: {
            color: "#CBCBCB"
        },

    }

    return (
        <View style={styling.container}>
            <RNText
                style={{
                    fontSize: mapStyles[variant as keyof typeof mapStyles].fontSize,
                    lineHeight: mapStyles[variant as keyof typeof mapStyles].lineHeight,
                    fontFamily: mapStyles[variant as keyof typeof mapStyles].fontFamily,
                    color: mapColor[color as keyof typeof mapStyles].color,
                }}
                {...restOfProps}
                >{children}</RNText>
        </View>
    );
};

export default Text;

const styles = (theme: ThemeInterface) => StyleSheet.create({
    container: {}
});
