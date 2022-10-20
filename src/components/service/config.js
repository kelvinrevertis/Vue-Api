import axios from 'axios'

export const http = axios.create({
    baseURL: 'metawaydemo.vps-kinghost.net:8485'
})