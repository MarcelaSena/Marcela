//Pesquisar Escola por Código
var pesquisarEscolaPorNomeCtrl = function ($scope, $stateParams, $mdToast, escolaApi) {
    $scope.listarEscolas = [];
    $scope.nome = $stateParams.nome;
    
    $scope.pesquisarEscolaPorNome = function (nome) {
        escolaApi.getEscolasNome(nome)
            .then(function (response) {
                //Toast
                var toast = $mdToast.simple()
                    .textContent("As escolas pesquisadas por nome foram listadas abaixo.")
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-sucess');
                
                $mdToast.show(toast);
                $scope.listarEscolas = response.data;
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

escolaApp.controller("PesquisarEscolaPorNomeCtrl", pesquisarEscolaPorNomeCtrl);
