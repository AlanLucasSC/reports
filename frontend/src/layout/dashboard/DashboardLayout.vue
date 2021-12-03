<template>
  <div class="wrapper">
    <side-bar title="Trabalho" url="/">
      <template slot="links">
        <sidebar-link to="/dashboard" name="Dashboard" icon="tim-icons icon-chart-pie-36"/>
        <sidebar-link to="/reports" name="Relatórios" icon="tim-icons icon-single-copy-04"/>
        <sidebar-link to="/manager" name="Gerenciamento" icon="tim-icons icon-settings-gear-63"/>
        <sidebar-link to="/profile" name="Perfil" icon="tim-icons icon-single-02"/>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
