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
            title: this._profileJob.textContent,
        }
    }
    setUserInfo({
        name,
        job
    }) {
        this._profileName.textContent = name;
        this._profileJob.textContent = job;
    }
    setUserAvatar(avatar) {
        this._avatar.src = avatar;
    }

    setAvatarVisible() {
        this._avatar.style.visibility = "visible";
    }
}