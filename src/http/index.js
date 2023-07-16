import axios from "axios";

const $host = axios.create({
    baseURL:'http://62.217.182.5:5000'
})

const $authHost = axios.create({
    baseURL: 'http://62.217.182.5:5000'
})



const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost,

}
