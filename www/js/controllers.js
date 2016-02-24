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
  $scope.home = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
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

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
