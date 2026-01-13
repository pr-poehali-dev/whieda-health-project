import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      id: 1,
      name: 'Комплекс витаминов Premium',
      category: 'Витамины',
      description: 'Сбалансированный комплекс для ежедневной поддержки организма',
      price: '2 490 ₽'
    },
    {
      id: 2,
      name: 'Омега-3 форте',
      category: 'Добавки',
      description: 'Высококонцентрированные омега-3 кислоты для сердечно-сосудистой системы',
      price: '3 290 ₽'
    },
    {
      id: 3,
      name: 'Пробиотик Pro',
      category: 'Добавки',
      description: 'Восстановление и поддержка микрофлоры кишечника',
      price: '1 990 ₽'
    },
    {
      id: 4,
      name: 'Коллаген Beauty',
      category: 'Красота',
      description: 'Натуральный коллаген для кожи, волос и ногтей',
      price: '2 790 ₽'
    }
  ];

  const benefits = [
    {
      icon: 'ShieldCheck',
      title: 'Сертифицированное качество',
      description: 'Вся продукция имеет международные сертификаты качества и соответствует стандартам GMP'
    },
    {
      icon: 'Microscope',
      title: 'Научная разработка',
      description: 'Формулы разработаны ведущими специалистами в области нутрициологии и медицины'
    },
    {
      icon: 'Leaf',
      title: 'Натуральный состав',
      description: 'Используем только проверенные натуральные компоненты без синтетических добавок'
    },
    {
      icon: 'Award',
      title: 'Проверенная эффективность',
      description: 'Результаты подтверждены клиническими исследованиями и тысячами отзывов'
    }
  ];

  const certificates = [
    {
      name: 'ISO 9001:2015',
      description: 'Система менеджмента качества',
      type: 'Международный стандарт'
    },
    {
      name: 'GMP',
      description: 'Надлежащая производственная практика',
      type: 'Фармацевтический стандарт'
    },
    {
      name: 'HACCP',
      description: 'Безопасность пищевой продукции',
      type: 'Международная сертификация'
    },
    {
      name: 'Декларация ТР ТС',
      description: 'Соответствие техническим регламентам',
      type: 'Таможенный союз'
    }
  ];

  const faqs = [
    {
      question: 'Как долго нужно принимать продукцию WHIEDA?',
      answer: 'Рекомендуемый курс приема составляет от 1 до 3 месяцев в зависимости от продукта. Точные рекомендации указаны на упаковке каждого продукта.'
    },
    {
      question: 'Есть ли противопоказания?',
      answer: 'Перед применением рекомендуется проконсультироваться с врачом. Основные противопоказания: индивидуальная непереносимость компонентов, беременность и период лактации (для некоторых продуктов).'
    },
    {
      question: 'Как проверить подлинность продукции?',
      answer: 'Каждая упаковка имеет уникальный код, который можно проверить на нашем сайте. Также вы можете запросить копии сертификатов качества.'
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем оплату банковскими картами, через системы электронных платежей, а также наличными при получении.'
    },
    {
      question: 'Доставляете ли вы в регионы?',
      answer: 'Да, мы осуществляем доставку по всей России. Стоимость и сроки доставки зависят от региона и выбранного способа доставки.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Activity" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-foreground">WHIEDA</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
                О компании
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-sm font-medium hover:text-primary transition-colors">
                Преимущества
              </button>
              <button onClick={() => scrollToSection('products')} className="text-sm font-medium hover:text-primary transition-colors">
                Продукция
              </button>
              <button onClick={() => scrollToSection('certificates')} className="text-sm font-medium hover:text-primary transition-colors">
                Сертификаты
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('contact')}>Связаться с нами</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="text-sm">Профессиональная продукция для здоровья</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                WHIEDA
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Сертифицированная продукция премиум-класса для оздоровления и поддержания здоровья. Качество, подтвержденное международными стандартами.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('products')}>
                  Смотреть продукцию
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('certificates')}>
                  Сертификаты качества
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/b757bda1-b3dd-479e-b359-207853a33363/files/1bee4efc-5259-40b2-900e-16b8efb9a658.jpg" 
                alt="Продукция WHIEDA" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground">О компании WHIEDA</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              WHIEDA — это команда профессионалов, объединенных общей целью: создавать продукцию высочайшего качества для поддержания и укрепления здоровья. Мы работаем с ведущими научными лабораториями и используем только проверенные компоненты.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Наша миссия — сделать качественную оздоровительную продукцию доступной для каждого, кто заботится о своем здоровье. Мы строго контролируем каждый этап производства и гарантируем соответствие международным стандартам качества.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">12+</div>
                <div className="text-muted-foreground">лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-muted-foreground">продуктов в линейке</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши преимущества</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Почему тысячи клиентов выбирают продукцию WHIEDA
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={benefit.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наша продукция</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент сертифицированной продукции для вашего здоровья
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{product.category}</Badge>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Сертификаты качества</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Наша продукция сертифицирована в соответствии с международными и российскими стандартами
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/b757bda1-b3dd-479e-b359-207853a33363/files/dbd60539-3062-45f3-aafe-0ba4d228b20c.jpg" 
                alt="Сертификаты WHIEDA" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {certificates.map((cert, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon name="BadgeCheck" className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-white text-lg">{cert.name}</CardTitle>
                    <CardDescription className="text-slate-400">{cert.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-sm">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" className="bg-white text-slate-900 hover:bg-slate-100">
              Скачать все сертификаты
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Часто задаваемые вопросы</h2>
              <p className="text-lg text-muted-foreground">
                Ответы на популярные вопросы о продукции WHIEDA
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Остались вопросы? Наши специалисты готовы вам помочь
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium">Телефон</div>
                      <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">info@whieda.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium">Адрес</div>
                      <div className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium">Режим работы</div>
                      <div className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Отправить сообщение</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Input placeholder="Телефон" />
                    </div>
                    <div>
                      <Textarea placeholder="Ваше сообщение" rows={4} />
                    </div>
                    <Button className="w-full" size="lg">Отправить</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Activity" className="text-primary" size={32} />
                <span className="text-2xl font-bold">WHIEDA</span>
              </div>
              <p className="text-slate-400 text-sm">
                Профессиональная продукция для здоровья с международной сертификацией
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-primary transition-colors">Продукция</button></li>
                <li><button onClick={() => scrollToSection('certificates')} className="hover:text-primary transition-colors">Сертификаты</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors">FAQ</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button></li>
                <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Следите за нами</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            © 2024 WHIEDA. Все права защищены. Продукция сертифицирована.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
