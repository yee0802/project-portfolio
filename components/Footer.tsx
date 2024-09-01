import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <div className="flex flex-col items-center mt-8 w-full">
      <span className="text-gray-300 font-normal text-base mb-4">2024</span>

      <SocialLinks />
    </div>
  );
}
