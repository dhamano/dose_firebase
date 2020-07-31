<template>
  <div>
    <form @submit="onSubmit($event)">
      <div>
        <input
          type="number"
          :v-model="rating"
          min="1"
          max="5"
          v-model="myForm.rating"
          required
        />
        <select
          name="device-variation"
          v-model.trim="myForm.deviceVariation"
          required
        >
          <option
            v-for="(variation, index) in variations"
            :key="index"
            :v-model="variation"
          >
            {{ variation }}
          </option>
        </select>
        <textarea name="review" v-model="myForm.review"></textarea>
        <button type="submit">submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "../firebase";

export default {
  props: {},
  data() {
    return {
      myForm: {},
      variations: [
        "Charcoal Fabric",
        "Sandstone Fabric",
        "Black",
        "White",
        "Walnut Finish",
        "Heather Gray Fabric",
        "Oak Finish",
      ],
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      db.firestore()
        .collection("reviews")
        .add({
          rating: this.myForm.rating,
          deviceVariation: this.myForm.deviceVariation,
          review: this.myForm.review,
          createdAt: db.firestore.FieldValue.serverTimestamp(),
        })
        .then(function() {
          console.log("success");
        })
        .catch(function() {
          console.log("failed");
        });
    },
  },
};
</script>
