import request from '@/utils/request.js'


export function getCheckRate() {
    return request({
        url: '/ddzh/getCheckRate',
        method: 'get'
    })
}
export function getCntStatus() {
    return request({
        url: '/ddzh/getCntStatus',
        method: 'get'
    })
}