import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';

export default function KullanimSartlariPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <ScrollAnimationWrapper className="text-center mb-12">
          <h1 className="section-title">Kullanım Şartları</h1>
          <p className="section-subtitle">
            Assisto platformunu ve hizmetlerini kullanımınız bu şartlara tabidir. Lütfen dikkatlice okuyunuz.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg border border-border prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none text-muted-foreground">
            <h2 className="text-foreground">1. Kabul Edilen Şartlar</h2>
            <p>
              Assisto web sitesini ("Site") ve Assisto tarafından sunulan hizmetleri ("Hizmetler") kullanarak, bu Kullanım Şartları'nı kabul etmiş olursunuz. Bu şartları kabul etmiyorsanız, Site'yi veya Hizmetler'i kullanmamalısınız.
            </p>

            <h2 className="text-foreground">2. Hizmetlerin Kullanımı</h2>
            <p>
              Hizmetlerimizi yalnızca yasal amaçlarla ve bu Kullanım Şartları'na uygun olarak kullanmayı kabul edersiniz. Platformumuzun bütünlüğünü veya performansını olumsuz etkileyebilecek herhangi bir faaliyette bulunmamalısınız.
            </p>

            <h2 className="text-foreground">3. Hesap Güvenliği</h2>
            <p>
              Hesap bilgilerinizin gizliliğini korumaktan ve hesabınız altında gerçekleşen tüm faaliyetlerden siz sorumlusunuz. Yetkisiz kullanımı derhal bize bildirmeniz gerekmektedir.
            </p>
            
            <h2 className="text-foreground">4. Fikri Mülkiyet</h2>
            <p>
              Site ve Hizmetler'de bulunan tüm içerik, özellikler ve işlevsellik (metinler, grafikler, logolar, ikonlar, görseller, yazılımlar vb. dahil ancak bunlarla sınırlı olmamak üzere) Assisto'ya veya lisans verenlerine aittir ve uluslararası telif hakkı, ticari marka ve diğer fikri mülkiyet yasalarıyla korunmaktadır.
            </p>

            <h2 className="text-foreground">5. Sorumluluğun Sınırlandırılması</h2>
            <p>
              Assisto, hizmetlerimizin kullanımından kaynaklanan doğrudan, dolaylı, arızi, özel veya sonuç olarak ortaya çıkan zararlardan sorumlu tutulamaz.
            </p>

            <h2 className="text-foreground">6. Şartlarda Değişiklikler</h2>
            <p>
              Bu Kullanım Şartları'nı zaman zaman güncelleme hakkımızı saklı tutarız. Değişiklikler bu sayfada yayınlanacak ve yayınlandığı tarihten itibaren geçerli olacaktır.
            </p>

            <h2 className="text-foreground">7. İletişim</h2>
            <p>
              Kullanım Şartları ile ilgili sorularınız için lütfen <a href="/contact" className="text-primary hover:underline">bizimle iletişime geçin</a>.
            </p>
            <p className="mt-6 text-sm">Son Güncelleme: [Güncel Tarih Buraya Eklenecek]</p>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
