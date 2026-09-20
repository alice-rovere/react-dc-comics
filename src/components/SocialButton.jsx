const logos = import.meta.glob("../assets/img/footer-*.png", {
  eager: true,
  import: "default",
});

export default function SocialButton({ logoName }) {
  const logo = logos[`../assets/img/footer-${logoName}.png`];
  return (
    <li>
      <img src={logo} alt="Social Button" />
    </li>
  );
}
