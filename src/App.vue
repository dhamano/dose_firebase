<template>
  <div id="app">
    <Form
      :rating="rating"
      :deviceVariation="deviceVariation"
      :review="review"
    />
  </div>
</template>

<script>
import Form from "./components/Form";
import db from "./firebase";

export default {
  name: "App",
  components: {
    Form,
  },
  data() {
    return {};
  },
  firestore: {
    documents: db.firestore().collection("reviews"),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
