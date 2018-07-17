<template>
  <div>
    <div id="child">child {{data2}}</div>
    <button @click="updateChildrenData2"> update children data2</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      data1: 'this is data1',
      data2: false
    }
  },
  methods: {
    updateChildrenData2: function() {
      this.data2 = !this.data2
    }
  }
}
</script>
