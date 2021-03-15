<template>
  <v-app>
    <div class="wrapper ">
      <div class="sidebar" data-color="orange" data-background-color="black">
        <div class="logo text-center">
          <router-link to="../"><h2 class="text-light text-uppercase">Approbank</h2></router-link>
          <span class="text-orange text-uppercase">{{ userInfos.roles[0].name }}</span>
        </div>
        <div class="sidebar-wrapper">
          <ul class="nav text-left">
            <li class="nav-item active">
              <router-link class="nav-link" to="dashboard">
                <i class="material-icons">dashboard</i>
                <p>Tableau de Bord</p>
              </router-link>
            </li>
            <li class="nav-item ">
              <router-link class="nav-link" to="profile">
                <i class="material-icons">person</i>
                <p>Profil</p>
              </router-link>
            </li>
            <li class="nav-item" v-if="userInfos.roles[0].slug==='structureOM'">
              <router-link class="nav-link" to="mesAgences">
                <i class="material-icons">store_mall_directory</i>
                <p>Mes Agences</p>
              </router-link>
            </li>
            <li class="nav-item">
                    <router-link
                      class="nav-link collapsed text-truncate"
                      to="#sousmen"
                      data-toggle="collapse"
                      data-target="#sousmen"
                    >
                      <i class="material-icons">account_balance_wallet</i>
                      <p>Approvisionnements</p>
                    </router-link>
                    <div class="collapse" id="sousmen" aria-expanded="false">
                      <ul class="flex-column pl-2 nav">
                       <li class="nav-item" v-if="userInfos.roles[0].slug==='structureOM'">
                          <router-link class="nav-link" to="supply">
                            <i class="material-icons">add_circle</i>
                            <p>Nouvelle Demande</p>
                          </router-link>
                        </li>
                      <li class="nav-item" v-if="userInfos.roles[0].slug==='validatorBanque' || userInfos.roles[0].slug==='validatorOMCI'">
                          <router-link class="nav-link" to="demandes">
                            <i class="material-icons">schedule</i>
                            <p>Demandes en attente</p>
                          </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="listeDemandes">
                            <i class="material-icons">rule</i>
                            <p>Liste des demandes</p>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
            <li class="nav-item"  v-if="userInfos.roles[0].slug!=='superAdmin' && userInfos.roles[0].slug!=='managerOMCI' && userInfos.roles[0].slug!=='supervisor'">
              <router-link class="nav-link" to="notifications">
                <i class="material-icons">notifications</i>
                <p>Notifications</p>
              </router-link>
            </li>
            <li class="nav-item" v-if="userInfos.roles[0].slug==='validatorOMCI' || userInfos.roles[0].slug==='managerOMCI' || userInfos.roles[0].slug==='adminBanque' || userInfos.roles[0].slug==='superAdmin'">
              <router-link
                class="nav-link collapsed text-truncate"
                to="#sousmenuAdmin"
                data-toggle="collapse"
                data-target="#sousmenuAdmin"
              >
                <i class="material-icons">visibility</i>
                <p>Administration</p>
              </router-link>
              <div class="collapse" id="sousmenuAdmin" aria-expanded="false">
                <ul class="flex-column pl-2 nav">
                  
                  <li class="nav-item" v-if="userInfos.roles[0].slug==='superAdmin'">
                    <router-link class="nav-link" to="utilisateurs">
                      <i class="material-icons">groups</i>
                      <p>Gestion des Utilisateurs</p>
                    </router-link>
                  </li>
                  <li class="nav-item" v-if="userInfos.roles[0].slug==='superAdmin'">
                    <router-link class="nav-link" to="roles">
                      <i class="material-icons">safety_divider</i>
                      <p>Gestion des Rôles</p>
                    </router-link>
                  </li>
                  <li class="nav-item" v-if="userInfos.roles[0].slug==='superAdmin'">
                    <router-link class="nav-link" to="#">
                      <i class="material-icons">lock</i>
                      <p>Gestion des Permissions</p>
                    </router-link>
                  </li>

                  <li class="nav-item" v-if="userInfos.roles[0].slug==='adminBanque'">
                    <router-link class="nav-link" to="validateursBanque">
                      <i class="material-icons">done_all</i>
                      <p>Validateurs Banque</p>
                    </router-link>
                  </li>
                  <li class="nav-item" v-if="userInfos.roles[0].slug==='managerOMCI'">
                    <router-link class="nav-link" to="validateursOM">
                      <i class="material-icons">done_all</i>
                      <p>Validateurs OM</p>
                    </router-link>
                  </li>
                  <li class="nav-item" v-if="userInfos.roles[0].slug==='validatorOMCI' || userInfos.roles[0].slug==='managerOMCI'">
              <router-link
                class="nav-link collapsed text-truncate"
                to="#sousmenuStructure"
                data-toggle="collapse"
                data-target="#sousmenuStructure"
              >
                <i class="material-icons">home</i>
                <p>Gestion des Structures</p>
              </router-link>
              <div class="collapse" id="sousmenuStructure" aria-expanded="false">
                <ul class="flex-column pl-2 nav">
                  <li class="nav-item">
                    <router-link class="nav-link" to="structures">
                      <i class="material-icons">palette</i>
                      <p>Liste des Structures</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="agences">
                      <i class="material-icons">palette</i>
                      <p>Liste des Agences</p>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item" v-if="userInfos.roles[0].slug==='managerOMCI'">
                    <router-link class="nav-link" to="comptesBanqueOrange">
                      <i class="material-icons">account_balance</i>
                      <p>Comptes Banque Orange</p>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link collapsed text-truncate"
                to="#sousmenu"
                data-toggle="collapse"
                data-target="#sousmenu"
              >
                <i class="material-icons">settings</i>
                <p>Paramètres</p>
              </router-link>
              <div class="collapse" id="sousmenu" aria-expanded="false">
                <ul class="flex-column pl-2 nav">
                <li class="nav-item" v-if="userInfos.roles[0].slug==='superAdmin'">
                    <router-link class="nav-link" to="#">
                      <i class="material-icons">info_outline</i>
                      <p>Approbank</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="#">
                      <i class="material-icons">palette</i>
                      <p>Affichage</p>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <hr class="bg-orange"/>
            <li class="nav-item">
              <router-link class="nav-link" to="#">
                <i class="material-icons">menu_book</i>
                <p>Documentation</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">
                <i class="material-icons">support_agent</i>
                <p>Service Support</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-panel">
        <!-- Navbar -->
        <nav
          class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top "
        >
          <div class="container-fluid">
            <div class="navbar-wrapper">
              <router-link class="navbar-brand" href="javascript:;">Tableau de Bord</router-link>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="navbar-toggler-icon icon-bar"></span>
              <span class="navbar-toggler-icon icon-bar"></span>
              <span class="navbar-toggler-icon icon-bar"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end">
              <ul class="navbar-nav">
                <li class="nav-item dropdown" v-if="userInfos.roles[0].slug!=='superAdmin' || userInfos.roles[0].slug!=='managerOMCI' || userInfos.roles[0].slug!=='supervisor'">
                  <router-link
                    class="nav-link"
                    to=""
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="material-icons">notifications</i>
                    <span class="notification">2</span>
                    <p class="d-lg-none d-md-block">
                      Notifications
                    </p>
                  </router-link>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <router-link class="dropdown-item" to="notifications" v-if="userInfos.roles[0].slug==='validatorOMCI'">
                      Nouvelle demande en attente de validation !
                    </router-link>
                    <router-link class="dropdown-item" to="notifications" v-if="userInfos.roles[0].slug==='structureOM'">
                      Votre demande a été envoyée !
                    </router-link>
                    <router-link class="dropdown-item" to="notifications" v-if="userInfos.roles[0].slug==='structureOM'">
                      Votre demande a été approuvée (1/2) !
                    </router-link>
                  </div>
                </li>
                <li class="nav-item dropdown">
                
                  <a
                    class="nav-link"
                    href="javascript:;"
                    id="navbarDropdownProfile"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="material-icons">person</i>
                    <p class="d-lg-none d-md-block">
                      Mon Compte
                    </p>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownProfile"
                  >
                  <h4 class="text-center font-weight-bold text-orange text-uppercase">{{ userInfos.name }}</h4>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="profile">Mon Profil</a>
                    <a class="dropdown-item" @click="logout">Me Déconnecter</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- End Navbar -->
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <h3 class="font-weight-bold">
                <span class="text-orange text-uppercase">{{ userInfos.name }}</span>, bienvenue sur Approbank !
              </h3>
            </div>
            <hr />
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6" v-if="userInfos.roles[0].slug==='structureOM'">
                <div class="card card-stats">
                  <div class="card-header card-header-icon">
                    <div class="card-icon bg-black">
                      <i class="material-icons">savings</i>
                    </div>
                    <p class="card-category">Solde (en UVE)</p>
                    <h3 class="card-title"><strong>{{ soldeStructure.data }}</strong></h3>
                  </div>
                  <div class="card-footer">
                    <router-link to="supply" class="btn btn-primary btn-round">
                      Recharger
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="card card-stats">
                  <div class="card-header card-header-icon">
                    <div class="card-icon bg-black">
                      <i class="material-icons">account_balance_wallet</i>
                    </div>
                    <p class="card-category">Approvisionnements</p>
                    <h3 class="card-title" v-if="userInfos.roles[0].slug=='structureOM'">{{ mySupplies.length }}</h3>
                    <h3 class="card-title" v-if="userInfos.roles[0].slug!=='structureOM'">{{ supplies.length }}</h3>
                  </div>
                  <div class="card-footer">
                    <router-link to="listeDemandes" class="btn btn-primary btn-round">
                      Voir tout
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6" v-if="userInfos.roles[0].slug!=='structureOM'">
                <div class="card card-stats">
                  <div class="card-header card-header-icon">
                    <div class="card-icon bg-black">
                      <i class="material-icons">people</i>
                    </div>
                    <p class="card-category">Comptes Utilisateurs</p>
                    <h3 class="card-title">{{ users.length + 1 }}</h3>
                  </div>
                  <div class="card-footer">
                    <router-link to="utilisateurs" class="btn btn-primary btn-round">
                      Consulter la liste
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6" v-if="userInfos.roles[0].slug!=='structureOM' && userInfos.roles[0].slug!=='adminBanque'">
                <div class="card card-stats">
                  <div class="card-header card-header-icon">
                    <div class="card-icon bg-black">
                      <i class="material-icons">person_off</i>
                    </div>
                    <p class="card-category">Comptes Gelés</p>
                    <h3 class="card-title">{{ usersGeles.length }}</h3>
                  </div>
                  <div class="card-footer">
                    <router-link to="utilisateurs" class="btn btn-primary btn-round">
                      Consulter la liste
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="card card-chart">
                  <div class="card-header card-header-warning bg-orange">
                    <h4 class="card-title">Opérations effectuées</h4>
                    <p class="card-category">Année 2021</p>
                  </div>
                  <div class="card-body">
                    
                    <stats-demandes></stats-demandes>
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                      <i class="material-icons">access_time</i>Depuis la
                      dernière mise à jour
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import statsDemandes from './statsDemandes.vue';
export default {
  components: { statsDemandes },
  name: "dashboard",
  data: () => ({
    loading: false,
    agency: {},
    supply: {},
    mySupply: {},
  }),
  computed: {
    ...mapGetters({
      userInfos: "user/userInfos",
      adminBankInfos: "user/adminBankInfos",
      users: "user/users",
      usersGeles: "user/usersGeles",
    }),
    ...mapState({
      soldeStructure: state => state.agency.soldeStructure,
      supplies: state => state.supply.supplies,
      mySupplies: state => state.supply.mySupplies 
      //agencies: state => state.agency.agencies,
    }),
  },
  mounted() {
    this.$store.dispatch("user/userInfos");
    this.$store.dispatch("user/adminBankInfos");
    //this.$store.dispatch("agency/loadAgencies");
    this.$store.dispatch("agency/loadSoldeStructure");
    this.$store.dispatch("supply/loadSupplies");
    this.$store.dispatch("supply/loadmySupplies");
    this.$store.dispatch("user/users");
    this.$store.dispatch("user/usersGeles");
  },
  methods: {  
    logout() {
      this.$store.dispatch("user/logoutUser").then(() => {
        this.$router.push({ name: "login" });
      });
    }
  }
};
</script>
