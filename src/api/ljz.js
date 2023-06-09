import request from '@/utils/request.js'

export function getMainLjz() {
    return request({
        url: '/lzj/mainInfo',
        method: 'get'
    })
}
export function getSum() {
    return request({
        url: '/lzj/getSum',
        method: 'get'
    })
}
export function getWarning() {
    return request({
        url: '/lzj/getWarning',
        method: 'get'
    })
}