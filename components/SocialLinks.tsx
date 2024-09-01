import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" asChild>
        <Link
          href="https://www.linkedin.com/in/kye-yee/"
          target="_blank"
          aria-label="Link to LinkedIn"
        >
          <LinkedInLogoIcon className="h-full w-3/4" />
        </Link>
      </Button>

      <Button variant="outline" size="icon" asChild>
        <Link
          href="https://github.com/yee0802"
          target="_blank"
          aria-label="Link to GitHub"
        >
          <GitHubLogoIcon className="h-full w-3/4" />
        </Link>
      </Button>
    </div>
  );
}
