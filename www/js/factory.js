angular.module('starter.factory', [])

.factory("FacultyFactory", function() {
  var faculty = [
  {
    id: 0,
    name: "Carlos Henrique Zanelato Pantaleão",
    avatar: "pantaleao.jpg",
    vitae: "Possui graduação em Engenharia Elétrica pela Universidade Federal de Mato Grosso - UFMT (1996), mestrado em Engenharia Elétrica com ênfase em Processamento da Informação pela Universidade Federal de Uberlândia - UFU (1999), doutorado em Engenharia Elétrica com ênfase em Engenharia Biomédica pela Universidade Federal de Santa Catarina - UFSC (2003) e Especialização Lato Sensu em Engenhaira de Segurança do Trabalho pela Universidade Federal de Santa Catarina - UFSC (2002). Atuou como docente no Centro Universitário de Maringá - CESUMAR de 2004 a 2007, nos cursos de Graduação de Engenharia Mecatrônica, Tecnologia em Automação Industrial e Biomedicina. Atualmente trabalha como professor Adjunto pela Universidade Estadual do Oeste do Paraná - UNIOESTE, campus de Foz do Iguaçu, no curso de Engenharia Elétrica e coordena o Laboratório de Pesquisa em Controle e Automação - LCA e o Núcleo de Instrumentação. Tem experiência na área de Engenharia Elétrica e Engenharia Biomédica, atuando principalmente nos seguintes temas: desenvolvimento de Sistemas Microcontrolados, Engenharia Clínica, Instrumentação Biomédica, Metodologia Multicritério de Apoio a Decisão, Processamento Digital de Sinais e Imagens, Engenharia de Segurança do Trabalho e Programa de Controle da Manutenção.",
    lattes: "http://lattes.cnpq.br/7560571987514133"
  },
  {
    id: 1,
    name: "Clodis Boscarioli",
    avatar: "boscarioli.jpg",
    vitae: "Clodis Boscarioli é Professor Adjunto na Universidade Estadual do Oeste do Paraná, Campus de Cascavel, onde atua desde o ano de 2000, no Curso de Ciência da Computação. Docente e orientador no Programa de Mestrado em Ensino da Universidade Estadual do Oeste do Paraná, Campus de Foz do Iguaçu. Possui graduação em Informática e especialização em Ciência da Computação pela Universidade Estadual de Ponta Grossa (1996 e 1999, respectivamente). É Mestre em Informática pela Universidade Federal do Paraná (2002). Doutor em Engenharia Elétrica pela Universidade de São Paulo (2008), e também especialista em Formulação e Gestão de Políticas Públicas pela Escola de Governo do Paraná em parceria com a Universidade Estadual do Oeste do Paraná (2008). É tutor do Grupo PETComp (Programa de Educação Tutorial em Ciência da Computação) aprovado pela Sesu/MEC em 2010. Suas áreas de interesse envolvem, de forma multidisciplinar, Banco de Dados, Interação Humano-computador, Aprendizado Computacional, Data Mining, Sistemas de Informação e Tecnologias Assistivas no Processo de Ensino-Aprendizagem, além de questões relacionadas ao Ensino de Computação. Líder do GIA (Grupo de Inteligência Aplicada) da UNIOESTE e pesquisador colaborador no ICONE-EPUSP.",
    lattes: "http://lattes.cnpq.br/2844207318576160"
  },
  {
    id: 2,
    name: "Eduardo Cesar Dechechi",
    avatar: "decheci.jpg",
    vitae: "Engenheiro Químico (UFSCar) com Mestrado e Doutorado em Engenharia Química pela UNICAMP. Especialista em Planejamento e Gestão Estratégica de P,D,E&I: (P&D+I em Energia Elétrica pela Unicamp em parceria com Eletrobras & Internacional em Empresas pelo TECPAR. Professor Doutor Adjunto Unioeste Campus Foz do Iguaçu - Engenharia Mecânica / PTI e do Programa de Mestrado em Gestão, Tecnologias e Sustentabilidade. Professor Doutor do Centro Universitário UDC Engenharias Civil, Elétrica e Mecânica (Foz do Iguaçu-PR). Carreira profissional: Gerente de C&T/P&D da Fundação Parque Tecnológico Itaipu - FPTI (2008-2012). Consultor especialista de Gestão da Inovação da Frimesa - Cooperativa Central (Medianeria-PR) (2012-2014) Gerente de Inovação e Projetos Especiais da Unindus (Universidade da Indústria / SESI - Sistema FIEP - 2006-2008). Membro do Grupo de Projetos Especiais do Tecpar e Coordenador do Programa Paraná Agroindustrial (1999-2002). Professor Titular da PUCPR (1999-2006) e diretor do curso de engenharia de produção agroindustrial (2003-2006).",
    lattes: "http://lattes.cnpq.br/0232503428559756"
  },
  {
    id: 3,
    name: "Eduardo Hack Neto",
    avatar: "neto.jpg",
    vitae: "Possui graduação em Administração com Habilitação em Comércio Exterior pela Faculdades Unificadas de Foz do Iguaçu - UNIFOZ (1998), especialização em Consultoria Empresarial pela Faculdade de Ciências Aplicadas de Cascavel - UNIVEL (2000) e em Ecoturismo pela Faculdade Estadual de Ciências Econômicas de Apucarana - FECEA (2003), mestrado em Turismo e Hotelaria pela Universidade do Vale do Itajaí - UNIVALI (2005) e doutorado em Geografia pela Universidade Federal do Paraná - UFPR (2012) com inclusão do sistema de créditos (split PhD) na USC (Universidad de Santiago de Compostela - Espanha). Foi professor nos cursos de Turismo, Gastronomia, Administração, Eventos e outros da UNIVALI, FCJ, IESVILLE, UDC, Anglo Americano e Uniamérica. Também coordenou Estágio Supervisionado em duas destas IES. Possui experiência na área de Administração de Empresas, atuando principalmente na gerência de empreendimentos relacionados a área turística (hotelaria e eventos), ainda, conta com produção acadêmica em diversas área as quais são basicamente oriundas das áreas de administração, turismo, marketing, empreendedorismo, sustentabilidade e geografia para organizações e destinos turísticos. Realiza trabalhos voluntários em ONGs e OSCIPs, tais como: COMTUR (Conselho Municipal de Turismo de Foz do Iguaçu), CODEFOZ (Conselho de Desenvolvimento Econômico e Social de Foz do Iguaçu), ADERE (Associação para Desenvolvimento de Esportes Radicais e Ecologia em Foz do Iguaçu), Associação Beneficente Universitária Panamericana e UEB/GEG-33 (União dos Escoteiros do Brasil/Grupo Escoteiro Guairacá - 33).",
    lattes: "http://lattes.cnpq.br/4496924261739015"
  },
  {
    id: 4,
    name: "Eduardo Moreira",
    avatar: "moreira.jpg",
    vitae: "Possui graduação em Engenharia Mecânica pela Universidade Federal de Itajubá (1977), mestrado em Engenharia Mecânica pela Universidade Federal de Itajubá (1987) e doutorado em Engenharia de Produção pela Universidade Federal de Santa Catarina (2002). Atuou como Engenheiro Mecânico nas Centrais Elétricas do Sul do Brasil S/A - ELETROSUL por 11 anos e na Itaipu Binacional por 16 anos. Atualmente é professor adjunto da Universidade Estadual do Oeste do Paraná. Tem experiência na área de Engenharia Mecânica, com ênfase em Engenharia Manutenção, atuando principalmente nos seguintes temas: manutenção e comissionamento de usina hidrelétrica, acompanhamento de desempenho de equipamentos, processo de lubrificação, gerenciamento de processos, planejamento estratégico, gerenciamento de projeto, gestão do conhecimento e logística de suprimento de materiais.",
    lattes: "http://lattes.cnpq.br/5678250532835636"
  },
  {
    id: 5,
    name: "Eliane Nascimento Pereira",
    avatar: "pereira.png",
    vitae: "Possui graduação em Ciência da Computação pela Universidade Estadual do Oeste do Paraná (1999) e mestrado em Ciência da Computação pela Universidade Federal de São Carlos (2008). Atualmente é professora da Universidade Estadual do Oeste do Paraná Campus Foz do Iguaçu. Tem experiência na área de Ciência da Computação, com ênfase em Engenharia de Software e Informática Aplicada à Educação.",
    lattes: "http://lattes.cnpq.br/1779566969221196"
  },
  {
    id: 6,
    name: "Elói Junior Damke",
    avatar: "damke.jpg",
    vitae: "Possui Doutorado em Administração pela Pontifícia Universidade Católica do Paraná (2013), Mestrado em Administração pela Pontifícia Universidade Católica do Paraná (2004), Especialização em Desenvolvimento Gerencial e Graduação em Administração pela UNICS (1999). Atualmente é Professor Adjunto da Unioeste - Universidade Estadual do Oeste do Paraná, Professor do Mestrado em Tecnologias, Gestão e Sustentabilidade e Coordenador Geral do Nupesa - Núcleo de Pesquisa e Extensão do Centro de Ciências Sociais Aplicadas desta mesma instituição. Foi Diretor Acadêmico e Pedagógico da Uniguaçu/Faesi, Professor e Coordenador de diversas pós-graduações nesta instituição, recebendo os títulos de Professor Honoris Causa e Professor Emérito. Professor visitante da PUCPR E FESP. Têm experiência na área de Administração, com ênfase em Estratégia Empresarial, atuando principalmente nos seguintes temas: planejamento estratégico, gestão estratégica, estratégia em pequenas empresas, competitividade, marketing estratégico, pesquisa em administração/ metodologia do trabalho científico e da pesquisa e métodos quantitativos. ATUAÇÃO PROFISSIONAL: Consultor do Ministério do Desenvolvimento (Projeto PEIEX) em consultorias a pequenas e médias empresas de Curitiba e região metropolitana nas áreas de planejamento estratégico, marketing estratégico e administração geral (2008-2010). Gerente de Mercado da empresa Ciabay S.A. (2011-2013). Sócio-Administrador do Grupo Damke (1991-2002). ÁREA DE PESQUISA: Estratégia e Desempenho Organizacional em PME`S (com ênfase na abordagem das Configurações Estratégicas). CONTATO: (45) 8809-5602 / Correio eletrônico: eloi.damke@gmail.com",
    lattes: "http://lattes.cnpq.br/2953634577751958"
  },
  {
    id: 7,
    name: "José Ricardo Souza",
    avatar: "souza.png",
    vitae: "Possui graduação em Licenciatura Em Ciencias Hab Matematica pela Universidade Estadual de Ponta Grossa (1985), mestrado em Educação Matemática pela Universidade Estadual Paulista Júlio de Mesquita Filho (1999) e doutorado em Educação -linha de pesquisa Educação Matemática -pela Universidade Federal do Paraná(2008). Atualmente é professor adjunto da Universidade Estadual do Oeste do Paraná. Tem experiência na área de Matemática, com ênfase em ENSINO DE MATEMÁTICA, atuando principalmente nos seguintes temas: educaçao matemática, formaçao de professores, fracasso escolar e interdisciplinaridade.",
    lattes: "http://lattes.cnpq.br/4770395854277006"
  },
  {
    id: 8,
    name: "Luciano Panek",
    avatar: "panek.jpg",
    vitae: "Possui graduação em Matemática pela Universidade Estadual de Maringá (2000), mestrado em Matemática pela Universidade Estadual de Campinas (2003) e doutorado em Matemática pela Universidade Estadual de Maringá (2012). Atualmente é Professor Adjunto da Universidade Estadual do Oeste do Paraná. Tem experiência na área de Matemática, com ênfase em Matemática Discreta e Combinatória, atuando principalmente nos seguintes temas: Teoria dos Códigos Corretores de Erros e Teoria da Informação.",
    lattes: "http://lattes.cnpq.br/2407960550926577"
  },
  {
    id: 9,
    name: "Manoela Silveira dos Santos",
    avatar: "santos.jpg",
    vitae: "Professora Adjunta do Departamento de Administração da UNIOESTE - Campus de Foz do Iguaçu em Administração. Doutora em Administração pelo PPGA/UFRGS (2013), Mestre em Administração pelo PPGA/UFRGS (2009) e graduação em Administração pela UEM (2005). Tem experiência na área de Administração e Agronegócio atuando principalmente nos seguintes temas: Biocombustíveis, Cadeia de Suprimento, Gestão da Produção, Estratégia e Institucionalismo.",
    lattes: "http://lattes.cnpq.br/3160353255727010"
  },
  {
    id: 10,
    name: "Neucir Szinwelski",
    avatar: "szinwelski.jpg",
    vitae: "Graduado em Ciências Biológicas pela Faculdade União das Américas, trabalhou como pesquisador no Parque Nacional do Iguaçu - PR, em projeto de reconhecimento de grupos de insetos presentes neste local. Concluiu o mestrando em Biologia Animal pela Universidade Federal de Viçosa, pesquisando como o tempo de regeneração florestal afeta a diversidade de grilos (Orthoptera: Grylloidea). No doutorado, período em que contei com bolsa de estudos do CNPq, aprofundei-me nos efeitos da regeneração florestal sobre a fauna de grilos, mas também desenvolvi uma nova metodologia, mais eficaz, para a coleta de grilos de serrapilheira. Atualmente sou bolsista de pós-doutorado em Ecologia, com bolsa de estudos concedida pela Fundação de Amparo a Pesquisa do Estado de Minas Gerais (FAPEMIG). Professor adjunto A na Universidade Estadual do Oeste do Paraná, lecionando as disciplina de Ecologia Geral, Ecologia de Ecossistemas e Gestão Ambiental.",
    lattes: "http://lattes.cnpq.br/5135022065325874"
  },
  {
    id: 11,
    name: "Waldir Rechziegel",
    avatar: "rechziegel.jpg",
    vitae: "Doutorado em Administração na Universidade Nove de Julho - UNINOVE - SP (2014). Mestrado em Engenharia de Produção pela Universidade Metodista de Piracicaba (2000). Especialização em Planejamento e Gestão na Organização Pública pela Universidade Estadual do Oeste do Paraná (1997), e Graduação em Administração pela Universidade Estadual do Oeste do Paraná - UNIOESTE (1996). Professor Adjunto do Curso de Administração da Universidade Estadual do Oeste do Paraná - Campus de Marechal Cândido Rondon-PR e docente do Programa de Pós-Graduação (Mestrado Profissional) em Tecnologias, Gestão e Sustentabilidade (PPGTGS), da Unioeste - Campus de Foz do Iguaçu. Experiência na área de Administração, atuando principalmente nos seguintes temas: Gestão e Modelos de Inovação, Inteligência Tecnológica e Inovação Aberta, Administração de Recursos Humanos e Qualidade de Vida no Trabalho.",
    lattes: "http://lattes.cnpq.br/9678417825677405"
  },
  {
    id: 12,
    name: "Willian Francisco da Silva",
    avatar: "silva.png",
    vitae: "Tecnólogo em Processamento de Dados pela Universidade Estadual de Maringá e mestre em Ciência da Computação e Matemática Computacional pela Universidade de São Paulo. Atualmente é analista de sistemas da Itaipu Binacional e professor da Universidade Estadual do Oeste do Paraná, em Foz do Iguaçu-PR.",
    lattes: "http://lattes.cnpq.br/2112323830310902"
  }
  ];
  return faculty;
})
