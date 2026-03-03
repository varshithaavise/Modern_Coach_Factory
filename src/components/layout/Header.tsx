import { useLanguage } from "@/contexts/LanguageContext";
import mainLogo from "@/assets/indian-railway-logo.jpg";
import logo2 from "@/assets/IRIS_logo_TM.bmp";
import logo3 from "@/assets/national-emblem.jpg";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="bg-card border-b py-3">
      <div className="container-page flex items-center justify-between">

        {/* Left Section (Main Logo + Title) */}
        <div className="flex items-center gap-4">
          <img
            src={mainLogo}
            alt="MCF Logo"
            className="h-14 w-auto object-contain"
          />

          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-primary leading-tight">
              {t.siteName}
            </h1>
            <p className="text-sm text-muted-foreground">
              {t.siteSubtitle}
            </p>
          </div>
        </div>

        {/* Right Section (Additional Logos) */}
        <div className="flex items-center gap-6">
          <img
            src={logo2}
            alt="Secondary Logo"
            className="h-12 w-auto object-contain"
          />
          <img
            src={logo3}
            alt="Third Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

      </div>
    </header>
  );
}