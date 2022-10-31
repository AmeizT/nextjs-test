import { v4 as uuid } from "uuid"

let data = {
    id: null,
    timestamp: null,
}


Object.defineProperties(data, {
    id: {
        value: uuid(),
        writable: false,
    },

    timestamp: {
        value: new Date(),
        writable: false,
    }
})

export function useObject(data){
    return {
        ...data, 
        set lang(lang) {
            this.language = lang;
        }
    }
}