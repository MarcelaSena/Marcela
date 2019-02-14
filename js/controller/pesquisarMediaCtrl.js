var pesquisarMediaCtrl = function ($scope,$mdToast, escolaApi) {
    $scope.escola = {};
    $scope.pesquisarMedia = function (codEscola) {
        escolaApi.getAvaliacaoMedia(codEscola)
            .then(function (response) {
                //Toast
                var toast = $mdToast.simple()
                    .textContent("As médias das escolas pesquisadas por código foram listadas abaixo.")
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
escolaApp.controller("PesquisarMediaCtrl", pesquisarMediaCtrl);
