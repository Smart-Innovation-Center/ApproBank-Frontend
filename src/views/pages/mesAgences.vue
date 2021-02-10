<template>
  <v-app>
    <div class="wrapper ">
      <div class="sidebar" data-color="orange" data-background-color="black">
        <div class="logo text-center">
          <a href="../"><h2 class="text-light text-uppercase">Approbank</h2></a>
          <span class="text-orange text-uppercase">{{ userInfos.roles[0].name }}</span>
        </div>
        <div class="sidebar-wrapper">
          <ul class="nav text-left">
            <li class="nav-item">
              <a class="nav-link" href="dashboard">
                <i class="material-icons">dashboard</i>
                <p>Tableau de Bord</p>
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="profile">
                <i class="material-icons">person</i>
                <p>Profil</p>
              </a>
            </li>
            <li class="nav-item active" v-if="userInfos.roles[0].slug==='structureOM'">
              <a class="nav-link" href="mesAgences">
                <i class="material-icons">store_mall_directory</i>
                <p>Mes Agences</p>
              </a>
            </li>
            <li class="nav-item">
                    <a
                      class="nav-link collapsed text-truncate"
                      href="#sousmen"
                      data-toggle="collapse"
                      data-target="#sousmen"
                    >
                      <i class="material-icons">account_balance_wallet</i>
                      <p>Approvisionnements</p>
                    </a>
                    <div class="collapse" id="sousmen" aria-expanded="false">
                      <ul class="flex-column pl-2 nav">
                       <li class="nav-item" v-if="userInfos.roles[0].slug==='structureOM'">
                          <a class="nav-link" href="supply">
                            <i class="material-icons">add_circle</i>
                            <p>Nouvelle Demande</p>
                          </a>
                        </li>
                      <li class="nav-item" v-if="userInfos.roles[0].slug==='adminBanque' || userInfos.roles[0].slug==='validatorBanque' || userInfos.roles[0].slug==='validatorOMCI'">
                          <a class="nav-link" href="demandes">
                            <i class="material-icons">schedule</i>
                            <p>Demandes en attente</p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="listeDemandes">
                            <i class="material-icons">rule</i>
                            <p>Liste des demandes</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
            <li class="nav-item ">
              <a class="nav-link" href="notifications">
                <i class="material-icons">notifications</i>
                <p>Notifications</p>
              </a>
            </li>
            <li class="nav-item" v-if="userInfos.roles[0].slug==='superAdmin' || userInfos.roles[0].slug==='validatorOMCI'">
              <a
                class="nav-link collapsed text-truncate"
                href="#sousmenuAdmin"
                data-toggle="collapse"
                data-target="#sousmenuAdmin"
              >
                <i class="material-icons">visibility</i>
                <p>Administration</p>
              </a>
              <div class="collapse" id="sousmenuAdmin" aria-expanded="false">
                <ul class="flex-column pl-2 nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <i class="material-icons">groups</i>
                      <p>Gestion des Utilisateurs</p>
                    </a>
                  </li>
                  <li class="nav-item" v-if="userInfos.roles[0].slug==='validatorOMCI'">
              <a
                class="nav-link collapsed text-truncate"
                href="#sousmenuStructure"
                data-toggle="collapse"
                data-target="#sousmenuStructure"
              >
                <i class="material-icons">home</i>
                <p>Gestion des Structures</p>
              </a>
              <div class="collapse" id="sousmenuStructure" aria-expanded="false">
                <ul class="flex-column pl-2 nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <i class="material-icons">palette</i>
                      <p>Liste des Structures</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <i class="material-icons">palette</i>
                      <p>Liste des Agences</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <i class="material-icons">palette</i>
                      <p>Approvisionner une agence</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item" v-if="userInfos.roles[0].slug==='validatorOMCI'">
                    <a class="nav-link" href="comptesBanqueOrange">
                      <i class="material-icons">account_balance</i>
                      <p>Comptes Banque Orange</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a
                class="nav-link collapsed text-truncate"
                href="#sousmenu"
                data-toggle="collapse"
                data-target="#sousmenu"
              >
                <i class="material-icons">settings</i>
                <p>Paramètres</p>
              </a>
              <div class="collapse" id="sousmenu" aria-expanded="false">
                <ul class="flex-column pl-2 nav">
                <li class="nav-item" v-if="userInfos.roles[0].slug==='superAdmin'">
                    <a class="nav-link" href="#">
                      <i class="material-icons">info_outline</i>
                      <p>Approbank</p>
                    </a>
                  </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                      <i class="material-icons">palette</i>
                      <p>Affichage</p>
                    </a>
                  </li>
                  <li class="nav-item" v-if="userInfos.roles[0].slug==='superAdmin'">
                    <a class="nav-link" href="#">
                      <i class="material-icons">safety_divider</i>
                      <p>Gestion des Rôles</p>
                    </a>
                  </li>
                  <li class="nav-item" v-if="userInfos.roles[0].slug==='superAdmin'">
                    <a class="nav-link" href="#">
                      <i class="material-icons">lock</i>
                      <p>Gestion des Permissions</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <hr class="bg-orange"/>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="material-icons">menu_book</i>
                <p>Documentation</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="material-icons">support_agent</i>
                <p>Service Support</p>
              </a>
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
              <a class="navbar-brand" href="javascript:;"
                >Mes Agences</a
              >
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
                <li class="nav-item">
                  <a class="nav-link" href="javascript:;">
                    <i class="material-icons">dashboard</i>
                    <p class="d-lg-none d-md-block">
                      Tableau de bord
                    </p>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link"
                    href=""
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="material-icons">notifications</i>
                    <span class="notification">1</span>
                    <p class="d-lg-none d-md-block">
                      Notifications
                    </p>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="notifications">
                      Nouvelle demande en attente de validation !
                    </a>
                    <a class="dropdown-item" href="notifications">
                      Votre demande a été approuvée (1/2) !
                    </a>
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
              <div class="col-md-12" v-if="userInfos.roles[0].slug==='structureOM'">
                <div class="card">
                  <div class="card-header card-header-primary bg-orange">
                    <h4 class="card-title ">Mes Agences (enregistrées chez Orange)</h4>
                    <p class="card-category">
                      Ici la liste de vos différentes agences Orange Money enregistrées chez Orange
                    </p>
                  </div>
                                    <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-stripped">
                        <thead class="font-weight-bold">
                          <th>
                            #
                          </th>
                          <th>
                            Code
                          </th>
                          <th>
                            Ville
                          </th>
                          <th>
                            Description
                          </th>
                          <th>
                            Solde
                          </th>
                        </thead>
                        <tbody>
                          <tr v-for="(agency, index) in agencies" :key="agency.id">
                            <td>
                              {{ index + 1 }}
                            </td>
                            <td class="text-orange">
                              {{ agency.code }}
                            </td>
                            <td class="font-weight-bold">
                              {{ agency.ville }}
                            </td>
                            <td>
                              {{ agency.description }}
                            </td>
                            <td>
                              {{ agency.solde }} UVE
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  name: "supply",
  data:()=> ({
      agency: {}
  }),
  computed: {
    ...mapGetters({
      userInfos: "user/userInfos"
    }),
    ...mapState({
      agencies: state => state.agency.agencies,
    }),
  },

  methods: {
    logout() {
      this.$store.dispatch("user/logoutUser").then(() => {
        this.$router.push({ name: "login" });
      });
    },
  },
  mounted() {
    this.$store.dispatch("agency/loadAgencies");
  }
};
</script>
