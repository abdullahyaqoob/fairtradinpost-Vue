<template>
  <div class="authMainDiv">
    <div class="authDiv">
      <!-- <h2>Thank you for applying as a Mediator</h2> -->

      <!-- <p style="text-align:center;"><img src="../assets/img/topLogoTxt.png" alt="" class="topLogoPic"></p> -->
      <p style="text-align: center">
        <img
          src="../assets/img/bottomLogoTxt (1).png"
          alt=""
          class="topLogoPic"
        />
      </p>

      <div class="form">
        <!-- <h3>Sign In / Sign Up</h3> -->
        <h3>Apply / Login</h3>

        <div class="row">
          <div class="col-6">
            <span class="inputLabel">First Name</span><br />
            <input
              class="inputFeild"
              type="text"
              placeholder="Enter your name"
              v-model="firstName"
            />
          </div>
          <div class="col-6">
            <span class="inputLabel">Second Name</span><br />
            <input
              class="inputFeild"
              type="text"
              placeholder="Enter your name"
              v-model="secondName"
            />
          </div>
        </div>
        <br />
        <span class="inputLabel">Your Email</span><br />
        <input
          class="inputFeild inputFeild2"
          style="width: 98%"
          type="text"
          placeholder="Enter your email"
          v-model="emailAddress"
        />
        <br />
        <br />
        <span class="inputLabel">Enter Password</span><br />
        <input
          class="inputFeild inputFeild2"
          style="width: 98%"
          type="password"
          placeholder="Enter Your password here or create new one ..."
          v-model="emailPassword"
        />
        <!-- <p style="text-align: center">
          <button v-if="!loading" class="authBtn" @click="handleSubmit()">
            Apply
          </button>
          <button v-else class="authBtn">
            <img
              src="@/assets/img/loading.gif"
              style="vertical-align: sub; width: 17px"
            />
            <span class="loading-text">Loading...</span>
          </button>
          <a href="/signIn"><button class="authBtn">Sign In</button></a>
        </p> -->
        <p class="applyDIv">
          <span class="btnTopTxt">first time application</span>
          <button
            v-if="!loading"
            class="authBtn"
            @click="handleApply()"
            style="background-color: #ed1b23"
          >
            Apply
          </button>
          <button
            v-if="loading"
            class="authBtn"
            style="background-color: #ed1b23"
          >
            <img
              src="@/assets/img/loading.gif"
              style="vertical-align: sub; width: 17px"
            />
            <span class="loading-text">Loading...</span>
          </button>
          <span class="btnTopTxt">to update application</span>
          <button
            v-if="!loading"
            @click="handleLogin()"
            class="authBtn"
            style="background-color: #1472e1"
          >
            Login
          </button>
        </p>
      </div>
      <h4 class="forgotTxt" @click="forgotEmail = true" style="cursor: pointer">
        Forgot your password?
      </h4>
      <!-- <p style="text-align: center">
        <img
          src="../assets/img/joinTelegram.png"
          width="200px"
          alt="authBottomPic"
          class="authBottomPic2"
        />
      </p>
      <img
        src="../assets/img/bottomLogo.png"
        width="200px"
        alt="authBottomPic"
        class="authBottomPic"
      /> -->
      <p style="text-align: center"><a target="_blank" href="https://t.me/s/FairTraderFriends">
        <img
          src="../assets/img/bottomLogoTxt (3).png"
          alt=""
          class="bottomLogoTxt"
        /></a>
      </p>
    </div>
    <div class="forgotEmail" v-if="forgotEmail">
      <div class="forgotEmailDiv">
        <img
          src="https://icon-library.com/images/white-cross-icon/white-cross-icon-3.jpg"
          alt="crossImg"
          width="30px"
          @click="forgotEmail = false"
          style="
            position: absolute;
            right: 1px;
            top: 1px;
            cursor: pointer;
            padding-right: 10px;
            padding-top: 10px;
          "
        />
        <h5>Enter Your Email to reset your password</h5>
        <p style="text-align: center">
          <input
            type="text"
            placeholder="Enter Your email"
            v-model="resetEmail"
          />
        </p>
        <br />
        <p style="text-align: center">
          <button
            class="authBtn resetBtn"
            @click="resetPwd()"
            style="background-color: #0ca550"
          >
            Reset Password
          </button>
        </p>
      </div>
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
      firstName: "",
      secondName: "",
      emailAddress: "",
      emailPassword: "",
      loading: false,
      forgotEmail: false,
      resetEmail: "",
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    // AOS.init({
    //   duration: 1000,
    //   offset: 100,
    // });
  },
  methods: {
    resetPwd() {
      axios
        .post(
          process.env.VUE_APP_SERVICE_URL + "ResetPassword",
          {
            email: this.resetEmail,
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          console.log(res);
          this.$toasted.success("Email Successfully sended");
        })
        .catch((Response) => {
          console.log("eerrrooor", Response);
          this.$toasted.error("Something went wrong");
        });
    },
    handleLogin() {
      if (this.emailAddress === "" || this.emailPassword === "") {
        this.$router.push("/signin");
      } else {
        this.loading = true;
        axios
          .post(
            process.env.VUE_APP_SERVICE_URL + "User/login",
            {
              email: this.emailAddress,
              password: this.emailPassword,
            },
            { headers: { "Content-Type": "application/json" } }
          )
          .then((res) => {
            console.log(res);
            this.$router.push("/profile");
            const userID = res.data.id;
            const userToken = res.data.token;
            localStorage.setItem("UserToken", userToken);
            localStorage.setItem("userID", userID);
            const testUserID = localStorage.getItem("userID");
            console.log("trtttttttttttt", testUserID);
            this.loading = false;
          })
          .catch((Response) => {
            console.log("eerrrooor", Response);
            this.$toasted.error("Invalid Password");
            this.loading = false;
          });
      }
    },
    handleApply() {
      if (this.firstName === "") {
        this.$toasted.error("Invalid First Name");
      } else if (this.secondName === "") {
        this.$toasted.error("Invalid Second Name");
      } else if (this.emailAddress === "") {
        this.$toasted.error("Invalid Email Address");
      } else if (this.emailPassword === "") {
        this.$toasted.error("Invalid Password");
      } else if (!this.emailAddress.match(/@/)) {
        this.$toasted.error("Invalid Email Address");
      } else {
        this.loading = true;
        axios
          .post(
            process.env.VUE_APP_SERVICE_URL + "User/register",
            {
              email: this.emailAddress,
              password: this.emailPassword,
              name: this.firstName,
              lastName: this.secondName,
            },
            { headers: { "Content-Type": "application/json" } }
          )
          .then((res) => {
            console.log(res);
            const userID = res.data.id;
            const userToken = res.data.token;
            localStorage.setItem("userID", userID);
            localStorage.setItem("UserToken", userToken);
            const testuserToken = localStorage.getItem("UserToken");
            console.log("testuserToken", testuserToken);
            this.loading = false;
            this.$router.push("/profile");
          })
          .catch((err) => {
            this.loading = false;
            this.$toasted.error("Already have an account");
            console.log("SignUp", err);
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
  height: 100vh;
  background-color: #f9c602;
  width: 100%;
  margin: 0 auto;
}
.authDiv {
  width: 50%;
  margin: 0 auto;
}
.forgotTxt {
  text-align: center;
  font-size: 20px;
  margin-top: 25px;
}
.authDiv h2 {
  margin-left: -40px;
  padding-top: 140px;
  font-weight: 1000;
  font-size: 40px;
  text-align: center;
  font-family: nunito;
  margin-bottom: 80px;
  font-weight: bold;
}
.loading-text {
  margin-left: 10px;
}
.authDiv h3 {
  font-size: 40px;
  color: red;
  font-weight: bold;
  /* font-family: nunito; */
  margin-bottom: 30px;
}
.inputLabel {
  font-weight: bold;
  font-size: 16px;
  margin-left: 5px;
}
.inputFeild {
  margin-top: 10px;
  width: 95%;
  padding-left: 20px;
  height: 30px;
  font-weight: bold;
  outline: none;
}
::placeholder {
  color: #606468;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #606468;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #606468;
}
.authBtn {
  border: none;
  color: white;
  font-weight: bold;
  margin-right: 8px;
  margin-left: 8px;
  padding: 9px 60px;
  margin-top: 50px;
  border-radius: 5px;
  font-size: 18px;
}
.bottomLogoTxt {
  margin-top: 50px;
  width: 30%;
}
.applyDIv {
  text-align: center;
}
.btnTopTxt {
  margin-left: 22px;
  position: absolute;
  margin-top: 22px;
  color: #352e2e;
}
.authBottomPic {
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translate(-50%, 0);
  width: 300px;
}
.authBottomPic2 {
  width: 200px;
  position: absolute;
  bottom: 17%;
  left: 50%;
  transform: translate(-50%, 0);
}
.forgotEmail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(10px);
  background: transparent;
  z-index: 98;
}
.topLogoPic {
  margin-top: 70px;
  width: 50%;
  margin-bottom: 50px;
}
.forgotEmailDiv {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #0d54ae;
  width: 60%;
  height: 320px;
  padding: 30px 30px;
}
.forgotEmailDiv h5 {
  font-size: 20px;
  /* text-align: center; */
  padding-left: 25px;
  margin-top: 10px;
  color: white;
  font-weight: bold;
}
.forgotEmailDiv input {
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  padding-left: 20px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid lightslategrey;
}
@media (max-width: 1440px) {

.authMainDiv {
  height: 125vh;
}
  .authDiv h2 {
    margin-left: 0px;
  }
  .authDiv {
    width: 91%;
  }
}
/* @media (max-width: 824px) {
  .authDiv h2 {
    font-size: 34px;
  }
} */

@media (max-width: 1170px) {
  .forgotEmailDiv {
    width: 60%;
  }
}
@media (max-width: 850px) {
  .authDiv h2 {
    padding-top: 80px;
    font-size: 40px;
  }
  .inputFeild {
    font-size: 15px;
    font-weight: normal;
  }
  .authBottomPic {
    width: 270px;
  }
  .forgotEmailDiv {
    width: 90%;
  }
}
@media (max-width: 500px) {
  .bottomLogoTxt {
    margin-top: 50px;
    width: 65%;
  }
  .topLogoPic {
    margin-top: 30px;
    width: 70%;
    margin-bottom: 50px;
  }
  .authDiv h2 {
    font-size: 30px;
    padding-top: 30px;
    margin-bottom: 35px;
  }
  .inputFeild {
    margin-top: 4px;
    height: 70%;
    border: 1px solid lightgrey;
  }
  .inputFeild2 {
    height: 30px;
    margin-bottom: -10px;
  }
  .authBottomPic {
    width: 250px;
    position: absolute;
    bottom: 20px;
  }
  .authBottomPic2 {
    width: 180px;
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .authMainDiv {
    height: 100vh;
  }
  .applyDIv {
    text-align: center;
  }
  .authDiv h3 {
    font-size: 32px;
  }
  .form h3 {
    margin-bottom: 17px;
  }
  .authBtn {
    margin-top: 7vh;
  }
}
@media (max-width: 419px) {
  .authDiv h2 {
    font-size: 32px;
  }
}
@media (max-width: 407px) {
  .authBtn {
    padding: 9px 50px;
  }
}
@media (max-width: 400px) {
  .authBtn {
    padding: 9px 53px;
  }
  .btnTopTxt {
    margin-left: 20px;
  }
}
@media (max-width: 376px) {
  .authBtn {
    padding: 9px 48px;
  }
  .btnTopTxt {
    margin-left: 13px;
  }
}
@media (max-width: 363px) {
  .authDiv h2 {
    font-size: 28px;
  }
  .authBtn {
    padding: 8px 40px;
  }
  .inputFeild[data-v-730e086e] {
    font-size: 10px;
  }
}
@media (max-width: 345px) {
  .authBtn {
    padding: 8px 36px;
  }
}
@media (max-width: 317px) {
  .authDiv h2 {
    font-size: 25px;
  }
}

/* height */
@media (max-height: 670px) {
  .topLogoPic {
    margin-top: 30px;
    width: 65%;
    margin-bottom: 30px;
  }
}
@media (max-height: 650px) {
  .form h3 {
    font-size: 25px;
  }
  .bottomLogoTxt {
    width: 55%;
    margin-top: 30px;
  }
}
</style>