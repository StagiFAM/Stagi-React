import { useState } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";

export const LoginForm = (props: any) => {
	const navigate = useNavigate();
	const [form] = Form.useForm();
	const [loading, setLoading] = useState<boolean>(false);

	// const onFinish = async (loginForm: Login.ReqLoginForm) => {
	// 	try {
	// 		setLoading(true);
	// 		setTabsList([]);
	// 		message.success("");
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };

    function telaHome() {
        navigate('/home')
    }

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Form
			form={form}
			name="basic"
			labelCol={{ span: 5 }}
			initialValues={{ remember: true }}
			onFinishFailed={onFinishFailed}
			size="large"
			autoComplete="off"
		>
			<Form.Item name="username" rules={[{ required: true, message: "" }]}>
				<Input placeholder="admin / user" prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: "" }]}>
				<Input.Password autoComplete="new-password" placeholder="123456" prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button
					onClick={() => {
						form.resetFields();
					}}
					icon={<CloseCircleOutlined />}
				>
				</Button>
				<Button type="primary" htmlType="submit" onClick={telaHome} icon={<UserOutlined />}>
				</Button>
			</Form.Item>
		</Form>
	);
};
