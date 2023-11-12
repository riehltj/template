<script>
  export let link = []
  export let content = 'Link'
  export let klass ='font-semibold cursor-pointer border-solid border-b-2 border-transparent hover:border-black'
</script>

<a class="{klass}" href="{link}">
  {content}
</a>  