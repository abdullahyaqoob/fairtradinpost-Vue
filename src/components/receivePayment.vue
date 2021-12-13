<template>
  <div class="profileMainDiv">
    <div class="profileDiv">
      <h1 data-aos="fade-right">How to Receive Your Payment</h1>
      <label>Business Name (optional)</label><br />
      <input
        v-if="userData.businessName === ''"
        class="BuisInput"
        type="text"
        placeholder="Do you have a business or a company?"
        ref="businessName"
      /><input
        v-else
        class="BuisInput"
        type="text"
        :value="userData.businessName"
        placeholder="Do you have a business or a company?"
        ref="businessName"
      />
      <!-- <input
        type="text"
        placeholder="Do you have a business or a company?"
        class="BuisInput"
        v-model="buisnessName"
      /> -->
      <br />
      <label>Business Website (optional)</label><br />
      <input
        v-if="userData.businessWebsite === ''"
        class="BuisInput"
        type="text"
        placeholder="If you have a website, enter URL here"
        ref="businessWebsite"
      /><input
        v-else
        class="BuisInput"
        type="text"
        :value="userData.businessWebsite"
        placeholder="If you have a website, enter URL here"
        ref="businessWebsite"
      />
      <!-- <input
        type="text"
        placeholder="If you have a website, enter URL here"
        class="BuisInput"
        v-model="buisnessWebsite"
      /> -->

      <div class="row">
        <div class="col-6">
          <!-- <label>Profile Photo <small style="font-size: 11px"> (png, jpg, jpeg) </small></label><br /> -->
          <label>Profile Photo</label><br />
          <input
            type="file"
            class="fileUpload"
            @change="selectedUserPhoto"
            style="display: none"
            ref="fileInput"
            accept="image/x-png,image/jpeg,image/jpg"
          />
          <button @click="$refs.fileInput.click()" class="fileInput">
            Your Photo
          </button>
          <!-- <span class="selectredFIleQulification">{{
            istSelectedFileQualName
          }}</span> -->
          <!-- <div class="dynamicImg" v-if="userData.idCard != ''">
            <img :src="userData.idCard" alt="" />
          </div> -->
          <div class="dynamicImg" v-if="userData.idCard != ''">
            <img
              v-if="userProfileSelected === ''"
              :src="userData.idCard"
              alt=""
            />
            <img
              v-if="userProfileSelected != ''"
              :src="userProfileSelected"
              alt=""
            />
            <img
              src="../assets/img/deleteIcon.png"
              @click="deleteUserImg"
              alt="deleteIcon"
              class="UserProfileDelete"
            />
          </div>
          <!-- <span class="chooseFileTxt">Please Choose File: </span> -->
        </div>
        <div class="col-6 IDCardPDiv">
          <label>Other Identification <small>(optional)</small></label><br />
          <input
            type="file"
            class="fileUpload"
            @change="selectedGoverID"
            style="display: none"
            ref="fileInput2"
            accept="image/x-png,image/jpeg,image/jpg, application/pdf"
          />
          <button @click="$refs.fileInput2.click()" class="fileInputt" id="fileInputWritten">
            Upload PNG, JPG, JPEG, PDF
          </button>
          <button @click="$refs.fileInput2.click()" class="fileInputt" id="fileInputNWritten">
            Upload File
          </button>
          <!-- <div class="dynamicImgTxt" v-if="userData.idCard != ''">
            <a target="_blank" :href="userData.passport"
              >Click to View Document</a
            >
          </div> -->
          <div class="dynamicImgTxt" v-if="userData.passport != ''">
            <div v-if="userIDSelected === ''">
              <a target="_blank" class="viewDocTxt" :href="userData.passport"
                >Click to View Document</a
              ><img
                src="../assets/img/deleteIcon.png"
                @click="deleteUserID"
                alt="deleteIcon"
                class="UserIDDelete"
              />
            </div>

            <div v-if="userIDSelected != ''">
              <a target="_blank" class="viewDocTxt" :href="userIDSelected"
                >Click to View Document</a
              ><img
                src="../assets/img/deleteIcon.png"
                @click="deleteUserID"
                alt="deleteIcon"
                class="UserIDDelete"
              />
            </div>
          </div>
          <!-- <span class="dynamicImgTxt">{{ licenceSelectedFileQualName }}</span> -->
        </div>
      </div>
      <label>Your wallet address (optional)</label><br />
      <input
        v-if="userData.cardNumber === 0"
        class="BuisInput"
        type="text"
        placeholder="Enter your digital wallet such as Metamask"
        ref="walletAddress"
      /><input
        v-else
        class="BuisInput"
        type="text"
        :value="userData.cardNumber"
        placeholder="Enter your digital wallet such as Metamask"
        ref="walletAddress"
      />
      <!-- <input
        type="text"
        placeholder="Enter your digital wallet such as Metamask"
        class="BuisInput"
        v-model="walletAddress"
      /> -->
      <h5>
        To Set Up Metamask Wallet
        <a href="https://metamask.io/" target="_blank">Click Here</a>
        <!-- <small>(If you already don't have than you have to create one.)</small> -->
      </h5>
      <p class="guidReceive">
        <span
          >In order to receive payment you will need to have a digital wallet
          and prove you are a real person.</span
        >
        If you already have a wallet number such as Metamask please provide
        details about or email <a href="">support@FairTrader.io</a> for
        assistance.
      </p>
      <p class="alignCenter">
        <button v-if="!loading" class="profileBtn" @click="handleSubmit()">
          Submit
        </button>
        <button v-else class="profileBtn">
          <img
            src="@/assets/img/loading.gif"
            style="vertical-align: sub; width: 20px"
          />
          <span class="loading-text" style="color: white">Loading...</span>
        </button>
      </p>
      <div class="bottomLinks">
        <!-- <h6 class="linkUs">Please Link with us for important updates:</h6>
        <div class="row">
          <div class="col-6">
            <div class="row">
              <div class="col-3">
                <img src="../assets/img/facebook.png" alt="" />
              </div>
              <div class="col-8">
                <p>
                  Link to <br />
                  FaceBook
                </p>
              </div>
            </div>
          </div>
          <div class="col-6 bottomLinkSec">
            <div class="row">
              <div class="col-3">
                <img src="../assets/img/twitter.png" alt="" />
              </div>
              <div class="col-8">
                <p>
                  Link to <br />
                  Telegram
                </p>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import axios from "axios";
export default {
  name: "mediation",
  data() {
    return {
      businessName: "",
      buisnessWebsite: "",
      walletAddress: "",
      selectedPhoto: "",
      selectedGovID: "",
      istSelectedFileQualName: "",
      licenceSelectedFileQualName: "",
      userData: "",
      userProfileSelected: "",
      userToken: "",
      userIDSelected: "",
      loading: false,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      offset: 100,
    });

    this.userToken = localStorage.getItem("UserToken");
    this.testUserID = localStorage.getItem("userID");
    // console.log("User ID: ", this.testUserID);
    const token = this.userToken;
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
        this.$toasted.error("Something went wrong, Refresh the Page.");
        console.log("ddddddd", err);
      });
  },
  methods: {
    handleSubmit() {
      if (this.$refs.businessName.value === "") {
        if (this.userData.businessName != "") {
          this.businessName = this.userData.businessName;
        } else {
          console.log("businessName");
        }
      }

      if (this.$refs.businessWebsite.value === "") {
        if (this.userData.businessWebsite != "") {
          this.businessWebsite = this.userData.businessWebsite;
        } else {
          console.log("businessWebsite");
        }
      }

      if (this.$refs.walletAddress.value === 0) {
        if (this.userData.cardNumber != 0) {
          this.walletAddress = this.userData.cardNumber;
        } else {
          console.log("walletAddress");
        }
      }
      // if (this.selectedPhoto === "") {
      //   this.$toasted.error("invalid Photo");
      // }

      console.log("BUISNESS NAME: ", this.$refs.businessWebsite.value);
      console.log("BUISNESS WEBSITE: ", this.$refs.businessName.value);
      console.log("WALLET ADDRESS: ", this.$refs.walletAddress.value);
      // if (this.selectedGovID === "") {
      //   this.$toasted.error("invalid Government ID");
      // } else if ((this.selectedPhoto != "") & (this.selectedGoverID != "")) {
      this.loading = true;
      const token = this.userToken;

      // formData.append("idCard", this.selectedPhoto);
      // formData.append("passport", this.selectedGovID);
      axios
        .put(
          process.env.VUE_APP_SERVICE_URL + "Payment/" + this.testUserID,
          {
            businessName: this.$refs.businessName.value,
            businessWebsite: this.$refs.businessWebsite.value,
            cardNumber: this.$refs.walletAddress.value,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.$toasted.success("Successfully Updated");
          this.$router.push("/applicationSubmit");
          // localStorage.setItem(
          //   "sndSelectedFileQual",JSON.stringify(this.sndSelectedFileQual
          // ));
          // console.log("formData", formData);
          // this.$router.push("/profile");
          // const userID = res.data.userId;
          // localStorage.setItem('userID', userID)
          // const testUserID = localStorage.getItem('userID')
          // console.log('trtttttttttttt', testUserID);
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          this.$toasted.error("Something went wrong, Refresh the Page.");
          console.log("Error in File Submition: ", err);
        });
      // }
    },
    selectedUserPhoto(e) {
      e.preventDefault();

      if (e.target.files[0].size > 5000000) {
        this.$toasted.error("File size must be smaller than 5 MB");
      } else {
        this.selectedPhoto = e.target.files[0];
        // console.log(this.istSelectedFileQual);

        // request for put request changing img
        var formData = new FormData();
        formData.append("idCard", this.selectedPhoto);
        const token = this.userToken;

        axios({
          method: "put",
          url: process.env.VUE_APP_SERVICE_URL + "IdCard/" + this.testUserID,
          data: formData,
          // imageFormData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            console.log("File Sended Response: ", res);
            // images data collection
            axios
              .get(
                process.env.VUE_APP_SERVICE_URL + "IdCard/" + this.testUserID,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              )
              .then((res) => {
                this.userProfileSelected = res.data.idCard;
                console.log("userProfileSelected", this.userProfileSelected);
                this.$toasted.success(
                  "File Uploaded: " + this.selectedPhoto.name
                );
                this.userData.idCard = this.userProfileSelected;
              })
              .catch((err) => {
                console.log("error", err);
                this.$toasted.error("Something went wrong, Refresh the Page.");
              });
          })
          .catch((err) => {
            console.log("error", err);
            this.$toasted.error("Something went wrong, Refresh the Page.");
          });

        // if (this.selectedPhoto.name.length < 10) {
        //   this.istSelectedFileQualName = this.selectedPhoto.name;
        // } else {
        //   const selectedFileFirst5ltr = this.selectedPhoto.name.substring(0, 5);
        //   const selectedFileLast5ltr = this.selectedPhoto.name.slice(-5);
        //   this.istSelectedFileQualName =
        //     selectedFileFirst5ltr + " ... " + selectedFileLast5ltr;
      }
    },

    // request for delete request delete img
    deleteUserImg(e) {
      console.log(e);
      const token = this.userToken;

      axios({
        method: "delete",
        url: process.env.VUE_APP_SERVICE_URL + "IdCard/" + this.testUserID,
        // data: {
        //   removeId: e.id,
        // },
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log("deleted file res", res);
          this.$toasted.success("Profile Img Deleted.");
          this.userData.idCard = "";
        })
        .catch((err) => {
          console.log("error", err);
          this.$toasted.error("Something went wrong, Refresh the Page.");
        });
    },
    deleteUserID(e) {
      console.log(e);
      const token = this.userToken;

      axios({
        method: "delete",
        url: process.env.VUE_APP_SERVICE_URL + "Passport/" + this.testUserID,
        // data: {
        //   removeId: e.id,
        // },
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log("deleted file res ID Card: ", res);
          this.$toasted.success("ID Card Deleted.");
          this.userData.passport = "";
        })
        .catch((err) => {
          this.$toasted.error("Something went wrong, Refresh the Page.");
          console.log("error", err);
        });
    },
    selectedGoverID(e) {
      if (e.target.files[0].size > 5000000) {
        this.$toasted.error("File size must be smaller than 5 MB");
      } else {
        this.selectedGovID = e.target.files[0];
        // console.log(this.sndSelectedFileQual);

        // request for put request changing governmentID
        var formData = new FormData();
        formData.append("passport", this.selectedGovID);
        const token = this.userToken;

        axios({
          method: "put",
          url: process.env.VUE_APP_SERVICE_URL + "Passport/" + this.testUserID,
          data: formData,
          // imageFormData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            console.log("File Sended Response: ", res);
            // images data collection
            axios
              .get(
                process.env.VUE_APP_SERVICE_URL + "Passport/" + this.testUserID,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              )
              .then((res) => {
                this.userIDSelected = res.data.passport;
                console.log("userIDSelected", this.userIDSelected);
                this.$toasted.success(
                  "File Uploaded: " + this.selectedGovID.name
                );
                this.userData.passport = this.userIDSelected;
              })
              .catch((err) => {
                this.$toasted.error("Something went wrong, Refresh the Page.");
                console.log("error", err);
              });
          })
          .catch((err) => {
            this.$toasted.error("Something went wrong, Refresh the Page.");
            console.log("error", err);
          });
        // request for delete request delete img

        // if (this.selectedGovID.name.length < 10) {
        //   this.licenceSelectedFileQualName = this.selectedGovID.name;
        // } else {
        //   const selectedFileFirst5ltr = this.selectedGovID.name.substring(0, 5);
        //   const selectedFileLast5ltr = this.selectedGovID.name.slice(-5);
        //   this.licenceSelectedFileQualName =
        //     selectedFileFirst5ltr + " ... " + selectedFileLast5ltr;
      }
    },
    // textFormat(text) {
    //   let istThing = text;
    //   // let sndThing = istThing.match(/[\+-x\]\w+[\+-x\*]+upload+[\+-x\*]/)
    //   let sndThing = istThing.replace(/.............................../, "");
    //   console.log("sndThing", sndThing);
    //   const selectedFileFirst5ltr = sndThing.substring(0, 5);
    //   const selectedFileLast5ltr = sndThing.slice(-5);
    //   this.licenceSelectedFileQualName =
    //     selectedFileFirst5ltr + " ... " + selectedFileLast5ltr;
    //   console.log(
    //     "licenceSelectedFileQualName",
    //     this.licenceSelectedFileQualName
    //   );
    // },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.dynamicImg img {
  width: 50px;
  height: 50px;
  margin-top: 10px;
  border-radius: 50px;
}
.dynamicImgTxt {
  margin-left: 10px;
}
.profileMainDiv {
  background-color: #f9c602;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.profileDiv {
  width: 50%;
  margin: 0 auto;
  padding-top: 100px;
  overflow: hidden;
}

