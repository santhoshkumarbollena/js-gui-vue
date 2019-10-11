

const sub = (x, y) => { return y-x }

const coder2 = new Vue({
  el: '#coder2',
  data: {
    guest: 'Santhosh',
    firstmul: 'web apps',
    secondmul: 10
  },
  computed: {
    mul: function () {
      const i = this.firstmul.length;
      const j = parseInt(this.secondmul)
      return `${this.guest}, your remaining length is ${sub(i, j)}.`
    }
  }
})