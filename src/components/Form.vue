<template>
  <div class="container">
    <form @submit="onSubmit($event)">
      <div>
        <b-field label="Rating">
          <b-numberinput
            id="rating"
            type="number"
            min="1"
            max="5"
            v-model="myForm.rating"
            required
          />
        </b-field>
        <b-field label="Device Variation">
          <b-select
            id="device-variation"
            placeholder="select variation"
            name="device-variation"
            v-model.trim="myForm.deviceVariation"
            required
            expanded
          >
            <option
              v-for="(variation, index) in variations"
              :key="index"
              :v-model="variation"
            >
              {{ variation }}
            </option>
          </b-select>
        </b-field>
        <b-field label="Review">
          <b-input
            id="review"
            maxlength="500"
            type="textarea"
            name="review"
            v-model="myForm.review"
          />
        </b-field>
        <button type="submit" class="button is-primary">submit</button>
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
      myForm: {
        rating: 1,
        deviceVariation: "",
        review: "",
      },
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
          let ratingEl = document.querySelector("#rating"),
            deviceEl = document.querySelector("#device-variation"),
            reviewEl = document.querySelector("#review");
          ratingEl.value = 1;
          deviceEl.value = "";
          reviewEl.value = "";
        })
        .catch(function() {
          console.log("failed");
        });
    },
  },
};
</script>
