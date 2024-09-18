import {jwtDecode} from 'jwt-decode'

class AuthService {

	getProfile() {
        const token = this.getToken();
        try {
            if (token) {
                const profile = jwtDecode(token);
                return profile;
            }
            return null;
        } catch (error) {
            return null;
        }
    }
	

	// if token exists (logged in) is true, if not is false and goes to login()
	loggedIn() {
		const token = this.getToken();
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
