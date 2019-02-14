// Factory de Avaliação
var tiposAvaliacaoApi = function ($http) {
    var _getTiposAvaliacao = function (quantidadeDeItens) {
        return $http.get(baseUrl + "/rest/tiposavaliacao");
    };

    return {
        getTiposAvaliacao: _getTiposAvaliacao,
    };
}

escolaApp.factory("tiposAvaliacaoApi", tiposAvaliacaoApi);
