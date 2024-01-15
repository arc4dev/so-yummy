import AuthPageLayout from '../components/auth/AuthPageLayout';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <AuthPageLayout type="login">
      <LoginForm />
    </AuthPageLayout>
  );
};

export default LoginPage;
