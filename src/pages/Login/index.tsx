import backgroundImage from '../../assets/background.svg';
import LoginForm from '../../components/forms/LoginForm';

export default function LoginPage() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-screen h-screen flex items-center justify-center"
    >
      <LoginForm />
    </div>
  );
}
