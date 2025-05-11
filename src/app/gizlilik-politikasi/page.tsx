import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';

export default function GizlilikPolitikasiPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <ScrollAnimationWrapper className="text-center mb-12">
          <h1 className="section-title">Gizlilik Politikası</h1>
          <p className="section-subtitle">
            Assisto olarak gizliliğinize değer veriyoruz. Bu politika, kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklamaktadır.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg border border-border prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none text-muted-foreground">
            <h2 className="text-foreground">1. Topladığımız Bilgiler</h2>
            <p>
              Hizmetlerimizi kullandığınızda sizden çeşitli türde bilgiler toplayabiliriz. Bunlar arasında adınız, e-posta adresiniz, şirket bilgileriniz ve platformumuzu kullanımınızla ilgili veriler bulunabilir.
            </p>

            <h2 className="text-foreground">2. Bilgilerin Kullanımı</h2>
            <p>
              Topladığımız bilgileri hizmetlerimizi sağlamak, iyileştirmek, kişiselleştirmek, sizinle iletişim kurmak ve yasal yükümlülüklerimizi yerine getirmek için kullanırız.
            </p>

            <h2 className="text-foreground">3. Bilgilerin Paylaşımı</h2>
            <p>
              Kişisel bilgilerinizi yasal zorunluluklar dışında veya izniniz olmadan üçüncü taraflarla paylaşmayız. Hizmet sağlayıcılarımızla yalnızca hizmetlerimizi sunmak için gerekli olan bilgileri paylaşabiliriz.
            </p>
            
            <h2 className="text-foreground">4. Veri Güvenliği</h2>
            <p>
              Verilerinizin güvenliğini sağlamak için endüstri standardı güvenlik önlemleri alıyoruz. Ancak, internet üzerinden hiçbir veri aktarım yönteminin %100 güvenli olmadığını lütfen unutmayın.
            </p>

            <h2 className="text-foreground">5. Çerezler</h2>
            <p>
              Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanıyoruz. Çerez politikamız hakkında daha fazla bilgi için ilgili sayfamızı ziyaret edebilirsiniz.
            </p>

            <h2 className="text-foreground">6. Politika Değişiklikleri</h2>
            <p>
              Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Değişiklikler bu sayfada yayınlanacaktır.
            </p>

            <h2 className="text-foreground">7. İletişim</h2>
            <p>
              Gizlilik politikamızla ilgili sorularınız için lütfen <a href="/contact" className="text-primary hover:underline">bizimle iletişime geçin</a>.
            </p>
            <p className="mt-6 text-sm">Son Güncelleme: [Güncel Tarih Buraya Eklenecek]</p>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
