angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('HomeCtrl', function($scope) {
		$scope.title = "Programa de Pós-Graduação Stricto Sensu em Tecnologias, Gestão e Sustentabilidade";
		$scope.area_concentracao = "Tecnologia e Gestão";
		$scope.area_avaliacao = "Administração";
		$scope.linhas = [
				{name: "Tecnologia e Sustentabilidade"},
				{name: "Gestão e Desenvolvimento Regional Sustentável"}
		];
		$scope.coordenador = "Prof. Carlos Henrique Zanelato Pantaleão";
		$scope.assistente = "Elizete Aparecida Zanellato Pimenta";
})

.controller('ResearchCtrl', function($scope) {
  $scope.lines = [
  {
    title: "Tecnologias e Sustentabilidade",
    body: "Esta linha de pesquisa proporcionará ao aluno, a partir de uma perspectiva\
    interdisciplinar, a aplicação de tecnologias que contribuam para o\
    desenvolvimento de soluções e a adoção de novos produtos ou processos ou o\
    aprimoramento desses, visando o desenvolvimento sustentável. Contempla a utilização\
    de recursos computacionais, de engenharias, estudos matemáticos e experimentais,\
    nas diferentes áreas de atuação."
  },
  {
    title: "Gestão e Desenvolvimento Regional Sustentável",
    body: "Esta linha de pesquisa aborda estudos sobre métodos, técnicas e modelos gerenciais\
    de apoio à tomada de decisão, que proporcionem ao aluno uma visão sistêmica e\
    interdisciplinar voltada para a resolução de problemas nos diferentes ambientes de\
    trabalho, promoção do desenvolvimento econômico, social, cultural e ambiental da região."
  }
  ];
})

.controller('SubjectsCtrl', function($scope) {
	$scope.toggle = function(item) {
		if($scope.isShown(item)) {
			$scope.shownItem = null;
		} else {
			$scope.shownItem = item;
		}
	};

	$scope.isShown = function(item) {
		return $scope.shownItem === item;
	}

	$scope.required_subjects = [
		{
			name: "Metodologia da Pesquisa Interdisciplinar",
			workload: 60,
			credits: 4,
			teacher: "José Ricardo"
		},
		{
			name: "Seminários da Pesquisa Interdisciplinar",
			workload: 60,
			credits: 4,
			teacher: "Carlos Pantaleão"
		}
	];

	$scope.elective_subjects = [
		{
			name: "Inovação Tecnológica e Portfólio de Tecnologias",
			research_area: "Tecnologia e Sustentabilidade",
			workload: 45,
			credits: 3,
			teacher: "Dechechi"
		},
		{
			name: "Qualidade Aplicada ao Desenvolvimento de Tecnologias",
			research_area: "Tecnologia e Sustentabilidade",
			workload: 45,
			credits: 3,
			teacher: "Eduardo"
		},
		{
			name: "Gestão Ambiental",
			research_area: "Tecnologia e Sustentabilidade",
			workload: 45,
			credits: 3,
			teacher: "Neucir"
		},
		{
			name: "Tecnologia de Informação",
			research_area: "Tecnologia e Sustentabilidade",
			workload: 45,
			credits: 3,
			teacher: "Clodis"
		},
		{
			name: "Análise Multicritério de Apoio a Decisão",
			research_area: "Gestão e Desenvolvimento Regional Sustentável",
			workload: 45,
			credits: 3,
			teacher: "Pantaleão"
		},
		{
			name: "Gestão de Cadeias de Apoio de Suprimentos",
			research_area: "Gestão e Desenvolvimento Regional Sustentável",
			workload: 45,
			credits: 3,
			teacher: "Manoela"
		},
		{
			name: "Empreendedorismo e Marketing Sustentável",
			research_area: "Gestão e Desenvolvimento Regional Sustentável",
			workload: 45,
			credits: 3,
			teacher: "Eduardo"
		},
		{
			name: "Gestão da Inovação Tecnológica",
			research_area: "Gestão e Desenvolvimento Regional Sustentável",
			workload: 45,
			credits: 3,
			teacher: "Waldir"
		}
	];

	$scope.common_subjects = [
		{
			name: "Planejamento Estratégico e Modelagem Organizacional",
			workload: 30,
			credits: 2,
			teacher: "Elói"
		},
		{
			name: "Tópicos Especiais I",
			workload: 30,
			credits: 2,
			teacher: "Eliane"
		},
		{
			name: "Estatística",
			workload: 30,
			credits: 2,
			teacher: "Luciano"
		},
		{
			name: "Gerenciamento de Projetos",
			workload: 30,
			credits: 2,
			teacher: "Willian"
		}
	];

})

