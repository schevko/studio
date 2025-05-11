import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';

export default function CerezPolitikasiPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <ScrollAnimationWrapper className="text-center mb-12">
          <h1 className="section-title">Çerez Politikası</h1>
          <p className="section-subtitle">
            Assisto olarak web sitemizde kullanıcı deneyiminizi iyileştirmek ve hizmetlerimizi daha etkili sunmak amacıyla çerezler kullanıyoruz.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg border border-border prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none text-muted-foreground">
            <h2 className="text-foreground">1. Çerez Nedir?</h2>
            <p>
              Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezler, web sitesinin tercihlerinizi (kullanıcı adı, dil vb.) hatırlamasına yardımcı olur ve siteyi daha verimli kullanmanızı sağlar.
            </p>

            <h2 className="text-foreground">2. Kullandığımız Çerez Türleri</h2>
            <p>
              Assisto web sitesinde aşağıdaki türde çerezler kullanılabilir:
            </p>
            <ul>
                <li><strong>Zorunlu Çerezler:</strong> Web sitesinin temel işlevlerinin çalışması için gereklidir. Bu çerezler olmadan hizmetlerimizi sunamayız.</li>
                <li><strong>Performans ve Analiz Çerezleri:</strong> Ziyaretçilerin web sitemizi nasıl kullandığı hakkında anonim bilgiler toplar. Bu veriler, sitemizi optimize etmemize yardımcı olur.</li>
                <li><strong>İşlevsellik Çerezleri:</strong> Yaptığınız seçimleri (örneğin dil tercihiniz) hatırlayarak size daha kişiselleştirilmiş bir deneyim sunar.</li>
                <li><strong>Hedefleme ve Reklam Çerezleri:</strong> İlgi alanlarınıza uygun içerik ve reklamlar sunmak için kullanılabilir (şu anda aktif olarak kullanılmamaktadır, ancak gelecekte eklenebilir).</li>
            </ul>

            <h2 className="text-foreground">3. Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
            <p>
              Tarayıcı ayarlarınızı değiştirerek çerezleri kabul etmeyi veya reddetmeyi seçebilirsiniz. Çoğu web tarayıcısı çerezleri otomatik olarak kabul eder, ancak isterseniz tarayıcınızın ayarlarından çerezleri reddedebilirsiniz. Çerezleri devre dışı bırakmanın web sitemizin bazı özelliklerinin düzgün çalışmamasına neden olabileceğini lütfen unutmayın.
            </p>
            
            <h2 className="text-foreground">4. Üçüncü Taraf Çerezleri</h2>
            <p>
             Analiz ve performans ölçümü gibi amaçlarla üçüncü taraf hizmet sağlayıcılarından (örneğin Google Analytics) çerezler kullanabiliriz. Bu çerezler ilgili üçüncü tarafların gizlilik politikalarına tabidir.
            </p>

            <h2 className="text-foreground">5. Politika Değişiklikleri</h2>
            <p>
              Bu çerez politikasını zaman zaman güncelleyebiliriz. Değişiklikler bu sayfada yayınlanacaktır.
            </p>

            <h2 className="text-foreground">6. İletişim</h2>
            <p>
              Çerez politikamızla ilgili sorularınız için lütfen <a href="/contact" className="text-primary hover:underline">bizimle iletişime geçin</a>.
            </p>
            <p className="mt-6 text-sm">Son Güncelleme: [Güncel Tarih Buraya Eklenecek]</p>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
