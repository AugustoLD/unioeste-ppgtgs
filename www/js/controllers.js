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
