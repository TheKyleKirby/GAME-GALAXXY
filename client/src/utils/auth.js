import {jwtDecode} from 'jwt-decode'

class AuthService {

	// if already logged in
	// getProfile() {
		// (console.log(`profile ${jwtDecode(this.getToken())}`))
		// return jwtDecode(this.getToken());
// 	const profile = jwtDecode(this.getToken());
// console.log('profile', profile);
//     return profile;
	// }

	getProfile() {
		try {
			const profile = jwtDecode(this.getToken());
			console.log('Profile:', profile);
			return profile;
		} catch (error) {
			console.error('Error decoding token:', error);
			return null;
		}
	}
	

	// if token exists (logged in) is true, if not is false and goes to login()
	loggedIn() {
		const token = this.getToken();
console.log('Token present:', !!token);
		return token ? true : false;
	}

	isTokenExpired(token) {
		const decoded = jwtDecode(token);
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
		window.location.assign('/profile');
	}
	// removes token from localstorage when logged out  
	logout() {
		localStorage.removeItem('id_token');
		window.location.assign('/');
	}
}

export default new AuthService();
