/**
 * Created by Stefan Dorresteijn on 12/30/2016.
 */

import Oauth2Client from './lib/oauth2-client'


export default class AbiosClient extends Oauth2Client {
    constructor(id, secret) {
        super(id, secret, "https://api.abiosgaming.com/v2/oauth/access_token", "client_credentials")
        this.api_url = "https://api.abiosgaming.com/v2/"
    }

    getGames(q = "", callback) {
        var self = this;
        this.get(`${this.api_url}games?q=${q}&access_token=${this.token.access_token}`, function(error, response, body) {
            self.games = JSON.parse(body).data
            return callback(JSON.parse(body).data)
        })
    }

    getTeams(page = 1, callback) {
        var self = this;
        this.get(`${this.api_url}teams?access_token=${this.token.access_token}`, function(error, response, body) {
            return callback(JSON.parse(body))
        })
    }
}