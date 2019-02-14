//Listar Tipos de Avaliação
var listarTiposAvaliacaoCtrl = function ($scope,$mdToast, tiposAvaliacaoApi) {
    $scope.tiposAvaliacao = [];
    $scope.listar = function () {
        tiposAvaliacaoApi.getTiposAvaliacao()
            .then(function (response) {
                //Toast
                var toast = $mdToast.simple()
                    .textContent("As avaliações foram listadas abaixo.")
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-sucess');
                $mdToast.show(toast);

                $scope.tiposAvaliacao = response.data;
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

escolaApp.controller("ListarTiposAvaliacaoCtrl", listarTiposAvaliacaoCtrl);
