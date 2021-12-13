<template>
  <div class="settingMediator">
    <div class="wholeImgBlur" v-if="imgBigger == true" @click="crossBiggerImg">
      .
    </div>
    <h1 data-aos="fade-right">Setting up your Mediator Profile</h1>
    <p data-aos="fade-right">
      Give confidence to you future customers by providing as much information
      about your services and experience.
      <span
        >The more info you provide the higher your trust score will be.</span
      >
    </p>
    <div data-aos="fade-left">
      <div class="row">
        <div class="col-6 profileForm">
          <h6>Country</h6>

          <select
            @change="handleChangeCountry"
            class="form-select form-control"
          >
            <option v-if="userData.country === ''" selected disabled>
              Please select
            </option>
            <option v-else selected>{{ userData.country }}</option>
            <option
              v-for="(country, index) in formatedCountry_list"
              :key="index"
              :value="country"
            >
              {{ country }}
            </option>
          </select>
        </div>
        <div class="col-6 profileForm">
          <h6>City</h6>
          <input
            v-if="userData.city === ''"
            class="FacebookPageInput"
            type="text"
            placeholder="Enter your City here ..."
            ref="userCityRef"
            style="border-radius: 3px"
          /><input
            v-else
            class="FacebookPageInput"
            type="text"
            :value="userData.city"
            placeholder="Enter your City here ..."
            ref="userCityRef"
            style="border-radius: 3px"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-6 profileForm">
          <h6>language</h6>
          <Multiselect
            class="example5"
            :multiple="true"
            v-model="example5.value"
            v-bind="example5"
          ></Multiselect>
        </div>
        <div class="col-6 profileForm">
          <h6>
            Industry<span
              ><button class="otherInd" @click="addOtherInd()">
                Other <span style="position: relative; top: 2px">＋</span>
              </button></span
            >
          </h6>
          <Multiselect
            v-if="!othersIndustrySlctd"
            class="example6"
            :multiple="true"
            v-model="example6.value"
            v-bind="example6"
          ></Multiselect>
          <div v-else>
            <input
              class="FacebookPageInput"
              type="text"
              title="Press ✅ to add"
              placeholder="Other industry"
              v-model="otherIndSlc"
            />
            <span
              class="othersIndustrySlctdCross2"
              @click="othersIndustrySlctd = false"
              >❌</span
            >
            <span
              class="othersIndustrySlctdCross"
              @click="selectedOtherIndustry()"
              >✅</span
            >
          </div>
        </div>
      </div>
      <div class="profileForm" style="width: 106%">
        <h6>Enter Your FaceBook Page</h6>
        <input
          v-if="userData.facebookLink === ''"
          class="FacebookPageInput"
          type="text"
          placeholder="Enter your Facebook page link here ..."
          ref="facebookRef"
        /><input
          v-else
          class="FacebookPageInput"
          type="text"
          :value="userData.facebookLink"
          placeholder="Enter your Facebook page link here ..."
          ref="facebookRef"
        />
      </div>
      <div class="profileForm" style="width: 106%">
        <h6>Phone Number <small style="color:black;">(Required)</small></h6>
        <!-- v-if="userData.phone === '' && numbWithContryCode === true" -->
        <input
          v-if="userData.phone === '' && numbWithContryCode === false"
          class="FacebookPageInput PhoneFeild"
          type="tel"
          value="Enter your Phone Number ..."
          placeholder="Enter your Phone Number ..."
          ref="userPhoneNumber"
        /><input
          v-if="userData.phone != '' && numbWithContryCode === false"
          class="FacebookPageInput PhoneFeild"
          type="tel"
          :value="userData.phone"
          :placeholder="userData.phone"
          ref="userPhoneNumber"
        /><input
          v-if="numbWithContryCode === true"
          class="FacebookPageInput PhoneFeild"
          type="tel"
          :placeholder="userData.phone"
          v-model="userPhoneNumberr"
        />
      </div>
      <!-- <span class="gapGap"><br /></span> -->
      <span class="qualificationSpan">Qualifications</span>
      <p class="qualificationPara">
        If you have qualifications or degree upload here:
        <!-- <small style="text-align: center">(png, jpg, jpeg, pdf) </small> -->
      </p>
      <div v-if="imgBigger == true" class="imgBiggerDiv">
        <span class="crossBiggerImg" @click="crossBiggerImg">
          <img src="../assets/img/crossImg.png" alt="crossIcon" />
        </span>
        <img
          v-if="selectedFileISIMG === true"
          :src="imgBiggerURL.url"
          alt=""
          class="biggImgFull"
        />
        <iframe
          class="iframeImgBigger"
          v-else
          :src="imgBiggerURL.url"
          width="90%"
          height="80%"
        ></iframe>
      </div>
      <input
        type="file"
        class="chooseFile"
        @change="onFileSelectedQualification"
        style="display: none"
        ref="fileInput"
        accept="image/x-png,image/jpeg,image/jpg, application/pdf"
      />
      <button v-if="fileSelectionLoading" class="fileInput">
        <img src="../assets/img/loading.gif" width="20px" alt="" />
        <p
          style="
            font-size: 11px;
            position: absolute;
            color: black;
          "
        >
          {{ this.imgProgress }}
        </p>
      </button>
      <button v-if="userDocuments.length === 3" style="display: none"></button>

      <button
        v-if="userDocuments.length < 3 && fileSelectionLoading === false"
        @click="$refs.fileInput.click()"
        class="fileInput"
      >
        +
      </button>
      <li
        v-for="(oneFile, index) in userDocuments"
        :key="index"
        style="display: inline"
      >
        <span class="DeleteIcon"
          ><img
            @click="deleteFile(oneFile)"
            src="../assets/img/deleteIcon.png"
            alt="deleteIcon"
            width="20px"
            style="cursor: pointer"
        /></span>
        <!-- alt= "📕📁📖" -->
        <img
          :src="oneFile.url"
          alt="📖"
          onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg'"
          width="50px"
          height="50px"
          style="margin-top: -3px; border-radius: 1px; cursor: pointer"
          @click="myImgFunction(oneFile)"
        />
        <!-- <span> + </span> -->
      </li>

      <p class="alignCenter">
        <button v-if="!loading" class="profileBtn" @click="handleContinue()">
          Continue
        </button>
        <button v-else class="profileBtn">
          <img
            src="@/assets/img/loading.gif"
            style="vertical-align: sub; width: 17px"
          />
          <span class="loading-text" style="color: white">Loading...</span>
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import Multiselect from "vue-multiselect";
import axios from "axios";
export default {
  name: "mediation",
  components: {
    Multiselect,
    // vueCountrySelect
    // "vue-country-select": require("vue-country-select")
    // VueUploadMultipleImage,
  },
  data() {
    return {
      countryName: "",
      fileSelectionLoading: false,
      imgProgress: "",
      numbWithContryCode: false,
      userPhonNumb: "",
      phoneNumbUser: "",
      countryCodeRegex: "",
      userPhoneNumberr: "",
      othersIndustrySlctd: false,
      example5: {
        mode: "tags",
        value: [],
        // value: ['English'],
        closeOnSelect: false,
        options: [
          "English",
          "Mandarin",
          "Spanish",
          "Arabic",
          "Malay",
          "Russian",
          "Bengali",
        ],
        searchable: true,
        createTag: true,
      },
      example6: {
        mode: "tags",
        value: [],
        // value: ['English'],
        closeOnSelect: false,
        options: [
          "Production",
          "Trade",
          "Finance",
          "Investment",
          "Research",
          "Technology",
          "Agriculture",
          "Construction",
          "Transport",
          "Education",
          "Health",
          "Food",
          "Economics",
          "Mining",
          "Bank",
          "International Trade",
          "Retail",
          "Financial services",
          "Telecommunications",
          "Infrastructure",
          "Health care",
          "Science",
          "Insurance",
          "Computer",
          "Computers and Information",
          "Information Technology",
          "Communication",
          "Natural",
          "Natural resource",
          "Electric City",
          "Gas",
          "Steel",
          "Accounting",
          "Coal",
          "Oil",
          "Automotive industry",
          "Industry",
          "Artifical intelligence",
          "Artifical",
          "Intelligence",
          "Private",
          "Software",
          "Hardware",
          "Marketing",
          "Engineering",
          "Internet",
          "Petroleum industry",
          "Food industry",
          "Forestry",
          "Research",
          "Development",
          "Research and Development",
          "Law",
          "Credit",
          "Rail Transport",
          "Airlines",
          "Stock Exchange",
          "Media",
          "Social Media",
          "Distribution",
          "Libortary",
          "Doctor",
          "Hospital",
          "Electronics",
          "Publishing",
          "News",
          "Sustainability",
          "Chemistry",
          "Physics",
          "Math",
          "Scientist",
          "Others",
        ],
        searchable: true,
        createTag: true,
      },
      cityName: "",
      otherIndSlc: "",
      languageName: "",
      IndustryName: "",
      UserFacebookLink: "",
      UserPhoneNumb: "",
      istSelectedFileQual: "",
      sndSelectedFileQual: "",
      istSelectedFileQualName: "",
      sndSelectedFileQualName: "",
      testUserID: "",
      userData: {},
      imageFormData: "",
      AllImageFiles: "",
      firstImageQualification: "",
      secondImageQualification: "",
      thirdImageQualification: "",
      fourthImageQualification: "",
      fifthImageQualification: "",
      sixthImageQualification: "",
      seventhImageQualification: "",
      countryShortName: "",
      othersIndustry: false,
      userDocuments: "",
      userToken: "",
      loading: false,
      formatedCountry_list: [],
      country_list: [
        {
          code: "+7 840",
          name: "Abkhazia",
        },
        {
          code: "+93",
          name: "Afghanistan",
        },
        {
          code: "+355",
          name: "Albania",
        },
        {
          code: "+213",
          name: "Algeria",
        },
        {
          code: "+1 684",
          name: "American Samoa",
        },
        {
          code: "+376",
          name: "Andorra",
        },
        {
          code: "+244",
          name: "Angola",
        },
        {
          code: "+1 264",
          name: "Anguilla",
        },
        {
          code: "+1 268",
          name: "Antigua and Barbuda",
        },
        {
          code: "+54",
          name: "Argentina",
        },
        {
          code: "+374",
          name: "Armenia",
        },
        {
          code: "+297",
          name: "Aruba",
        },
        {
          code: "+247",
          name: "Ascension",
        },
        {
          code: "+61",
          name: "Australia",
        },
        {
          code: "+672",
          name: "Australian External Territories",
        },
        {
          code: "+43",
          name: "Austria",
        },
        {
          code: "+994",
          name: "Azerbaijan",
        },
        {
          code: "+1 242",
          name: "Bahamas",
        },
        {
          code: "+973",
          name: "Bahrain",
        },
        {
          code: "+880",
          name: "Bangladesh",
        },
        {
          code: "+1 246",
          name: "Barbados",
        },
        {
          code: "+1 268",
          name: "Barbuda",
        },
        {
          code: "+375",
          name: "Belarus",
        },
        {
          code: "+32",
          name: "Belgium",
        },
        {
          code: "+501",
          name: "Belize",
        },
        {
          code: "+229",
          name: "Benin",
        },
        {
          code: "+1 441",
          name: "Bermuda",
        },
        {
          code: "+975",
          name: "Bhutan",
        },
        {
          code: "+591",
          name: "Bolivia",
        },
        {
          code: "+387",
          name: "Bosnia and Herzegovina",
        },
        {
          code: "+267",
          name: "Botswana",
        },
        {
          code: "+55",
          name: "Brazil",
        },
        {
          code: "+246",
          name: "British Indian Ocean Territory",
        },
        {
          code: "+1 284",
          name: "British Virgin Islands",
        },
        {
          code: "+673",
          name: "Brunei",
        },
        {
          code: "+359",
          name: "Bulgaria",
        },
        {
          code: "+226",
          name: "Burkina Faso",
        },
        {
          code: "+257",
          name: "Burundi",
        },
        {
          code: "+855",
          name: "Cambodia",
        },
        {
          code: "+237",
          name: "Cameroon",
        },
        {
          code: "+1",
          name: "Canada",
        },
        {
          code: "+238",
          name: "Cape Verde",
        },
        {
          code: "+ 345",
          name: "Cayman Islands",
        },
        {
          code: "+236",
          name: "Central African Republic",
        },
        {
          code: "+235",
          name: "Chad",
        },
        {
          code: "+56",
          name: "Chile",
        },
        {
          code: "+86",
          name: "China",
        },
        {
          code: "+61",
          name: "Christmas Island",
        },
        {
          code: "+61",
          name: "Cocos-Keeling Islands",
        },
        {
          code: "+57",
          name: "Colombia",
        },
        {
          code: "+269",
          name: "Comoros",
        },
        {
          code: "+242",
          name: "Congo",
        },
        {
          code: "+243",
          name: "Congo, Dem. Rep. of (Zaire)",
        },
        {
          code: "+682",
          name: "Cook Islands",
        },
        {
          code: "+506",
          name: "Costa Rica",
        },
        {
          code: "+385",
          name: "Croatia",
        },
        {
          code: "+53",
          name: "Cuba",
        },
        {
          code: "+599",
          name: "Curacao",
        },
        {
          code: "+537",
          name: "Cyprus",
        },
        {
          code: "+420",
          name: "Czech Republic",
        },
        {
          code: "+45",
          name: "Denmark",
        },
        {
          code: "+246",
          name: "Diego Garcia",
        },
        {
          code: "+253",
          name: "Djibouti",
        },
        {
          code: "+1 767",
          name: "Dominica",
        },
        {
          code: "+1 809",
          name: "Dominican Republic",
        },
        {
          code: "+670",
          name: "East Timor",
        },
        {
          code: "+56",
          name: "Easter Island",
        },
        {
          code: "+593",
          name: "Ecuador",
        },
        {
          code: "+20",
          name: "Egypt",
        },
        {
          code: "+503",
          name: "El Salvador",
        },
        {
          code: "+240",
          name: "Equatorial Guinea",
        },
        {
          code: "+291",
          name: "Eritrea",
        },
        {
          code: "+372",
          name: "Estonia",
        },
        {
          code: "+251",
          name: "Ethiopia",
        },
        {
          code: "+500",
          name: "Falkland Islands",
        },
        {
          code: "+298",
          name: "Faroe Islands",
        },
        {
          code: "+679",
          name: "Fiji",
        },
        {
          code: "+358",
          name: "Finland",
        },
        {
          code: "+33",
          name: "France",
        },
        {
          code: "+596",
          name: "French Antilles",
        },
        {
          code: "+594",
          name: "French Guiana",
        },
        {
          code: "+689",
          name: "French Polynesia",
        },
        {
          code: "+241",
          name: "Gabon",
        },
        {
          code: "+220",
          name: "Gambia",
        },
        {
          code: "+995",
          name: "Georgia",
        },
        {
          code: "+49",
          name: "Germany",
        },
        {
          code: "+233",
          name: "Ghana",
        },
        {
          code: "+350",
          name: "Gibraltar",
        },
        {
          code: "+30",
          name: "Greece",
        },
        {
          code: "+299",
          name: "Greenland",
        },
        {
          code: "+1 473",
          name: "Grenada",
        },
        {
          code: "+590",
          name: "Guadeloupe",
        },
        {
          code: "+1 671",
          name: "Guam",
        },
        {
          code: "+502",
          name: "Guatemala",
        },
        {
          code: "+224",
          name: "Guinea",
        },
        {
          code: "+245",
          name: "Guinea-Bissau",
        },
        {
          code: "+595",
          name: "Guyana",
        },
        {
          code: "+509",
          name: "Haiti",
        },
        {
          code: "+504",
          name: "Honduras",
        },
        {
          code: "+852",
          name: "Hong Kong SAR China",
        },
        {
          code: "+36",
          name: "Hungary",
        },
        {
          code: "+354",
          name: "Iceland",
        },
        {
          code: "+91",
          name: "India",
        },
        {
          code: "+62",
          name: "Indonesia",
        },
        {
          code: "+98",
          name: "Iran",
        },
        {
          code: "+964",
          name: "Iraq",
        },
        {
          code: "+353",
          name: "Ireland",
        },
        {
          code: "+972",
          name: "Israel",
        },
        {
          code: "+39",
          name: "Italy",
        },
        {
          code: "+225",
          name: "Ivory Coast",
        },
        {
          code: "+1 876",
          name: "Jamaica",
        },
        {
          code: "+81",
          name: "Japan",
        },
        {
          code: "+962",
          name: "Jordan",
        },
        {
          code: "+7 7",
          name: "Kazakhstan",
        },
        {
          code: "+254",
          name: "Kenya",
        },
        {
          code: "+686",
          name: "Kiribati",
        },
        {
          code: "+965",
          name: "Kuwait",
        },
        {
          code: "+996",
          name: "Kyrgyzstan",
        },
        {
          code: "+856",
          name: "Laos",
        },
        {
          code: "+371",
          name: "Latvia",
        },
        {
          code: "+961",
          name: "Lebanon",
        },
        {
          code: "+266",
          name: "Lesotho",
        },
        {
          code: "+231",
          name: "Liberia",
        },
        {
          code: "+218",
          name: "Libya",
        },
        {
          code: "+423",
          name: "Liechtenstein",
        },
        {
          code: "+370",
          name: "Lithuania",
        },
        {
          code: "+352",
          name: "Luxembourg",
        },
        {
          code: "+853",
          name: "Macau SAR China",
        },
        {
          code: "+389",
          name: "Macedonia",
        },
        {
          code: "+261",
          name: "Madagascar",
        },
        {
          code: "+265",
          name: "Malawi",
        },
        {
          code: "+60",
          name: "Malaysia",
        },
        {
          code: "+960",
          name: "Maldives",
        },
        {
          code: "+223",
          name: "Mali",
        },
        {
          code: "+356",
          name: "Malta",
        },
        {
          code: "+692",
          name: "Marshall Islands",
        },
        {
          code: "+596",
          name: "Martinique",
        },
        {
          code: "+222",
          name: "Mauritania",
        },
        {
          code: "+230",
          name: "Mauritius",
        },
        {
          code: "+262",
          name: "Mayotte",
        },
        {
          code: "+52",
          name: "Mexico",
        },
        {
          code: "+691",
          name: "Micronesia",
        },
        {
          code: "+1 808",
          name: "Midway Island",
        },
        {
          code: "+373",
          name: "Moldova",
        },
        {
          code: "+377",
          name: "Monaco",
        },
        {
          code: "+976",
          name: "Mongolia",
        },
        {
          code: "+382",
          name: "Montenegro",
        },
        {
          code: "+1664",
          name: "Montserrat",
        },
        {
          code: "+212",
          name: "Morocco",
        },
        {
          code: "+95",
          name: "Myanmar",
        },
        {
          code: "+264",
          name: "Namibia",
        },
        {
          code: "+674",
          name: "Nauru",
        },
        {
          code: "+977",
          name: "Nepal",
        },
        {
          code: "+31",
          name: "Netherlands",
        },
        {
          code: "+599",
          name: "Netherlands Antilles",
        },
        {
          code: "+1 869",
          name: "Nevis",
        },
        {
          code: "+687",
          name: "New Caledonia",
        },
        {
          code: "+64",
          name: "New Zealand",
        },
        {
          code: "+505",
          name: "Nicaragua",
        },
        {
          code: "+227",
          name: "Niger",
        },
        {
          code: "+234",
          name: "Nigeria",
        },
        {
          code: "+683",
          name: "Niue",
        },
        {
          code: "+672",
          name: "Norfolk Island",
        },
        {
          code: "+850",
          name: "North Korea",
        },
        {
          code: "+1 670",
          name: "Northern Mariana Islands",
        },
        {
          code: "+47",
          name: "Norway",
        },
        {
          code: "+968",
          name: "Oman",
        },
        {
          code: "+92",
          name: "Pakistan",
        },
        {
          code: "+680",
          name: "Palau",
        },
        {
          code: "+970",
          name: "Palestinian Territory",
        },
        {
          code: "+507",
          name: "Panama",
        },
        {
          code: "+675",
          name: "Papua New Guinea",
        },
        {
          code: "+595",
          name: "Paraguay",
        },
        {
          code: "+51",
          name: "Peru",
        },
        {
          code: "+63",
          name: "Philippines",
        },
        {
          code: "+48",
          name: "Poland",
        },
        {
          code: "+351",
          name: "Portugal",
        },
        {
          code: "+1 787",
          name: "Puerto Rico",
        },
        {
          code: "+974",
          name: "Qatar",
        },
        {
          code: "+262",
          name: "Reunion",
        },
        {
          code: "+40",
          name: "Romania",
        },
        {
          code: "+7",
          name: "Russia",
        },
        {
          code: "+250",
          name: "Rwanda",
        },
        {
          code: "+685",
          name: "Samoa",
        },
        {
          code: "+378",
          name: "San Marino",
        },
        {
          code: "+966",
          name: "Saudi Arabia",
        },
        {
          code: "+221",
          name: "Senegal",
        },
        {
          code: "+381",
          name: "Serbia",
        },
        {
          code: "+248",
          name: "Seychelles",
        },
        {
          code: "+232",
          name: "Sierra Leone",
        },
        {
          code: "+65",
          name: "Singapore",
        },
        {
          code: "+421",
          name: "Slovakia",
        },
        {
          code: "+386",
          name: "Slovenia",
        },
        {
          code: "+677",
          name: "Solomon Islands",
        },
        {
          code: "+27",
          name: "South Africa",
        },
        {
          code: "+500",
          name: "South Georgia and the South Sandwich Islands",
        },
        {
          code: "+82",
          name: "South Korea",
        },
        {
          code: "+34",
          name: "Spain",
        },
        {
          code: "+94",
          name: "Sri Lanka",
        },
        {
          code: "+249",
          name: "Sudan",
        },
        {
          code: "+597",
          name: "Suriname",
        },
        {
          code: "+268",
          name: "Swaziland",
        },
        {
          code: "+46",
          name: "Sweden",
        },
        {
          code: "+41",
          name: "Switzerland",
        },
        {
          code: "+963",
          name: "Syria",
        },
        {
          code: "+886",
          name: "Taiwan",
        },
        {
          code: "+992",
          name: "Tajikistan",
        },
        {
          code: "+255",
          name: "Tanzania",
        },
        {
          code: "+66",
          name: "Thailand",
        },
        {
          code: "+670",
          name: "Timor Leste",
        },
        {
          code: "+228",
          name: "Togo",
        },
        {
          code: "+690",
          name: "Tokelau",
        },
        {
          code: "+676",
          name: "Tonga",
        },
        {
          code: "+1 868",
          name: "Trinidad and Tobago",
        },
        {
          code: "+216",
          name: "Tunisia",
        },
        {
          code: "+90",
          name: "Turkey",
        },
        {
          code: "+993",
          name: "Turkmenistan",
        },
        {
          code: "+1 649",
          name: "Turks and Caicos Islands",
        },
        {
          code: "+688",
          name: "Tuvalu",
        },
        {
          code: "+1 340",
          name: "U.S. Virgin Islands",
        },
        {
          code: "+256",
          name: "Uganda",
        },
        {
          code: "+380",
          name: "Ukraine",
        },
        {
          code: "+971",
          name: "United Arab Emirates",
        },
        {
          code: "+44",
          name: "United Kingdom",
        },
        {
          code: "+1",
          name: "United States",
        },
        {
          code: "+598",
          name: "Uruguay",
        },
        {
          code: "+998",
          name: "Uzbekistan",
        },
        {
          code: "+678",
          name: "Vanuatu",
        },
        {
          code: "+58",
          name: "Venezuela",
        },
        {
          code: "+84",
          name: "Vietnam",
        },
        {
          code: "+1 808",
          name: "Wake Island",
        },
        {
          code: "+681",
          name: "Wallis and Futuna",
        },
        {
          code: "+967",
          name: "Yemen",
        },
        {
          code: "+260",
          name: "Zambia",
        },
        {
          code: "+255",
          name: "Zanzibar",
        },
        {
          code: "+263",
          name: "Zimbabwe",
        },
      ],
      imgBigger: false,
      imgBiggerURL: "",
      selectedFileISIMG: true,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      offset: 100,
    });

    this.userToken = localStorage.getItem("UserToken");
    console.log("uesrToken", this.userToken);
    this.testUserID = localStorage.getItem("userID");
    console.log("User ID: ", this.testUserID);
    const token = this.userToken;
    axios
      .get(process.env.VUE_APP_SERVICE_URL + "User/" + this.testUserID, {
        headers: {
          // "Content-Type": "multipart/form-data",
          // "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        this.userData = res.data.user;
        console.log("UserData", this.userData);
        this.example5.value = this.userData.language.lang;
        this.example6.value = this.userData.industry.ind;
      })
      .catch((err) => {
        this.$toasted.error("Something went wrong, Refresh the Page.");
        console.log("error", err);
      });

    // images data collection
    axios
      .get(process.env.VUE_APP_SERVICE_URL + "Documents/" + this.testUserID, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        this.userDocuments = res.data.documents;
        console.log("userDocuments", this.userDocuments);
      })
      .catch((err) => {
        this.$toasted.error("Something went wrong, Refresh the Page.");
        console.log("error", err);
      });

    this.country_list.forEach(this.myfnc);
  },
  methods: {
    myfnc(e) {
      const countryCOde = e.code;
      const countryName = e.name;
      const fullContCode = countryName + " ? " + countryCOde + "°";
      const fullFormatedContryCode = fullContCode.slice(0, -1);
      const hhh = fullFormatedContryCode.replace("?", "");
      this.formatedCountry_list.push(hhh);

      // const countryCOde = e.code;
      // const countryName = e.name;
      // const fullContCode = countryName + " ° " + countryCOde + " ° ";
      // this.formatedCountry_list.push(fullContCode);
    },
    addOtherInd() {
      this.othersIndustrySlctd = true;
    },
    selectedOtherIndustry() {
      if (this.otherIndSlc === "") {
        this.othersIndustrySlctd = false;
      } else {
        this.example6.value.push(this.otherIndSlc);
        this.othersIndustrySlctd = false;
      }
      // this.othersIndustrySlctd = true
    },
    deleteFile(e) {
      console.log(e);
      const token = this.userToken;

      axios({
        method: "delete",
        url: process.env.VUE_APP_SERVICE_URL + "Documents/" + this.testUserID,
        data: {
          removeId: e.id,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          this.userDocuments = res.data.documents;
          console.log("userDocumentsAfterDeleted", this.userDocuments);
        })
        .catch((err) => {
          this.$toasted.error("Something went wrong, Refresh the Page.");
          console.log("error", err);
        });
    },
    myImgFunction(e) {
      this.imgBigger = true;
      this.imgBiggerURL = e;
      console.log("urllurlurlurl", this.imgBiggerURL);
      if (e.url.match(/.pdf/g)) {
        console.log("helllo");
        this.selectedFileISIMG = false;
      } else {
        this.selectedFileISIMG = true;
      }
    },
    crossBiggerImg() {
      this.imgBigger = false;
    },
    handleChangeCountry(e) {
      // this.countryName = e.target.value;
      // console.log(this.countryName);
      // // this.countryCodeRegex = this.countryName.match(/(?<=-).*?(?=-)/);
      // this.countryCodeRegex = this.countryName.match(/(?<=°).*?(?=°)/);
      // // this.countryCodeRegex = this.countryName.match(/-(.*)-/);
      // console.log("this.countryCodeRegex,", this.countryCodeRegex[0]);
      // this.$refs.userPhoneNumber.value = this.countryCodeRegex[0];

      this.numbWithContryCode = true;
      this.countryName = e.target.value;

      this.countryCodeRegex = this.countryName.match(/(?=\+).*/);

      console.log("this.$refs.userPhoneNumberr.value", this.userPhoneNumberr);
      this.userPhoneNumberr = this.countryCodeRegex[0] + " ";
    },
    async onFileSelectedQualification(e) {
      // console.log("event", e.target.files);
      // this.AllImageFiles = e.target.files;

      if (e.target.files[0].size > 5000000) {
        this.$toasted.error("File size must be smaller than 5 MB");
      } else {
        this.fileSelectionLoading = true;
        console.log("Selected Image File: ", e.target.files[0]);
        this.istSelectedFileQual = e.target.files[0];

        // requests for sending this selected file
        var formData = new FormData();
        formData.append("documents", this.istSelectedFileQual);
        const token = this.userToken;

        await axios({
          method: "put",
          url: process.env.VUE_APP_SERVICE_URL + "Documents/" + this.testUserID,
          data: formData,
          onUploadProgress: (uploadEvent) => {
            this.imgProgress =
              Math.round((uploadEvent.loaded / uploadEvent.total) * 100) + "%";
          },
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
                process.env.VUE_APP_SERVICE_URL +
                  "Documents/" +
                  this.testUserID,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              )
              .then((res) => {
                this.userDocuments = res.data.documents;
                console.log("userDocuments", this.userDocuments);
                this.$toasted.success("File Selected");
                this.fileSelectionLoading = false;
              })
              .catch((err) => {
                this.$toasted.error("Cannot able to attach this file.");
                console.log("error", err);
                this.fileSelectionLoading = false;
              });
          })
          .catch((err) => {
            this.$toasted.error("Cannot able to attach this file.");
            console.log("error", err);
            this.fileSelectionLoading = false;
          });
      }
      // Formate of the selected file
      if (this.istSelectedFileQual.name.length < 10) {
        this.istSelectedFileQualName = this.istSelectedFileQual.name;
      } else {
        const selectedFileFirst5ltr = this.istSelectedFileQual.name.substring(
          0,
          5
        );
        const selectedFileLast5ltr = this.istSelectedFileQual.name.slice(-5);
        this.istSelectedFileQualName =
          selectedFileFirst5ltr + " ... " + selectedFileLast5ltr;
      }
    },
    async handleContinue() {
      if (this.countryName === "") {
        if (this.userData.country != "") {
          this.countryName = this.userData.country;
        } else {
          // this.$toasted.error("Invalid Country");
        }
      }

      if (this.cityName === "") {
        if (this.userData.city != "") {
          this.cityName = this.userData.city;
        } else {
          // this.$toasted.error("Invalid City");
        }
      }
      if (this.example5.value === undefined) {
        console.log("this.example5.value undefined");
      } else {
        if (this.example5.value.length === 0) {
          if (this.userData.language.length != 0) {
            this.example5.value = this.userData.language.lang;
            console.log("1212121212121", this.example5.value);
          } else {
            console.log("3");
            // this.$toasted.error("Invalid Language");
          }
        }
      }
      console.log(this.example6.value);
      if (this.example6.value === undefined) {
        console.log("undefined");
      } else {
        if (this.example6.value.length === 0) {
          if (this.userData.industry.length != 0) {
            this.example6.value = this.userData.industry.ind;
            console.log("2121222121212221", this.example6.value);
          } else {
            console.log("3");
            // this.$toasted.error("Invalid Language");
          }
        }
      }

      // if (this.IndustryName === "") {
      //   if (this.userData.industry != "") {
      //     this.IndustryName = this.userData.industry;
      //   } else {
      //     // this.$toasted.error("Invalid Industry");
      //   }
      // }

      if (this.numbWithContryCode === false) {
        if (this.$refs.userPhoneNumber.value.length < 9) {
          this.$toasted.error("Invalid Phone Number");
        } else {
          this.userPhonNumb = this.$refs.userPhoneNumber.value;
          this.phoneNumbUser = this.$refs.userPhoneNumber.value;
        }
      } else {
        if (this.userPhoneNumberr.length < 9) {
          this.$toasted.error("Invalid Phone Number");
        } else {
          this.userPhonNumb = this.userPhoneNumberr;
          this.phoneNumbUser = this.userPhoneNumberr;
        }
      }
      if (this.phoneNumbUser.length >= 9) {
        const PhoneVerification = this.phoneNumbUser.match(/[a-z]*/gm);
        if (PhoneVerification[0] != "") {
          this.$toasted.error("Invalid Phone Number");
        } else if (this.phoneNumbUser != "") {
          const token = this.userToken;

          if (this.othersIndustry === false) {
            this.IndustryName;
          } else if (this.othersIndustry === true) {
            this.IndustryName = this.$refs.industryRef.value;
          }

          this.loading = true;
          await axios({
            method: "put",
            url: process.env.VUE_APP_SERVICE_URL + "Profile/" + this.testUserID,
            data: {
              phone: this.userPhonNumb,
              city: this.$refs.userCityRef.value,
              country: this.countryName,
              language: this.example5.value,
              industry: this.example6.value,
              // industry: this.IndustryName,
              facebookLink: this.$refs.facebookRef.value,
            },
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
            .then((res) => {
              console.log(res);
              this.$toasted.success("Successfully Updated");
              this.$router.push("/receivePayment");
              this.loading = false;
            })
            .catch((err) => {
              this.$toasted.error("Something went wrong, Refresh the Page.");
              console.log("eerrrooor", err);
              this.loading = false;
            });
        }
      }
    },
    handleChangeCity(e) {
      if (e.target.options.selectedIndex > -1) {
        this.cityName =
          e.target.options[e.target.options.selectedIndex].dataset.foo;
      }
    },
    handleChangeLanguage(e) {
      if (e.target.options.selectedIndex > -1) {
        this.languageName =
          e.target.options[e.target.options.selectedIndex].dataset.foo;
      }
    },
    handleChangeIndustry(e) {
      if (
        e.target.options[e.target.options.selectedIndex].dataset.foo ===
        "Others"
      ) {
        this.othersIndustry = true;
      } else {
        if (e.target.options.selectedIndex > -1) {
          this.IndustryName =
            e.target.options[e.target.options.selectedIndex].dataset.foo;
        }
      }
    },
  },
};
</script>


<style scoped>
.settingMediator {
  background-color: #f9c602;
  width: 100%;
  height: 100vh;
  /* padding: 30px; */
  padding-right: 30px;
  padding-left: 30px;
  padding-bottom: 30px;
  padding-top: 10px;
  overflow: hidden !important;
}
.settingMediator h1 {
  font-weight: bold;
  color: black;
  /* font-family: nunito; */
  margin-bottom: 10px;
}
.settingMediator p {
  font-size: 13.2px;
  word-spacing: 4px;
}
.settingMediator p span {
  color: red;
  font-weight: bold;
}
.col-6 img {
  margin: 0 auto;
}
.form-control {
  font-size: 12px;
  width: 95%;
  padding-left: 10px;
}
.fileInput {
  background-color: #221f20;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0px 15px;
  padding-top: 0px;
  font-size: 35px;
  outline: none;
  position: relative;
  top: 6px;
}
.profileForm h6 {
  font-weight: bold;
  font-size: 15px;
  margin-top: 20px;
  margin-left: 5px;
  margin-bottom: 2px;
}
.FacebookPageInput {
  width: 92.5%;
  padding-left: 10px;
  border: none;
  height: 24px;
  font-size: 12px !important;
}
.qualificationSpan {
  font-weight: bold;
}
.qualificationPara {
  margin-bottom: 10px;
}
.PhoneFeild {
  margin-bottom: 7px;
}
.gapGap {
  display: none;
}
.countryDropdownContent {
  position: absolute;
  margin-left: 20px;
  margin-top: 3px;
}
.countryDropdown {
  width: 90%;
  background-color: white;
  height: calc(2.25rem + 2px);
}
.chooseFile {
  font-weight: bold;
  background-color: white;
  padding: 5px 35px;
}
.alignCenter {
  text-align: center;
}
.profileBtn {
  background-color: red;
  border: none;
  padding: 10px 40px;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  /* position: absolute;
  left: 50%;
  transform: translate(-50%, 0); */
  margin-top: 40px;
  margin-left: 10px;
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
.form-control {
  padding: 0;
  padding-left: 10px;
}
.DeleteIcon {
  font-weight: bold;
  position: relative;
  left: 55px;
  top: -25px;
}
.dynamicImg img {
  width: 50px;
  height: 50px;
  margin-top: 10px;
  border-radius: 50px;
}
.biggImgFull {
  position: absolute;
  left: 49%;
  top: 5%;
  transform: translate(-50%, 0);
  background-color: #eee;
  padding: 10px;
  cursor: pointer;
  z-index: 99;
}
.imgBiggerDiv img {
  width: 90%;
}
.iframeImgBigger {
  position: absolute;
  left: 1px;
  transform: translate(4%, 0);
  z-index: 99;
  top: 5%;
}
.otherInd {
  padding: 4px;
  /* padding: 4px 20px 4px 2px; */
  border-radius: 5px;
  color: #fff;
  /* background: #41b883; */
  background: #1472e1;
  white-space: nowrap;
  overflow: hidden;
  border: none;
  font-size: 12px;
  float: right;
  margin-right: 5%;
  margin-top: -2px;
}
.othersIndustrySlctdCross {
  /* background-color: green; */
  cursor: pointer;
  /* height: 20px; */
  font-size: 12px;
  color: white;
  /* width: 20px; */
  position: absolute;
  right: 55px;
  margin-top: 3px;
}
.othersIndustrySlctdCross2 {
  /* background-color: green; */
  cursor: pointer;
  /* height: 20px; */
  font-size: 12px;
  color: white;
  /* width: 20px; */
  position: absolute;
  right: 35px;
  margin-top: 3px;
}
.crossBiggerImg img {
  cursor: pointer;
  position: absolute;
  right: 22px;
  top: 0px;
  width: 40px;
  height: 40px;
}
.wholeImgBlur {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(10px);
  background: transparent;
  z-index: 98;
}
.loading-text {
  color: white;
}
@media (max-width: 460px) {
  .settingMediator h1 {
    font-size: 28px;
  }
  .FacebookPageInput {
    font-size: 13px;
  }
}
@media (max-width: 393px) {
  .settingMediator h1 {
    font-size: 26px;
  }
  .col-8 p {
    float: right;
  }
}
@media (max-width: 366px) {
  .col-8 p {
    margin-right: -20px;
  }
  .settingMediator h1 {
    font-size: 23px;
  }
}
@media (max-width: 315px) {
  .col-8 p {
    margin-right: -40px;
  }
  .settingMediator h1 {
    font-size: 20px;
  }
}
@media (min-height: 700px) {
  .settingMediator p {
    font-size: 15px;
    word-spacing: 5px;
  }
  .qualificationSpan {
    margin-top: 40px !important;
  }
  .gapGap {
    display: initial;
  }
}
@media (max-height: 660px) {
  .settingMediator p {
    font-size: 12px;
    word-spacing: 4px;
  }
}
.PhoneFeild {
  margin-bottom: 15px;
}
@media (max-height: 650px) {
  .settingMediator p {
    margin-bottom: 0px;
  }
}
</style>