import * as React from 'react';

import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';

import { ScaleAnimation } from '../animations/ScaleAnimation';
import Text from '../text';
import { ThemeInterface } from '../../../theme/ThemeProvider';
import { WIDTH } from '../../../utils/config';
import useTheme from '../../../theme/useTheme';
import useThemedStyles from '../../../theme/useThemedStyles';

interface ButtonProps {
    title: string;
    onPress: () => void;
    isLoading?: boolean;
    type: "primary" | "secondary" | "contained" | "outlined";
    style?: any;
    width?: number;
    isSmall?: boolean;
}
const Button = ({ title, onPress, isLoading, type, style,width, isSmall,...restOfProps }: ButtonProps) => {
    const theme = useTheme();
    const s = useThemedStyles(styles);

    const mapStyling: any = {
        primary: {
            backgroundColor: theme?.colors.PRIMARY,
            borderColor: 'transparent'
        },
        secondary: {
            backgroundColor: theme?.colors.SECONDARY,
            borderColor: 'transparent'
        },
        disable: {
            backgroundColor: theme?.colors.CARD_BACKGROUND1,
            borderColor: 'transparent'
        },
        outlined: {
            backgroundColor: theme?.colors.BACKGROUND1,
            borderColor: theme?.colors.PRIMARY
        }


    }

    return (
        <ScaleAnimation onPress={onPress} disabled={false} scaleTo={0.97} >
            <View style={[s.ButtonV2, {
                backgroundColor: mapStyling[type as keyof typeof mapStyling].backgroundColor,
                borderWidth: 1,
                borderColor: mapStyling[type as keyof typeof mapStyling].borderColor,
                width: width ?? 'auto',
                paddingVertical: isSmall ? 6 : 12
            }]}
            {...restOfProps}
            >
                {isLoading ? <ActivityIndicator size="small" color={theme?.colors.BACKGROUND1} /> : <Text variant="h5" color={type === 'primary' || type === 'secondary' ? "light" : type === "outlined" ? "active" : "b1" }>{title}</Text>}
            </View>
        </ScaleAnimation>
    );
};

export default Button;

const styles = (theme: ThemeInterface) => StyleSheet.create({
    ButtonV2: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    }
});
