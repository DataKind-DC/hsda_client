

export const LOAD_DATA = 'API/Load'
export const UPLOAD_DATA = 'API/Upload'



export function uploadData(data){
    return {type: UPLOAD_DATA, res: data}
}

export function loadData(data){
    return {type: LOAD_DATA, res: data}
}