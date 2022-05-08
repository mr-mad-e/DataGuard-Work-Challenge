<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer app permanent color="#f1f1f1">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h4 py-4 primary--text">
              Data<b>Guard</b>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list nav>
          <v-list-item color="primary" :to="tab.id" v-for="(tab, index) in tabs" :key="index" link>
            <v-list-item-icon>
              <v-icon>{{ tab.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ tab.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="d-flex pa-4">
            <div>All plugins {{ enabled ? 'enabled' : 'disabled' }}</div>
            <v-switch class="mt-0 pt-0 ml-2" @change="disableAllPlugins()" v-model="enabled" />
          </div>
        </template>
      </v-navigation-drawer>

      <v-main>
        <v-container fluid>
          <router-view  :plugins="plugins"></router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',

  data() {
    return {
      enabled: true,
    };
  },

  computed: {
    ...mapGetters(['tabs', 'plugins']),
  },

  created() {
    this.$store.dispatch('fetchTabs');
    this.$store.dispatch('fetchPlugins');
  },

  methods: {
    disableAllPlugins() {
      for (let index = 0; index < this.plugins.length; index++) {
        const plugin = this.plugins[index];
        plugin.disabled = !this.enabled;
        this.$store.dispatch('updatePlugin', plugin);
      }
    },
  },
};
</script>
