import { handleGithubLogin, login } from '@/lib/action';

const Login = async () => {
    return (
        <div>
            <form action={handleGithubLogin}>
                <button>Login with Github</button>
            </form>
            <form action={login}>
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />
                <button>Login with Credentials</button>
            </form>
        </div>
    );
};

export default Login;
