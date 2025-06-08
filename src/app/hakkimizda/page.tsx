
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import Image from 'next/image';
import { Target, Eye, BrainCircuit, Users, BarChart, Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutUsPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <h1 className="section-title">Assisto Nedir?</h1>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="mb-12 md:mb-16">
          <Card className="shadow-xl overflow-hidden border border-border rounded-xl bg-card">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                    <Eye className="h-7 w-7 text-primary" />
                    <h2 className="text-2xl font-semibold text-foreground">Vizyonumuz</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  İşletmelerin yapay zeka teknolojilerini kolayca benimsemesini sağlayarak iş süreçlerinde devrim yaratmak ve geleceğin çalışma modelini bugünden inşa etmek.
                </p>
              </div>
              <div className="p-6 md:p-8 bg-secondary/30 md:border-l border-border">
                 <div className="flex items-center gap-3 mb-3">
                    <Target className="h-7 w-7 text-primary" />
                    <h2 className="text-2xl font-semibold text-foreground">Misyonumuz</h2>
                </div>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside pl-2">
                  <li>İşletmelerin operasyonel verimliliğini artırmak.</li>
                  <li>Maliyetleri optimize etmek.</li>
                  <li>İnsan çalışanların stratejik ve yaratıcı görevlere odaklanmasını sağlamak.</li>
                  <li>Özelleştirilmiş yapay zeka çözümleriyle sürdürülebilir rekabet avantajı yaratmak.</li>
                </ul>
              </div>
            </div>
          </Card>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="mb-12 md:mb-16">
            <Card className="bg-card p-6 md:p-8 rounded-xl shadow-lg border border-border">
                <CardHeader className="p-0 mb-6 text-center">
                    <CardTitle className="text-3xl font-bold text-foreground">Assisto Nasıl Doğdu?</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                        İşletmelerin yapay zeka teknolojilerine yatırım yapmak istemelerine rağmen, teknik uzmanlık eksikliği, yüksek maliyetler ve entegrasyon zorlukları gibi engellerle karşılaştığını fark ettik. Bu boşluğu doldurmak ve yapay zeka destekli dönüşümü herkes için erişilebilir kılmak amacıyla Assisto'yu kurduk.
                    </p>
                </CardContent>
            </Card>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="mb-12 md:mb-16">
          <div className="text-center mb-10">
            <h2 className="section-title">Assisto'nun Arkasındaki Güç: Synaptix</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Assisto, yapay zeka ve inovasyon alanındaki derin uzmanlığını, sektörün öncü teknoloji firmalarından Synaptix Bilişim Teknolojileri A.Ş.'den almaktadır.
            </p>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                    <Image src="/synaptix-logo.png" alt="Synaptix Logo" width={200} height={100} className="w-48 h-auto" />
                </div>
                <div className="md:col-span-2">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        Synaptix, geleceği şekillendiren yapay zeka teknolojileri alanında yenilikçi yazılımlar ve akıllı çözümler geliştiren vizyoner bir bilişim şirketidir. Gücünü, alanında uzman, dinamik ve tecrübeli ekibinden alan Synaptix, iş dünyasının karmaşık problemlerine etkin ve verimli çözümler sunmayı hedefler.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        Felsefesinin temelinde, teknolojiyi insan odaklı bir yaklaşımla birleştirmek yatar. Bu doğrultuda, tüm projelerinde kullanıcı deneyimini en üst seviyede tutar. İş zekası, yapay zeka ve makine öğrenmesi gibi alanlardaki derin teknik bilgisiyle, iş ortaklarına sürdürülebilir bir büyüme ve sürekli gelişim imkanı tanır. Assisto, Synaptix'in bu güçlü teknolojik altyapısı ve inovasyon ruhu üzerinde yükselen bir markadır.
                    </p>
                </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
           <div className="text-center mb-10">
            <h2 className="section-title">Grup Şirketlerimiz</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Global vizyonumuz, farklı lokasyonlarda faaliyet gösteren ve teknoloji alanında sinerji yaratan grup şirketlerimizle daha da güçlenmektedir.
            </p>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center text-center">
                <div className="flex flex-col items-center">
                    <Image src="/cortex-logo.png" alt="Cortex Cloud Logo" width={180} height={60} className="w-40 h-auto mb-3" />
                    <h4 className="font-semibold text-foreground">Cortex Cloud</h4>
                    <p className="text-sm text-muted-foreground">Londra, İngiltere</p>
                </div>
                 <div className="flex flex-col items-center">
                    <Image src="/jeetwork-logo.png" alt="Jeetwork Logo" width={180} height={60} className="w-40 h-auto mb-3" />
                    <h4 className="font-semibold text-foreground">Jeetwork</h4>
                    <p className="text-sm text-muted-foreground">Samsun, Türkiye</p>
                </div>
                 <div className="flex flex-col items-center">
                    <Image src="/synaptix-logo.png" alt="Synaptix Logo" width={180} height={60} className="w-40 h-auto mb-3" />
                    <h4 className="font-semibold text-foreground">Synaptix</h4>
                    <p className="text-sm text-muted-foreground">Samsun, Türkiye</p>
                </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

      </div>
    </div>
  );
}