.controller('CalendarCtrl', function($scope) {
	$scope.toggle = function(item) {
		if($scope.isShown(item)) {
			$scope.shownItem = null;
		} else {
			$scope.shownItem = item;
		}
	};

	$scope.isShown = function(item) {
		return $scope.shownItem === item;
	}

  $scope.yearlyCalendar = [
  {
    month: "Janeiro",
    dates: [
    {
      day: "1 a 17",
      occurency: "Férias Docentes"
    },
    {
      day: "18",
      occurency: "Retorno das atividades docentes"
    }
    ]
  },
  {
    month: "Fevereiro",
    dates: [
    {
      day: "1",
      occurency:  "Edital de Abertura de Inscrições para Alunos Especiais – 1º semestre"
    },
    {
      day: "1 a 5",
      occurency: "Matrícula - Alunos Regulares – 1º Semestre"
    },
    {
      day: "1 a 5",
      occurency: "Realização de matrícula para ingresso por Mobilidade Discente"
    },
    {
      day: "8",
      occurency: "Recesso – Acadêmico e Administrativo"
    },
    {
      day: "9",
      occurency: "Feriado – Carnaval"
    },
    {
      day: "10",
      occurency: "Feriado – Carnaval"
    },
    {
      day: "11 a 12",
      occurency: "Inscrições para Alunos Especiais – 1º Semestre"
    },
    {
      day: "18",
      occurency: "Início das atividades letivas – 1º Semestre do ano de 2016 – Aula Inaugural"
    },
    {
      day: "24 a 26",
      occurency: "Matrícula – Alunos Especiais – 1º semestre"
    }
    ]
  },
  {
    month: "Março",
    dates: [
    {
      day: "2 a 4",
      occurency: "Requerimento de aproveitamento de estudos por disciplina cursada em outro curso"
    },
    {
      day: "25",
      occurency: "Feriado – Paixão de Cristo"
    },
    {
      day: "26",
      occurency: "Recesso – Acadêmico e Administrativo"
    }
    ]
  },
  {
    month: "Abril",
    dates: [
    {
      day: "21",
      occurency: "Feriado – Tiradentes"
    },
    {
      day: "22",
      occurency: "Recesso – Acadêmico e Administrativo"
    },
    {
      day: "23",
      occurency: "Recesso – Acadêmico e Administrativo"
    }
    ]
  },
  {
    month: "Maio",
    dates: [
    {
      day: "26",
      occurency: "Feriado – Corpus Christi"
    },
    {
      day: "27",
      occurency: "Recesso – Acadêmico e Administrativo"
    },
    {
      day: "28",
      occurency: "Recesso – Acadêmico e Administrativo"
    }
    ]
  },
  {
    month: "Junho",
    dates: [
    {
      day: "1",
      occurency: "Edital de Abertura de Inscrições para Alunos Especiais – 2º semestre"
    },
    {
      day: "6 a 9",
      occurency: "Inscrições para Alunos Especiais – 2º Semestre"
    },
    {
      day: "10",
      occurency: "Campus de Foz do Iguaçu – Feriado – Emancipação Política do Município"
    },
    {
      day: "11",
      occurency: "Recesso – Acadêmico e Administrativo"
    },
    {
      day: "13 a 17",
      occurency: "Inscrições para Alunos Especiais – 2º Semestre"
    },
    {
      day: "13 a 17",
      occurency: "Matrícula – Alunos Regulares – Turma 2016 – 2º semestre"
    },
    {
      day: "20 a 23",
      occurency: "Matrícula – Alunos Especiais – 2º semestre"
    },
    {
      day: "24",
      occurency: "Campus de Foz do Iguaçu – Feriado – Dia do Padroeiro do Município"
    },
    {
      day: "25",
      occurency: "Recesso – Acadêmico e Administrativo"
    }
    ]
  },
  {
    month: "Julho",
    dates: [
    {
      day: "9",
      occurency: "Encerramento do primeiro semestre letivo"
    },
    {
      day: "11 a 16",
      occurency: "Recesso Acadêmico (discentes)"
    },
    {
      day: "15",
      occurency: "Último prazo para a entrega dos Diários de Classe na Secretaria do PPGTGS das disciplinas do 1º Semestre"
    },
    {
      day: "18",
      occurency: "Último prazo para a publicação de notas pela Secretaria do PPGTGS das disciplinas ofertadas no 1º Semestre"
    },
    {
      day: "21",
      occurency: "Reinício das atividades letivas – 2º Semestre do ano de 2016"
    }
    ]
  },
  {
    month: "Agosto",
    dates: [
    {
      occurency: "Atividades Letivas"
    }
    ]
  },
  {
    month: "Setembro",
    dates: [
    {
      day: "7",
      occurency: "Feriado – Independência do Brasil"
    },
    {
      day: "8",
      occurency: "Recesso – Acadêmico e Administrativo"
    },
    {
      day: "9",
      occurency: "Recesso – Acadêmico e Administrativo"
    },
    {
      day: "10",
      occurency: "Recesso – Acadêmico e Administrativo"
    },
    {
      day: "5 a 30",
      occurency: "Edital de abertura das inscrições para o processo de seleção da turma de 2017"
    }
    ]
  },
  {
    month: "Outubro",
    dates: [
    {
      day: "3 a 7",
      occurency: "Edital de homologação das inscrições do processo de seleção da turma de 2017."
    },
    {
      day: "12",
      occurency: "Feriado -  Padroeira do Brasil (Nossa Senhora Aparecida)"
    },
    {
      day: "28",
      occurency: "Feriado -  Padroeira do Brasil (Nossa Senhora Aparecida)"
    },
    {
      day: "29",
      occurency: "Recesso – Acadêmico e Administrativo"
    }
    ]
  },
  {
    month: "Novembro",
    dates: [
    {
      day: "2",
      occurency: "Feriado - Finados"
    },
    {
      day: "7 a 11",
      occurency: "1ª Etapa do Processo Seletivo da Turma de 2017"
    },
    {
      day: "14",
      occurency: "Recesso – Acadêmico e Administrativo"
    },
    {
      day: "15",
      occurency: "Feriado – Proclamação da República"
    },
    {
      day: "21 a 25",
      occurency: "2ª Etapa do Processo Seletivo da Turma de 2017"
    },
    {
      day: "28",
      occurency: "Edital do Resultado Final do Processo Seletivo da Turma de 2017"
    }
    ]
  },
  {
    month: "Dezembro",
    dates: [
    {
      day: "10",
      occurency: "Encerramento do segundo semestre letivo de 2016"
    },
    {
      day: "12",
      occurency: "Último prazo para a entrega dos Diários de Classe na Secretaria do PPGTGS das disciplinas do 2º Semestre"
    },
    {
      day: "13",
      occurency: "Último prazo para a publicação de notas pela Secretaria do PPGTGS das disciplinas ofertadas no 2º Semestre"
    }
    ]
  }
  ];
})

