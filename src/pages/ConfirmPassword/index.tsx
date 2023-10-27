import backgroundImage from '../../assets/background.svg';
import ConfirmPasswordForm from '../../components/forms/ChangePasswordForm';

export default function ConfirmPassword() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-screen h-screen flex items-center justify-center"
    >
      <ConfirmPasswordForm />
    </div>
  );
}
