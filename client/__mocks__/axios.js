module.exports = {
    get: () => {
        return Promise.resolve({
            data: {
                response: "Hello World!"
            }
        })
    }
}