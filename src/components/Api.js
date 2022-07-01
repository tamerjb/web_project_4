const customFetch = (url, headers) => {
    fetch(url, headers)
        .then(res => res.ok ? res.json() : Promise.reject(res.status)).catch(err => console.log(err))

}
class Api {
    constructor(baseUrl, headers) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    getInitialCards() {
        return customFetch(`${this.baseUrl}/cards`, {
            headers: this._headers
        })
    }
    getUserInfo() {
        return customFetch(`${this.baseUrl}/users/me`, {
            headers: this._headers
        })
    }
    createCard(data) {
        return customFetch(`${this.baseUrl}/cards`, {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify(data)
        })
    }

    // other methods for working with the API
}

export const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en", //cohort-3-en
    headers: {
        authorization: "edde3a5c-b30d-40b0-99e9-6f72ee976ddf",
        "Content-Type": "application/json"
    }
});