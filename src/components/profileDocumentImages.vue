<template>
  <div>
      <div class="row">
          <div class="col-6">
              <img src="" alt="">
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      testUserID: "",
      userData: "",
    }
    },
  mounted() {
    this.testUserID = localStorage.getItem("userID");
    console.log("User ID: ", this.testUserID);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM4MTEyODg0LCJleHAiOjE2Mzg3MTc2ODR9.RzZ5h4AiPsUVC4mE09aG2jCoRXWtcGmbnUj6Mlxawoo";
    axios
      .get(process.env.VUE_APP_SERVICE_URL + "User/" + this.testUserID, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        this.userData = res.data.user;
        console.log("UserData", this.userData);
      })
      .catch((err) => {
        console.log("error", err);
      });
  },
}
</script>

<style>

</style>