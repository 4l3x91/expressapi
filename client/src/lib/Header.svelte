<script lang="ts">
  import catExpressLogo from "../assets/catexpress.png";
</script>

<header>
  <img src={catExpressLogo} class="logo" alt="CatExpress Logo" />
  <h1>CatExpress</h1>

</header>

<style>
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background: #1c1c1c;
    width: 100%;
    padding: 1.5rem;
    box-shadow: 0px 0px 30px 0px black;
  }
  h1 {
    align-self: center;
  }
</style>
