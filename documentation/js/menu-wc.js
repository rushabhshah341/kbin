'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">client documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AccountModule.html" data-type="entity-link">AccountModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AccountModule-e3e7dfa8112005fbbcc1a9614943ccc1"' : 'data-target="#xs-components-links-module-AccountModule-e3e7dfa8112005fbbcc1a9614943ccc1"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AccountModule-e3e7dfa8112005fbbcc1a9614943ccc1"' : 'id="xs-components-links-module-AccountModule-e3e7dfa8112005fbbcc1a9614943ccc1"' }>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-99e58fe009a7fe33eba1ad7ee6c4ca26"' : 'data-target="#xs-components-links-module-AppModule-99e58fe009a7fe33eba1ad7ee6c4ca26"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-99e58fe009a7fe33eba1ad7ee6c4ca26"' : 'id="xs-components-links-module-AppModule-99e58fe009a7fe33eba1ad7ee6c4ca26"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CollaboratoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CollaboratoryComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CollaboratoryDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CollaboratoryDetailComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ContributorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContributorsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CreateChallengeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateChallengeComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HeaderLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderLoginComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/KfComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">KfComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PostCollaboratoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostCollaboratoryComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RbiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RbiComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SearchBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchBarComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AppModule-99e58fe009a7fe33eba1ad7ee6c4ca26"' : 'data-target="#xs-injectables-links-module-AppModule-99e58fe009a7fe33eba1ad7ee6c4ca26"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AppModule-99e58fe009a7fe33eba1ad7ee6c4ca26"' : 'id="xs-injectables-links-module-AppModule-99e58fe009a7fe33eba1ad7ee6c4ca26"' }>
                                        <li class="link">
                                            <a href="injectables/Storage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>Storage</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/Challenges.html" data-type="entity-link">Challenges</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChallengesCount.html" data-type="entity-link">ChallengesCount</a>
                    </li>
                    <li class="link">
                        <a href="classes/Collaboratory.html" data-type="entity-link">Collaboratory</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeepWrapper.html" data-type="entity-link">DeepWrapper</a>
                    </li>
                    <li class="link">
                        <a href="classes/Link.html" data-type="entity-link">Link</a>
                    </li>
                    <li class="link">
                        <a href="classes/NotesCount.html" data-type="entity-link">NotesCount</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/CollaboratoryService.html" data-type="entity-link">CollaboratoryService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/EnvVariablesService.html" data-type="entity-link">EnvVariablesService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RuntimeConfigService.html" data-type="entity-link">RuntimeConfigService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SelectivePreloadingStrategyService.html" data-type="entity-link">SelectivePreloadingStrategyService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/Storage.html" data-type="entity-link">Storage</a>
                            </li>
                    </ul>
                </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#pipes-links"' : 'data-target="#xs-pipes-links"' }>
                        <span class="icon ion-md-add"></span>
                        <span>Pipes</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                            <li class="link">
                                <a href="pipes/ReversePipe.html" data-type="entity-link">ReversePipe</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
