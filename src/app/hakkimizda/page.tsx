
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <ScrollAnimationWrapper className="text-center mb-12">
          <h1 className="section-title">Hakkımızda</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            Softo olarak, proje yönetimi süreçlerini basitleştiren ve ekiplerin verimliliğini artıran yenilikçi çözümler sunmaya adanmış bir teknoloji şirketiyiz. Misyonumuz, her ölçekten işletmenin hedeflerine daha hızlı ve etkili bir şekilde ulaşmasını sağlamaktır.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="mb-12">
          <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg border border-border">
            <Image 
              src="https://picsum.photos/seed/teammeeting/1200/400" 
              alt="Softo Ekibi Toplantıda" 
              layout="fill" 
              objectFit="cover"
              data-ai-hint="team meeting office" 
            />
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <ScrollAnimationWrapper>
            <div className="bg-card p-8 rounded-xl shadow-lg h-full border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Vizyonumuz</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Proje yönetiminde devrim yaratarak, kullanıcı dostu ve güçlü araçlarımızla dünya çapında işletmelerin ilk tercihi olmak. Teknolojiyi kullanarak karmaşıklığı ortadan kaldırmak ve yaratıcılığı teşvik etmek istiyoruz.
              </p>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Misyonumuz</h2>
              <p className="text-muted-foreground leading-relaxed">
                Müşterilerimize, projelerini başarıyla tamamlamaları için ihtiyaç duydukları en iyi araçları, desteği ve kaynakları sağlamak. Sürekli gelişim ve yenilikçilikle, kullanıcılarımızın beklentilerini aşmayı hedefliyoruz.
              </p>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <div className="bg-card p-8 rounded-xl shadow-lg h-full border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Değerlerimiz</h2>
              <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                <li><span className="font-medium text-foreground">Müşteri Odaklılık:</span> Müşterilerimizin başarısı, bizim başarımızdır.</li>
                <li><span className="font-medium text-foreground">Yenilikçilik:</span> Sürekli olarak daha iyi ve daha etkili çözümler ararız.</li>
                <li><span className="font-medium text-foreground">Şeffaflık:</span> Açık iletişim ve dürüstlük temel prensiplerimizdir.</li>
                <li><span className="font-medium text-foreground">Ekip Çalışması:</span> Birlikte çalışarak daha büyük başarılara imza atarız.</li>
                <li><span className="font-medium text-foreground">Kalite:</span> Sunduğumuz her üründe ve hizmette mükemmelliği hedefleriz.</li>
              </ul>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
}
