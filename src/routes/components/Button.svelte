<script>
  export let link = []
	export let color = 'red'
  export let content = 'Button'
</script>

<div class="px-6 py-3 bg-{color} text-white rounded-xl shadow-lg hover:bg-{color}-hover cursor-pointer">
  <button class="font-semibold" href="{link}">
    {content}
  </button>
</div>