import './Login.css'

const Login = () => {
    return (
        <div class="login">
            <div class="login-panel">
                <div class="login-header">
                    Sign in
                </div>
                <form class="login-form">
                    <div class="form-item">
                        <label class="form-label" for="username">Username or email</label>
                        <input class="form-input" id="username" type="text"></input>
                    </div>
                    <div class="form-item">
                        <label class="form-label" for="password">Password</label>
                        <input class="form-input" id="password" type="password"></input>
                        <a class="forgot-password" id="forgot-password" href="">Forgot password?</a>
                    </div>
                    <div class="form-item">
                        <input class="form-button" id="submit" type="submit" value="Sign in"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login