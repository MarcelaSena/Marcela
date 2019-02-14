// Factory - API
var escolaApi = function ($http) {
    var _getEscolas = function (quantidadeDeItens) {
        return $http.get(baseUrl + "/rest/escolas?quantidadeDeItens=" +
            quantidadeDeItens);
    };
    
    var _getEscola = function (codEscola) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola);
    };
    
    var _getEscolasNome = function (nome) {
        return $http.get(baseUrl + "/rest/escolas?nome=" + nome);
    }; 
    
    var _getAvaliacoes = function () {
        return $http.get(baseUrl + "/rest/tiposavaliacao");
    };
    
    var _getAvaliacaoAno = function (codEscola, ano) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/ano/" + ano);
    };

    var _getAvaliacaoEscola = function (codEscola) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes");
    };

    var _getAvaliacaoMedia = function (codEscola) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/media");
    };
    
    var _getListarAvaliacaoEsc = function (codEscola, tipo) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/tipo/" + tipo);

    };
    
    var _getAvaliacaoCodAno = function (codEscola, ano) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/ano/" + ano);
    };
    
    var _getMediaAvaliacaoCodAno = function (codEscola, ano) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/ano/" + ano + "/media");
    };
    
    var _getMediaGeral = function (codEscola) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/media");
    };
    
    var _getDetaAvaTipo = function (codEscola, ano, tipo) {
        return $http.get(baseUrl + "rest/escolas/" + codEscola + "/avaliacoes/ano/" + ano + "/tipo/" + tipo);
    };
    
    

    return {
        getAvaliacaoAno: _getAvaliacaoAno,
        getEscolas: _getEscolas,
        getEscolasNome: _getEscolasNome,
        getEscola: _getEscola,
        getAvaliacoes: _getAvaliacoes,
        getAvaliacaoEscola: _getAvaliacaoEscola,
        getAvaliacaoMedia: _getAvaliacaoMedia,
        getListarAvaliacaoEsc: _getListarAvaliacaoEsc,
        getAvaliacaoCodAno: _getAvaliacaoCodAno,
        getMediaAvaliacaoCodAno: _getMediaAvaliacaoCodAno,
        getMediaGeral: _getMediaGeral,
        getDetaAvaTipo: _getDetaAvaTipo
    };
}

escolaApp.factory("escolaApi", escolaApi);