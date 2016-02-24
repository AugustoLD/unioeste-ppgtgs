angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
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
});
