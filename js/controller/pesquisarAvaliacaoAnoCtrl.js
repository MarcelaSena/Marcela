//Avaliação Do Ano
var pesquisarAvaliacaoAnoCtrl = function ($scope, $mdToast,escolaApi) {
    $scope.avaliacaosDoAno = [];
    $scope.pesquisarAvaliacaoAno = function (codEscola, ano) {
        escolaApi.getAvaliacaoAno(codEscola, ano)
            .then(function (response) {
                //Toast
                var toast = $mdToast.simple()
                    .textContent("As avaliações por ano foram listadas abaixo.")
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-sucess');
                $mdToast.show(toast);

                $scope.avaliacaosDoAno = response.data;
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
escolaApp.controller("PesquisarAvaliacaoAnoCtrl", pesquisarAvaliacaoAnoCtrl);
