angular.module('app.controllers', [])

.controller('minhaContaCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {



}])

.controller('cadastroAnimalCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
$scope.listaanimal = function (){
    $state.go('listaDeAnimais');
}

}])

.controller('movimentosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {

$scope.login = function(usuario, senha){
if( usuario == "adm" && senha == "123"){
        $scope.erro = false;
        $state.go('menu');
        }else{
            alert("usuario e senha invalidos.");
        }
}
}])

.controller('menuCtrl', ['$scope', '$stateParams', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
    $scope.animaisSelecionado = function(){
        $state.go('listaDeAnimais');
    }
    $scope.fazendaselecionada = function(){
        $state.go('fazenda');
    }
    $scope.cadastrogeral = function(){
        $state.go ('cadastrogeral');
    }
    $scope.minhaConta = function () {
        $state.go ('minhaConta');
    }
}])
.controller('cadastrogeralCtrl', ['$scope', '$stateParams', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
    $scope.fazendaselecionada = function(){
        $state.go('cadastroFazendas');
    }
    $scope.animaisSelecionado = function(){
        $state.go('cadastroAnimal');
    }
}])

.controller('listaDeAnimaisCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
    $scope.listaanimal = function (){
        $state.go('animalSelecionado');
    }

}])

.controller('animalSelecionadoCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
      $scope.graph = {};
      $scope.graph.data = [
        //Awake
        [16, 15, 20, 12, 16, 12, 8],
        //Asleep
        [8, 9, 4, 12, 8, 12, 14]
      ];
      $scope.graph.labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      $scope.graph.series = ['Awake', 'Asleep'];




}])

.controller('fazendaCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {


}])
.controller('cadastroFazendasCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {


}])
