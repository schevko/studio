
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import Image from 'next/image';
import TeamMemberCard from '@/components/cards/team-member-card';
import AdvisorCard from '@/components/cards/advisor-card';
import { Award, Users, Lightbulb, ShieldCheck, Target, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


const teamMembers = [
  {
    name: "Ahmet Yılmaz",
    role: "Kurucu Ortak ve CEO",
    bio: "IBM ve Microsoft'ta 12 yıllık yapay zeka ve bulut bilişim deneyimi. Stanford Üniversitesi Bilgisayar Bilimi doktorası. Daha önce başarıyla çıkış yapmış bir B2B SaaS girişiminin kurucusu.",
    imageUrl: "https://picsum.photos/seed/ahmetyilmaz/200/200",
    linkedinUrl: "https://linkedin.com/in/ahmetyilmaz",
  },
  {
    name: "Selin Akar",
    role: "Teknik Direktör (CTO)",
    bio: "Google AI'da 8 yıllık kıdemli mühendislik deneyimi. Boğaziçi Üniversitesi Bilgisayar Mühendisliği mezunu, MIT'den yapay zeka yüksek lisansı. 5 yapay zeka patentinin sahibi.",
    imageUrl: "https://picsum.photos/seed/selinakar/200/200",
    linkedinUrl: "https://linkedin.com/in/selinakar",
  },
  {
    name: "Kerem Demir",
    role: "İş Geliştirme Direktörü (CBO)",
    bio: "Oracle ve Salesforce'ta 10 yıllık kurumsal satış deneyimi. INSEAD MBA. B2B SaaS satışlarında kanıtlanmış başarı geçmişi.",
    imageUrl: "https://picsum.photos/seed/keremdemir/200/200",
    linkedinUrl: "https://linkedin.com/in/keremdemir",
  },
];

const advisors = [
    { name: "Prof. Dr. Mehmet Can", role: "MIT Yapay Zeka Laboratuvarı Direktörü", imageUrl: "https://picsum.photos/seed/mehmetcan/150/150", expertise: "AI Research" },
    { name: "Deniz Şahin", role: "Eski Google Cloud EMEA Başkanı", imageUrl: "https://picsum.photos/seed/denizsahin/150/150", expertise: "Cloud Strategy" },
    { name: "Leyla Öztürk", role: "Unicorn SaaS Girişimi Kurucusu ve Melek Yatırımcı", imageUrl: "https://picsum.photos/seed/leylaozturk/150/150", expertise: "SaaS Growth" },
    { name: "Dr. Onur Kaya", role: "Yapay Zeka Etiği Alanında Önde Gelen Uzman", imageUrl: "https://picsum.photos/seed/onurkaya/150/150", expertise: "AI Ethics" },
];

const achievements = [
    { icon: Award, text: "Beta sürümü tamamlandı, 5 temel ajan geliştirildi." },
    { icon: Users, text: "%90 müşteri memnuniyeti ve %40 verimlilik artışı raporlandı." },
    { icon: Lightbulb, text: "3 patent başvurusu ve 2 stratejik teknoloji sağlayıcısı anlaşması." },
];


export default function AboutUsPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <h1 className="section-title">Biz Kimiz? Assisto'nun Hikayesi ve Ekibi</h1>
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
                    <p className="text-muted-foreground leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                        İşletmelerin yapay zeka teknolojilerine yatırım yapmak istemelerine rağmen, teknik uzmanlık eksikliği, yüksek maliyetler ve entegrasyon zorlukları gibi engellerle karşılaştığını fark ettik. Bu boşluğu doldurmak ve yapay zeka destekli dönüşümü herkes için erişilebilir kılmak amacıyla Assisto'yu kurduk. Kısa sürede beta sürümümüzü tamamladık, ilk pilot müşterilerimizle başarılı projelere imza attık ve fikri mülkiyetimizi tescilledik.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Başarılarımızdan Bazıları:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {achievements.map((ach, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-secondary shadow-sm">
                                <ach.icon className="h-6 w-6 text-primary flex-shrink-0" />
                                <p className="text-sm text-muted-foreground">{ach.text}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="mb-12 md:mb-16">
          <div className="text-center mb-10">
            <h2 className="section-title">Yapay Zeka ve İş Dünyasının Güçlü İsimleri</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Assisto'nun arkasında, yapay zeka, SaaS ve iş geliştirme alanlarında derin bir deneyime sahip, tutkulu ve vizyoner bir ekip bulunmaktadır.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
               <ScrollAnimationWrapper key={index} style={{animationDelay: `${index * 0.1}s`}}>
                <TeamMemberCard {...member} />
              </ScrollAnimationWrapper>
            ))}
          </div>
           <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
            Kurucu ekibimize ek olarak, derin öğrenme ve makine öğrenmesi uzmanı yapay zeka mühendislerinden, fullstack yazılım geliştiricilerine, ürün yöneticilerinden satış ve pazarlama uzmanlarına kadar alanında yetkin geniş bir ekiple çalışıyoruz.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <div className="text-center mb-10">
            <h2 className="section-title">Sektörün Önde Gelen Danışmanları</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Projemiz, yapay zeka ve iş dünyasının saygın isimlerinden oluşan bir danışma kurulu tarafından desteklenmektedir.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((advisor, index) => (
              <ScrollAnimationWrapper key={index} style={{animationDelay: `${index * 0.1}s`}}>
                <AdvisorCard {...advisor} />
              </ScrollAnimationWrapper>
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
