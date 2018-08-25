

export const LOAD_DATA = 'API/Load'
export const DOWNLOAD_DATA = 'API/Upload'
export const INIT_STATE = 'DISPLAY/INIT'


export function getData(data){
    return { type: DOWNLOAD_DATA, res: data }
}

export function init(){
    return { type: INIT_STATE }
}