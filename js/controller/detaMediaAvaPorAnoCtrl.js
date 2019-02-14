var detaMediaAvaPorAnoCtrl = function ($scope, $mdToast, escolaApi) {
    $scope.escolas = {}; //jason
    $scope.detalharMediaAvaliacaoCodAno = function (codEscola, ano) {
        escolaApi.getMediaAvaliacaoCodAno(codEscola, ano)
            .then(function (response) {
                //Toast
                var toast = $mdToast.simple()
                    .textContent("As Avaliações por escola foram listadas abaixo.")
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-sucess');
                $mdToast.show(toast);

                $scope.escolas = response.data;
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

escolaApp.controller("detaMediaAvaPorAnoCtrl", detaMediaAvaPorAnoCtrl);
