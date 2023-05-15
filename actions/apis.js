import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import moment from "moment";

// const baseUrl = 'http://127.0.0.1:8000/v1/';
const baseUrl = 'https://apis.getcustomer.live/v1/';


export async function login(payloads) {
    return await new Promise(async (onResolve, onReject) => {
        await axios.post(
            `${baseUrl}hum_saath/login/`,
                payloads,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    // 'Authorization': `Token ${localStorage.getItem("token")}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}


// export async function getNearByShopsAPI(page) {
//     return await new Promise(async (onResolve, onReject) => {
//         let auth_token = null;
//         try {
//             auth_token = await AsyncStorage.getItem('@token')
//         } catch (e) {"token problem: ", console.log(e)};
//         await axios.get(
//             `${baseUrl}getNearByShops?page=${page}&recordsPerPage=10&radius=50`,
//             {
//                 headers: {
//                     'Content-Type': "application/json",
//                     'Accept': "application/json",
//                     'Authorization': `Token ${auth_token}`
//                 }
//             }
//         )
//             .then(res => onResolve(res))
//             .catch(err => onReject(err));
//     });
// }


export async function checkAuthAPI() {
    return await new Promise(async (onResolve, onReject) => {
        let auth_token = null;
        try {
            auth_token = await AsyncStorage.getItem('@token');
        } catch (e) {"token problem: ", console.log(e)};
        await axios.get(
            `${baseUrl}hum_saath/checkAuth/`,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': `Token ${auth_token}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}


export async function getStateOptionsAPI() {
    return await new Promise(async (onResolve, onReject) => {
        let auth_token = null;
        try {
            auth_token = await AsyncStorage.getItem('@token');
        } catch (e) {"token problem: ", console.log(e)};
        await axios.get(
            `${baseUrl}hum_saath/getStateOptions/`,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': `Token ${auth_token}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function getDistrictOptionsAPI(id) {
    return await new Promise(async (onResolve, onReject) => {
        let auth_token = null;
        try {
            auth_token = await AsyncStorage.getItem('@token');
        } catch (e) {"token problem: ", console.log(e)};
        await axios.get(
            `${baseUrl}hum_saath/getDistrictOptions/${id}/`,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': `Token ${auth_token}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function getVidhanSabhaOptionsAPI(id) {
    return await new Promise(async (onResolve, onReject) => {
        let auth_token = null;
        try {
            auth_token = await AsyncStorage.getItem('@token');
        } catch (e) {"token problem: ", console.log(e)};
        await axios.get(
            `${baseUrl}hum_saath/getVidhanSabhaOptions/${id}/`,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': `Token ${auth_token}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function getSectorOptionsAPI(id) {
    return await new Promise(async (onResolve, onReject) => {
        let auth_token = null;
        try {
            auth_token = await AsyncStorage.getItem('@token');
        } catch (e) {"token problem: ", console.log(e)};
        await axios.get(
            `${baseUrl}hum_saath/getSectorOptions/${id}/`,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': `Token ${auth_token}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function getButhOptionsAPI(id) {
    return await new Promise(async (onResolve, onReject) => {
        let auth_token = null;
        try {
            auth_token = await AsyncStorage.getItem('@token');
        } catch (e) {"token problem: ", console.log(e)};
        await axios.get(
            `${baseUrl}hum_saath/getButhOptions/${id}/`,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': `Token ${auth_token}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}

export async function getVillageOptionsAPI(id) {
    return await new Promise(async (onResolve, onReject) => {
        let auth_token = null;
        try {
            auth_token = await AsyncStorage.getItem('@token');
        } catch (e) {"token problem: ", console.log(e)};
        await axios.get(
            `${baseUrl}hum_saath/getVillageOptions/${id}/`,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': `Token ${auth_token}`
                }
            }
        )
            .then(res => onResolve(res))
            .catch(err => onReject(err));
    });
}