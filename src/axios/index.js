import _ from "axios"

const axios = _.create({
    baseURL:process.env.VUE_APP_PROXY,
    headers: {
        "Content-Type": "application/json",
    },
})

export default axios