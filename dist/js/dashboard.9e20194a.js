(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"16a4":function(s,a,t){"use strict";t.r(a);var e=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("v-app",[t("div",{staticClass:"wrapper "},[t("div",{staticClass:"sidebar",attrs:{"data-color":"orange","data-background-color":"black"}},[t("div",{staticClass:"logo text-center"},[t("router-link",{attrs:{href:"../"}},[t("h2",{staticClass:"text-light text-uppercase"},[s._v("Approbank")])]),t("span",{staticClass:"text-orange text-uppercase"},[s._v(s._s(s.userInfos.roles[0].name))])],1),t("div",{staticClass:"sidebar-wrapper"},[t("ul",{staticClass:"nav text-left"},[t("li",{staticClass:"nav-item active"},[t("router-link",{staticClass:"nav-link",attrs:{to:"dashboard"}},[t("i",{staticClass:"material-icons"},[s._v("dashboard")]),t("p",[s._v("Tableau de Bord")])])],1),t("li",{staticClass:"nav-item "},[t("router-link",{staticClass:"nav-link",attrs:{to:"profile"}},[t("i",{staticClass:"material-icons"},[s._v("person")]),t("p",[s._v("Profil")])])],1),"structureOM"===s.userInfos.roles[0].slug?t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"mesAgences"}},[t("i",{staticClass:"material-icons"},[s._v("store_mall_directory")]),t("p",[s._v("Mes Agences")])])],1):s._e(),t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link collapsed text-truncate",attrs:{to:"#sousmen","data-toggle":"collapse","data-target":"#sousmen"}},[t("i",{staticClass:"material-icons"},[s._v("account_balance_wallet")]),t("p",[s._v("Approvisionnements")])]),t("div",{staticClass:"collapse",attrs:{id:"sousmen","aria-expanded":"false"}},[t("ul",{staticClass:"flex-column pl-2 nav"},["structureOM"===s.userInfos.roles[0].slug?t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"supply"}},[t("i",{staticClass:"material-icons"},[s._v("add_circle")]),t("p",[s._v("Nouvelle Demande")])])],1):s._e(),"adminBanque"===s.userInfos.roles[0].slug||"validatorBanque"===s.userInfos.roles[0].slug||"validatorOMCI"===s.userInfos.roles[0].slug?t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"demandes"}},[t("i",{staticClass:"material-icons"},[s._v("schedule")]),t("p",[s._v("Demandes en attente")])])],1):s._e(),t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"listeDemandes"}},[t("i",{staticClass:"material-icons"},[s._v("rule")]),t("p",[s._v("Liste des demandes")])])],1)])])],1),"superAdmin"!==s.userInfos.roles[0].slug&&"supervisor"!==s.userInfos.roles[0].slug?t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"notifications"}},[t("i",{staticClass:"material-icons"},[s._v("notifications")]),t("p",[s._v("Notifications")])])],1):s._e(),"validatorOMCI"===s.userInfos.roles[0].slug||"managerOMCI"===s.userInfos.roles[0].slug||"adminBanque"===s.userInfos.roles[0].slug?t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link collapsed text-truncate",attrs:{to:"#sousmenuAdmin","data-toggle":"collapse","data-target":"#sousmenuAdmin"}},[t("i",{staticClass:"material-icons"},[s._v("visibility")]),t("p",[s._v("Administration")])]),t("div",{staticClass:"collapse",attrs:{id:"sousmenuAdmin","aria-expanded":"false"}},[t("ul",{staticClass:"flex-column pl-2 nav"},["adminBanque"===s.userInfos.roles[0].slug?t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"validateursBanque"}},[t("i",{staticClass:"material-icons"},[s._v("done_all")]),t("p",[s._v("Validateurs")])])],1):s._e(),"managerOMCI"===s.userInfos.roles[0].slug?t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"validateursOM"}},[t("i",{staticClass:"material-icons"},[s._v("done_all")]),t("p",[s._v("Validateurs")])])],1):s._e(),"validatorOMCI"===s.userInfos.roles[0].slug||"managerOMCI"===s.userInfos.roles[0].slug?t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link collapsed text-truncate",attrs:{to:"#sousmenuStructure","data-toggle":"collapse","data-target":"#sousmenuStructure"}},[t("i",{staticClass:"material-icons"},[s._v("home")]),t("p",[s._v("Gestion des Structures")])]),t("div",{staticClass:"collapse",attrs:{id:"sousmenuStructure","aria-expanded":"false"}},[t("ul",{staticClass:"flex-column pl-2 nav"},[t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"structures"}},[t("i",{staticClass:"material-icons"},[s._v("palette")]),t("p",[s._v("Liste des Structures")])])],1),t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"agences"}},[t("i",{staticClass:"material-icons"},[s._v("palette")]),t("p",[s._v("Liste des Agences")])])],1)])])],1):s._e(),"managerOMCI"===s.userInfos.roles[0].slug?t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"comptesBanqueOrange"}},[t("i",{staticClass:"material-icons"},[s._v("account_balance")]),t("p",[s._v("Comptes Banque Orange")])])],1):s._e()])])],1):s._e(),t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link collapsed text-truncate",attrs:{to:"#sousmenu","data-toggle":"collapse","data-target":"#sousmenu"}},[t("i",{staticClass:"material-icons"},[s._v("settings")]),t("p",[s._v("Paramètres")])]),t("div",{staticClass:"collapse",attrs:{id:"sousmenu","aria-expanded":"false"}},[t("ul",{staticClass:"flex-column pl-2 nav"},["superAdmin"===s.userInfos.roles[0].slug?t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"#"}},[t("i",{staticClass:"material-icons"},[s._v("info_outline")]),t("p",[s._v("Approbank")])])],1):s._e(),t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"#"}},[t("i",{staticClass:"material-icons"},[s._v("palette")]),t("p",[s._v("Affichage")])])],1),"superAdmin"===s.userInfos.roles[0].slug?t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"utilisateurs"}},[t("i",{staticClass:"material-icons"},[s._v("groups")]),t("p",[s._v("Gestion des Utilisateurs")])])],1):s._e(),"superAdmin"===s.userInfos.roles[0].slug?t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"roles"}},[t("i",{staticClass:"material-icons"},[s._v("safety_divider")]),t("p",[s._v("Gestion des Rôles")])])],1):s._e(),"superAdmin"===s.userInfos.roles[0].slug?t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"#"}},[t("i",{staticClass:"material-icons"},[s._v("lock")]),t("p",[s._v("Gestion des Permissions")])])],1):s._e()])])],1),t("hr",{staticClass:"bg-orange"}),t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"#"}},[t("i",{staticClass:"material-icons"},[s._v("menu_book")]),t("p",[s._v("Documentation")])])],1),t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"#"}},[t("i",{staticClass:"material-icons"},[s._v("support_agent")]),t("p",[s._v("Service Support")])])],1)])])]),t("div",{staticClass:"main-panel"},[t("nav",{staticClass:"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top "},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"navbar-wrapper"},[t("router-link",[s._v(' class="navbar-brand" href="javascript:;">Tableau de Bord')])],1),t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","aria-controls":"navigation-index","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"sr-only"},[s._v("Toggle navigation")]),t("span",{staticClass:"navbar-toggler-icon icon-bar"}),t("span",{staticClass:"navbar-toggler-icon icon-bar"}),t("span",{staticClass:"navbar-toggler-icon icon-bar"})]),t("div",{staticClass:"collapse navbar-collapse justify-content-end"},[t("ul",{staticClass:"navbar-nav"},["superAdmin"!==s.userInfos.roles[0].slug?t("li",{staticClass:"nav-item dropdown"},[t("router-link",[s._v(' class="nav-link" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" > '),t("i",{staticClass:"material-icons"},[s._v("notifications")]),t("span",{staticClass:"notification"},[s._v("2")]),t("p",{staticClass:"d-lg-none d-md-block"},[s._v(" Notifications ")])]),t("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},["validatorOMCI"===s.userInfos.roles[0].slug?t("router-link",{staticClass:"dropdown-item",attrs:{to:"notifications"}},[s._v(" Nouvelle demande en attente de validation ! ")]):s._e(),"structureOM"===s.userInfos.roles[0].slug?t("router-link",{staticClass:"dropdown-item",attrs:{to:"notifications"}},[s._v(" Votre demande a été envoyée ! ")]):s._e(),"structureOM"===s.userInfos.roles[0].slug?t("router-link",{staticClass:"dropdown-item",attrs:{to:"notifications"}},[s._v(" Votre demande a été approuvée (1/2) ! ")]):s._e()],1)],1):s._e(),t("li",{staticClass:"nav-item dropdown"},[t("router-link",{staticClass:"nav-link",attrs:{href:"javascript:;",id:"navbarDropdownProfile","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"material-icons"},[s._v("person")]),t("p",{staticClass:"d-lg-none d-md-block"},[s._v(" Mon Compte ")])]),t("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"navbarDropdownProfile"}},[t("h4",{staticClass:"text-center font-weight-bold text-orange text-uppercase"},[s._v(s._s(s.userInfos.name))]),t("div",{staticClass:"dropdown-divider"}),t("router-link",{staticClass:"dropdown-item",attrs:{to:"profile"}},[s._v("Mon Profil")]),t("router-link",{staticClass:"dropdown-item",on:{click:s.logout}},[s._v("Me Déconnecter")])],1)],1)])])])]),t("div",{staticClass:"content"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row"},[t("h3",{staticClass:"font-weight-bold"},[t("span",{staticClass:"text-orange text-uppercase"},[s._v(s._s(s.userInfos.name))]),s._v(", bienvenue sur Approbank ! ")])]),t("hr"),t("div",{staticClass:"row"},["structureOM"===s.userInfos.roles[0].slug?t("div",{staticClass:"col-lg-4 col-md-6 col-sm-6"},[t("div",{staticClass:"card card-stats"},[t("div",{staticClass:"card-header card-header-icon"},[t("div",{staticClass:"card-icon bg-black"},[t("i",{staticClass:"material-icons"},[s._v("savings")])]),t("p",{staticClass:"card-category"},[s._v("Solde (en UVE)")]),t("h3",{staticClass:"card-title"},[t("strong",[s._v(s._s(s.soldeStructure.data))])])]),t("div",{staticClass:"card-footer"},[t("router-link",{staticClass:"btn btn-primary btn-round",attrs:{href:"supply"}},[s._v(" Recharger ")])],1)])]):s._e(),t("div",{staticClass:"col-lg-4 col-md-6 col-sm-6"},[t("div",{staticClass:"card card-stats"},[t("div",{staticClass:"card-header card-header-icon"},[t("div",{staticClass:"card-icon bg-black"},[t("i",{staticClass:"material-icons"},[s._v("account_balance_wallet")])]),t("p",{staticClass:"card-category"},[s._v("Approvisionnements")]),"structureOM"==s.userInfos.roles[0].slug?t("h3",{staticClass:"card-title"},[s._v(s._s(s.mySupplies.length))]):s._e(),"structureOM"!==s.userInfos.roles[0].slug?t("h3",{staticClass:"card-title"},[s._v(s._s(s.supplies.length))]):s._e()]),t("div",{staticClass:"card-footer"},[t("router-link",{staticClass:"btn btn-primary btn-round",attrs:{href:"listeDemandes"}},[s._v(" Voir tout ")])],1)])]),"structureOM"!==s.userInfos.roles[0].slug?t("div",{staticClass:"col-lg-4 col-md-6 col-sm-6"},[t("div",{staticClass:"card card-stats"},[t("div",{staticClass:"card-header card-header-icon"},[t("div",{staticClass:"card-icon bg-black"},[t("i",{staticClass:"material-icons"},[s._v("people")])]),t("p",{staticClass:"card-category"},[s._v("Comptes Utilisateurs")]),t("h3",{staticClass:"card-title"},[s._v(s._s(s.users.length+1))])]),t("div",{staticClass:"card-footer"},[t("router-link",{staticClass:"btn btn-primary btn-round",attrs:{href:"utilisateurs"}},[s._v(" Consulter la liste ")])],1)])]):s._e(),"structureOM"!==s.userInfos.roles[0].slug&&"adminBanque"!==s.userInfos.roles[0].slug?t("div",{staticClass:"col-lg-4 col-md-6 col-sm-6"},[t("div",{staticClass:"card card-stats"},[t("div",{staticClass:"card-header card-header-icon"},[t("div",{staticClass:"card-icon bg-black"},[t("i",{staticClass:"material-icons"},[s._v("person_off")])]),t("p",{staticClass:"card-category"},[s._v("Comptes Gelés")]),t("h3",{staticClass:"card-title"},[s._v(s._s(s.usersGeles.length))])]),t("div",{staticClass:"card-footer"},[t("router-link",{staticClass:"btn btn-primary btn-round",attrs:{href:"utilisateurs"}},[s._v(" Consulter la liste ")])],1)])]):s._e()]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"card card-chart"},[t("div",{staticClass:"card-header card-header-warning bg-orange"},[t("h4",{staticClass:"card-title"},[s._v("Opérations effectuées")]),t("p",{staticClass:"card-category"},[s._v("Année 2021")])]),t("div",{staticClass:"card-body"},[t("stats-demandes")],1),t("div",{staticClass:"card-footer"},[t("div",{staticClass:"stats"},[t("i",{staticClass:"material-icons"},[s._v("access_time")]),s._v("Depuis la dernière mise à jour ")])])])])])])])])])])},i=[],l=t("5530"),r=t("2f62"),n=t("b463"),o={components:{statsDemandes:n["default"]},name:"dashboard",data:function(){return{loading:!1,agency:{},supply:{},mySupply:{}}},computed:Object(l["a"])(Object(l["a"])({},Object(r["c"])({userInfos:"user/userInfos",adminBankInfos:"user/adminBankInfos",users:"user/users",usersGeles:"user/usersGeles"})),Object(r["d"])({soldeStructure:function(s){return s.agency.soldeStructure},supplies:function(s){return s.supply.supplies},mySupplies:function(s){return s.supply.mySupplies}})),mounted:function(){this.$store.dispatch("user/userInfos"),this.$store.dispatch("user/adminBankInfos"),this.$store.dispatch("agency/loadSoldeStructure"),this.$store.dispatch("supply/loadSupplies"),this.$store.dispatch("supply/loadmySupplies"),this.$store.dispatch("user/users"),this.$store.dispatch("user/usersGeles")},methods:{logout:function(){var s=this;this.$store.dispatch("user/logoutUser").then((function(){s.$router.push({name:"login"})}))}}},c=o,u=t("2877"),d=t("6544"),v=t.n(d),p=t("7496"),C=Object(u["a"])(c,e,i,!1,null,null,null);a["default"]=C.exports;v()(C,{VApp:p["a"]})}}]);
//# sourceMappingURL=dashboard.9e20194a.js.map