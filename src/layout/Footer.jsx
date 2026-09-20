import SocialButton from "../components/SocialButton";
export default function Footer() {
  return (
    <div>
      <div className="flex items-center justify-between p-4 bg-gray-700  text-white">
        <button>Sign up Now!</button>
        <nav>
          <ul className="flex items-center space-x-4">
            <button>Follow Us</button>
            <SocialButton logoName="facebook" />
            <SocialButton logoName="twitter" />
            <SocialButton logoName="pinterest" />
            <SocialButton logoName="periscope" />
            <SocialButton logoName="youtube" />
          </ul>
        </nav>
      </div>
    </div>
  );
}
