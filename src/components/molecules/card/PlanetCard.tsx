import * as React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, UIManager, LayoutAnimation, Platform } from 'react-native';
import { ThemeInterface } from '../../../theme/ThemeProvider';
import useTheme from '../../../theme/useTheme';
import useThemedStyles from '../../../theme/useThemedStyles';
import { SHADOWS, WIDTH } from '../../../utils/config';
import { EntryAnimation } from '../../atoms/animations/EntryAnimation';
import Button from '../../atoms/button';
import Spacer from '../../atoms/spacer/Spacer';
import Text from '../../atoms/text';

interface PlanetProps {
    index: number;
    item: any;
    onSelect: (item: any) => void;
    onWishlist: (item: any, isAdded: boolean) => void;
    selected: boolean
}

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

const PlanetCard = ({
    index,
    item,
    onSelect,
    onWishlist,
    selected
}: PlanetProps) => {

    const theme = useTheme();
    const s = useThemedStyles(styles);

    const [open, setopen] = React.useState(false);
    const onPress = () => {
        LayoutAnimation.configureNext({
            duration: 300,
            update: {
                type: 'easeInEaseOut',
            },
        });
        setopen(!open);
    };



    return (
        <EntryAnimation index={index}>
            <TouchableOpacity style={s.container} onPress={onPress}>
                <View style={{
                    width: 12,
                    backgroundColor: theme?.colors.SECONDARY,
                    borderBottomLeftRadius: 8,
                    borderTopLeftRadius: 8
                }}>

                </View>
                <View style={{ padding: 12, }}>
                    <Text variant="title3" color="primary">{item.name}</Text>
                    <Spacer s />
                    <View style={s.item}>
                        <Text variant="title2" color="b7">Diameter : </Text>
                        <Text variant="title4" color="primary">{item.diameter}</Text>
                    </View>
                    {open &&
                        <>
                            <View style={s.item}>
                                <Text variant="title2" color="b7">Population : </Text>
                                <Text variant="title4" color="primary">{item.population}</Text>
                            </View>
                            <View style={s.item}>
                                <Text variant="title2" color="b7">Gravity : </Text>
                                <Text variant="title4" color="primary">{item.gravity}</Text>
                            </View>
                            <Spacer s/>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: WIDTH / 1.5, justifyContent: 'space-between', }}>
                                <Button
                                    title="Wishlist"
                                    onPress={() => onWishlist(item, selected ? false : true)}
                                    isLoading={false}
                                    type={selected ? "primary" : "outlined"}
                                    width={100}
                                    isSmall
                                />

                                <Button
                                    title="Detail"
                                    onPress={() => { }}
                                    isLoading={false}
                                    type="secondary"
                                    width={100}
                                    isSmall
                                />

                            </View>
                        </>
                    }

                </View>
            </TouchableOpacity>
        </EntryAnimation>
    );
};

export default PlanetCard;

const styles = (theme: ThemeInterface) => StyleSheet.create({
    container: {

        marginVertical: 8,
        ...SHADOWS.medium,
        backgroundColor: theme.colors.BACKGROUND1,
        marginHorizontal: 4,
        borderRadius: 8,
        flexDirection: 'row',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
