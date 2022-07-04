export class UserInfo {
    constructor({
        nameSelector,
        jobSelector,
        avatarSelector
    }) {
        this._profileName = document.querySelector(nameSelector);
        this._profileJob = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector);

    }
    getUserInfo() {
        return {
            name: this._profileName.textContent,
            about: this._profileJob.textContent,
        }
    }
    setUserInfo({
        name,
        about
    }) {
        this._profileName.textContent = name;
        this._profileJob.textContent = about;
    }
    setUserAvatar(avatar) { // here adds the avatar to DOM after fetching from server
        this._avatar.src = avatar;
    }

    setAvatarVisible() {
        this._avatar.style.visibility = "visible";
    }
}