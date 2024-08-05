import Auth from '../utils/auth'
import { LOGIN_USER } from '../utils/mutations'

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
// updates the state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

// update the application state to reflect that the user is logged in.
      Auth.login(data.login.token);
      
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

    return (
        <main>

            <form onSubmit={handleFormSubmit}>
                <input type="text" name="username" onChange={handleChange} />
                <input type="email" name="email" onChange={handleChange} />
                <input type="password" name="password" onChange={handleChange} />
            </form>

        </main>
    )
}

export default Login;