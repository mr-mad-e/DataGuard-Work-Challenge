<template>
  <v-container>
    <v-card-title class="px-0 primary--text">{{ tabs[$route.name] }} Plugins</v-card-title>

    <v-row>
      <template v-for="(plugin, index) in plugins">
        <v-col v-if="plugin.tab === $route.name" cols="12" sm="4" :key="index">
          <v-card class="rounded-lg" outlined :disabled="plugin.disabled">
            <v-card-title class="primary--text">
              {{ plugin.title }}

              <v-spacer />

              <div>
                <v-switch
                  inset
                  class="mt-0 mb-2 pt-0"
                  hide-details
                  :color="plugin.active ? 'success' : 'error'"
                  @change="$store.dispatch('updatePlugin', plugin)"
                  v-model="plugin.active"
                />
                <div
                  class="text-subtitle-2"
                  :class="plugin.active ? 'success--text' : 'error--text'"
                >
                  {{ plugin.active ? 'Allowed' : 'Blocked' }}
                </div>
              </div>
            </v-card-title>
            <v-card-text>{{ plugin.description }}</v-card-text>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PluginsView',

  computed: {
    ...mapGetters(['tabs', 'plugins']),
  },
};
</script>