.controller('ContactCtrl', function($scope) {
	$scope.address = {
		name: "Centro de Engenharia e Ciências Exatas - CECE/PTI",
		complement: "Parque Tecnológico de Itaipu, Bloco B5, Espaço 2",
		street: "Av. Tancredo Neves",
		number: 6731,
		cep: "85856-970",
		city: "Foz do Iguaçu",
		state: "PR"
	};

	$scope.phones = [
		{
			type: "Fixo",
			ddd: "45",
			number: "3576-8279"
		}
	];

	$scope.emails = [
		{address: "foz.ppgtgs@unioeste.br"},
		{address: "pos.tecnologiaegestao@gmail.com"}
	];

	$scope.office_hours = "Segunda à Sexta-Feira: 13h30 às 17h30";
})

.controller('FacultyCtrl', function($scope, FacultyFactory) {
  $scope.faculty = FacultyFactory;
})

.controller('TeacherCtrl', function($scope, $stateParams, FacultyFactory) {
  $scope.teacher = FacultyFactory[$stateParams.teacherId];
})

.controller('SelectionCtrl', function($scope) {
		$scope.year = "2016";
		$scope.period = "2016-2018";
		$scope.vacancies = "14";
		$scope.siteUrl = "http://www.unioeste.br/pos/tecnologiaegestaosustentabilidade/";
});
