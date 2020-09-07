<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Counter/>
    <Result/>
    <SecondResult/>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from "@/components/Counter.vue";
import Result from "@/components/Result.vue";
import SecondResult from "@/components/SecondResult.vue";

export default {
  name: "Home",
  components: {
    Counter,
    Result,
    SecondResult,
  }
};
</script>
