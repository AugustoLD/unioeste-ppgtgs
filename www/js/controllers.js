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

.controller('RegulamentsCtrl', ['$scope', '$ionicModal', function($scope, $ionicModal) {
	$ionicModal.fromTemplateUrl('pdf-viewer.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function (modal) {
		$scope.modal = modal;
	});

	$scope.openPDF = function(url) {
		$scope.pdfUrl = url;
		$scope.modal.show();
	};

	$scope.hide = function() {
		$scope.modal.hide();
	};

	$scope.$on('$destroy', function(){
		$scope.modal.remove();
	});

	$scope.documents = [
		{
			name: "Regulamento do programa",
			url: "/assets/regulamento_programa.pdf"
		},
		{
			name:"Projeto Pedagógico",
			url:"/assets/projeto_pedagogico.pdf"
		},
		{
			name: "Horário das Disciplinas",
			url:"/assets/horario_disciplinas.pdf"
		}
	];
}])

.controller('EditaisCtrl',['$scope', '$ionicModal', function($scope, $ionicModal){
	$ionicModal.fromTemplateUrl('pdf-viewer.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function (modal) {
		$scope.modal = modal;
	});

	$scope.openPDF = function(url) {
		$scope.pdfUrl = url;
		$scope.modal.show();
	};

	$scope.hide = function() {
		$scope.modal.hide();
	};

	$scope.$on('$destroy', function(){
		$scope.modal.remove();
	});

	$scope.documents = [
		{
			name: "Processo Seletivo (Turma 2016 - 2018)",
			number: "001",
			url: "/assets/edital1_ps.pdf"
		},
		{
			name:"Processo Seletivo - Inscrições Homologadas",
			number: "002",
			url:"/assets/edital2_ps_inscricoes.pdf"
		},
		{
			name: "Processo Seletivo - Inscrições Homologadas com Solicitações de Recursos",
			number: "003",
			url:"/assets/edital3_ps_analise_recurso.pdf"
		},
		{
			name: "Processo Seletivo - Resultado da Avaliação Dissertativa e Convocação para Entrevistas",
			number: "004",
			url:"/assets/edital4_ps_avaliacao_convocacao.pdf"
		},
		{
			name: "Processo Seletivo - Resultado Final do Processo Seletivo para Alunos Regulares",
			number: "005",
			url:"/assets/edital5_ps_final.pdf"
		},
		{
			name: "Normas para Admissão de Alunos Especiais",
			number: "006",
			url:"/assets/edital6_nomas_admissao.pdf"
		},
		{
			name: "Prorrogação do Prazo Inscrição de Alunos Especiais 2016",
			number: "007",
			url:"/assets/edital7_prazo_inscricao.pdf"
		}
	];
}])

.controller('SelectionCtrl', function($scope) {
	$scope.year = "2016";
	$scope.period = "2016-2018";
	$scope.vacancies = "14";
	$scope.siteUrl = "http://www.unioeste.br/pos/tecnologiaegestaosustentabilidade/";
});
