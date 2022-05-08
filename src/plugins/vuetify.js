import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0b344b',
        success: '#5bc98d',
        error: '#c63040',
      },
      dark: {
        primary: '#0b344b',
        success: '#5bc98d',
        error: '#c63040',
      },
    },
  },
});