.profileDiv h1 {
  text-align: center;
  font-weight: bold;
  /* font-family: nunito; */
  margin-bottom: 20px;
}
label {
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 0px;
  color: black;
}
.BuisInput {
  width: 100%;
  padding-left: 20px;
  height: 30px;
}
/* .profileDiv h5 {
  color: #096189;
  font-size: 17px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
}
.profileDiv h5 a {
  text-decoration: underline;
  color: #096189;
} */
.profileDiv h5 {
  color: black;
  font-size: 17px;
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 10px;
}
.profileDiv h5 a {
  text-decoration: underline;
  color: blue;
}

.guidReceive {
  font-size: 16px;
}
.guidReceive a {
  color: blue;
}
/* .guidReceive span {
  color: red;
  font-weight: bold;
} */
.guidReceive span {
  color: black;
}
.alignCenter {
  text-align: center;
}
.profileBtn {
  padding: 7px 40px;
  background-color: red;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  /* position: absolute;
  left: 50%;
  transform: translate(-50%, 0); */
  margin-top: 40px;
  margin-left: 10px;
  font-size: 20px;
}
.linkUs {
  margin-top: 70px;
  font-size: 16px;
  /* font-weight: bold; */
  margin-bottom: 10px;
}
.col-8 p {
  float: left;
  font-size: 17px;
}
.fileInput {
  text-align: start;
  background-color: white;
  border: 1px solid rgb(118, 118, 118);
  width: 92%;
  padding: 0px 20px;
  padding-top: 5px;
}
.fileInput::after {
  content: url("../assets/img/uploadImg.png");
  position: relative;
  left: 12px;
  float: right;
}
.fileInputt {
  text-align: start;
  background-color: white;
  border: 1px solid rgb(118, 118, 118);
  width: 100%;
  padding: 0px 20px;
  padding-top: 5px;
}
.fileInputt::after {
  content: url("../assets/img/uploadImg.png");
  position: relative;
  left: 12px;
  float: right;
}
.UserProfileDelete {
  max-width: 20px;
  max-height: 20px;
  position: relative;
  top: -20px;
  left: -5px;
  cursor: pointer;
}
#fileInputNWritten{
  display: none;
}
.UserIDDelete {
  max-width: 20px;
  max-height: 20px;
  position: relative;
  /* top: -20px; */
  left: 15px;
  cursor: pointer;
}
@media (max-width: 1200px) {
  .profileDiv {
    width: 90%;
  }
}
@media (max-width: 570px) {
#fileInputWritten{
  display: none;
}
#fileInputNWritten{
  display: initial;
}
}
@media (max-width: 540px) {
  .profileDiv h1 {
    font-size: 33px;
  }
  label{
    font-size: 15px;
  }
}
@media (max-width: 500px) {
  .profileDiv {
    padding-top: 20px;
  }
  .profileDiv h1 {
    font-size: 27px;
    text-align: start;
  }
  .bottomLinks {
    position: absolute;
    bottom: 5%;
  }
  .col-8 p {
    margin-left: 20px;
  }
  .bottomLinkSec {
    position: relative;
    left: 100px;
  }
}
@media (max-width: 435px) {
  .profileDiv h1 {
    font-size: 24px;
  }
  .IDCardPDiv {
    margin-left: -10px;
  }
  .fileInput{
    width: 90%;
  }
  .fileInputt{
    width: 200px;
  }
  .IDCardPDiv label{
    margin-top: 22px;
    font-size: 14px;
  }
}
@media (max-width: 420px) {
  .bottomLinkSec {
    position: relative;
    left: 50px;
  }
  .profileDiv h1 {
    font-size: 23px;
  }
}
@media (max-width: 404px) {
  .IDCardPDiv label{
    font-size: 13px !important;
  }
  .fileInputt {
    width: 180px;
  }
  .viewDocTxt {
    font-size: 13px;
  }
  .profileDiv h1 {
    font-size: 22px;
  }
  .fileUpload {
    font-size: 12px;
  }
  label {
    margin-bottom: 5px;
    font-size: 15px;
  }
}
@media (max-width: 397px) {
  .profileDiv h1 {
    font-size: 21px !important;
  }
}
@media (max-width: 395px) {
  .fileInputt {
    font-size: 13px;
    background-color: white;
    padding: 0px 10px;
    padding-top: 5px;
    width: 180px;
  }
  .fileInputt::after {
    content: url("../assets/img/uploadImg.png");
    position: relative;
    left: 0px;
    float: right;
  }
  .viewDocTxt {
    font-size: 12px;
  }
  .UserIDDelete {
    max-width: 15px;
    max-height: 15px;
  }
  .IDCardPDiv label{
    margin-top: 23px !important;
  }
}
@media (max-width: 375px) {
  .profileDiv h1 {
    font-size: 20px;
    font-family: Georgia, "Times New Roman", Times, serif;
  }
  .IDCardPDiv label{
    margin-top: 24px !important;
    font-size: 12px !important;
  }
}
@media (max-width: 367px) {
  .bottomLinkSec {
    position: relative;
    left: 30px;
  }
  .profileDiv h5 {
    font-size: 15px;
  }
}
@media (max-width: 360px) {
  .profileDiv h1 {
    font-size: 19px;
    text-align: start;
  }
}
@media (max-width: 346px) {
  .bottomLinkSec {
    left: 20px;
  }
  .IDCardPDiv label{
    margin-top: 26px !important;
    font-size: 11px !important;
  }
}
@media (max-width: 330px) {
  .profileDiv h1 {
    font-size: 21px;
  }
  .bottomLinkSec {
    left: 10px;
  }
}
@media (min-height: 670px) and (max-height: 800px) {
  .profileDiv {
    padding-top: 30px;
  }
  .guidReceive {
    font-size: 15px;
  }
}
@media (max-height: 670px) {
  .profileDiv {
    padding-top: 20px;
  }
  .profileDiv h1 {
    /* font-size: 22px; */
    margin-bottom: 10px;
  }
  .guidReceive {
    font-size: 15px;
  }
}
@media (max-height: 660px) {
  .guidReceive {
    font-size: 13px;
  }
  .profileDiv h5 {
    font-size: 12px;
  }

  .profileBtn {
    font-size: 16px;
    padding: 6px 40px;
  }
}
</style>