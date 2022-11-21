import { Dimensions } from "react-native";

export const baseURL:string ='http://66.42.48.163:7777/v1';
export const headers = {
    'Content-Type': 'application/json',
  }

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
export const EVENT_CARD_WIDTH = 329
export const EVENT_CARD_HEIGHT = 160

export const SHADOWS = {
    light: {
        shadowOffset: { width: 0, height: .9 },  
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOpacity: 1,  
        elevation: 3, 
        shadowRadius: 1.22,
    },
    medium: {
        shadowOffset: { width: 0, height: 7 },  
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOpacity: 1,  
        elevation: 3, 
        shadowRadius: 2.22,

    },
    dark: {
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
    default: {
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOffset: { width: 0, height: 3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        elevation: 4
    }
};

