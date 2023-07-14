import bus from '../utils/bus'

export default {
  // reusable component option
  mounted() {
    bus.$emit('end:spinner');
  }
}