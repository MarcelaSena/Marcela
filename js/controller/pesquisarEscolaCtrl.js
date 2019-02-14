//Pesquisar Escola por Código
var pesquisarEscolaCtrl = function ($scope, $stateParams, $mdToast, escolaApi) {
    $scope.escola = {};
    $scope.codEscola = $stateParams.codEscola;
    
    $scope.pesquisarEscola = function (codEscola) {
        escolaApi.getEscola(codEscola)
            .then(function (response) {
                //Toast
                var toast = $mdToast.simple()
                    .textContent("As escolas pesquisadas por códigos foram listadas abaixo.")
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-sucess');
                
                $mdToast.show(toast);
                $scope.escola = response.data;
            })
            .catch(function (error) {
                var toast = $mdToast.simple()
                    .textContent("Algum problema ocorreu na solicitação dos dados das escolas.")
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-error');
                $mdToast.show(toast);
                console.error(error);
            });
    }
};

escolaApp.controller("PesquisarEscolaCtrl", pesquisarEscolaCtrl);
