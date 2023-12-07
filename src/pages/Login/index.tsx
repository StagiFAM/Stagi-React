
import hair from "../../assets/hairdressing.jpg"
import "./index.css";
import { LoginForm } from "./component/LoginForm";

const Login = () => {
	return (
		<div className="login-container">
			<div className="login-box">
				<div className="login-left">
					<img src={hair} alt="login" />
				</div>
				<div className="login-form">
					<div className="login-logo">
						<span className="logo-text">Stagi Salon</span>
					</div>
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;