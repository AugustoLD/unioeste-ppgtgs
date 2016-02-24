// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic-material', 'starter.controllers', 'starter.factory', 'pdf'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

	.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.researchLine', {
      url: '/researchLine',
      views: {
        'menuContent': {
          templateUrl: 'templates/research_line.html',
          controller: 'ResearchCtrl'
        }
      }
  })

  .state('app.subjects', {
	  url: '/subjects',
	  views: {
		  'menuContent': {
			  templateUrl: 'templates/subjects.html',
			  controller: 'SubjectsCtrl'
		  }
	  }
  })

	.state('app.contact', {
		url: '/contact',
		views: {
			'menuContent': {
				templateUrl: 'templates/contact.html',
				controller: 'ContactCtrl'
			}
		}
	})

  .state('app.faculty', {
      url: '/faculty',
      views: {
        'menuContent': {
          templateUrl: 'templates/faculty.html',
          controller: 'FacultyCtrl'
        }
      }
    })

  .state('app.teacher', {
    url: '/faculty/:teacherId',
    views: {
      'menuContent': {
        templateUrl: 'templates/teacher.html',
        controller: 'TeacherCtrl'
      }
    }
  })

  .state('app.selectionProccess', {
      url: '/selectionProccess',
      views: {
        'menuContent': {
          templateUrl: 'templates/selection_proccess.html',
          controller: 'SelectionCtrl'
        }
      }
  })

	.state('app.regulaments', {
		url: '/regulaments',
		views: {
			'menuContent': {
				templateUrl:'templates/regulaments.html',
				controller: 'RegulamentsCtrl'
			}
		}
	})

	.state('app.editais', {
		url: '/editais',
		views: {
			'menuContent': {
				templateUrl: 'templates/editais.html',
				controller: 'EditaisCtrl'
			}
		}
	})

  .state('app.academicCalendar', {
	  url: '/academicCalendar',
	  views: {
		  'menuContent': {
			  templateUrl: 'templates/academic_calendar.html',
			  controller: 'CalendarCtrl'
		  }
	  }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})

.config(['$ionicConfigProvider', function($ionicConfigProvider){
	$ionicConfigProvider.tabs.position('bottom');
}]);
