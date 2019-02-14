// Navegação.
escolaApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .state('listar', {
            url: '/escolas',
            templateUrl: 'listarEscolas.html',
            controller: 'ListarEscolaCtrl'
        })
        .state('pesquisarPorCodigo', {
            url: '/escolas/:codEscola',
            templateUrl: 'pesquisarEscola.html',
            controller: 'PesquisarEscolaCtrl'
        })
        .state('pesquisarPorNome', {
            url: '/escolaspornome',
            templateUrl: 'pesquisarEscolasPorNome.html',
            controller: 'PesquisarEscolaPorNomeCtrl'
        })
        .state('tiposavaliacao', {
            url: '/tiposavaliacao',
            templateUrl: 'listarTipoAvaliacao.html',
            controller: 'ListarTiposAvaliacaoCtrl'
        })
        .state('avaliacaosDoAno', {
            url: '/avaliacaosDoAno',
            templateUrl: 'avaliacaoAno.html',
            controller: 'PesquisarAvaliacaoAnoCtrl'
        })
        .state('avaliacaoPorEscola', {
            url: '/UmTipoAvaliacaoPorEscola',
            templateUrl: 'avaliacaoEscola.html',
            controller: 'PesquisarAvaliacaoEscolaCtrl'
        })
        .state('AvaliacaoPorMedia', {
            url: '/AvaliacaoMedia',
            templateUrl: 'avaliacaoMedia.html',
            controller: 'PesquisarMediaCtrl'
        })
        .state('PesquisarAvaliacaoPorEscola', {
            url: '/PesquisarAvaliacoesEscola',
            templateUrl: 'pesquisarAvaliacaoEscola.html',
            controller: 'listarAvaliacaoEscCtrl'
        })
        .state('DetaAvaEscoAno', {
            url: '/detalharAvaliacaoPorAno',
            templateUrl: 'detaAvaEscoPorAno.html',
            controller: 'detaAvaEscoPorAnoCtrl'
        })
        .state('DetaMedAvaAno', {
            url: '/detalharMediaAvaliacaoPorAno',
            templateUrl: 'detalharMediaAvaliPorAno.html',
            controller: 'detaMediaAvaPorAnoCtrl'
        })
        .state('DetaMedGeral', {
            url: '/detalharMediaGeral',
            templateUrl: 'detaMediaGeralAvaEscola.html',
            controller: 'detaMediaGeralAvaEscolaCtrl'
        })
        .state('DetaAvaTipo', {
            url: '/detalharAvaliacaoPorTipoAnoeEscola',
            templateUrl: 'detaAvaAnoEscoSeleTipoAva.html',
            controller: 'detaAvaAnoEscoSeleTipoAvaCtrl'
        })
    

});