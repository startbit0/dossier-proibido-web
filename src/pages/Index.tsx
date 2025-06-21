import { Flame } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-dossie-dark text-dossie-light">
      {/* SECTION 1: HERO HEADER */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-dossie-dark">
        {/* Background texture overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        {/* Confidential Badge */}
        <div className="absolute top-8 right-8 z-20">
          <div className="confidential-badge">
            DOSSIÊ CONFIDENCIAL
          </div>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <h1 className="dossie-headline mb-8 animate-fade-in-up">
            A VERDADE NÃO FOI PERDIDA.<br />
            FOI ENTERRADA.
          </h1>
          
          <p className="dossie-subheading mb-12 max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            O dossiê que conecta os pontos que a história oficial insiste em manter separados.
          </p>
          
          {/* Book Cover */}
          <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="mx-auto max-w-sm">
              <img 
                src="/lovable-uploads/8d0d9131-4f6f-4de3-a464-2ddd84f56a2a.png" 
                alt="Como o Crime e a Política se Fundiram no Brasil - Capa do Livro"
                className="w-full h-auto rounded-lg shadow-2xl border-2 border-dossie-red"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CRIME SCENE TAPE TRANSITION */}
      <section className="crime-tape py-6">
        <div className="container mx-auto px-4">
          <p className="dossie-typewriter text-center font-bold text-red">
            CRUZE ESTA LINHA E DESCUBRA O QUE ELES NÃO QUEREM QUE VOCÊ SAIBA
          </p>
        </div>
      </section>

      {/* SECTION 3: THE REVELATIONS (CONSPIRACY BOARD) */}
      <section className="py-20 bg-gradient-to-b from-dossie-dark to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="dossie-headline text-center mb-16">
              A ANATOMIA DA CAPTURA DO ESTADO
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Conspiracy Board Visual */}
              <div className="bg-gray-800 p-8 rounded-lg border border-dossie-red">
                <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-dossie-red rounded-full flex items-center justify-center mx-auto mb-4">
                      <Flame className="w-8 h-8 text-white" />
                    </div>
                    <p className="font-typewriter text-sm text-dossie-grey">
                      EVIDENCE BOARD
                    </p>
                  </div>
                </div>
                <p className="font-typewriter text-center text-dossie-grey">
                  As conexões que eles tentaram esconder
                </p>
              </div>
              
              {/* Evidence Files */}
              <div className="space-y-6">
                <div className="evidence-card">
                  <h3 className="font-oswald text-xl text-dossie-red mb-3 uppercase">
                    File #01: O CRIME FUNDADOR
                  </h3>
                  <p className="dossie-body">
                    A verdade sobre o assassinato de Celso Daniel e a sistemática "queima de arquivo" de 8 testemunhas-chave.
                  </p>
                </div>
                
                <div className="evidence-card">
                  <h3 className="font-oswald text-xl text-dossie-red mb-3 uppercase">
                    File #02: O FORO INVISÍVEL
                  </h3>
                  <p className="dossie-body">
                    A agenda secreta do Foro de São Paulo, suas alianças com as FARC e seu plano de poder continental.
                  </p>
                </div>
                
                <div className="evidence-card">
                  <h3 className="font-oswald text-xl text-dossie-red mb-3 uppercase">
                    File #03: A GUERRA INVISÍVEL
                  </h3>
                  <p className="dossie-body">
                    Como a justiça (Lawfare) e a mídia (Mediafare) foram transformadas em armas para destruir reputações e manipular a nação.
                  </p>
                </div>
                
                <div className="evidence-card">
                  <h3 className="font-oswald text-xl text-dossie-red mb-3 uppercase">
                    File #04: A PARCERIA PROFANA
                  </h3>
                  <p className="dossie-body">
                    A aliança esquecida entre agentes da ditadura e o crime, que profissionalizou as facções que dominam o Brasil hoje.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TARGET AUDIENCE (THE WATCHER) */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="dossie-headline mb-16">
              Este Dossiê é Para Você Que:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-dossie-dark border border-dossie-red p-8 rounded-lg">
                <div className="text-4xl mb-4">✔️</div>
                <p className="dossie-body">
                  Sente que a versão oficial da história é incompleta.
                </p>
              </div>
              
              <div className="bg-dossie-dark border border-dossie-red p-8 rounded-lg">
                <div className="text-4xl mb-4">✔️</div>
                <p className="dossie-body">
                  Desconfia da grande mídia e das instituições.
                </p>
              </div>
              
              <div className="bg-dossie-dark border border-dossie-red p-8 rounded-lg">
                <div className="text-4xl mb-4">✔️</div>
                <p className="dossie-body">
                  Recusa-se a aceitar o absurdo como normal.
                </p>
              </div>
              
              <div className="bg-dossie-dark border border-dossie-red p-8 rounded-lg">
                <div className="text-4xl mb-4">✔️</div>
                <p className="dossie-body">
                  Tem a coragem de enfrentar uma verdade desconfortável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION */}
      <section className="py-20 bg-dossie-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-anton text-4xl md:text-6xl uppercase text-white mb-8">
            ACESSE O DOSSIÊ COMPLETO. AGORA.
          </h2>
          
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-black/20 p-8 rounded-lg border border-white/20">
              <p className="text-white/70 text-xl mb-4 line-through">
                De R$ 39,90
              </p>
              <p className="text-4xl md:text-6xl font-anton text-dossie-yellow mb-6">
                Por apenas R$ 19,90
              </p>
              <p className="text-white font-oswald text-lg mb-8">
                OFERTA DE LANÇAMENTO POR TEMPO LIMITADO.<br />
                Acesso imediato ao livro digital (PDF).
              </p>
              
              <a 
                href="https://pay.hotmart.com/I100254239S"
                className="inline-block bg-dossie-yellow text-black px-12 py-4 rounded-lg font-oswald text-xl font-bold uppercase hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔥 QUERO MINHA CÓPIA ANTES QUE SEJA TARDE
              </a>
              
              <p className="text-white/70 text-sm mt-6">
                Compra 100% Segura. Garantia Incondicional de 7 Dias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: THE MISSION (THE VOICE) */}
      <section className="py-20 bg-gradient-to-t from-dossie-dark to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="w-32 h-32 mx-auto mb-8 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/dda9371f-c30a-4453-8828-ffa0f0300337.png" 
                  alt="Mudança de Ordem Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <h2 className="dossie-headline mb-8">
              A VERDADE PRECISA DE UMA VOZ.
            </h2>
            
            <p className="dossie-body text-xl mb-12 max-w-3xl mx-auto">
              O "Mudança de Ordem" é um esforço independente de investigação nascido da inquietação. 
              Nossa missão é quebrar o pacto de silêncio e oferecer uma resistência narrativa à captura do Estado. 
              Este livro é o primeiro passo.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-black text-center">
        <p className="font-typewriter text-dossie-grey">
          © 2025 Mudança de Ordem. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
