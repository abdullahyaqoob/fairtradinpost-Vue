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
        <h3>Log In To Your Account</h3>

        <!-- <div class="row">
          <div class="col-6">
            <span class="inputLabel">First Name <small>(Optional)</small></span><br />
            <input
              class="inputFeild"
              type="text"
              placeholder="Enter Your Name ..."
            />
          </div>
          <div class="col-6">
            <span class="inputLabel">Last Name <small>(Optional)</small></span><br />
            <input
              class="inputFeild"
              type="text"
              placeholder="Enter Your Name ..."
            />
          </div>
        </div> -->
        <br />
        <span class="inputLabel">Your Email</span><br />
        <input
          class="inputFeild"
          style="width: 98%"
          type="text"
          placeholder="Enter Your Email ..."
          v-model="emailAddress"
        />
        <br />
        <br />
        <span class="inputLabel">Your Password</span><br />
        <input
          class="inputFeild"
          style="width: 98%"
          type="password"
          placeholder="Enter Your password here or create new one ..."
          v-model="emailPassword"
        />

        <p class="applyDIv">
          <!-- <span class="btnTopTxt">first time application</span> -->
          <button
            v-if="!loading"
            class="authBtn"
            @click="handleSubmit()"
            style="background-color: #ed1b23"
          >
            Log in
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
          <!-- <span class="btnTopTxt">to complete application</span> -->
          <!-- <a href="/apply"
            ><button
              v-if="!loading"
              @click="handleLogin()"
              class="authBtn"
              style="background-color: #1472e1"
            >
              Apply
            </button></a
          > -->
        </p>

        <!-- <p>
          <button
            v-if="!loading"
            class="authBtn"
            style="background-color: #0ca550"
            @click="handleSubmit()"
          >
            Sign In
          </button>
          <button v-else class="authBtn" style="background-color: #0ca550">
            <img
              src="@/assets/img/loading.gif"
              style="vertical-align: sub; width: 17px"
            />
            <span class="loading-text">Loading...</span>
          </button>
          <a href="/apply"
            ><button class="authBtn" style="background-color: #ed1b23">
              Apply
            </button></a
          >
        </p> -->
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
      <p style="text-align: center">
        <img
          src="../assets/img/bottomLogoTxt (3).png"
          alt=""
          class="bottomLogoTxt"
        />
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
    handleSubmit() {
      if (this.emailAddress === "") {
        this.$toasted.error("Invalid Email Address");
      } else if (this.emailPassword === "") {
        this.$toasted.error("Invalid Password");
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
            console.log("submitErrorRes: ", Response);
            this.$toasted.error("Invalid Password");
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
.applyDIv {
  text-align: right;
}
.authDiv h3 {
  font-size: 30px;
  color: red;
  font-weight: bold;
  /* font-family: nunito; */
  margin-bottom: 30px;
}
.inputLabel {
  font-weight: bold;
}
.btnTopTxt {
  display: none;
}
.inputFeild {
  margin-top: 10px;
  width: 95%;
  padding-left: 20px;
  height: 30px;
  font-weight: bold;
  outline: none;
}
.topLogoPic {
  margin-top: 80px;
  width: 50%;
  margin-bottom: 50px;
}
.bottomLogoTxt {
  margin-top: 70px;
  width: 30%;
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
.authBottomPic {
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translate(-50%, 0);
}

.forgotTxt {
  text-align: center;
  margin-top: 130px;
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
  .authDiv h2 {
    margin-left: 0px;
  }
}
@media (max-width: 1200px) {
  .authDiv {
    width: 91%;
  }
}
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
    font-size: 12px;
  }
  .authBottomPic {
    width: 270px;
  }
  .forgotEmailDiv {
    width: 90%;
  }
}
@media (min-width: 500px) {
  .authBtn {
    float: right;
  }
}
@media (max-width: 500px) {
  .applyDIv {
    text-align: center;
  }
  .bottomLogoTxt {
    margin-top: 50px;
    width: 65%;
  }
  .authDiv h2 {
    font-size: 32px;
    padding-top: 50px;
    margin-bottom: 50px;
  }
  .topLogoPic {
    margin-top: 30px;
    width: 70%;
    margin-bottom: 50px;
  }
  .inputFeild {
    margin-top: 4px;
  }
  .authBottomPic {
    position: relative;
    top: 140px;
    /* bottom: -150px; */
  }
  .authBottomPic2 {
    width: 180px;
    position: absolute;
    bottom: 130px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .authMainDiv {
    height: 100vh;
  }
  .authBtn {
    margin-top: 7vh;
  }
  .btnTopTxt {
    display: initial;
    margin-left: 15px;
    position: absolute;
    margin-top: 22px;
    color: #352e2e;
  }
  .forgotTxt {
    text-align: center;
    margin-top: 40px;
  }
}
@media (max-width: 419px) {
  .authDiv h2 {
    font-size: 32px;
  }
  .authBtn {
    padding: 9px 45px;
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
    margin-left: 5px;
  }
  .authBtn {
    padding: 9px 47px;
  }
}
@media (max-width: 376px) {
  .authBtn {
    padding: 9px 47px;
  }
  .btnTopTxt {
    margin-left: 0px;
  }
}
@media (max-width: 363px) {
  .authDiv h2 {
    font-size: 28px;
  }
  .authBtn {
    padding: 8px 40px;
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