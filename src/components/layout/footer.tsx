import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Youtube, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import AssistoFullLogo from '@/components/brand/assisto-full-logo';


const AppleStoreIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.177 13.086C19.042 14.6082 18.0256 15.9059 16.5703 16.3215C15.9858 16.5032 15.4907 16.2126 15.1055 15.81C14.6892 15.3746 14.4356 14.8129 14.5134 14.094C14.5992 13.3158 15.0743 12.6582 15.6588 12.4685C16.2354 12.2868 16.7626 12.5774 17.1478 13.0048C17.2153 13.086 17.2749 13.1752 17.3265 13.2723C17.8421 11.7828 17.4776 10.3172 16.4773 9.2842C15.6335 8.40001 14.4437 7.95423 13.2699 8.01361C11.9319 8.073 10.8357 8.71875 10.0839 9.58673C9.13874 10.687 8.81907 12.2013 9.26747 13.6122C9.90013 15.5933 11.4477 16.7831 13.286 16.7435C14.2863 16.7199 14.9645 16.3294 15.6107 15.6248C15.6268 15.6007 15.6348 15.5846 15.6509 15.5605C15.6107 15.5444 15.5786 15.5283 15.5384 15.5203C14.9946 15.4075 14.667 14.9324 14.7108 14.3966C14.7626 13.8131 15.2377 13.4226 15.7814 13.5434C16.2457 13.6562 16.5733 14.0916 16.5215 14.6354C16.4975 14.926 16.2941 15.2087 15.9938 15.2978C15.2341 15.5283 14.7309 16.2047 14.763 17.0047C14.787 17.4878 15.0975 17.9336 15.5384 18.1153C16.2902 18.4258 17.2033 18.2106 17.8601 17.6942C18.0125 17.5655 18.157 17.4289 18.2935 17.2843C16.8967 19.2332 14.4758 19.7083 12.4866 18.9487C11.9675 18.767 11.5032 18.4764 11.0786 18.1153C10.1841 17.3371 9.58673 16.2984 9.38333 15.1281C8.75067 11.3399 10.9881 8.44771 13.1647 7.20056C13.9485 6.76313 14.845 6.58936 15.7337 6.70214C16.0163 6.73432 16.2911 6.7937 16.5578 6.87491C16.3151 6.51589 16.1045 6.13281 15.9336 5.73363C15.293 5.86239 14.7467 6.07762 14.2824 6.37616C12.122 7.71093 10.7573 10.2366 11.2845 12.8378C11.3623 13.237 11.4969 13.6122 11.6881 13.9527C11.9319 14.3966 12.3171 14.7656 12.7734 14.9961C13.3421 15.2867 14.0068 15.3189 14.6276 15.0804C14.7553 15.0327 14.8751 14.9771 14.9868 14.9177L15.0743 14.8661C15.9578 14.3122 16.5032 13.4065 16.3215 12.4685C16.1397 11.5305 15.2867 10.8016 14.3495 10.9625C13.4124 11.1234 12.7234 11.9016 12.9051 12.8315C12.9926 13.3066 13.3928 13.6818 13.876 13.714C14.2923 13.7381 14.667 13.5356 14.8823 13.2129C15.0532 12.9423 15.0853 12.6122 14.9628 12.3137C15.4349 10.5848 17.5559 10.099 18.9527 11.502C19.3529 11.8925 19.4657 12.4685 19.177 13.086Z"/>
  </svg>
);
const GooglePlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.64078 2.35479C4.81403 2.15499 5.08078 2.09727 5.33203 2.21086L18.832 9.05105C19.2495 9.2412 19.4745 9.69695 19.3995 10.1505L17.1045 22.2189C17.0183 22.7259 16.5608 23.0664 16.0591 23.0116L4.73639 21.753C4.23639 21.6973 3.86289 21.2737 3.85204 20.7704L3.20203 4.2271C3.19118 3.72302 3.55618 3.2931 4.05618 3.22373L4.20203 3.20014L4.64078 2.35479ZM5.91693 4.5573L16.4982 9.95446L13.0219 11.9112L5.61068 7.60305L5.91693 4.5573ZM5.24818 8.95605L12.4943 13.1846L15.5445 11.3017L15.2532 19.6031L4.84568 18.5917L5.24818 8.95605ZM13.077 14.0561L12.0882 17.2398L6.01318 17.2346L13.077 14.0561Z"/>
  </svg>
);


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    sirket: [
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'Kariyer', href: '/kariyer' },
      { label: 'Blog', href: '/blog' },
    ],
    urun: [
      { label: 'Özellikler', href: '/#features' },
      { label: 'Fiyatlandırma', href: '/#pricing' },
      { label: 'Entegrasyonlar', href: '/entegrasyonlar' },
    ],
    destek: [
      { label: 'Yardım Merkezi', href: '/yardim' },
      { label: 'Bize Ulaşın', href: '/contact' },
      { label: 'API Dokümanları', href: '/developer' },
    ],
    yasal: [
      { label: 'Hizmet Şartları', href: '/hizmet-sartlari' },
      { label: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
      { label: 'Çerez Politikası', href: '/cerez-politikasi' },
    ],
  };

  const socialLinks = [
    { label: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { label: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { label: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { label: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
  ];

  return (
    <footer className="border-t border-border/70 bg-card text-muted-foreground mt-auto">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-10">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 pr-8">
            <Link href="/" className="flex items-center text-2xl font-bold mb-3">
               <AssistoFullLogo height="28" mainColorClass="text-primary" />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Proje yönetimi süreçlerinizi optimize edin ve verimliliği artırın.
            </p>
            <div className="mt-6 flex space-x-2">
              <Button variant="outline" className="flex items-center gap-2 text-sm h-auto py-2 px-3 border-input-border hover:border-primary text-foreground hover:text-primary">
                <AppleStoreIcon />
                <div>
                  <span className="block text-xs text-muted-foreground">İndir</span>
                  <span className="block font-semibold">App Store</span>
                </div>
              </Button>
               <Button variant="outline" className="flex items-center gap-2 text-sm h-auto py-2 px-3 border-input-border hover:border-primary text-foreground hover:text-primary">
                <GooglePlayIcon />
                 <div>
                  <span className="block text-xs text-muted-foreground">EDİNİN</span>
                  <span className="block font-semibold">Google Play</span>
                </div>
              </Button>
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h5 className="font-semibold text-foreground mb-3">Şirket</h5>
            <ul className="space-y-2">
              {footerLinks.sirket.map(link => (
                <li key={link.label}><Link href={link.href} className="text-sm hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3">Ürün</h5>
            <ul className="space-y-2">
              {footerLinks.urun.map(link => (
                <li key={link.label}><Link href={link.href} className="text-sm hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3">Destek</h5>
            <ul className="space-y-2">
              {footerLinks.destek.map(link => (
                <li key={link.label}><Link href={link.href} className="text-sm hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
           <div>
            <h5 className="font-semibold text-foreground mb-3">Yasal</h5>
            <ul className="space-y-2">
              {footerLinks.yasal.map(link => (
                <li key={link.label}><Link href={link.href} className="text-sm hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/70 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {currentYear} Assisto. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {socialLinks.map(social => (
              <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-muted-foreground hover:text-primary transition-colors">
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
