/**
 * Created by Stefan Dorresteijn on 12/30/2016.
 */

import request from 'request'

export default class Oauth2Client {
    constructor(id, secret, url, grant_type) {
        this.user = {
            id: id,
            secret: secret,
        }
        this.config = {
            url: url,
            grant_type: grant_type
        }
        this.token = "test"
    }

    auth(callback) {
        let self = this;
        request.post({url: this.config.url, form: {grant_type: this.config.grant_type, client_id: this.user.id, client_secret: this.user.secret}}, function(err, httpResponse, body) {
            self.token = JSON.parse(body)
            return callback(JSON.parse(body))
        })
    }

    get(url, callback) {
        const options = {
            url: url
        }
        request(options, callback)
    }
}