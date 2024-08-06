import { decode } from "jsonwebtoken";

class AuthService {

	// if already logged in
	getProfile() {
		return decode(this.getToken());
	}

	// if token exists (logged in) is true, if not is false and goes to login()
	loggedIn() {
		const token = this.getToken();
		return token ? true : false;
	}

	// gets token from localstorage
	getToken() {
		return localStorage.getItem('id_token');
	}

	// builds token and saves to localstorage
	login(idToken) {
		localStorage.setItem('id_token', idToken);
		window.location.assign('/');
	}
	// removes token from localstorage when logged out  
	logout() {
		localStorage.removeItem('id_token');
		window.location.reload();
	}
}

export default new AuthService();