/**
 * Created by ivanlazarev on 12.10.16.
 */
export default function (state = [], action) {
    switch (action.type){
        case 'FETCH_WEATHER':
            return [ action.payload.data, ...state]; // OR state.concat(action.payload.data) i.e. creating new array and returning it
    }

    return state;
}