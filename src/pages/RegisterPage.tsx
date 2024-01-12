import AuthPageLayout from '../components/AuthPageLayout';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthPageLayout type="register">
      <RegisterForm />
    </AuthPageLayout>
  );
};

export default RegisterPage;
