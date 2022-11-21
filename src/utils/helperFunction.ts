import RNLocation from 'react-native-location';

// RNLocation.configure({
//     distanceFilter: 5.0
// })


export const getLocationPermission = async () => {
    let permission = await RNLocation.checkPermission({
        ios: 'whenInUse', // or 'always'
        android: {
            detail: 'coarse' // or 'fine'
        }
    });
    if (!permission) {
        permission = await RNLocation.requestPermission({
            ios: "whenInUse",
            android: {
                detail: "coarse",
                rationale: {
                    title: "We need to access your location",
                    message: "We use your location to show where you are on the map",
                    buttonPositive: "OK",
                    buttonNegative: "Cancel"
                }
            }
        })
    }
    return permission
}

export const getLocation = async () => {
    try {
        let location: any;
        location = await RNLocation.getLatestLocation({ timeout: 100 })
        return Promise.resolve({
            latitude: location.latitude,
            longitude: location.longitude
        })
    } catch (error: any) {

    }

}

export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const randomNumber3: any = Math.floor((Math.random() * 1000) + 1)
export const randomNumber2: any = Math.floor((Math.random() * 100) + 1)

export const randomNumber = (digit: any) => {

    if (digit === 1) {
        return Math.floor((Math.random() * 10) + 1)
    } else if (digit === 2) {
        return  Math.floor((Math.random() * 100) + 1)
    } else if (digit === 3) {
        return  Math.floor((Math.random() * 1000) + 1)
    }

}

export function unique(arr: any) {
    return Array.from(new Set(arr));
 }

 export function isValidURL(string: string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  };

  export const isUrl = (string: string) => {
    try { return Boolean(new URL(string)); }
    catch(e){ return false; }
}

export const addNama = (arr: any) => {
    return arr.map((item: any) => {

        return {
            ...item,
            nama: item.name
        }
    })
}
