import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Snowfall from '@/components/Snowfall';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Snowfall />
      
      <div className="relative z-10">
        <header className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
              <span className="text-4xl">❄️</span>
              DETX.COM
            </h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 md:py-20">
          <section className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <div className="inline-block mb-6 px-6 py-2 bg-primary/10 rounded-full text-primary font-semibold">
              🎄 Новогоднее издание 2024
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
              Добро пожаловать в
              <span className="block text-primary mt-2">DETX.COM</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к нашему Telegram-каналу и будьте в курсе самых свежих новостей и обновлений
            </p>

            <Button 
              size="lg" 
              className="text-lg px-8 py-6 hover:scale-105 transition-transform animate-scale-in"
              asChild
            >
              <a 
                href="https://t.me/detxcom" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Icon name="Send" size={24} />
                Подписаться на канал
              </a>
            </Button>
          </section>

          <section className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mt-20">
            <Card className="p-6 text-center hover:scale-105 transition-transform bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold mb-2">Эксклюзивный контент</h3>
              <p className="text-muted-foreground">
                Получайте доступ к уникальным материалам первыми
              </p>
            </Card>

            <Card className="p-6 text-center hover:scale-105 transition-transform bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Актуальные новости</h3>
              <p className="text-muted-foreground">
                Будьте в курсе самых важных событий
              </p>
            </Card>

            <Card className="p-6 text-center hover:scale-105 transition-transform bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2">Сообщество</h3>
              <p className="text-muted-foreground">
                Общайтесь с единомышленниками
              </p>
            </Card>
          </section>
        </main>

        <footer className="container mx-auto px-4 py-12 mt-20 border-t border-border/50">
          <div className="max-w-4xl mx-auto text-center text-muted-foreground">
            <p className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">🎄</span>
              С наступающим Новым Годом!
              <span className="text-2xl">🎄</span>
            </p>
            <p className="text-sm">
              © 2024 DETX.COM | Все права защищены
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
