import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { md } from 'vuetify/iconsets/md'
import { aliases, fa } from 'vuetify/iconsets/fa'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light'
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      md
    }
  },
  components,
  directives
})

export default vuetify
