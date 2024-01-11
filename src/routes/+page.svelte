<script>
    export let data;
</script>
  

  <div class="flex flex-col items-center pt-12">
    <h1 class="text-red-500 font-bold text-5xl pb-12">To do 📝</h1>

    <form method="POST" class = "pb-6">
        <label class = "text-xl">add a to do:
            <input type="text" class = "bg-zinc-900 rounded-xl border" name = "description">
        </label>
    </form>

    {#each data.todos as todo}
    <div class="w-2/5 border border-zinc-900 rounded-2xl hover:border-red-500 bg-zinc-900 h-16 flex items-center justify-center">
      <h1 class="text-2xl">{todo.description}</h1>
    </div>
    <br>
    {/each}
  </div>
  
  <style>
    /* Add any additional styles here */
  </style>
  