import * as React from 'react';

import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';

import { ScaleAnimation } from '../animations/ScaleAnimation';
import Text from '../text';
import { ThemeInterface } from '../../../theme/ThemeProvider';
import { WIDTH } from '../../../utils/config';
import useTheme from '../../../theme/useTheme';
import useThemedStyles from '../../../theme/useThemedStyles';

interface BoxProps {
    children: JSX.Element
}
const Box = ({ children }: BoxProps) => {
    const theme = useTheme();
    const s = useThemedStyles(styles);

    return (
        <View style={s.container}>
            {children}
        </View>
    );
};

export default Box;

const styles = (theme: ThemeInterface) => StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        width: '100%'
    }
});
