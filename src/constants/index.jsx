import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiAngular } from "react-icons/si";
export const NAVIGATION_LINKS = [
  // { label: "Projeler", href: "#projects" },
  { label: "Hakkımda", href: "#bio" },
  { label: "Yetenekler", href: "#skills" },
  { label: "İş Deneyimi", href: "#work" },
  { label: "Eğitim", href: "#education" },
  { label: "İletişim", href: "#contact" },
];


export const HERO = {
  name: "KEREM BABAOGLU",
  greet: "Merhaba! 👋🏻",
  description:"Güzel ve işlevsel kullanıcı arayüzleri oluşturma konusunda tutkulu bir frontend geliştiricisiyim. Fikirleri etkileyici web deneyimlerine dönüştürmeyi seviyorum.",
  resume:'Özgeçmiş İndir'
};

export const BIO = [
  "Merhaba, ben Kerem Babaoğlu. 2023 yılında Trakya Üniversitesi Bilgisayar Mühendisliği bölümünden mezun oldum. Web geliştirme yolculuğuma HTML ve CSS öğrenerek başladım, ardından JavaScript ile ilerledim. Eğitim sürecimde React üzerinde çalışarak modern web teknolojileri konusunda kendimi geliştirdim.",
  "İşe başladıktan sonra, Angular ile çalışmaya başladım çünkü projelerimizde bu teknolojiyi kullanıyoruz. Şu anda Asis Elektronik'te Yazılım Geliştirme Uzmanı olarak Angular, JavaScript ve Bootstrap gibi teknolojilerle çalışıyorum.",
  "Frontend geliştirme konusunda tutkuluyum ve kullanıcı dostu, etkileyici web deneyimleri oluşturmayı seviyorum. Yeni şeyler öğrenmeye ve kendimi geliştirmeye her zaman açığım. Ekip çalışmasında uyumlu biriyim ve projelere katkı sağlamaktan keyif alıyorum.",
];


export const SKILLS = [
  {
    icon: <SiHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "HTML",
    experience: "3+ years",
  },
  {
    icon: <SiCss3 className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "CSS",
    experience: "3+ years",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "1+ years",
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "JavaScript",
    experience: "3+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <SiAngular className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Angular",
    experience: "2+ years",
  },
];

export const EXPERIENCES = [
  {
    title: "Yazılım Geliştirme Uzmanı",
    company: "Asis Elektronik",
    duration: "Eylül 2024 - Halen",
    description:"Yazılım Geliştirme Uzman Yardımcısı pozisyonumdan, başarılı projeler ve gelişen sorumluluklar doğrultusunda Yazılım Geliştirme Uzmanı pozisyonuna terfi ettim."
  },
  {
    title: "Yazılım Geliştirme Uzman Yardımcısı",
    company: "Asis Elektronik",
    duration: "Ağustos 2023 - Eylül 2024",
    description: 
    "Şu anda, frontend geliştirme alanında kendimi geliştirmek adına Angular, JavaScript ve Bootstrap teknolojilerini kullanarak iki farklı projede aktif olarak yer almaktayım. Bir projenin frontend tarafını tek başıma geliştirirken, diğer projenin frontend kısmını ekip arkadaşlarımla birlikte yazıyorum. Her iki projede de ekip içinde yer alarak teknik becerilerimi güçlendirme ve gerçek dünya uygulamalarında deneyim kazanma fırsatı buluyorum."
  },
  {
    title: "Front-End Geliştiricisi",
    company: "Asis Elektronik",
    duration: "Nisan 2023 - Ağustos 2023",
    description: 
    "Asis Elektronik'teki 4 aylık staj sürecinde Angular framework üzerinde frontend geliştirme konusunda değerli bir deneyim elde ettim. Bir ekibin parçası olarak günlük toplantılara katıldım ve işbirliği içinde çalışarak projelerin başarıyla tamamlanmasına katkıda bulundum. Angular framework üzerinde çalışarak modern web uygulamalarının geliştirilmesi konusunda pratik bilgi ve beceriler kazandım. İş tecrübesi kazanma sürecinde sunum becerilerimi geliştirdim ve proje dokümantasyonları oluşturma yeteneğimi artırdım. Mentorlarımın rehberliğinde problemlere çözüm odaklı yaklaşma yeteneğimi güçlendirdim ve projelerin zamanında ve bütçe içinde tamamlanmasını sağladım."
  },
  {
    title: "Stajyer",
    company: "Teknasyon",
    duration: "Haziran 2022 - Ağustos 2022",
    description: 
    "Teknasyon'daki 2 aylık staj sürecinde frontend temellerimi sağlamlaştırma fırsatı buldum. HTML, CSS ve JavaScript kullanarak çeşitli projeler geliştirerek bu alanlarda pratik deneyim kazandım. Staj sürecinde öğrendiklerim, web geliştirme konusundaki bilgi birikimimi artırmamı ve sektördeki yeniliklere adapte olmamı sağladı. Verimli bir staj dönemi geçirerek teknik becerilerimi güçlendirdim."
  },
];

export const EDUCATION = [
  {
    degree: "Bilgisayar Mühendisliği",
    institution: "Trakya Üniversitesi",
    duration: "Eylül 2017 - Haziran 2023",
    description:
      "Web uygulamaları için kullanıcı deneyimi geliştirme konularında çeşitli projeler gerçekleştirdim. Öğrenim sürecimde ekip çalışmaları, problem çözme ve yazılım mühendisliği alanında güçlü bir temel edindim. Başarıyla mezun oldum.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://instagram.com/kerem.babaoglu",
    icon: <FaInstagram fontSize={25} className="hover:text-pink-500" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:text-blue-400" />,
  },
  {
    href: "https://github.com/Kerem-Babaoglu",
    icon: <FaGithub fontSize={25} className="hover:text-gray-700" />,
  },
  {
    href: "https://www.linkedin.com/in/kerem-babaoğlu-96a27a24b",
    icon: <FaLinkedin fontSize={25} className="hover:text-blue-700" />,
  },
];

export const CONTACT = 
  {
    adress:'Ferhatpaşa Mah. / Atatürk Cad / Fehmi Atalay Apt. / Daire:5',
    phoneNumber: '+90 534 784 98 70',
    email: 'kerembabaoglu1@gmail.com'
  };


