const fs = require('fs')
const https = require('https')
const http = require('http')
module.exports = class {
    //判断文件是否存在
    getStat(path) {
        return new Promise((resolve) => {
            if (fs.stat) {
                fs.stat(path, (err, stats) => {
                    resolve(err ? false : stats)
                })
            } else {
                resolve(false);
            }
        })
    }

    //读取本地文件
    readFile(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, '', (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data);
                }
            })
        })
    }

    //文件请求
    requestFile(url) {
        return new Promise((resolve, reject) => {
            const parsedUrl = new URL(url)
            const client = parsedUrl.protocol === 'https:' ? https : http

            const options = {
                rejectUnauthorized: false
            }

            const req = client.get(url, options, (res) => {
                const statusCode = res.statusCode || 0
                if (!(statusCode === 200 || statusCode === 206)) {
                    reject('路径不存在')
                    return
                }

                const chunks = []
                res.on('data', (chunk) => {
                    chunks.push(chunk)
                })
                res.on('end', () => {
                    resolve(Buffer.concat(chunks))
                })
            })

            req.on('error', (error) => {
                reject(error)
            })
        })
    }

    //文件读取
    async getFileBody(path) {
        try {
            let isExists = await this.getStat(path)
            if (isExists) {
                //本地文件读取
                if (isExists.isDirectory()) {
                    return Promise.reject(Error("读取文件失败，目录是文件夹"));
                } else {
                    let data = await this.readFile(path)
                    return Promise.resolve(data)
                }
            } else {
                const data = await this.requestFile(path)
                return Promise.resolve(data)
            }
        } catch (e) {
            return Promise.reject(e)
        }
    }
}
