import AuthPageLayout from '../components/auth/AuthPageLayout';
import RegisterForm from '../components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthPageLayout type="register">
      <RegisterForm />
    </AuthPageLayout>
  );
};

export default RegisterPage;
