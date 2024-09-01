import SocialLinks from "./SocialLinks";
import Title from "./Title";

export default function Header() {
  return (
    <header className="flex w-full justify-between items-center mb-10 animate-move-down">
      <Title
        className="-rotate-2"
        title="Kye Yee 👨🏻‍💻"
        firstLineColor=" bg-cyan-400"
        lastLineColor="bg-yellow-300"
      />

      <SocialLinks />
    </header>
  );
}
