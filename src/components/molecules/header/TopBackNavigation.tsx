import * as React from 'react';

import { Image, StyleSheet, TouchableHighlight, TouchableOpacity, View } from "react-native";


import { useNavigation } from "@react-navigation/native"
import useTheme from "../../../theme/useTheme";
import useThemedStyles from "../../../theme/useThemedStyles";
import { ArrowLeft2, Lovely, Map1 } from 'iconsax-react-native';
import Text from '../../atoms/text';
import { WIDTH } from '../../../utils/config';

interface Props {
    title?: any;
    onBack: () => void;
}

const TopBackNavigation = ({
    title,
    onBack
}: Props) => {

    const theme = useTheme();
    const s = useThemedStyles(styles);
    return (
        <>
  
                <View style={[s.container, { justifyContent: 'space-between', paddingRight: WIDTH * .05 }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableHighlight
                            underlayColor={theme?.colors.SECONDARY}
                            style={s.backButton}
                            onPress={onBack}>
                            <ArrowLeft2 color={theme?.colors.PRIMARY} size={20} />
                        </TouchableHighlight>
                        <View style={{ paddingLeft: 4 }}>
                         <Text variant="title1" color="primary">{title}</Text>
                        </View>
                    </View>


                </View>
        
        </>
    )
}

export default TopBackNavigation;

const styles = (theme: any) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        height: 50,
        paddingLeft: 8,
        justifyContent: 'space-between',
    },
    backButton: {
        borderRadius: 6,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    pills: {
        marginRight: 8,
        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
});