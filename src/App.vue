<template>
  <div id="app">
    <div class="columms">
      <section class="column is-half is-offset-one-quarter">
        <header>
          <h2>Alexa Review</h2>
        </header>
        <Form />
      </section>
    </div>
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

  h2 {
    margin-bottom: 20px;
    font-size: 2rem;
    font-weight: bold;
  }
}
</style>
