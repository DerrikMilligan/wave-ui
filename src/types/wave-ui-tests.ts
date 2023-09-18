import { ref } from 'vue'

// This import works correctly and can be used for testing
// But wont' resolve as an actual import of the vue component
import wSelect from '@/types/components/w-select'

// And this ends up being not typed at all and having issues
import wSelectVue from '@/wave-ui/components/w-select.vue'

const select = ref<InstanceType<typeof wSelect>>()
