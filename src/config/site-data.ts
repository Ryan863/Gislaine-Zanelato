export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  featured?: boolean;
  whatsappText: string;
}

export interface ImperiumPillar {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  context: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const WHATSAPP_NUMBER = "5549999344184";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildServiceWhatsAppUrl(serviceName: string): string {
  return buildWhatsAppUrl(
    `Olá, Dra. Gislaine! Gostaria de saber mais sobre ${serviceName} e agendar uma avaliação personalizada.`
  );
}

export const SITE_CONFIG = {
  brandName: "Dra. Gislaine Zanelato",
  brandTagline: "BIOMÉDICA ESTETA • HARMONIZAÇÃO FACIAL",
  title: "Dra. Gislaine Zanelato | Harmonização Facial e Peles Maduras em Lages - SC",
  description:
    "Especialista em peles maduras e criadora do Protocolo Imperium Lift em Lages - SC. Mais de 5 anos gerenciando o envelhecimento com técnica, elegância e naturalidade.",
  phoneDisplay: "(49) 99934-4184",
  phoneInternational: "+5549999344184",
  whatsappUrl:
    "https://wa.me/5549999344184?text=Ol%C3%A1%2C+Dra.+Gislaine%21+Visitei+o+site+e+gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o+personalizada.",
  instagramHandle: "@dragislainezanelato",
  instagramUrl: "https://www.instagram.com/dragislainezanelato/",
  googleRating: "5.0",
  googleReviewCount: 7,
  address: {
    street: "R. João Gualberto da Silva, 35 - Sala 03",
    neighborhood: "Centro",
    city: "Lages",
    state: "SC",
    postalCode: "88501-005",
    plusCode: "5MM9+JQ Centro, Lages - SC",
    full: "R. João Gualberto da Silva, 35 - Sala 03 - Centro, Lages - SC, 88501-005",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=R.+Jo%C3%A3o+Gualberto+da+Silva,+35+-+Sala+03+-+Centro,+Lages+-+SC,+88501-005",
  },
  hours: [
    { days: "Segunda a Sexta-feira", time: "13:00 às 20:30" },
    { days: "Sábado", time: "13:30 às 15:00" },
    { days: "Domingo", time: "Fechado" },
  ],
} as const;

export const NAV_LINKS = [
  { label: "Imperium Lift", href: "#imperium-lift" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
] as const;

export const IMPERIUM_PILLARS: ImperiumPillar[] = [
  {
    number: "01",
    title: "Sustentação Profunda",
    description:
      "Associação estratégica de Bioestimuladores de Colágeno e Fios de PDO para devolver densidade dérmica, reposicionar tecidos e redefinir o terço médio e mandibular sem pesar a expressão.",
  },
  {
    number: "02",
    title: "Tecnologia de Precisão",
    description:
      "Sinergia entre Ultraformer e Laser Fracionado para atuar nas camadas musculares e superficiais da pele, promovendo contração tecidual, luminosidade e refinamento de textura.",
  },
  {
    number: "03",
    title: "Manutenção Ética Individualizada",
    description:
      "Cada rosto responde em seu próprio ritmo. A Dra. Gislaine acompanha pessoalmente a evolução biológica dos resultados, utilizando apenas produtos certificados de primeira linha.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Protocolo Imperium Lift & Peles Maduras",
    subtitle: "MÉTODO AUTORAL EXCLUSIVO",
    description:
      "Associação estratégica desenvolvida pela Dra. Gislaine Zanelato para reestruturação facial, firmeza profunda e rejuvenescimento global sem artificialidade.",
    highlights: [
      "Mapeamento anatômico individualizado",
      "Combate à flacidez estrutural",
      "Resultados progressivos e elegantes",
    ],
    featured: true,
    whatsappText: buildServiceWhatsAppUrl("Protocolo Imperium Lift & Peles Maduras"),
  },
  {
    number: "02",
    title: "Bioestimuladores de Colágeno & Fios de PDO",
    subtitle: "ESTÍMULO BIOLÓGICO & LIFTING",
    description:
      "Estímulo intenso da produção natural de colágeno combinado ao efeito lifting imediato e progressivo para tratar a flacidez facial e cervical.",
    highlights: ["Face e pescoço", "Melhora da espessura da pele", "Efeito firmeza duradouro"],
    whatsappText: buildServiceWhatsAppUrl("Bioestimuladores de Colágeno & Fios de PDO"),
  },
  {
    number: "03",
    title: "Toxina Botulínica (Botox) & Preenchimento",
    subtitle: "EQUILÍBRIO & ESCULTURA FACIAL",
    description:
      "Suavização precisa de linhas de expressão e escultura labial ou facial com ácido hialurônico, preservando sua identidade e leveza ao sorrir.",
    highlights: ["Expressão descansada", "Contorno labial refinado", "Proporção anatômica"],
    whatsappText: buildServiceWhatsAppUrl("Toxina Botulínica (Botox) & Preenchimento"),
  },
  {
    number: "04",
    title: "Ultraformer & Tecnologias Fracionadas",
    subtitle: "ALTA PERFORMANCE NÃO INVASIVA",
    description:
      "Tratamentos de ponta para definição do contorno mandibular, redução de papada, estímulo profundo e renovação celular com laser fracionado.",
    highlights: ["Contorno mandibular nítido", "Qualidade de pele superior", "Zero afastamento social"],
    whatsappText: buildServiceWhatsAppUrl("Ultraformer & Tecnologias Fracionadas"),
  },
  {
    number: "05",
    title: "Harmonização & Volumização Glútea",
    subtitle: "PROTOCOLO CORPORAL AVANÇADO",
    description:
      "Protocolo corporal focado em projeção harmônica, contorno, firmeza tecidual e melhora visível da textura e celulite da região glútea.",
    highlights: ["Firmeza e sustentação", "Melhora de textura", "Planejamento personalizado"],
    whatsappText: buildServiceWhatsAppUrl("Harmonização & Volumização Glútea"),
  },
];

export const AUTHORITY_POINTS = [
  {
    title: "Mais de 5 anos dedicados a peles maduras",
    description:
      "Experiência clínica contínua no gerenciamento biológico do envelhecimento, respeitando a anatomia e o tempo de cada paciente.",
  },
  {
    title: "Produtos certificados e procedência rigorosa",
    description:
      "Seleção criteriosa de injetáveis de alta pureza e tecnologias reconhecidas para segurança e previsibilidade clínica.",
  },
  {
    title: "Execução e manutenção acompanhadas de perto",
    description:
      "Atendimento ético no Centro de Lages, com acompanhamento direto da Dra. Gislaine desde a avaliação até as revisões.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Angela Ramos da Costa",
    context: "Avaliação verificada no Google",
    quote:
      "Minha experiência foi excelente, profissional ética, produtos de alta qualidade. Execução e manutenção dos procedimentos estéticos acompanhados e executados pela Gislaine. Atendimento espetacular!",
    rating: 5,
  },
  {
    name: "Marcia Terezinha",
    context: "Avaliação verificada no Google",
    quote:
      "Conheci a Dr Gislaine através do Instagram tive a oportunidade de conhecer ela e o trabalho espetacular, estou muito satisfeita com resultados e recomendo a todos.",
    rating: 5,
  },
  {
    name: "Grasiele Daiane Rodrigues",
    context: "Avaliação verificada no Google",
    quote:
      "Um ótimo atendimento, Profissional incrível, entrega o resultado que promete, amei ficou maravilhoso.",
    rating: 5,
  },
  {
    name: "Bruna Canto",
    context: "Avaliação verificada no Google",
    quote:
      "Trabalho impecável, ambiente aconchegante, atendimento maravilhoso!!!! Super amei.",
    rating: 5,
  },
  {
    name: "Ana Paula Matos",
    context: "Avaliação verificada no Google",
    quote: "Ótima profissional, atendimento impecável.",
    rating: 5,
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "O que é o Protocolo Imperium Lift e para quem ele é indicado?",
    answer:
      "O Protocolo Imperium Lift é um método exclusivo criado pela Dra. Gislaine Zanelato para o gerenciamento completo de peles maduras. Ele associa bioestimuladores, sustentação e tecnologias de ponta para tratar a flacidez e reestruturar os contornos faciais de forma natural, sendo indicado para quem busca firmeza e rejuvenescimento sem artificialidade.",
  },
  {
    question: "Qual a diferença entre Bioestimuladores de Colágeno, Fios de PDO e Ultraformer?",
    answer:
      "Cada recurso atua em uma profundidade específica: o Ultraformer promove ancoragem muscular e redução de flacidez profunda por ultrassom; os Fios de PDO oferecem tração e estímulo mecânico localizado; e os Bioestimuladores ativam a produção biológica de novo colágeno na derme. Quando associados estrategicamente, os resultados se potencializam.",
  },
  {
    question: "Os procedimentos deixam o rosto inchado ou artificial?",
    answer:
      "Não. O pilar ético do atendimento da Dra. Gislaine é preservar a sua identidade e os seus traços individuais. O planejamento prioriza sustentação, qualidade de pele e proporções anatômicas equilibradas, entregando um aspecto descansado, firme e elegante — nunca exagerado.",
  },
  {
    question: "Como funciona o acompanhamento e a manutenção dos procedimentos?",
    answer:
      "Após a avaliação personalizada no Centro de Lages, definimos um plano de tratamento por etapas. Todos os procedimentos são executados e acompanhados diretamente pela Dra. Gislaine, com retornos programados para monitorar a resposta biológica do seu organismo e orientar a manutenção ideal.",
  },
  {
    question: "Quais são os horários de atendimento da clínica em Lages?",
    answer:
      "A clínica atende em horário estendido, pensado para quem trabalha em horário comercial: de segunda a sexta-feira das 13:00 às 20:30, e aos sábados das 13:30 às 15:00, na R. João Gualberto da Silva, 35 - Sala 03, Centro, Lages - SC.",
  },
];
