<script>
const blocks = [
  { id: 1, title: 'Jane Doe', subtitle: 'Nice person', theme: 1 },
]

export default {
  name: 'BlockProvider',
  provide: {
    fetch: id => Promise.resolve(blocks.find(x => x.id === id)),
    post: block => blocks.push(block) && Promise.resolve({ success: true }),
  },
  render() {
    return this.$slots.default
  },
}
</script>
