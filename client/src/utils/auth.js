// import decode  from "jwt-decode";
// import { decode } from 'jwt-decode';
// import jwtDecode from 'jwt-decode'
import jwt from 'jsonwebtoken'

class AuthService {

	// if already logged in
	getProfile() {
		(console.log(`profile ${jwt.decode(this.getToken())}`))
		return jwt.decode(this.getToken());
	}

	// if token exists (logged in) is true, if not is false and goes to login()
	loggedIn() {
		const token = this.getToken();
		return token ? true : false;
	}

	isTokenExpired(token) {
		const decoded = jwt.decode(token);
		if (decoded.exp < Date.now() / 1000) {
		localStorage.removeItem('id_token');
		return true;
		}
		return false;
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
		window.location.assign('/');
	}
}

export default new AuthService();
