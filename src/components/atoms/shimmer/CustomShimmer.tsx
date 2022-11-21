import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { ThemeInterface } from '../../../theme/ThemeProvider';
import useTheme from '../../../theme/useTheme';
import useThemedStyles from '../../../theme/useThemedStyles'; import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import { WIDTH } from '../../../utils/config';


interface EventCardShimmerProps {
    isHorizontal?: boolean
}

const CustomShimmer = ({ isHorizontal }: EventCardShimmerProps) => {

    const theme = useTheme();
    const style = useThemedStyles(styles);
    return (
        <>
            <View style={{ alignSelf: 'center' }}>
                {isHorizontal ? <ShimmerPlaceHolder
                    LinearGradient={LinearGradient}
                    style={style.shimmer}
                />

                    :

                    [0, 1, 2, 3, 4, 5, 6, 7, 8].map((item: any) => (
                        <ShimmerPlaceHolder
                            key={item}
                            LinearGradient={LinearGradient}
                            style={[style.shimmer, {
                                marginVertical: 8
                            }]}
                        />

                    ))}
            </View>
        </>
    );
};

export default CustomShimmer;

const styles = (theme: ThemeInterface) => StyleSheet.create({
    shimmer: {
        width: WIDTH - 16,
        height: 80,
        borderRadius: 8
    }
});
