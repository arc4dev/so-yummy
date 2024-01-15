import AuthPageLayout from '../components/AuthPageLayout';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <AuthPageLayout type="login">
      <LoginForm />
    </AuthPageLayout>
  );
};

export default LoginPage;
