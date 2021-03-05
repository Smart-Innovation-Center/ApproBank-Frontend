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
            <li class="nav-item" v-if="userInfos.roles[0].slug==='structureOM'">
              <a class="nav-link" href="mesAgences">
                <i class="material-icons">store_mall_directory</i>
                <p>Mes Agences</p>
              </a>
            </li>
            <li class="nav-item active">
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
                       <li class="nav-item active" v-if="userInfos.roles[0].slug==='structureOM'">
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
            <li class="nav-item" v-if="userInfos.roles[0].slug!=='superAdmin' && userInfos.roles[0].slug!=='supervisor'">
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
                  <li class="nav-item" v-if="userInfos.roles[0].slug==='managerOMCI'">
                    <a class="nav-link" href="validateursOM">
                      <i class="material-icons">done_all</i>
                      <p>Validateurs</p>
                    </a>
                  </li>
                  <li class="nav-item" v-if="userInfos.roles[0].slug==='validatorOMCI' || userInfos.roles[0].slug==='managerOMCI'">
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
                    <a class="nav-link" href="roles">
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
              <a class="navbar-brand" href="javascript:;">Demande d'Approvisionnement</a>
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
                <li class="nav-item dropdown" v-if="userInfos.roles[0].slug!=='superAdmin'">
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
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header card-header-primary bg-orange">
                    <h4 class="card-title">Approvisionnement avec bordereau</h4>
                    <p class="card-category">
                      Pour votre demande
                      d'approvisionnement avec borderau de versement
                    </p>
                  </div>
                  <div class="card-body">
                    
                      <div class="row">
                        <div class="col-md-8">
                            <v-file-input
                            @change="traitementImage"
                            v-model="image"
                            accept="image/*"
                            chips
                            outlined
                            dense
                            label="Bordereau de Versement"
                            show-size
                          ></v-file-input>
                        </div>
                        <div class="col-md-4">
                          <v-card>
                            <v-img :src="url" :lazy-src="require('../../assets/img/bordereauPlaceholder.png')" contain></v-img>
                          </v-card>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <v-select
                              v-model="agencyID"
                              :items="agencies"
                              item-value="id"
                              item-text="code"
                              placeholder="Agence"
                              single-line
                              return-object
                            >
                            </v-select>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label for="bankExp"></label>
                            <select v-model="bankExp" name="bankExp" class="form-control" @change="getRibs">
                                <option selected disabled value="">Selectionner Banque Expéditrice</option>
                                <option v-for="bank in banks" :value="bank.id">{{ bank.nom }}</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label for="ribbankExp"></label>
                            <select v-model="ribExpID" name="ribbankExp" class="form-control">
                              <option selected disabled value="">Selectionner RIB Expéditeur</option>
                              <option v-for="ribbankExp in ribsbankExp" :value="ribbankExp.id">{{ ribbankExp.description }}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <label for="bankBenef"></label>
                            <select v-model="bankBenef" name="bankBenef" class="form-control" @change="getRibsOrange">
                                <option selected disabled value="">Selectionner Banque Bénéficiaire</option>
                                <option v-for="bank in banks" :value="bank.id">{{ bank.nom }}</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label for="ribbankBenef"></label>
                            <select v-model="ribBenefID" name="ribbankBenef" class="form-control">
                              <option selected disabled value="">Selectionner RIB Bénéficiaire</option>
                              <option v-for="ribbankBenef in ribsbankBenef" :value="ribbankBenef.id">{{ ribbankBenef.description }}</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Montant approvisionnement</label>
                            <input
                            v-model="montant"
                              type="number"
                              class="form-control"
                              min="1000"
                              step="500"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Date de Traitement</label>
                            <input
                              v-model="dateTraitement"
                              type="date"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Date de Versement</label>
                            <input
                              v-model="dateVersement"
                              type="date"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Numero du bordereau</label>
                            <input
                              v-model="numeroBordereau"
                              type="text"
                              class="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <input type="submit" class="btn btn-orange btn-fill pull-center" value="Envoyer Demande" @click="saveAvecB" />
  
                      <div class="clearfix"></div> 
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 text-center">
                <v-avatar
                  class="bg-black"
                  size="60"
                >
                  <span class="white--text headline">OU</span>
                </v-avatar>
              </div>
            </div>
            
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header card-header-primary bg-orange">
                    <h4 class="card-title">Approvisionnement sans bordereau</h4>
                    <p class="card-category">
                      Veuillez remplir le formulaire pour une demande
                      d'approvisionnement sans borderau de versement
                    </p>
                  </div>
                  <div class="card-body">
                    <!--<v-form>-->
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <v-select
                              v-model="supply.agencyID"
                              :items="agencies"
                              item-value="id"
                              item-text="code"
                              placeholder="Agence"
                              single-line
                              return-object
                            >
                            </v-select>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <!--<v-select
                              :items="banks"
                              prepend-icon="account_balance"
                              item-value="id"
                              item-text="nom"
                              placeholder="Banque Expéditrice"
                              single-line
                              return-object
                              >
                            </v-select>-->
                            <label for="bankExp"></label>
                            <select v-model="bankExp" name="bankExp" class="form-control" @change="getRibs">
                                <option selected disabled value="">Selectionner Banque Expéditrice</option>
                                <option v-for="bank in banks" :value="bank.id">{{ bank.nom }}</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <!--<v-select
                              :items="ribs"
                              prepend-icon="note"
                              item-value="id"
                              item-text="description"
                              placeholder="RIB Expéditeur"
                              single-line
                              return-object
                            >
                            </v-select>-->
                            <label for="ribbankExp"></label>
                            <select v-model="supply.ribExpID" name="ribbankExp" class="form-control">
                              <option selected disabled value="">Selectionner RIB Expéditeur</option>
                              <option v-for="ribbankExp in ribsbankExp" :value="ribbankExp.id">{{ ribbankExp.description }}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <!--<v-select
                                :items="banks"
                                prepend-icon="account_balance"
                                item-value="id"
                                item-text="nom"
                                placeholder="Banque Bénéficiaire"
                                single-line
                                return-object
                              >
                            </v-select>-->
                            <label for="bankBenef"></label>
                            <select v-model="bankBenef" name="bankBenef" class="form-control" @change="getRibsOrange">
                                <option selected disabled value="">Selectionner Banque Bénéficiaire</option>
                                <option v-for="bank in banks" :value="bank.id">{{ bank.nom }}</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                             <!--<v-select
                              :items="ribs"
                              prepend-icon="note"
                              item-value="id"
                              item-text="numero"
                              placeholder="RIB Bénéficiaire"
                              single-line
                              return-object
                            >
                            </v-select>-->
                            <label for="ribbankBenef"></label>
                            <select v-model="supply.ribBenefID" name="ribbankBenef" class="form-control">
                              <option selected disabled value="">Selectionner RIB Bénéficiaire</option>
                              <option v-for="ribbankBenef in ribsbankBenef" :value="ribbankBenef.id">{{ ribbankBenef.description }}</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Montant approvisionnement</label>
                            <input
                            v-model="supply.montant"
                              type="number"
                              class="form-control"
                              min="1000"
                              step="500"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- <div class="row">
                      
                        
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Date de Traitement</label>
                            <input
                              type="text"
                              class="form-control datetimepicker"
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Date de Versement</label>
                            <input
                              type="text"
                              class="form-control datetimepicker"
                            />
                          </div>
                        </div>
                      </div> -->
                      <!-- <div class="row">
                        <div class="col-md-12">
                         <v-file-input
                         label="Bordereau de Versement"
                        show-size
                      ></v-file-input>
                        </div> -->
                      <!--   -->
                      <button class="btn btn-orange btn-fill pull-center" @click="saveSansB">
                        Envoyer Demande
                      </button>

                      <div class="clearfix"></div>
                    <!--</v-form>-->
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
import { mapActions, mapGetters, mapState } from "vuex";
import axios from "../../axios"
export default {
  name: "supply",
  data() {
    return {
      userID: '',
      agencyID: '',
      bankExpID: '',
      ribExpID: '',
      bankBenefID: '',
      ribBenefID: '',
      dateTraitement: '',
      dateVersement: '',
      numeroBordereau: '',
      photoBordereau: null,
      montant: '',
      statut: '',
      supply: {
        userID: '',
        agencyID: '',
        bankExpID: '',
        ribExpID: '',
        bankBenefID: '',
        ribBenefID: '',
        dateTraitement: '',
        dateVersement: '',
        numeroBordereau: '',
        photoBordereau: '',
        montant: '',
        statut: ''
      }
     ,
      bankExp: '',
      bankBenef: '',
    banksExp: [],
    banksBenef: [],
            ribsbankExp: [],
            ribbankExp: '',
            ribsbankBenef: [],
            ribbankBenef: '',
      selectedAgency: [],
      selectedRib: [],
      rib: {},
      url: null,
      image: null,
    };
  },
  computed: {
    ...mapGetters({
      userInfos: "user/userInfos",
      adminBankInfos: "user/adminBankInfos"
    }),
    ...mapState({
      agencies: state => state.agency.agencies,
      ribs: state => state.rib.ribs,
      banks: state => state.bank.banks,
    })
  },

  methods: {
    ...mapActions({
      //addNotification: "application/addNotification",
      supplyAd: "supply/addSupply",
      supplyAd2: "supply/addSupply2"
    }),
      loadBanksExp() {
        axios.get('/banksAll').then(response => this.banksExp =response.data.banks).catch(error => console.log(error))
      },    
      getRibs() {
        axios.get('/ribsLegacy', {params: {bank_id: this.bankExp}}).then(response => this.ribsbankExp = response.data).catch(error => console.log(error))
      },
      loadBanksBenef() {
        axios.get('/banksAll').then(response => this.banksBenef =response.data.banks).catch(error => console.log(error))
      },    
      getRibsOrange() {
        axios.get('/ribsOrange', {params: {bank_id: this.bankBenef}}).then(response => this.ribsbankBenef = response.data).catch(error => console.log(error))
      },
    traitementImage(event) {
       this.photoBordereau = event;
       this.url= URL.createObjectURL(this.image); 
      // this.supply.photoBordereau = this.url;
      //console.log(this.supply.photoBordereau);
    },
    
    saveAvecB(e) {
            e.preventDefault();
              this.userID = this.$store.state.user.userInfos.id;

                      const data = new FormData();
                      
                      data.append('userID', this.$store.state.user.userInfos.id);
                      data.append('agencyID', this.agencyID.id);
                      data.append('bankExpID', this.bankExp);
                      data.append('ribBenefID', this.ribBenefID);
                      data.append('ribExpID', this.ribExpID);
                      data.append('bankBenefID', this.bankBenef);
                      data.append('dateTraitement', this.dateTraitement);
                      data.append('dateVersement', this.dateVersement);
                      data.append('numeroBordereau', this.numeroBordereau);
                      data.append('montant', this.montant);
                      data.append('statut', 'Demande avec bordereau envoyée et en cours d\'approbation');
                      data.append('photoBordereau', this.photoBordereau);
                      //console.log(this.photoBordereau);
                      // const json = JSON.stringify({
                      //     userID: this.$store.state.user.userInfos.id,
                      //     agencyID: this.agencyID.id,
                      //     bankExpID: this.bankExp,
                      //     ribExpID: this.ribExpID,
                      //      bankBenefID: this.bankBenef,
                      //     dateTraitement: this.dateTraitement,
                      //     dateVersement: this.dateVersement,
                      //     numeroBordereau: this.numeroBordereau,
                      //     montant: this.montant,
                      //     statut: 'Demande envoyée et en cours d\'approbation !'
                      // });
                      // data.append('data', json);
                       this.supplyAd2(data);
         this.$router.push({ name: "listeDemandes" });
                      //axios.post("/supplyAdd", data);
                      // console.log("data => ",data);

        },
    saveSansB () {
      
                      
                // let currentObj = this;
                // const config = {
                //     headers: { 'content-type': 'multipart/form-data' }
                // }
                // let formData = new FormData();
                // formData.append('photoBordereau', this.supply.photoBordereau);

        this.supply.userID = this.$store.state.user.userInfos.id;
        this.supply.agencyID = this.supply.agencyID.id;
        this.supply.bankExpID = this.bankExp;
        this.supply.bankBenefID = this.bankBenef;
        this.supply.statut = 'Demande sans bordereau envoyée et en cours d\'approbation';
        console.log('supply',this.supply)
          this.supplyAd(this.supply);
         this.$router.push({ name: "listeDemandes" });
      },
      
    logout() {
      this.$store.dispatch("user/logoutUser").then(() => {
        this.$router.push({ name: "login" });
      });
    }
  },
  mounted() {
    this.$store.dispatch("agency/loadAgencies");
    this.$store.dispatch("rib/loadRibs");
    this.$store.dispatch("bank/loadBanks");
    this.loadBanksExp();
    this.loadBanksBenef();
  }
};
</script>