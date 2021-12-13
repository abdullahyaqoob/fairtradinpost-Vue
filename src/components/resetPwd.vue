<template>
  <div class="authMainDiv">
    <div class="authDiv">
      <h2>Thank you for applying as a Mediator</h2>

      <div class="form">
        <h3>Reset Your Account Password</h3>
        <br />
        <span class="inputLabel">Your Email</span><br />
        <input
          class="inputFeild"
          style="
            width: 98%;
            border: 1px solid grey;
            background-color: #fff;
            cursor: not-allowed;
          "
          type="text"
          disabled
          placeholder="Enter Your Email ..."
        />
        <br />
        <br />
        <div class="row">
          <div class="col-6">
            <span class="inputLabel">Your Password</span><br />
            <input
              class="inputFeild"
              style="width: 98%"
              type="password"
              placeholder="Enter Your password here ..."
              v-model="emailPassword1"
            />
            <br />
            <br />
          </div>
          <div class="col-6">
            <span class="inputLabel">Confirm Password</span><br />
            <input
              class="inputFeild"
              style="width: 98%"
              type="password"
              placeholder="Confirm Your Password ..."
              v-model="emailPassword2"
            />
          </div>
        </div>
        <button v-if="!loading" class="authBtn" @click="handleSubmit()">
          Reset Password
        </button>
        <button v-else class="authBtn">
          <img
            src="@/assets/img/loading.gif"
            style="vertical-align: sub; width: 17px"
          />
          <span class="loading-text">Loading...</span>
        </button>
      </div>
      <img
        src="../assets/img/Layer 1.png"
        width="200px"
        alt="authBottomPic"
        class="authBottomPic"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import AOS from "aos";
export default {
  name: "mediation",
  data() {
    return {
      userEmail: "",
      userToken: "",
      emailPassword1: "",
      emailPassword2: "",
      loading: false,
    };
  },
  mounted() {
    this.userEmail = this.$route.query.email;
    this.userToken = this.$route.query.token;
  },
  methods: {
    handleSubmit() {
      if (this.emailPassword1 === "") {
        this.$toasted.error("Invalid Email Address");
      } else if (!this.emailPassword1.match(this.emailPassword2)) {
        this.$toasted.error("Password Not Matched");
      } else {
        this.loading = true;
        axios
          .post(
            process.env.VUE_APP_SERVICE_URL + "ResetPassword/Change",
            {
              token: this.userToken,
              email: this.userEmail,
              password1: this.emailPassword1,
              password2: this.emailPassword2,
            },
            { headers: { "Content-Type": "application/json" } }
          )
          .then((res) => {
            console.log(res);
            this.$toasted.success("Password successfully changed");
            this.$router.push("/signin");
            this.loading = false;
          })
          .catch((Response) => {
            console.log("eerrrooor", Response);
            this.$toasted.error("Password not changed");
            this.loading = false;
          });
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.authMainDiv {
  background-color: #f9c602;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}
.authDiv {
  width: 50%;
  margin: 0 auto;
}
.authDiv h2 {
  margin-left: -40px;
  padding-top: 140px;
  font-weight: 1000;
  font-size: 40px;
  text-align: center;
  font-family: nunito;
  margin-bottom: 80px;
}
.authDiv h3 {
  font-size: 30px;
  color: red;
  font-weight: bold;
  font-family: nunito;
  margin-bottom: 30px;
}
.inputLabel {
  font-weight: bold;
}
.inputFeild {
  margin-top: 10px;
  width: 95%;
  padding-left: 20px;
  height: 30px;
  font-weight: bold;
  outline: none;
}
.authBtn {
  background-color: red;
  border: none;
  border: 1px solid black;
  color: white;
  font-weight: bold;
  float: right;
  margin-right: 17px;
  padding: 7px 30px;
  margin-top: 30px;
}
.authBottomPic {
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translate(-50%, 0);
}

@media (max-width: 1440px) {
  .authDiv h2 {
    margin-left: 0px;
  }
}
@media (max-width: 1328px) {
  .authDiv h2 {
    font-size: 34px;
  }
  .authDiv {
    width: 60%;
  }
}
@media (max-width: 941px) {
  .authDiv h2 {
    font-size: 30px;
  }
  .authDiv {
    width: 70%;
  }
}
@media (max-width: 850px) {
  .authDiv h2 {
    padding-top: 80px;
    font-size: 40px;
  }
  .inputFeild {
    font-size: 12px;
  }
  .authBottomPic {
    width: 270px;
  }
  .authDiv {
    width: 91%;
  }
}
@media (max-width: 730px) {
  .authDiv h2 {
    font-size: 30px;
  }
}
@media (max-width: 500px) {
  .authDiv h2 {
    font-size: 37px;
  }
  .inputFeild {
    margin-top: 4px;
  }
  .authBottomPic {
    position: relative;
    top: 120px;
    /* bottom: -150px; */
  }
  .authMainDiv {
    height: 150vh;
  }
}
@media (max-width: 441px) {
  .form h3 {
    font-size: 25px;
  }
}
@media (max-width: 419px) {
  .authDiv h2 {
    font-size: 32px;
  }
  .inputFeild {
    font-size: 11px;
  }
}
@media (max-width: 385px) {
  .inputFeild {
    padding-left: 7px;
  }
}
@media (max-width: 369px) {
  .form h3 {
    font-size: 22px;
  }
}
@media (max-width: 363px) {
  .authDiv h2 {
    font-size: 28px;
  }
}
@media (max-width: 340px) {
  .inputFeild {
    font-size: 10px;
  }
}
@media (max-width: 323px) {
  .form h3 {
    font-size: 20px;
  }
}
@media (max-width: 317px) {
  .authDiv h2 {
    font-size: 25px;
  }
}
</style>