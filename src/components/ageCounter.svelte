<script>
  import { onMount } from "svelte";
  onMount(() => {
    function age() {
      var t = new Date() - new Date(2006, 11, 24);
      t /= 1000 * 60 * 60 * 24 * 365;
      document.getElementById("age").innerHTML =
        "<span>" + Math.floor(t) + "</span>." + (t % 1).toFixed(3).substring(2);
    }

    setInterval(age, 300);
  });
</script>
